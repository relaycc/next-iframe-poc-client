import { useEffect, useState } from "react";
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

let init = false;
let init2 = false;
export const useWallet = ({
  wallet,
  handleConnectWallet,
  isOpen,
  setIsOpen,
  conversation,
}: {
  wallet: any;
  handleConnectWallet?: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  conversation?: Conversation;
}) => {
  const [actions, setActions] = useState<IRemoteActions | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    if (!wallet) {
      setAddress(null);
      setIsConnected(false);
      return;
    }

    setAddress(wallet._address);
    setIsConnected(true);
  }, [wallet]);

  useEffect(() => {
    if (init) {
      return;
    } else {
      init = true;
      Comlink.expose(
        {
          connect: () => {
            handleConnectWallet && handleConnectWallet();
          },
          setOpen: (isOpen: boolean) => {
            setIsOpen(isOpen);
          },
        },
        Comlink.windowEndpoint(window)
      );
    }
  }, [handleConnectWallet, setIsOpen]);

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
    if (actions) {
      actions.con(
        isConnected,
        address as string,
        !wallet ? null : Comlink.proxy(wallet)
      );
    }
  }, [actions, isConnected, address, wallet]);

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
  }, [actions, conversation, isOpen]);
};
