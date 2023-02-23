import React from "react";
import { Conversation, useWallet } from "./useWallet";

const domain = "http://localhost:3001/receiver";

export function Receiver({
  styles,
  isOpen,
  setIsOpen,
  conversation,
  wallet,
  handleConnectWallet,
}: {
  styles?: any;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  conversation?: Conversation;
  wallet?: any;
  handleConnectWallet?: () => void;
}) {
  useWallet({ wallet, handleConnectWallet, isOpen, setIsOpen, conversation });

  return (
    <>
      <iframe
        src={domain}
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          position: "fixed",
          border: "none",
          bottom: "1rem",
          right: "1rem",
          maxWidth: "401px",
          maxHeight: "700px",
          width: "100%",
          height: "100%",
          ...styles,
        }}
      />
    </>
  );
}
