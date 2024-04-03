import "./components/ColorCircle/ColorCircle.css";

import { Button } from "@/components/ui/button";
import Mwp from "@/components/Layout/MaxWidthProvider";
import ColoCircle from "./components/ColorCircle/ColorCircle";
import Image from "next/image";
import FacebookColors from "@/components/icons/FacebookColors";

export default function Home() {
  return (
    <>
      <section className="border-t">
        <Mwp className="py-16 lg:py-32 flex flex-col-reverse items-center justify-center gap-16 lg:flex-row lg:gap-8 2xl:border-x">
          <div className="max-w-md">
            <h1 className="text-5xl max-w-80 xs:text-6xl xs:max-w-96 sm:max-w-none sm:text-7xl font-bold">
              Make The <span className="text-[hsl(0deg, 100%, 50%)] animate-hue-rotate">Colors</span> Work For You
            </h1>
            <div className="mt-6 flex-col items-start xs:flex-row flex xs:items-center gap-x-6 gap-y-3">
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
          <h2 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold mb-8 lg:mb-16">What Color Fits Your Brand?</h2>
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
        <Mwp className="2xl:border-x py-16 lg:py-32 flex flex-col gap-32">
          <div className="flex items-center flex-row-reverse gap-16">
            <div className="w-full">
              <h3 className="text-4xl font-bold mb-4">Why Are Colors Important?</h3>
              <p className="text-base md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sed doloremque sunt assumenda quas, tempore voluptatum cumque aliquid
                dolore sit! Expedita, excepturi voluptatibus cupiditate tempore ipsum, provident labore ea velit aut, nam vitae omnis officia quam
                eaque dolorum non id nostrum et quasi fugit ad. Officiis, aliquid repellendus.
              </p>
            </div>
            <div className="aspect-[4/3] w-full flex items-center bg-secondary/20 border rounded-lg justify-center p-8">
              <FacebookColors />
            </div>
          </div>
          <div className="flex items-center flex-row gap-16">
            <div className="w-full">
              <h3 className="text-4xl font-bold mb-4">Why Are Colors Important?</h3>
              <p className="text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sed doloremque sunt assumenda quas, tempore voluptatum cumque aliquid
                dolore sit! Expedita, excepturi voluptatibus cupiditate tempore ipsum, provident labore ea velit aut, nam vitae omnis officia quam
                eaque dolorum non id nostrum et quasi fugit ad. Officiis, aliquid repellendus.
              </p>
            </div>
            <div className="aspect-[4/3] w-full flex items-center bg-secondary/20 border rounded-lg justify-center p-8">
              <FacebookColors />
            </div>
          </div>
        </Mwp>
      </section>
    </>
  );
}
