"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useState } from "react";

function CategorySlider({ setName }) {
  const [categories, setCategories] = useState([]);
  const getCategory = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data?.categories));
  };

  useEffect(() => {
    getCategory();
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {categories?.map((category) => (
        <div
          className=" shadow rounded-md p-3 bg-gray-50 group cursor-pointer"
          key={category.idCategory}
          onClick={() => setName(category.strCategory)}
        >
          <Image
            src={category.strCategoryThumb}
            alt={category.strCategory}
            width={300}
            height={300}
          />
          <h2 className=" text-sm sm:text-base text-center mt-3 font-medium">
            {category.strCategory}
          </h2>
        </div>
      ))}
    </Slider>
  );
}

export default CategorySlider;
