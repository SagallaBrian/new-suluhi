import Image from "next/image";
import Link from "next/link";

const banners = [
  // {
  //   id: 1,
  //   divclass: "divcaroa",
  //   startparag: "Custom Applications",
  //   sulheading: "Custom Web Applications Built For Your Business",
  //   subheading: `At Suluhi Technology, we understand that every
  //   business is unique, with its own set of needs and challenges.
  //   That's why we specialize in creating custom web applications
  //   that are tailor-made to streamline your workflow and improve your
  //   business processes`,
  //   learnmore: "portfolio",
  // },
  {
    id: 2,
    divclass: "divcarob",
    startparag: "Premium Solutions",
    sulheading: "Expert Web  Services For Your Business Needs",
    subheading: `At Suluhi Technology, we offer expert web development services that 
    are tailored to the unique needs of your business. 
    Our team of experienced developers has the skills and 
    expertise to create custom web solutions that can help your 
    business succeed in today's digital landscape`,
    learnmore: "portfolio",
  },
];

const WhatWedo = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-200">
      {/* <div className="absolute inset-0 bg-slate-700 opacity-50 -z-10" /> */}
      {/* <Image
        src={"/assets/illub.webp"}
        alt="Banner Images"
        fill
        className="object-cover -z-20"
      /> */}
      <div className="container mx-auto px-4 lg:px-0 pb-10 text-gray-700">
        {banners.map((bna) => (
          <div
            className="grid lg:grid-cols-9 gap-8 items-center pt-16 pb-28"
            key={bna.id}
          >
            <div className="col-span-5">
              <h2 className="text-3xl text-pink-600  mt-5 mb-2 italic">
                {bna.startparag}
              </h2>
              <h4 className="text-blue-500 text-lg mb-7">{bna.sulheading}</h4>
              <p className="text-[0.89rem] ">{bna.subheading}</p>
              <Link
                href={"/"}
                className="inline-block py-1 px-2 bg-blue-600 text-white rounded text-[0.8rem] mt-4 transition duration-500 hover:bg-blue-700"
              >
                Learn More
              </Link>
            </div>
            <div className="col-span-4 hidden lg:block">
              <Image
                src={"/assets/illua.webp"}
                alt="Banner Images"
                width={630}
                height={450}
                className="w-full object-cover "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWedo;
