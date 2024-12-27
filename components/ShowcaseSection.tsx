import React from "react";
import Link from "next/link";

// Card Component
const Card = ({ image, title, description, link }) => (
  <div className="bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform duration-300 hover:scale-105 hover:shadow-xl">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link}>
        <a className="inline-block px-6 py-2 text-white bg-blue-500 rounded-full transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          View Details
        </a>
      </Link>
    </div>
  </div>
);

// Showcase Section Component
const ShowcaseSection = () => {
  const projects = [
    {
      image: "/images/ecommerce.jpg",
      title: "E-Commerce Platform for Retail Store",
      description:
        "A scalable e-commerce platform tailored for seamless shopping experiences.",
      link: "/projects/ecommerce-platform",
    },
    {
      image: "/images/eprocurement.jpg",
      title: "E-Procurement System for Enterprises",
      description:
        "Streamlined procurement processes for efficient supply chain management.",
      link: "/projects/eprocurement-system",
    },
    {
      image: "/images/landing_page.jpg",
      title: "High-Impact Landing Page Design",
      description:
        "Landing pages designed for maximum conversions and lead generation.",
      link: "/projects/landing-page-design",
    },
    {
      image: "/images/mobile_app.jpg",
      title: "Mobile App Development for Businesses",
      description:
        "Custom mobile apps to bring your ideas to life with stunning UX/UI.",
      link: "/projects/mobile-app-development",
    },
    {
      image: "/images/erp_system.jpg",
      title: "ERP System for Enterprise Management",
      description:
        "Integrated ERP systems to unify and optimize business operations.",
      link: "/projects/erp-system",
    },
    {
      image: "/images/crm_system.jpg",
      title: "CRM Solution for Customer Engagement",
      description:
        "Boost customer relationships with powerful CRM tools.",
      link: "/projects/crm-solution",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
