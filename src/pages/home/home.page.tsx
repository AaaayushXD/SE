import { AboutUsSection, CoursesPage, LandingComponent } from "@/components";
import { LayoutComponent } from "@/components/layout";
import React from "react";
import { courses } from "@/data/courses";

export const HomePage: React.FC = () => {
  return (
    <LayoutComponent>
      <LandingComponent />
      <AboutUsSection />
      <CoursesPage courses={courses} />
    </LayoutComponent>
  );
};
