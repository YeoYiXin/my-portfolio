import exp from "constants";
import React from "react";
import { MouseEventHandler } from "react";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SendButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className=" rounded-md bg-lightFuchsia bg-opacity-30 hover:bg-opacity-50 backdrop-blur-md py-3 px-10 font-light cursor-pointer"
    >
      {children}
    </button>
  );
};

export default SendButton;
