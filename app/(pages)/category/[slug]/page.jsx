"use client";
import CategorySlider from "@/components/CategorySlider";
import ProductList from "@/components/ProductList";
import React, { useState } from "react";

function CategoryDetail({ params }) {
  const [name, setName] = useState(params.slug);
  return (
    <main className="w-full min-h-screen bg-gray-100 py-10">
      <div className=" container mx-auto">
        <div className=" mb-10">
          <CategorySlider setName={setName} />
        </div>
        <h3 className=" text-lg md:text-2xl font-semibold text-green-700 my-5">
          {name} Meals
        </h3>
        <ProductList slug={name} />
      </div>
    </main>
  );
}

export default CategoryDetail;
