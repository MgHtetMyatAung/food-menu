import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getFoodDetail(id) {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return data.json();
}

export const revalidate = 60;

async function foodDetail({ params }) {
  const data = await getFoodDetail(params.id);
  const detail = data?.meals[0];
  return (
    <div className=" py-10 min-h-screen">
      <div className="container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="">
            <Image
              src={detail?.strMealThumb}
              alt={detail?.strMeal}
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className=" md:col-span-2 lg:col-span-3 md:px-10 py-5 md:py-0 space-y-3">
            <h2 className=" text-xl md:text-2xl font-semibold text-green-700">
              {detail?.strMeal}
            </h2>
            <h5 className=" md:text-lg font-medium text-gray-500">
              Country :{" "}
              <span className=" font-semibold">{detail?.strArea}</span>
            </h5>
            <h5 className=" md:text-lg font-medium text-gray-500">
              Category :{" "}
              <Link href={`/category/${detail?.strCategory}`}>
                <span className=" font-semibold">{detail?.strCategory}</span>
              </Link>
            </h5>
          </div>
        </div>
        <div className=" py-5">
          <h3 className=" text-lg font-semibold text-gray-800">
            Product Description
          </h3>
          <p className=" mt-3 text-gray-600">{detail?.strInstructions}</p>
        </div>
        {/* <div className="">
          <video src={detail?.strYoutube} controls></video>
        </div> */}
      </div>
    </div>
  );
}

export default foodDetail;
