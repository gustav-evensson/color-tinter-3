import { ChevronDownIcon, SlashIcon } from "@radix-ui/react-icons";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

type CrumbDropdown = {
  name: string;
  href: string;
};

export type Crumb = {
  type: "link" | "dropdown" | "text";
  name: string;
  href?: string;
  dropdown?: CrumbDropdown[];
};

const crumbs: Crumb[] = [
  {
    type: "text",
    name: "Manipulation",
  },
  {
    type: "dropdown",
    name: "Tints",
    dropdown: [
      {
        name: "Shades",
        href: "/manipulation/shades",
      },
      {
        name: "Tones",
        href: "/manipulation/tones",
      },
    ],
  },
];

export function BreadcrumbComponent({ crumbs }: { crumbs: Crumb[] }) {

  if(crumbs && crumbs.length > 0) return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb, index) => {
          if (crumb.type === "text") {
            if (index < crumbs.length - 1) {
              return (
                <>
                  <BreadcrumbItem key={"t"+index}>
                    <BreadcrumbPage className="text-muted-foreground">{crumb.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                </>
              );
            } else {
              return (
                <BreadcrumbItem key={"t2"+index}>
                  <BreadcrumbPage className="text-foreground">{crumb.name}</BreadcrumbPage>
                </BreadcrumbItem>
              );
            }
          }
          if (crumb.type === "dropdown") {
            if(index < crumbs.length -1) {
              return (
                <>
                  <BreadcrumbItem key={"d"+index}>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 text-foreground focus-ring">
                        {crumb.name}
                        <ChevronDownIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        {crumb.dropdown?.map((item, i) => (
                          <DropdownMenuItem key={i} asChild className="no-focus-ring">
                            <BreadcrumbLink asChild>
                              <Link href={item.href}>{item.name}</Link>
                            </BreadcrumbLink>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                </>
              )
            } else {
              return (
                <BreadcrumbItem key={"d2"+index}>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-foreground focus-ring rounded">
                      {crumb.name}
                      <ChevronDownIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {crumb.dropdown?.map((item, i) => (
                        <DropdownMenuItem key={i} asChild className="no-focus-ring">
                          <BreadcrumbLink asChild>
                            <Link href={item.href}>{item.name}</Link>
                          </BreadcrumbLink>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
              )
            }
          }
          if (crumb.type === "link") {
            if (index < crumbs.length - 1) {
              return (
                <>
                  <BreadcrumbItem key={"l"+index}>
                    <BreadcrumbLink>
                      <Link href={crumb.href as string}>{crumb.name}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                </>
              );
            } else {
              return (
                <BreadcrumbItem key={"l2"+index}>
                  <BreadcrumbLink>
                    <Link href={crumb.href as string}>{crumb.name}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              );
            }
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
