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
    name: "Tones",
    dropdown: [
      {
        name: "Tints",
        href: "/tools/tints",
      },
      {
        name: "Shades",
        href: "/tools/shades",
      },
    ],
  },
];

export default function TonesPage() {
  return (
    <>
      <BreadcrumbComponent crumbs={crumbs} />
      <div className="flex items-center justify-between gap-4 mt-4">
        <div>
          <h3 className="text-lg">Tones</h3>
          <p className="text-muted-foreground hidden sm:block">Mixing a color with gray</p>
        </div>
        <ColorCountDropdown />
      </div>
    </>
  );
}
