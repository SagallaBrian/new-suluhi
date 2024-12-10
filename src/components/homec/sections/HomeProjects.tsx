import Image from "next/image";
import Link from "next/link";

const Products = [
  {
    id: 1,
    category: "MIS",
    title: "Accounting Software",
    description:
      "dipisicing   elit. Corrupti sequi sapiente architecto eaque minus adipisci  modi! Reiciendis natus hic error dolorib",
    imgbackg: "/assets/imgd.jpg",
    links: "/projects/ererere",
  },
  {
    id: 2,
    category: "MIS",
    title: "Poultry Management",
    description:
      "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero! Lorem ipsum dolor sit, amet consectetur a",
    imgbackg: "/assets/imgd.jpg",
    links: "/projects/ererere",
  },
  {
    id: 3,
    category: "MIS",
    title: "Rental Management System",
    description:
      "   us earum alias quos? Officia sint praesentium debitis consequatur iure!",
    imgbackg: "/assets/imgd.jpg",
    links: "/projects/ererere",
  },
];
const HomeProjects = () => {
  return (
    <div className="bg-[#54afa9] text-gray-800 py-20 ">
      <div className="container mx-auto">
        <div className="px-4 lg:px-0">
          <h1 className="text-3xl text-[#a045a6]">Featured Products</h1>
          <h4 className="text-lg italic text-gray-800">
            Try one of our amazing products for free
          </h4>
          <div className="flex flex-col lg:flex-row gap-8  lg:relative items-start  min-h-[500px] ">
            {Products.map(({ id, imgbackg, title, description, links }) => (
              <div
                className={`w-full lg:flex-1 group  lg:sticky lg:top-10  ${
                  id === 1
                    ? "pt-10 lg:pt-40"
                    : id === 2
                    ? "pt-10 lg:pt-24"
                    : "pt-8"
                }  `}
                key={id}
              >
                <Link href={links} target="_blank" className="block">
                  <div className="relative w-full min-h-56 rounded-lg  ">
                    <Image
                      src={imgbackg}
                      alt={title}
                      fill
                      className="italic object-cover !w-full rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg mt-4 group-hover:text-[#a045a6]">
                    {title}
                  </h3>
                  <p className="text-gray-800 text-[0.85rem] w-full">
                    {description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
