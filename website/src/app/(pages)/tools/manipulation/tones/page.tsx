import { BreadcrumbComponent } from "@/components/BreadCrumb";
import { type Crumb } from "@/components/BreadCrumb";
import { ColorCountDropdown } from "@/components/ColorCountDropdown";
import PageTitle from "../../components/PageTitle";
import GlobalColorPicker from "@/components/GlobalColorPicker";
import ColorDisplay from "@/components/ColorsDisplay";
import { Button } from "@/components/ui/button";
import { Share2Icon } from "@radix-ui/react-icons";
import { ExportDialog } from "@/components/Exporter/ExportDialog";

const crumbs: Crumb[] = [
  {
    type: "text",
    name: "Manipulation",
  },
  {
    type: "dropdown",
    name: "Tones",
    dropdown: [
      {
        name: "Tints",
        href: "/tools/manipulation/tints",
      },
      {
        name: "Shades",
        href: "/tools/manipulation/shades",
      },
      {
        name: "Tones",
        href: "/tools/manipulation/tones",
      },
    ],
  },
];

export default function TonesPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center">
        <BreadcrumbComponent crumbs={crumbs} />
        <ExportDialog />
      </div>
      <div className="flex items-center justify-end xs:justify-between gap-4 my-4">
        <PageTitle title="Tones" description="Mixing a color with gray" />
        <div className="flex gap-4 flex-wrap">
          <ColorCountDropdown />
          <GlobalColorPicker />
        </div>
      </div>
      <ColorDisplay spectrum="tones-saturation" />
    </div>
  );
}
