import { BreadcrumbComponent } from "@/components/BreadCrumb";
import { type Crumb } from "@/components/BreadCrumb";
import { ColorCountDropdown } from "@/components/ColorCountDropdown";
import ColorDisplay from "@/components/ColorsDisplay";
import GlobalColorPicker from "@/components/GlobalColorPicker";
import { getTints } from "@/lib/colors/manipulations";
import { useColor } from "@/redux/store";
import PageTitle from "../../components/PageTitle";
import { ExportDialog } from "@/components/Exporter/ExportDialog";

const crumbs: Crumb[] = [
  {
    type: "text",
    name: "Manipulation",
  },
  {
    type: "dropdown",
    name: "Tints",
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

export default function TintsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center">
        <BreadcrumbComponent crumbs={crumbs} />
        <ExportDialog />
      </div>
      <div className="flex items-center justify-end xs:justify-between gap-4 my-4">
        <PageTitle title="Tints" description="Increasing the lightness value of a color" />
        <div className="flex gap-4 flex-wrap">
          <ColorCountDropdown />
          <GlobalColorPicker />
        </div>
      </div>
      <ColorDisplay spectrum="tints" />
    </div>
  );
}
