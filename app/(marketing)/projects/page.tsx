import HeroSection from '#components/HeroSection'
import Link from 'next/link';
import React from 'react';

const projects = [
  {
    image: "/tenaye.png",
    title: "Live Chat Medical Consultation Platform",
    description:
      "Connect instantly with expert doctors worldwide to discuss your health concerns. This platform ensures you'll be matched with the right specialist for your issue, offering seamless live chat, email integration, and even a Telegram chatbot for convenience. Accessible, reliable, and tailored healthcare support at your fingertips.",
    link: "https://www.tenayehealthsolutions.com",
  },
  {
    image: "/sina.png",
    title: "Legal Professional Selection Platform",
    description:
      "Empowering clients with the freedom to choose the ideal legal professional for their case. Whether you prefer the company's expertise or a skilled gig worker, our platform provides detailed profiles of law professionals, enabling informed decisions and personalized legal solutions.",
    link: "https://www.sinalawoffice.com",
  },
  {
    image: "/quantify.png",
    title: "BOQ Calculation Service",
    description:
      "Get your Bill of Quantities calculated quickly and accurately. Simply upload your building plans through our Telegram chatbot, and let our experts handle the rest. Experience speed and precision in construction cost estimation, hassle-free.",
    link: "https://www.quantifyboq.com",
  },
  {
    image: "/serki.png",
    title: "Beauty Professionals On-Demand",
    description:
      "Discover certified beauty professionals ready to provide top-tier services anytime, anywhere. Whether it's hairstyling, makeup, or skincare, our platform connects you with trained gig workers for unparalleled convenience and quality.",
    link: "https://www.serkibeauty.com",
  },
  {
    image: "/askfin.png",
    title: "On-Demand Accounting Professionals",
    description:
      "Access a network of certified accounting experts ready to assist with your financial needs. Choose between letting the company manage your accounting or selecting a skilled gig worker to handle your specific case. Flexible, reliable, and professional service at your convenience.",
    link: "https://www.askfinancialsolution.com",
  },
  {
    image: "/abiya.png",
    title: "Global Talent Platform for Film Industry",
    description:
      "Bridge the gap between talent and opportunity with our platform showcasing certified actors, scriptwriters, and more. Explore detailed profiles and connect effortlessly, creating a global hub for professionals and clients to collaborate.",
    link: "https://www.art-website-7mvh.vercel.app",
  },
  {
    image: "/tena.png",
    title: "Grocery Delivery Service",
    description:
      "From raw ingredients to processed or cooked meals, our platform offers it all with reliable delivery. Experience the ultimate convenience in grocery shopping tailored to meet your every need.",
    link: "https://www.tenameaza.com",
  },
  {
    image: "/ayo.png",
    title: "Call Center as a Service",
    description:
      "Streamline your customer support with our state-of-the-art call center services. Offering professional, scalable solutions designed to enhance your business operations and improve customer satisfaction.",
    link: "https://www.ayocallcenter.com",
  },
];

const Card = ({ image, title, description, link }) => (
  <div className=" border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 ">{title}</h3>
      <p className="mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 text-white bg-blue-500 rounded-full transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        View Details
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className='pt-[5%]'>
     
       <HeroSection/>
       <section className="py-[7%] ">
      <div className="container mx-auto px-6">
      
        <h2 className="text-4xl font-bold text-start mb-6 ">Our Work Speaks for Itself</h2>
        <h2 className="text-xl font-medium text-start mb-12 ">Delivering Tailored Software Solutions to Elevate Businesses has been always been our priority</h2>
   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
       
      
    </div>
  )
}

export default Projects