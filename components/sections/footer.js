import {
  XLogo,
  InstagramLogo,
  FacebookLogo,
  NavigationArrow,
} from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <div className="pt-20 bg-dark-green text-center text-off-white pb-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex gap-5 mb-16 w-full justify-around">
          <div className="flex flex-col items-start  w-[35%]">
            <a href="">
              <img src="/logo-transparent-dark.png" alt="" />
            </a>
            <p className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              est.
            </p>
            <div className="flex justify-evenly w-full mt-10">
              <a href="">
                <XLogo size={32} />
              </a>
              <a href="">
                {" "}
                <InstagramLogo size={32} />
              </a>
              <a href="">
                <FacebookLogo size={32} />
              </a>
            </div>
          </div>
          <div className="flex flex-col  pt-5 items-start">
            <h2 className="text-2xl mb-5 font-semibold">Navigation</h2>

            <a
              className="my-2 text-lg hover:underline hover:text-light-green hover:cursor-pointer transition-all duration-300 ease-in-out"
              href=""
            >
              Home
            </a>
            <a
              className="my-2 text-lg hover:underline hover:text-light-green hover:cursor-pointer transition-all duration-300 ease-in-out"
              href=""
            >
              About Us
            </a>
            <a
              className="my-2 text-lg hover:underline hover:text-light-green hover:cursor-pointer transition-all duration-300 ease-in-out"
              href=""
            >
              Programmes
            </a>
          </div>

          <div className="flex flex-col pt-5 items-start">
            <h2 className="text-2xl mb-5 font-semibold">Quick Links</h2>

            <a
              className="my-2 text-lg hover:underline hover:text-light-green hover:cursor-pointer transition-all duration-300 ease-in-out"
              href=""
            >
              About Us
            </a>
            <a
              className="my-2 text-lg hover:underline hover:text-light-green hover:cursor-pointer transition-all duration-300 ease-in-out"
              href=""
            >
              FAQ's
            </a>
            <a
              className="my-2 text-lg hover:underline hover:text-light-green hover:cursor-pointer transition-all duration-300 ease-in-out"
              href=""
            >
              Gallery
            </a>
          </div>
          <div className="flex flex-col mr-5 pt-5 items-start">
            <h2 className="text-2xl mb-5 font-semibold">Information</h2>

            <a
              className="my-2 text-lg hover:underline hover:text-light-green hover:cursor-pointer transition-all duration-300 ease-in-out"
              href="tel:+25472222222"
            >
              Call Us at +254 722 123 456
            </a>
            <a
              className="my-2 text-lg hover:underline hover:text-light-green hover:cursor-pointer transition-all duration-300 ease-in-out"
              href="mailto:tester@gmail.com"
            >
              Email Us
            </a>

            <div className="bg-light-green text-dark-green mt-3 p-4 rounded-md">
              <a
                className="flex gap-3 items-center font-bold"
                href="https://www.facebook.com/zindukaafrikafoundation/"
              >
                <NavigationArrow weight="bold" />
                Visit Us
              </a>
            </div>
          </div>
        </div>
        <hr className="border-light-green my-10" />
        <div>
          <span>© Zinduka Afrika Foundation. All Rights Reserved 2024.</span>
        </div>
      </div>
    </div>
  );
}
