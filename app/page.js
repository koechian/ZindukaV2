import EventsScroller from "@/components/sections/events";
import * as motion from "motion/react-client";
import { Poppins } from "next/font/google";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400"] });

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
            className="z-10 w-full h-[500px] mt-16 relative object-cover object-center"
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
              <img src="/zinduka-worldserve.jpg" alt="" />
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

      <section className="my-32 relative">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex w-full items-center gap-16">
            <img
              className="w-[35%] object-cover rounded align-middle"
              src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9nZSUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />

            <div className="flex flex-col w-[65%]">
              <h2
                className={`${poppins.className} font-medium text-[48px] my-3 leading-10`}
              >
                Our Programmes
              </h2>
              <p className="text-[#043F2E] my-3 text-xl leading-normal tracking-tighter">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis deserunt reprehenderit saepe earum perferendis
                perspiciatis aut, neque consequuntur. At cum culpa ab rerum et
                odit repellendus? Nobis quis ut necessitatibus.
              </p>
              <div className="mt-5">
                <div className="grid grid-cols-2 grid-rows-2 gap-5">
                  <div className="p-5 bg-off-white rounded flex flex-col">
                    <a
                      className={`${poppins.className} text-[24px] font-medium text-dark-green hover:text-link-secondary transition duration-300 ease-in-out`}
                      href="#"
                    >
                      Lorem, ipsum.
                    </a>
                    <p className="my-3 text-lg leading-normal tracking-tighter">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <a
                      className="mt-5 text-xl font-medium text-dark-green hover:text-light-green transition duration-300 ease-in-out"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                  <div className="p-5 bg-off-white rounded flex flex-col">
                    <a
                      className={`${poppins.className} text-[24px] font-medium text-dark-green hover:text-link-secondary transition duration-300 ease-in-out`}
                      href="#"
                    >
                      Lorem, ipsum.
                    </a>
                    <p className="my-3 text-lg leading-normal tracking-tighter">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <a
                      className="mt-5 text-xl font-medium text-dark-green hover:text-light-green transition duration-300 ease-in-out"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                  <div className="p-5 bg-off-white rounded flex flex-col">
                    <a
                      className={`${poppins.className} text-[24px] font-medium text-dark-green hover:text-link-secondary transition duration-300 ease-in-out`}
                      href="#"
                    >
                      Lorem, ipsum.
                    </a>
                    <p className="my-3 text-lg leading-normal tracking-tighter">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <a
                      className="mt-5 text-xl font-medium text-dark-green hover:text-light-green transition duration-300 ease-in-out"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                  <div className="p-5 bg-off-white rounded flex flex-col">
                    <a
                      className={`${poppins.className} text-[24px] font-medium text-dark-green hover:text-link-secondary transition duration-300 ease-in-out`}
                      href="#"
                    >
                      Lorem, ipsum.
                    </a>
                    <p className="my-3 text-lg leading-normal tracking-tighter">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <a
                      className="mt-5 text-xl font-medium text-dark-green hover:text-light-green transition duration-300 ease-in-out"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-36 relative">
        <div className="max-w-[1200px] mx-auto px-4 ">
          <div className="py-8 z-10 relative items-center flex rounded w-full bg-off-white justify-between">
            <div className="text-center flex-col w-[24%] relative">
              <div>
                <h2
                  className={`${poppins.className} text-[80px] py-3 text-dark-green font-medium`}
                >
                  200+
                </h2>
              </div>
              <p className="text-dark-green text-[20px] leading-5 my-4 font-medium">
                Years of Experience
              </p>
            </div>
            <div className="text-center flex-col items-center w-[24%] relative">
              <div>
                <h2
                  className={`${poppins.className} text-[80px] py-3 text-dark-green font-medium`}
                >
                  200+
                </h2>
              </div>
              <p className="text-dark-green text-[20px] leading-5 my-4 font-medium">
                Years of Experience
              </p>
            </div>
            <div className="text-center flex-col items-center w-[24%] relative">
              <div>
                <h2
                  className={`${poppins.className} text-[80px] py-3 text-dark-green font-medium`}
                >
                  200+
                </h2>
              </div>
              <p className="text-dark-green text-[20px] leading-5 my-4 font-medium">
                Years of Experience
              </p>
            </div>
            <div className="text-center flex-col items-center w-[24%] relative">
              <div>
                <h2
                  className={`${poppins.className} text-[80px] py-3 text-dark-green font-medium`}
                >
                  200+
                </h2>
              </div>
              <p className="text-dark-green text-[20px] leading-5 my-4 font-medium">
                Years of Experience
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundPosition: "0 0, 50% 20%",
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('https://assets-global.website-files.com/65c0df150844df102b9d81bb/6618e001e065b098c77cffdb_BG%20(1).webp')",
            }}
            className="bg-cover w-full h-[72%] absolute top-0 left-0 right-0 bottom-auto"
          ></div>
        </div>
      </section>

      {/* Events Section */}
      <section className="pb-32 relative">
        <EventsScroller />
      </section>

      {/* Team Members Section */}
      <section className="py-36 relative bg-[#F3F3F3]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[800px] mb-14 mx-auto">
            <h2 className={`${poppins.className} text-[64px] leading-10 my-3`}>
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-10">
            <div className="flex gap-5 items-center justify-start">
              <img
                className="w-[40%] h-full rounded object-cover"
                src="https://via.assets.so/img.jpg?w=450&h=560&tc=white&bg=#cecece"
              />
              <div className="flex flex-col w-[70%]">
                <p className="text-sm text-dark-green">Manager</p>
                <h2
                  className={`${poppins.className} text-[24px] my-3 font-medium`}
                >
                  John Doe
                </h2>
                <hr className="my-3 border-dark-green" />
                <p>
                  Team volunteering not only allows for greater impact but also
                  fosters camaraderie and teamwork among participants.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center justify-start">
              <img
                className="w-[40%] h-full rounded object-cover"
                src="https://via.assets.so/img.jpg?w=450&h=560&tc=white&bg=#cecece"
              />
              <div className="flex flex-col w-[70%]">
                <p className="text-sm text-dark-green">Manager</p>
                <h2
                  className={`${poppins.className} text-[24px] my-3 font-medium`}
                >
                  John Doe
                </h2>
                <hr className="my-3 border-dark-green" />
                <p>
                  Team volunteering not only allows for greater impact but also
                  fosters camaraderie and teamwork among participants.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center justify-start">
              <img
                className="w-[40%] h-full rounded object-cover"
                src="https://via.assets.so/img.jpg?w=450&h=560&tc=white&bg=#cecece"
              />
              <div className="flex flex-col w-[70%]">
                <p className="text-sm text-dark-green">Manager</p>
                <h2
                  className={`${poppins.className} text-[24px] my-3 font-medium`}
                >
                  John Doe
                </h2>
                <hr className="my-3 border-dark-green" />
                <p>
                  Team volunteering not only allows for greater impact but also
                  fosters camaraderie and teamwork among participants.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center justify-start">
              <img
                className="w-[40%] h-full rounded object-cover"
                src="https://via.assets.so/img.jpg?w=450&h=560&tc=white&bg=#cecece"
              />
              <div className="flex flex-col w-[70%]">
                <p className="text-sm text-dark-green">Manager</p>
                <h2
                  className={`${poppins.className} text-[24px] my-3 font-medium`}
                >
                  John Doe
                </h2>
                <hr className="my-3 border-dark-green" />
                <p>
                  Team volunteering not only allows for greater impact but also
                  fosters camaraderie and teamwork among participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paralax Section */}
      <section
        style={{
          backgroundAttachment: "scroll, fixed",
          backgroundPosition: "0 0,50%",
          backgroundSize: "auto,cover",
          backgroundImage:
            "linear-gradient(#00000080, #00000080), url('https://cdn.prod.website-files.com/65c0df150844df102b9d81bb/6617a5c871e8dc48eacffb6a_Img%20Bg%20(1).jpg')",
        }}
        className="justify-flex-end w-full h-auto relative py-32"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-[75%]  flex-col flex mx-auto">
            <h2
              className={`${poppins.className} text-white text-[48px] leading-10 my-3`}
            >
              Lorem ipsum dolor sit amet.
            </h2>
            <div className="flex justify-center mt-5 items-center">
              <a className=" rounded-lg bg-white text-dark-green px-10 py-4 text-lg font-medium hover:bg-white hover:text-black hover:outline hover:outline-1  hover:outline-[#043F2E] transition duration-300 ease-in-out">
                Become a Mentor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs and News Section */}
      <section className="py-32 relative ">
        <div className="max-w-[1200px] px-4 mx-auto">
          <div className="text-center mb-14 mx-auto w-full  items-center flex justify-between">
            <h2
              className={`${poppins.className} text-[45px] font-bold text-dark-green leading-10 my-3`}
            >
              Latest Blogs and News
            </h2>
            <a className=" text-lg font-medium p-4 bg-dark-green text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-dark-green hover:outline hover:outline-1 hover:outline-[#043F2E] hover:cursor-pointer">
              View More
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((card) => (
              <div key={card} className="flex flex-col h-full">
                <a href="" className="block mb-4">
                  <img
                    className="object-cover rounded w-full h-[250px]" // Fixed height for images
                    src="https://via.placeholder.com/300x200"
                    alt=""
                  />
                </a>
                <div className="flex flex-col flex-grow">
                  {" "}
                  {/* Make content area grow to fill remaining space */}
                  <div className="text-link-secondary my-3 font-medium">
                    April 18, 2024
                  </div>
                  <div className="my-5">
                    <a className={`${space_grotesk.className}`} href="">
                      <span
                        className={`${space_grotesk.className} text-3xl font-bold mt-2 block`}
                      >
                        Lorem ipsum dolor sit amet.
                      </span>
                    </a>
                  </div>
                  <p className="text-dark-green text-lg my-2 flex-grow">
                    {" "}
                    {/* Allow text to grow */}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptates commodi numquam, fugit vitae quidem sunt?
                  </p>
                  <a
                    className="mt-auto flex items-center gap-3 text-dark-green
                  font-semibold hover:text-link-secondary hover:underline
                  transition-all duration-300 ease-in-out"
                    href=""
                  >
                    Read More <ArrowRight weight="bold" color="#043F2E" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
