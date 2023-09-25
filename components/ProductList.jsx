"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ProductList({ slug }) {
  const [products, setProducts] = useState([]);
  const fetData = async (slug) => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${slug}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetData(slug);
  }, [slug]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
      {products?.meals?.map((item) => (
        <div
          className="shadow rounded-md p-3 bg-gray-50 group cursor-pointer"
          key={item.idMeal}
        >
          <Link href={`/products/${item.idMeal}`}>
            <Image
              src={item.strMealThumb}
              alt={item.strMeal}
              width={300}
              height={300}
              className=" group-hover:scale-105"
            />
            <h2 className=" text-center mt-3 font-medium">
              {item.strMeal.length > 10
                ? `${item.strMeal.slice(0, 10)} ...`
                : item.strMeal}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
