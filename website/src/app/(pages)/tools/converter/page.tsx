import { BreadcrumbComponent } from "@/components/BreadCrumb"
import { type Crumb } from '@/components/BreadCrumb'

const crumbs: Crumb[] = [
  {
    type: "text",
    name: "Tools",
  },
  {
    type: "text",
    name: "Conversion",
  },
  {
    type: "text",
    name: "Converter",
  },
];

export default function ShadesPage() {
  return (
    <>
      <BreadcrumbComponent crumbs={crumbs} /> 
      <h3 className="mt-4 text-lg">Converter</h3>
      <p className="text-muted-foreground">Convert colors to different formats</p>
    </>
  )
}