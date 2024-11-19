import Header from "./components/Header";
import * as motion from "motion/react-client";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <Header />
      <section className="h-screen pt-[160px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="px-10 w-screen mx-auto max-w-[1200px]"
        >
          <div className="text-center justify-center items-center flex flex-col">
            <h1
              className={`${poppins.className} my-10 text-[72px] leading-normal`}
            >
              Arise! Change the world
            </h1>
            <p className=" leading-normal text-xl w-[85%] text-[#043F2E]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              aliquid repudiandae aperiam possimus consectetur dolorum,
              distinctio consequuntur accusantium quos ipsa necessitatibus autem
              maxime ipsam sed repellat optio hic impedit sint ut at explicabo
              enim id error! Architecto aperiam similique laboriosam cupiditate
              mollitia repellendus. Expedita omnis possimus excepturi nostrum
              tempora labore!
            </p>
          </div>
          <motion.div
            className="mt-10 flex justify-center items-center gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: "easeOut",
            }}
          >
            <a
              className="rounded-3xl bg-[#043F2E] text-white px-10 py-4 text-lg font-bold hover:bg-white hover:text-black hover:outline hover:outline-1  hover:outline-[#043F2E] transition duration-300 ease-in-out"
              href="#"
            >
              About Us
            </a>
            <a
              className="rounded-3xl outline outline-1  outline-[#043F2E] px-10 py-4 text-lg font-bold hover:text-white hover:bg-[#043F2E] transition duration-300 ease-in-out"
              href="#"
            >
              Donate
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          <img
            className="z-10 object-cover w-full h-[500px] mt-16 relative"
            src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9nZSUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />
        </motion.div>
      </section>

      <section className="relative py-32 bg-[#F3F3F3]">
        <div className="mx-auto px-4 max-w-[1200px]">
          <motion.div
            className="grid grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <div>
              <h2
                className={`${poppins.className} font-medium text-[48px] my-3 leading-10`}
              >
                These are some seven random placeholder words
              </h2>
            </div>
            <p className="text-[#043F2E] my-3 text-xl leading-normal tracking-tighter">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem culpa saepe quis similique dicta, totam autem quos cum
              ullam quasi. Aspernatur, rem corrupti? Nesciunt iure eaque nobis
              ullam beatae unde.
            </p>
            <p className="text-[#043F2E] my-3 text-xl leading-normal tracking-tighter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              maiores aliquid ducimus perferendis neque at vitae, voluptates
              atque numquam aperiam eaque voluptatum alias laboriosam dolorum ut
              explicabo, ex error minus sint qui.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="grid gap-8 justify-stretch items-center grid-cols-[0.7fr,1.3fr]"
          >
            <div className="bg-red-500 w-full h-full">
              <a
                href="#"
                className="video w-inline-block w-lightbox"
                aria-label="open lightbox"
                aria-haspopup="dialog"
              >
                <div className="play-button-icon"></div>
                <div className="play-button"></div>
                <div className="play-button-hover"></div>
              </a>
            </div>
            <div className="bg-red-500 w-full h-full rounded">
              <img
                src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9nZSUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-3 gap-10">
            <div className="pt-16 pl-5 relative">
              <div className="z-10 relative">
                <h5
                  className={`${poppins.className} font-medium text-[24px] my-3`}
                >
                  Heading 1
                </h5>
                <p className="text-[#043F2E] my-3 text-lg leading-normal tracking-tighter">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  quia.
                </p>
              </div>
              <div className="text-[#043F2e] absolute bottom-auto top-0 left-0 right-auto text-[120px]">
                01
              </div>
            </div>
            <div className="pt-16 pl-5 relative">
              <div className="z-10 relative">
                <h5
                  className={`${poppins.className} font-medium text-[24px] my-3`}
                >
                  Heading 2
                </h5>
                <p className="text-[#043F2E] my-3 text-lg leading-normal tracking-tighter">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  quia.
                </p>
              </div>
              <div className="text-[#043F2e] absolute bottom-auto top-0 left-0 right-auto text-[120px]">
                02
              </div>
            </div>
            <div className="pt-16 pl-5 relative">
              <div className="z-10 relative">
                <h5
                  className={`${poppins.className} font-medium text-[24px] my-3`}
                >
                  Heading 3
                </h5>
                <p className="text-[#043F2E] my-3 text-lg leading-normal tracking-tighter">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  quia.
                </p>
              </div>
              <div className="text-[#043F2e] absolute bottom-auto top-0 left-0 right-auto text-[120px]">
                03
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
