import ManipulationSideBar from "@/components/SideBar/SideBar";
import Mwp from "@/components/Layout/MaxWidthProvider";
import ColorCountReduxProvider from "@/components/Redux/ColorCountReduxProvider";

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
    <Mwp size="lg" className="flex flex-grow">
      <ColorCountReduxProvider colorCount={9}>
      <ManipulationSideBar sections={sections} />
      <main className="py-6 md:pl-6 w-full">{children}</main>
      </ColorCountReduxProvider>
    </Mwp>
  );
}
