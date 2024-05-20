import Link from "next/link";
import Mwp from "@/components/Layout/MaxWidthProvider";


export default function NotFound() {
  return (
    <Mwp className="w-full flex-grow flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold font-poppins">Whooopa...</h2>
        <p className="text-center">That page does not exist. Fancy going to any of these?</p>
        <div className="flex flex-col gap-2">
          <Link href="/" className="p-3 transition rounded-md hover:bg-accent block">
            <h5 className="text-md font-semibold">Home</h5>
            <p className="text-muted-foreground">The home page</p>
          </Link>
          <Link href="/tools/manipulation/tints" className="p-3 transition rounded-md hover:bg-accent block">
            <h5 className="text-md font-semibold">Tools</h5>
            <p className="text-muted-foreground">A page with some amazing color tools</p>
          </Link>
          <Link href="/about" className="p-3 transition rounded-md hover:bg-accent block">
            <h5 className="text-md font-semibold">About</h5>
            <p className="text-muted-foreground">Some information about ColorTinter</p>
          </Link>
        </div>
      </div>
    </Mwp>
  )
}