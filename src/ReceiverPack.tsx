import React, { ComponentProps, useCallback, useMemo, useState } from "react";
import { Button } from "./Button";
import { Receiver } from "./Receiver";

export function ReceiverWithButton({
  receiverStyles,
  buttonStyles,
}: {
  receiverStyles?: ComponentProps<"iframe">;
  buttonStyles?: ComponentProps<"button">;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Receiver
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        styles={{
          ...receiverStyles,
        }}
      />
      <Button
        handleClick={() => setIsOpen(!isOpen)}
        styles={{
          ...buttonStyles,
        }}
      />
    </>
  );
}
