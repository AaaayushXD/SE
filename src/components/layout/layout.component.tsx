import React from "react";
import { NavbarComponent } from "../navbar";
import { FooterComponent } from "../footer";

export const LayoutComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </>
  );
};
