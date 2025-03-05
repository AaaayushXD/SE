import { LandingComponent } from "@/components";
import { LayoutComponent } from "@/components/layout";
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <LayoutComponent>
      <LandingComponent />
    </LayoutComponent>
  );
};
