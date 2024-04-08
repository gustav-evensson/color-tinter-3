import SideBarLinks from "@/components/SideBar/SideBarLinks";
import { SideBarLinksProps } from "@/components/SideBar/SideBarLinks";

type Section = {
  title: string
  links: SideBarLinksProps["links"]
}

export default function ManipulationSideBar({sections}: {sections: Section[]}) {
  return (
    <aside className="p-6 pl-0 border-r min-w-48 hidden md:block">
      {sections.map((section, index) => (
        <div key={index} className="my-3">
          <h2 className="text-md mb-1">{section.title}</h2>
          <SideBarLinks links={section.links} />
        </div>
      ))}
      {/* <h2 className="text-lg mb-2">Manipulation</h2>
      <SideBarLinks links={links} /> */}
    </aside>
  )
}