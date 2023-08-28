"use client";
import React, { useState } from "react";
import Popup from "reactjs-popup";

interface IPopupProps {
  children: JSX.Element;
  openButton?: JSX.Element;
}

export const CustomPopup = (props: IPopupProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popup
      open={open}
      modal
      lockScroll
      trigger={
        <button onClick={() => setOpen((o) => !o)}>{props.openButton}</button>
      }
      {...props}
    >
      {props.children}
    </Popup>
  );
};
