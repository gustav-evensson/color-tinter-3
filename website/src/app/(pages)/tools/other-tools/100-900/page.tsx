import { BreadcrumbComponent } from "@/components/BreadCrumb";
import { type Crumb } from "@/components/BreadCrumb";
import { ColorCountDropdown } from "@/components/ColorCountDropdown";
import PageTitle from "../../components/PageTitle";

const crumbs: Crumb[] = [
  {
    type: "text",
    name: "Other",
  },
  {
    type: "dropdown",
    name: "100-900",
    dropdown: [
      {
        name: "Shadcn/colors",
        href: "/tools/other-tools/shadcn-colors",
      },
      {
        name: "100-900",
        href: "/tools/other-tools/100-900",
      }
    ],
  }
];

export default function TintsPage() {

  return (
    <div className="flex flex-col h-full">
      <BreadcrumbComponent crumbs={crumbs} />
      <div className="flex items-center justify-end xs:justify-between gap-4 my-4">
        <PageTitle title="100-900" description="Generate a monochrome color palette based on a single color" />
      </div>
    </div>
  );
}
