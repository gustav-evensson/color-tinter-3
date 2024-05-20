import "./components/ColorCircle/ColorCircle.css";

import { Button } from "@/components/ui/button";
import Mwp from "@/components/Layout/MaxWidthProvider";
import ColoCircle from "./components/ColorCircle/ColorCircle";
import Image from "next/image";
import FacebookColors from "@/components/icons/FacebookColors";
import ColorPalette from "@/components/icons/ColoPalette";

export default function Home() {
  return (
    <>
      <section>
        <Mwp className="py-16 md:py-32 flex flex-col-reverse items-center justify-center gap-y-16 gap-x-8 md:px-16 md:flex-row 2xl:border-x">
          <div className="max-w-md">
            <h1 className="text-5xl max-w-80 sm:text-6xl xs:max-w-[400px] md:min-w-[400px] lg:min-w-[470px] lg:text-7xl font-bold font-poppins">
              Make The <span className="text-[hsl(0deg, 100%, 50%)] animate-hue-rotate">Colors</span> Work For You
            </h1>
            <div className="mt-6 flex items-start flex-wrap gap-x-6 gap-y-3">
              <Button size="lg" className="w-36">
                Explore tools
              </Button>
              <Button size="lg" className="w-36" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <ColoCircle />
        </Mwp>
      </section>
      <section className="border-t">
        <Mwp className="2xl:border-x py-16 lg:py-32">
          <h2 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-8 lg:mb-16">What Color Fits Your Brand?</h2>
          <Image src="/images/poc-dark.png" className="hidden dark:block" alt="Hero" width={1243} height={1009} />
          <Image src="/images/poc-light.png" className="block dark:hidden" alt="Hero" width={1243} height={1009} />
          <p className="text-right text-muted-foreground text-xs md:text-sm lg:text-base mt-8">
            Cred to{" "}
            <a
              className="text-foreground focus-visible:underline hover:underline"
              href="https://lindsaymarsh.myportfolio.com/home-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lindsay Marsh
            </a>{" "}
            for this color wheel
          </p>
        </Mwp>
      </section>
      <section className="border-t">
        <Mwp className="2xl:border-x py-16 md:py-32 flex flex-col gap-16 md:gap-32">
          <div className="flex items-center flex-col-reverse max-w-3xl mx-auto lg:max-w-none lg:flex-row-reverse gap-x-16 gap-y-8">
            <div className="w-full">
              <h3 className="text-4xl font-bold mb-4 font-poppins">Why Are Colors Important?</h3>
              <p className="text-lg md:text-xl">
                Choosing the right color for your brand is crucial due to color psychology. Colors evoke emotions and perceptions, influencing
                consumer behavior. For example, blue signifies trust, while red symbolizes energy. Understanding this psychology ensures your brand
                communicates effectively and connects with your audience. By selecting colors strategically, you can enhance brand recognition, build
                trust, and establish a strong emotional bond with consumers
              </p>
            </div>
            <div className="aspect-[4/3] w-full flex items-center bg-secondary/20 border rounded-xl justify-center p-8">
              <FacebookColors />
            </div>
          </div>
          <div className="flex items-center flex-col-reverse max-w-3xl mx-auto lg:max-w-none lg:flex-row gap-x-16 gap-y-8">
            <div className="w-full">
              <h3 className="text-4xl font-bold mb-4 font-poppins">Why Have A Color Palette?</h3>
              <p className="text-lg sm:text-xl">
                A good, well-planned color palette is crucial for brand consistency, visual appeal, and effective communication of brand values. It
                ensures consistency across all materials, enhances professionalism, and creates a memorable impression. By considering color
                psychology, it influences consumer emotions and behaviors positively, fostering deeper connections. Ultimately, a thoughtfully curated
                palette contributes to brand recognition, trust, and success in the market.
              </p>
            </div>
            <div className="aspect-[4/3] w-full flex items-center bg-secondary/20 overflow-hidden rounded-xl justify-center">
              {/* <ColorPalette /> */}
              <div className="w-full h-full bg-[#FFAF45]"></div>
              <div className="w-full h-full bg-[#FB6D48]"></div>
              <div className="w-full h-full bg-[#D74B76]"></div>
              <div className="w-full h-full bg-[#673F69]"></div>
            </div>
          </div>
        </Mwp>
      </section>
      <section className="border-t">
        <Mwp className="2xl:border-x py-16 md:py-32 flex flex-col gap-16 md:gap-32">
        <h2 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-8 lg:mb-16">Explore The World Of Colors</h2>
        </Mwp>
      </section>
    </>
  );
}
