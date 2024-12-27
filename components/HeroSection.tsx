"use client";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import HeroContent from "./HeroContent";
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.6, // Adjust this value based on how much of the element should be visible before triggering
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div>
      
      <Carousel
        ref={carouselRef}
        opts={{
          loop: true,
          containScroll: "trimSnaps", // Ensures snapping to slides
        }}
        plugins={
          isInView
            ? [
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                  playOnInit: true,
                }),
              ]
            : []
        }
        setApi={(api: any) => {
          api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent >
          <CarouselItem >
          <HeroContent
              backgroundDesign="/blue2.svg"
              leftSideImage="/erp.png"
              quote={<div className="font-bold uppercase text-[26px] leading-[130%] sm:text-[32px] xl:text-[37px]">ERP Systems</div>}
              // description="Welcome to Addis Ababa University. Ethiopia's pioneer in higher education since 1950. AAU is dedicated to advancing knowledge and serving the community through excellence in education, research and community services."
              description1="Enterprise Resource Planning Made Simple"
              description2="Take control of your business operations with scalable ERP systems. From managing finances to optimizing workflows, our solutions integrate all your processes into a single, easy-to-use platform."
              button1="Optimize with ERP "
              button1Link="/contact" // Dynamic link for button1
              
              backgroundColor="blue"
            />

          </CarouselItem>

          <CarouselItem>
          <HeroContent
              backgroundDesign="/gray1.svg"
              leftSideImage="/crm.png"
              quote={<div className="text-blue-800">CRM Systems</div>}
              description1="Boost Customer Relationships"
              description2="Enhance your sales and support strategies with powerful CRM tools. Our systems help you track customer interactions, analyze data, and personalize services, ensuring long-term client satisfaction and loyalty."
              button1="Explore CRM Solutions"
              button1Link="/contact" // Dynamic link for button1
            
              backgroundColor="white"
              darkText
              
            />
          </CarouselItem>
          <CarouselItem>
          <HeroContent
            backgroundDesign="/blue2.svg"
            leftSideImage="/landing.png"
            quote="Landing Pages"
            description1="High-Impact Landing Pages"
            description2="Make the right first impression with landing pages designed to convert. Whether you're promoting a new product, capturing leads, or launching a marketing campaign, our landing pages are built to maximize engagement and deliver measurable results"
            // button1="Services"
            // button1Link="/services" // Dynamic link for button2
            button1="Create Your Landing Page"
            button1Link="/contact" // Dynamic link for button2
            backgroundColor="blue"
/>
          </CarouselItem>
          <CarouselItem>
          <HeroContent
            backgroundDesign="/bgCnew.svg"
            leftSideImage="/eproc.png"
            quote={<div> E-Procurement</div>}
            description1="Streamlining Procurement Processes"
            description2="Optimize your procurement cycle with our advanced e-procurement solutions. Automate vendor management, improve cost tracking, and enhance transparency, making your supply chain smarter and more efficient."
            button1="Discover E-Procurement Solutions"
            button1Link="/contact" // Dynamic link for button1
            
            backgroundColor="yellow"
            darkText
/>
          </CarouselItem>
          <CarouselItem>
          <HeroContent
            backgroundDesign="/bgCnew.svg"
            leftSideImage="/mobile.png"
            quote={<div>Mobile Apps</div>}
            description1="Engaging Mobile Experiences"
            description2="Bring your ideas to life with custom mobile apps for iOS and Android. Our apps are designed with a focus on user experience, ensuring seamless navigation, cutting-edge features, and robust performance for your customers on the go."
            button1="Design Your Mobile App"
            button1Link="/contact" // Dynamic link for button1
            
            backgroundColor="yellow"
            darkText
/>
          </CarouselItem>

        </CarouselContent>
        <div className="paginationContainer w-full absolute bottom-0 min-h-0 h-fit flex items-center justify-center ">
        <div className="relative md:absolute md:right-20  bottom-4 md:bottom-8 z-30 flex items-center ">
          <CarouselPrevious className="z-50 hidden sm:flex text-white bg-transparent border-none w-6 drop-shadow-[0px_0px_20px_rgba(0,0,0,0.4)]" />
          <div className="flex space-x-1 md:space-x-2">
            {/* Render indicators based on the number of slides */}
            {[0, 1, 2,3].map((_, index) => (
              <div
                key={index}
                className={`w-[10px] h-[10px] rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
          <CarouselNext className="z-50 hidden sm:flex text-white bg-transparent border-none w-6 drop-shadow-[0px_0px_20px_rgba(0,0,0,0.4)]" />
        </div>
        </div>
      </Carousel>
    </div>
  );
}
