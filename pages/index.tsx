import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Pill from "@/components/common/Pill";
import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 w-full flex items-center justify-center text-center">
        <Image
          src={HERO_BG}
          alt="Hero background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 container mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() =>
                setActiveFilter((prev) => (prev === filter ? null : filter))
              }
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-6 container mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Properties</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{property.name}</h3>
                <p className="text-gray-600 mb-1">${property.price}</p>
                <p className="text-yellow-500 font-semibold">
                  ⭐ {property.rating.toFixed(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
