import React from "react";

const footerItems = [
  {
    id: 1,
    headings: "Products",
    links: [
      { name: "Accounting", link: "", internal: true },
      { name: "Poultry", link: "", internal: true },
      { name: "Rental", link: "", internal: true },
    ],
  },
  {
    id: 2,
    headings: "Services",
    links: [
      { name: "Web Apps", link: "", internal: true },
      { name: "CMS", link: "", internal: true },
      { name: "UX & UI Design", link: "", internal: true },
      { name: "E-commerce", link: "", internal: true },
    ],
  },
  // {
  //   id: 3,
  //   headings: "Get In Touch",
  //   links: [
  //     { name: "Contact Us", link: "", internal: true },
  //     { name: "Blog", link: "", internal: true },
  //     { name: "Careers", link: "", internal: true },
  //     { name: "FAQs", link: "", internal: true },
  //   ],
  // },
  {
    id: 4,
    headings: "Social media",
    links: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/brian-sagalla-7a8764117/",
        internal: false,
      },
      { name: "Twitter", link: "", internal: false },
      { name: "YouTube", link: "", internal: false },
    ],
  },
];

const HomeFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-white text-sm">
      <div className="bg-gray-800 text-sm ">
        <div className="container mx-auto ">
          <div className="py-10 px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row py-5 gap-8">
              <div className="lg:max-w-[35%]">
                <h1 className="text-lg">Suluhi</h1>
                <p>
                  Founded in 2020, our team of experienced developers,
                  designers, and project managers is dedicated to delivering
                  high-quality web applications that help our clients achieve
                  their goals.
                </p>
              </div>
              {footerItems.map((itm) => (
                <div className="flex-1" key={itm.id}>
                  <h3 className="text-lg">{itm.headings}</h3>
                  <ol>
                    {itm.links.map((link, ind) => (
                      <li key={ind}>{link.name}</li>
                    ))}
                  </ol>
                </div>
              ))}
              <div className="flex-grow lg:text-right">
                <p>Address: Nairobi, Kenya</p>
                <p>Email: suluhi@gmail.com</p>
                <p>Tel:+254-705-161-125</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto">
          <div className="py-2">
            Copyright © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
