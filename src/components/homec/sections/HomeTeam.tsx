import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const team = [
  {
    id: 1,
    name: "Brian Sagalla",
    role: "Full-Stack Developer",
    image: "/assets/imgi.jpg",
    github: "https://www.youtube.com/",
    linked: "https://www.wikipedia.org/",
    twitter: "https://twitter.com/",
    youtube: "https://twitter.com/",
    bio: "Full stack developer with extensive experience in Front-End Development and also",
  },
];

const HomeTeam = () => {
  return (
    <div className="bg-gradient-to-l from-blue-200">
      <div className="container mx-auto">
        <div className="py-10 text-sm">
          {/* <h1 className="text-3xl">Team & Staff</h1> */}
          <h2 className="text-3xl text-pink-600 text-center">Our Team </h2>
          {team.map((staff) => (
            <div className="flex gap-8 items-center px-10" key={staff.id}>
              <div className="relative md:w-[30%] h-96">
                <Image
                  src={staff.image}
                  alt={staff.name}
                  fill
                  className="object-cover rounded shadow"
                />
              </div>
              <div className="flex-1 text-gray-800">
                <h4 className="text-3xl">Name: {staff.name}</h4>
                <h4 className="text-lg text-[#379496]">Role: {staff.role}</h4>
                <h4 className="pt-5 text-base underline italic">About me</h4>
                <p>
                  {staff.bio} Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Numquam pariatur rem quidem facere in accusamus
                  consequuntur eaque architecto vero, ex dolores, commodi,
                  exercitationem dolorem corporis voluptate dignissimos quam
                  distinctio laudantium.
                </p>

                <div className="flex gap-4 py-6">
                  <a href={staff.linked} target="_blank">
                    <FaLinkedin
                      fontSize={"20px"}
                      className="text-blue-600 hover:text-blue-500"
                    />
                  </a>
                  <a href={staff.github} target="_blank">
                    <FaGithub
                      fontSize={"20px"}
                      className="text-slate-600 hover:text-slate-500"
                    />
                  </a>
                  <a href={staff.twitter} target="_blank">
                    <FaTwitter
                      fontSize={"20px"}
                      className="text-blue-600 hover:text-blue-500"
                    />
                  </a>
                  <a href={staff.youtube} target="_blank">
                    <FaYoutube
                      fontSize={"20px"}
                      className=" text-red-600 hover:text-red-500"
                    />
                  </a>
                </div>
                <div>
                  <Link
                    href={"/company"}
                    className="px-4 py-2 text-[13px] text-white bg-blue-600 hover:bg-blue-700 rounded"
                  >
                    View more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTeam;
