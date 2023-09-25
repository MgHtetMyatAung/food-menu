import Image from "next/image";
import Link from "next/link";

// export const dynamic = "force-dynamic";

async function getCategory() {
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  return data.json();
}

export default async function Home() {
  const data = await getCategory();
  return (
    <main className=" w-full h-auto md:h-screen bg-gray-100 ">
      <div className="container mx-auto">
        <div className=" min-h-[20vh] bg-green-800 py-10 px-5 md:px-16">
          <h3 className=" uppercase text-2xl md:text-4xl font-bold">
            <span className=" text-gray-200 text-lg md:text-2xl">
              Enjoy our
            </span>{" "}
            <br /> <span className=" text-yellow-400">special</span>{" "}
            <span className=" text-white">menu</span>
          </h3>
        </div>
        <div className="">
          <h3 className=" text-lg md:text-xl text-gray-800 mt-10 font-semibold">Choose Category</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 pt-5 pb-10">
          {data.categories.map((category) => (
            <div
              className=" shadow rounded-md p-3 bg-gray-50 group cursor-pointer"
              key={category.idCategory}
            >
              <Link href={`/category/${category.strCategory}`}>
                <Image
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  width={300}
                  height={300}
                  className=" group-hover:scale-105"
                />
                <h2 className=" text-center mt-3 font-medium">
                  {category.strCategory}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
