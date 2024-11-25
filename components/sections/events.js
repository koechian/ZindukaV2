"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function EventsScroller() {
  const [api, setApi] = useState();
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex gap-4 items-end justify-between justify-items-stretch mb-12 w-full ">
        <div className="flex flex-col w-[60%]">
          <h2 className={`${poppins.className} my-3 text-[48px]`}>
            Our Latest Events
          </h2>
          <p className="text-dark-green my-3 text-[18px] tracking-tighter font-medium">
            Check out our latest events and activities that we are organizing.
          </p>
        </div>
      </div>
      <div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem className="h-auto w-full">
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="py-4 flex flex-col justify-center gap-10">
                  <h1
                    className={`${poppins.className} text-[72px] font-medium`}
                  >
                    Event 1
                  </h1>
                  <p className="text-dark-green text-[18px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus sequi non asperiores quae quod provident, quos
                    dicta cumque doloremque reiciendis?
                  </p>
                </div>
                <a href="" className="">
                  <img src="https://via.placeholder.com/500x500" />
                </a>
              </div>
            </CarouselItem>
            <CarouselItem className="h-auto w-full">
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="py-4 flex flex-col justify-center gap-10">
                  <h1
                    className={`${poppins.className} text-[72px] font-medium`}
                  >
                    Event 2
                  </h1>
                  <p className="text-dark-green text-[18px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus sequi non asperiores quae quod provident, quos
                    dicta cumque doloremque reiciendis?
                  </p>
                </div>
                <a href="" className="">
                  <img src="https://via.placeholder.com/500x500" />
                </a>
              </div>
            </CarouselItem>
            <CarouselItem className="h-auto w-full">
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="py-4 flex flex-col justify-center gap-10">
                  <h1
                    className={`${poppins.className} text-[72px] font-medium`}
                  >
                    Event 3
                  </h1>
                  <p className="text-dark-green text-[18px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus sequi non asperiores quae quod provident, quos
                    dicta cumque doloremque reiciendis?
                  </p>
                </div>
                <a href="" className="">
                  <img src="https://via.placeholder.com/500x500" />
                </a>
              </div>
            </CarouselItem>
            <CarouselItem className="h-auto w-full">
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="py-4 flex flex-col justify-center gap-10">
                  <h1
                    className={`${poppins.className} text-[72px] font-medium`}
                  >
                    Event 4
                  </h1>
                  <p className="text-dark-green text-[18px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus sequi non asperiores quae quod provident, quos
                    dicta cumque doloremque reiciendis?
                  </p>
                </div>
                <a href="" className="">
                  <img src="https://via.placeholder.com/500x500" />
                </a>
              </div>
            </CarouselItem>
            <CarouselItem className="h-auto w-full">
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="py-4 flex flex-col justify-center gap-10">
                  <h1
                    className={`${poppins.className} text-[72px] font-medium`}
                  >
                    Event 5
                  </h1>
                  <p className="text-dark-green text-[18px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus sequi non asperiores quae quod provident, quos
                    dicta cumque doloremque reiciendis?
                  </p>
                </div>
                <a href="" className="">
                  <img src="https://via.placeholder.com/500x500" />
                </a>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  );
}
