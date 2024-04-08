import { BreadcrumbComponent } from "@/components/BreadCrumb";
import { type Crumb } from "@/components/BreadCrumb";
import { ColorCountDropdown } from "@/components/ColorCountDropdown";

const crumbs: Crumb[] = [
  {
    type: "text",
    name: "Tools",
  },
  {
    type: "text",
    name: "Manipulation",
  },
  {
    type: "dropdown",
    name: "Tints",
    dropdown: [
      {
        name: "Shades",
        href: "/tools/shades",
      },
      {
        name: "Tones",
        href: "/tools/tones",
      },
    ],
  },
];

export default function TintsPage() {
  return (
    <>
      <BreadcrumbComponent crumbs={crumbs} />
      <div className="flex items-center justify-between gap-4 mt-4">
        <div>
          <h3 className="text-lg">Tints</h3>
          <p className="text-muted-foreground hidden sm:block">Increasing the lightness value of a color</p>
        </div>
        <ColorCountDropdown />
      </div>
    </>
  );
}
