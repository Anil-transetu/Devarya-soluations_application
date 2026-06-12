"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About Us",
    href: "#",
    description: "Learn more about our mission and team.",
  },
  {
    title: "Careers",
    href: "#",
    description: "Join our team of innovative thinkers.",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Logo Section */}
        <div className="flex flex-col">
          <Link href="/" className="flex flex-col items-start gap-[2px]">
            <span className="text-[25px] font-bold tracking-tight text-zinc-900 leading-none">
              Devarya Solutions
            </span>
            <span className="text-[18px]  font-semibold text-zinc-700 leading-none">
              Pvt. Ltd.
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent h-9 px-3 text-[18px] font-medium text-zinc-800 hover:text-zinc-900 data-[state=open]:text-zinc-900">
                  Company Profile
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent h-9 px-3 text-[18px] font-medium text-zinc-800 hover:text-zinc-900 data-[state=open]:text-zinc-900">
                  Our Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white">
                    <ListItem href="#" title="Software Development">
                      Custom software solutions for your business.
                    </ListItem>
                    <ListItem href="#" title="Cloud Infrastructure">
                      Scalable and secure cloud deployments.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent h-9 px-3 text-[18px] text-zinc-800 hover:text-zinc-900 font-medium")}>
                    We Are Hiring
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger className="inline-flex items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 h-10 w-10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <nav className="flex flex-col gap-6 mt-10">
                <div className="flex flex-col space-y-4">
                  <span className="font-semibold text-lg text-zinc-900">Company Profile</span>
                  <span className="font-semibold text-lg text-zinc-900">Our Services</span>
                  <Link href="#" className="font-semibold text-lg text-zinc-900">We Are Hiring</Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      {/* @ts-ignore - bypass type checking error for asChild property */}
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-zinc-900">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-zinc-500 mt-1.5">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
