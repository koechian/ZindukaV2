"use client";

import { Tenor_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  //   NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  //   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Article,
  BookOpenText,
  Images,
  UsersThree,
  Newspaper,
  HandHeart,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const tenor = Tenor_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 10 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full flex justify-between sticky top-0 z-50 will-change-scroll bg-inherit p-8 border-black border-b-2 border-opacity-25 ${
        scrolled ? "bg-white" : ""
      }`}
    >
      <div className="flex">
        <a href="#home">
          <div className="flex items-center gap-3">
            <img src="/logo-min.svg" className="w-16" alt="Zinduka Afrika" />
            <span
              className={`${tenor.className} font-bold text-2xl text-black`}
            >
              Zinduka Afrika Foundation
            </span>
          </div>
        </a>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="font-medium">
                Donate
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent className="p-1 w-64 flex flex-col bg-white hover:cursor-pointer">
                <div className="w-64">
                  <NavigationMenuLink>
                    <div className="hover:bg-[#F2F4EA] hover:text-[#043F2E] p-3 rounded grid grid-cols-4 items-center gap-3">
                      <BookOpenText
                        color="#043F2E"
                        size={42}
                        weight="duotone"
                      />
                      <div className="col-span-3">
                        <p className="font-medium">Our Story</p>
                        <small>
                          Read all about the history of Zinduka Afrika
                          Foundation
                        </small>
                      </div>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <div className="hover:bg-[#F2F4EA] hover:text-[#043F2E] p-3 rounded grid grid-cols-4 items-center gap-3">
                      <HandHeart color="#043F2E" size={42} weight="duotone" />
                      <div className="col-span-3">
                        <p className="font-medium">Our Programmes</p>
                        <small>
                          Learn about our programmes and how you can get
                          involved
                        </small>
                      </div>
                    </div>
                  </NavigationMenuLink>

                  <NavigationMenuLink>
                    <div className="hover:bg-[#F2F4EA] hover:text-[#043F2E] p-3 rounded grid grid-cols-4 items-center gap-3">
                      <UsersThree color="#043F2E" size={42} weight="duotone" />
                      <div className="col-span-3">
                        <p className="font-medium">Our Team</p>
                        <small>Meet outr astute team members</small>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Media</NavigationMenuTrigger>
              <NavigationMenuContent className="p-1 flex flex-col bg-white hover:cursor-pointer">
                <div className="w-64 ">
                  <NavigationMenuLink>
                    <div className="hover:bg-[#F2F4EA] hover:text-[#043F2E] p-3 rounded grid grid-cols-4 items-center gap-3">
                      <Article color="#043F2E" size={42} weight="duotone" />
                      <div className="col-span-3">
                        <p className="font-medium">Articles</p>
                        <small>Day to day news and updates from our team</small>
                      </div>
                    </div>
                  </NavigationMenuLink>

                  <NavigationMenuLink>
                    <div className="hover:bg-[#F2F4EA] hover:text-[#043F2E] p-3 rounded grid grid-cols-4 items-center gap-3">
                      <Newspaper size={42} weight="duotone" color="#043F2E" />
                      <div className="col-span-3">
                        <p className="font-medium text-lg">Newsletters</p>
                        <small>
                          This is our quarterly newsletter, outlining the
                          activities, events and impact of our work.
                        </small>
                      </div>
                    </div>
                  </NavigationMenuLink>

                  <NavigationMenuLink>
                    <div className="hover:bg-[#F2F4EA] hover:text-[#043F2E] p-3 rounded grid grid-cols-4 items-center gap-2">
                      <Images color="#043F2E" size={42} weight="duotone" />
                      <div className="col-span-3">
                        <p className="font-medium">Gallery</p>
                        <small className="leading-3">
                          See photos and media of all our events and programmes
                        </small>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink className="font-medium">
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
