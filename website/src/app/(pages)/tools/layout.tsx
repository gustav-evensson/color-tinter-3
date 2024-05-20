import ManipulationSideBar from "@/components/SideBar/SideBar";
import Mwp from "@/components/Layout/MaxWidthProvider";
import { ScrollArea } from "@/components/ui/scroll-area";

const sections = [
  {
    title: "Manipulation",
    links: [
      {
        title: "Tints",
        href: "/tools/tints",
      },
      {
        title: "Shades",
        href: "/tools/shades",
      },
      {
        title: "Tones",
        href: "/tools/tones",
      },
    ],
  },
  {
    title: "Conversion",
    links: [
      {
        title: "Color converter",
        href: "/tools/converter",
      },

    ],
  },
];

export default function ManipulationLayout({ children }: { children: React.ReactNode }) {
  return (
    <Mwp size="lg" className="flex flex-grow px-4 xs:px-8">
      <div className="relative pt-6 w-full">{children}</div>
    </Mwp>
  );
}
