import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAccount, useSigner } from "wagmi";
import * as Comlink from "comlink";

export interface Conversation {
  peerAddress: `${"0x"}${string}`;
  context?: {
    conversationId: string;
    metadata: {
      [key: string]: string;
    };
  };
}

interface IRemoteActions {
  con: (isConnected: boolean, address: string, signer: any) => void;
  setOpen: (isOpen: boolean) => void;
  setConversation: (conversation: Conversation) => void;
}

let signerSet = false;
let init = false;
let init2 = false;
export const useWallet = ({
  isOpen,
  setIsOpen,
  conversation,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  conversation?: Conversation;
}) => {
  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();
  const { openConnectModal } = useConnectModal();
  const [actions, setActions] = useState<IRemoteActions | null>(null);

  useEffect(() => {
    if (init) {
      return;
    } else {
      init = true;
      Comlink.expose(
        {
          connect: () => {
            openConnectModal && openConnectModal();
          },
          setOpen: (isOpen: boolean) => {
            setIsOpen(isOpen);
          },
        },
        Comlink.windowEndpoint(window)
      );
    }
  }, [openConnectModal, setIsOpen]);

  useEffect(() => {
    const iframe = document.querySelector("iframe");
    if (!init2 || !iframe?.contentWindow) {
      init2 = true;
      setTimeout(() => {
        setActions(() => {
          return Comlink.wrap<IRemoteActions>(
            Comlink.windowEndpoint(iframe!.contentWindow!)
          );
        });
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (actions && !signerSet) {
      actions.con(isConnected, address as string, null);
      if (signer && !signerSet) {
        actions.con(isConnected, address as string, Comlink.proxy(signer));
        signerSet = true;
      }
    }
  }, [actions, isConnected, address, signer]);

  useEffect(() => {
    if (actions) {
      actions.setOpen(isOpen);
    }
  }, [isOpen, actions]);

  useEffect(() => {
    if (!conversation || !actions?.setConversation || !isOpen) {
      return;
    }
    actions.setConversation(conversation);
    console.log("setConversation", { conversation });
  }, [actions, conversation, isOpen]);
};
