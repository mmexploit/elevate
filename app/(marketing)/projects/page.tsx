import HeroSection from '#components/HeroSection'
import ShowcaseSection from '#components/ShowCaseSection'
import Link from 'next/link';
import React from 'react';

const projects = [
  {
    image: "/landing.png",
    title: "E-Commerce Platform for Retail Store",
    description:
      "A scalable e-commerce platform tailored for seamless shopping experiences.",
    link: "/projects/ecommerce-platform",
  },
  {
    image: "/mobile.png",
    title: "E-Procurement System for Enterprises",
    description:
      "Streamlined procurement processes for efficient supply chain management.",
    link: "/projects/eprocurement-system",
  },
  {
    image: "/erp.png",
    title: "High-Impact Landing Page Design",
    description:
      "Landing pages designed for maximum conversions and lead generation.",
    link: "/projects/landing-page-design",
  },
  {
    image: "/eproc.png",
    title: "Mobile App Development for Businesses",
    description:
      "Custom mobile apps to bring your ideas to life with stunning UX/UI.",
    link: "/projects/mobile-app-development",
  },
  {
    image: "/crm.png",
    title: "ERP System for Enterprise Management",
    description:
      "Integrated ERP systems to unify and optimize business operations.",
    link: "/projects/erp-system",
  },
  {
    image: "/landing.png",
    title: "CRM Solution for Customer Engagement",
    description:
      "Boost customer relationships with powerful CRM tools.",
    link: "/projects/crm-solution",
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
      <Link href={link} passHref>
        <span
          className="inline-block px-6 py-2 text-white bg-blue-500 rounded-full transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
        >
          View Details
        </span>
      </Link>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className='pt-[5%]'>
     
       <HeroSection/>
       <section className="py-[10%] ">
      <div className="container mx-auto px-4">
        <div className='mx-2 md:mx-6'>
        <h2 className="text-4xl font-bold text-start mb-6 ">Our Work Speaks for Itself</h2>
        <h2 className="text-xl font-medium text-start mb-12 ">Delivering Tailored Software Solutions to Elevate Businesses has been always been our priority</h2>
        </div>
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