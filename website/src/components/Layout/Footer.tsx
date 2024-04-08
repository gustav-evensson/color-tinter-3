import ColorTinterIcon from "../icons/ColorTinterIcon";
import Mwp from "./MaxWidthProvider";

export default function Footer() {
  return (
    <footer className="border-t">
      <Mwp size="lg" className="py-16">
        <div className="flex gap-16 flex-wrap">
          <div>
            <div className="flex items-center gap-2">
              <ColorTinterIcon size={26} />
              <h5 className="text-xl font-poppins">ColorTinter</h5>
            </div>
            <p className="mt-2">
              Made by:{" "}
              <a className="focus-visible:underline hover:underline" target="_blank" href="https://gustavevensson.com/">
                Gustav Evensson
              </a>{" "}
              &{" "}
              <a target="_blank" className="focus-visible:underline hover:underline" href="https://geweb.se/">
                GeWeb
              </a>
            </p>
            {/* <p>
              Collaborators:{" "}
              <a className="focus-visible:underline hover:underline" target="_blank" href="https://colorhunt.co/" rel="noopener noreferrer">
                ColorHunt
              </a>
            </p> */}
          </div>
          <div>
            <div>
              <h5 className="text-xl">Improve ColorTinter?</h5>
            </div>
            <p className="mt-2">
              Visit the <a className="focus-visible:underline hover:underline" href="https://github.com/gustav-evensson/color-tinter-3">GitHub</a>
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-8">&copy; 2024 Color Tinter. All rights reserved.</p>
      </Mwp>
    </footer>
  );
}
