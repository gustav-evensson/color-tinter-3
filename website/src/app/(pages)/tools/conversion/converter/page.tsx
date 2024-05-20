import { BreadcrumbComponent } from "@/components/BreadCrumb";
import { type Crumb } from "@/components/BreadCrumb";
import PageTitle from "../../components/PageTitle";
import GlobalColorPicker from "@/components/GlobalColorPicker";
import InputColorPicker from "@/components/InputColorPicker/InputColorPicker";
import TestDisplay from "./components/testDisplay";

const crumbs: Crumb[] = [
  {
    type: "text",
    name: "Conversion",
  },
  {
    type: "text",
    name: "Converter",
  },
];

export default function TintsPage() {

  return (
    <div className="flex flex-col h-full">
      <BreadcrumbComponent crumbs={crumbs} />
      <div className="flex items-center justify-end xs:justify-between gap-4 my-4">
        <PageTitle title="Converter" description="Convert between different color formats" />
        <div className="flex gap-4 flex-wrap">
          {/* <TestDisplay /> */}
          <GlobalColorPicker />
        </div>
      </div>
    </div>
  );
}
