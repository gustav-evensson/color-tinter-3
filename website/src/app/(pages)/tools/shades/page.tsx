import { BreadcrumbComponent } from "@/components/BreadCrumb"
import { type Crumb } from '@/components/BreadCrumb'
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
    name: "Shades",
    dropdown: [
      {
        name: "Tints",
        href: "/tools/tints",
      },
      {
        name: "Tones",
        href: "/tools/tones",
      },
    ],
  },
];

export default function ShadesPage() {
  return (
    <>
      <BreadcrumbComponent crumbs={crumbs} /> 
      <div className="flex items-center justify-between gap-4 mt-4">
        <div>
          <h3 className="text-lg">Shades</h3>
          <p className="text-muted-foreground hidden sm:block">Decreasing the lightness value of a color</p>
        </div>
        <ColorCountDropdown />
      </div>
    </>
  )
}