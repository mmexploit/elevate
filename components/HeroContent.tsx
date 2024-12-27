import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroContentProps {
  backgroundDesign: string;
  leftSideImage: string;
  quote: ReactNode;
  description1?: string;
  description2?: string;
  button1: string;
  button1Link: string; // New prop for button 1 link
  button2?: string;
  button2Link?: string; // New prop for button 2 link
  backgroundColor: "blue" | "red" | "yellow"|"white";
  darkText?: boolean;
  whiteText?: boolean; // New prop for white text
}

export default function HeroContent({
  backgroundDesign,
  leftSideImage,
  quote,
  description1,
  description2,
  button1,
  button1Link, // Use the link prop
  button2,
  button2Link, // Use the link prop
  backgroundColor,
  darkText,
  whiteText,
}: HeroContentProps) {
return (
    <div className={`${darkText ? "text-gray-900 bg-gradient-to-tl from-gray-200 " : "text-white bg-blue-700"}  overflow-hidden`}>
      <div className="relative w-screen h-[80vh] md:max-h-[700px] lg:h-[500px]">
        <div className="coloredBackgroundSection hidden lg:flex z-10 w-screen overflow-hidden lg:h-[500px] h-[100vh] absolute">
          <Image
            src={backgroundDesign}
            layout="fill"
            objectFit="cover"
            priority
            alt="background"
            className="z-50 absol w-full h-full object-cover "
          />
        </div>
        <div className="z-20 relative flex w-[100%] flex-col lg:flex-row h-full justify-end">
          <div className="z-10 w-full h-full lg:h-full lg:w-1/2">
            {/* Curved Image section */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden flex items-center">
                <div className="absolute bottom-[-20%] lg:bottom-[-28%] lg:border-l-0 border-b-8 pt-0 lg:pt-5 lg:border-[10px] bg-white border-gray-100 left-0 w-full self-end h-[160%] lg:rounded-r-full overflow-hidden items-center justify-center flex">
                  <div className="bg-white border-none h-[500px] w-full">
                  <Image
                    src={leftSideImage}
                    alt="Curved Image"
                    // fill
                    className="object-cover h-full max-w-full lg:bg-none"
                    priority
                    width={1200}
                    height={1200}
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`z-20 w-full h-full lg:w-1/2 text-inherit md:text-left flex flex-col items-center md:items-start justify-center px-[0]
            ${
              backgroundColor === "red"
                ? "bg-gradient-to-t from-red-700 from-50% via-red-700/60 via-80% to-red-700/0"
                : backgroundColor === "yellow"
                ? "bg-gradient-to-t from-blue-200 from-50% via-80% to-blue-100/0"
                :backgroundColor==="white"
                ?"bg-gradient-to-t from-gray-200 from-50% via-gray-100/60 via-80% to-gray-100/0"
                : "bg-gradient-to-t from-blue-800 from-50% via-blue-800/60 via-80% to-blue-800/0"
            }
            mt-[-90%] sm:mt-[-50%] md:mt-[-40%] lg:mt-0 lg:bg-none`}
          >
            <div className="contentSection py-8 px-[5%]  h-full flex flex-col items-start justify-end lg:justify-center pb-14 lg:pr-[72px] xl:pr-[100px]">
            <h2 className="text-3xl leading-[120%] sm:text-[37px] xl:text-[42px] font-bold mb-4 sm:mb-6 md:mb-8  ">
                
                {quote}
              </h2>
              <p className=" text-lg lg:text-[22px] line-height: 1.625 mb-6 sm:mb-8 md:mb-10 w-full">
                {description1}
              </p>
              <p className=" text-base lg:text-[17px] line-height: 1.625 mb-6 sm:mb-8 md:mb-10 w-full">
                {description2}
              </p>
              <div className="flex space-x-4  justify-start w-full [&>*]:w-1/2 sm:[&>*]:w-auto">
              <Link href={button1Link} className="flex flex-row">
                <button
                  className={`${
                    darkText ? "bg-blue-600 hover:bg-blue-700" : "bg-white"
                  }
                ${whiteText ? "bg-white hover:bg-white -900" : "bg-black "

                  }py-[10px] px-4 rounded-md font-medium flex items-center justify-center text-[15px] sm:text-base gap-x-2 group w-full
                    ${
                      backgroundColor === "red"
                        ? "text-gray-900"
                        : backgroundColor === "yellow"
                        ? "text-white"
                         : backgroundColor === "white"
                         ?"text-white"
                        : "text-blue-800"
                    }`}
                >
                    {button1}
                    <span>
                      <Icon
                        icon="material-symbols:arrow-insert"
                        className="h-5 w-5 transform rotate-90 group-hover:translate-x-3 group-hover:-translate-y-1 transition-all duration-200 ease-in-out"
                      />
                    </span>
                </button>
                  </Link>

                  {button2 && button2Link && (
                  <Link href={button2Link} className="flex flex-row">
                    <button
                      className={`${
                        darkText ? "border-gray-800 border-2" : "border-white border-2"
                      }
                      ${whiteText ? "border-gray-800 border-2" : "border-gray-500  border-2"
                      }font-medium py-[2px] px-3 justify-center flex items-center group rounded-md text-[15px] sm:text-base gap-x-2 w-full`}
                    >
                      {button2}
                      <span>
                        <Icon
                          icon="material-symbols:arrow-insert"
                          className="h-5 w-5 transform rotate-90 group-hover:translate-x-3 group-hover:-translate-y-1 transition-all duration-200 ease-in-out"
                        />
                      </span>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

