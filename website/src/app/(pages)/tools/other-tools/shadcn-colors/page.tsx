"use client";

import { BreadcrumbComponent } from "@/components/BreadCrumb";
import { type Crumb } from "@/components/BreadCrumb";
import PageTitle from "../../components/PageTitle";
import ShadcnMain from "./components/Main";
import ThemePopover from "./components/ThemePopover";
import { use, useEffect, useState } from "react";
import { type Theme, themes, setCssTheme } from "@/lib/colors/themes";
import { SimpleThemeToggle } from "@/components/SimpleThemeToggle";
import { useTheme } from "next-themes";
import VariableColorPicker from "./components/variableColorPicker";

const crumbs: Crumb[] = [
  {
    type: "text",
    name: "Other",
  },
  {
    type: "dropdown",
    name: "Shadcn/colors",
    dropdown: [
      {
        name: "Shadcn/colors",
        href: "/tools/other-tools/shadcn-colors",
      },
      {
        name: "100-900",
        href: "/tools/other-tools/100-900",
      },
    ],
  },
];

export default function TintsPage() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.zinc);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setCssTheme(currentTheme, resolvedTheme as string);
  }, [resolvedTheme, currentTheme]);

  return (
    <div className="flex flex-col flew-grow">
      <BreadcrumbComponent crumbs={crumbs} />
      <div className="flex items-center justify-end xs:justify-between gap-4 my-4">
        <PageTitle title="Shadcn/colors" description="A more advanced theme customization tool for shadcn/ui" />
        <div className="flex items-center gap-2">
          <SimpleThemeToggle />
          <ThemePopover currentTheme={currentTheme} setTheme={setCurrentTheme} />
        </div>
      </div>
      <div className="w-fit mx-auto my-4">
        <VariableColorPicker currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      </div>
      <ShadcnMain />
    </div>
  );
}
