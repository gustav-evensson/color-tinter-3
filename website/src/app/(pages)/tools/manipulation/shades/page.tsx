import { BreadcrumbComponent } from "@/components/BreadCrumb";
import { type Crumb } from "@/components/BreadCrumb";
import { ColorCountDropdown } from "@/components/ColorCountDropdown";
import { getShades } from "@/lib/colors/manipulations";
import PageTitle from "../../components/PageTitle";
import GlobalColorPicker from "@/components/GlobalColorPicker";
import ColorDisplay from "@/components/ColorsDisplay";
import { ExportDialog } from "@/components/Exporter/ExportDialog";

const crumbs: Crumb[] = [
  {
    type: "text",
    name: "Manipulation",
  },
  {
    type: "dropdown",
    name: "Shades",
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

export default function ShadesPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center">
        <BreadcrumbComponent crumbs={crumbs} />
        <ExportDialog />
      </div>
      <div className="flex items-center justify-end xs:justify-between gap-4 my-4">
        <PageTitle title="Shades" description="Decreasing the lightness value of a color" />
        <div className="flex gap-4 flex-wrap">
          <ColorCountDropdown />
          <GlobalColorPicker />
        </div>
      </div>
      <ColorDisplay spectrum="shades" />
    </div>
  );
}
