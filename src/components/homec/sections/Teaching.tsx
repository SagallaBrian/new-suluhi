import Image from "next/image";
import Link from "next/link";

const Teaching = () => {
  return (
    <div className="text-white text-sm relative">
      <Image
        src={"/assets/imgd.jpg"}
        alt="Teaching Background Image"
        fill
        className="w-full object-cover  -z-20"
      />
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      <div className="container mx-auto">
        <div className="py-14 px-4 lg:px-0">
          <h4 className="text-3xl ">Who we are</h4>
          <p className="pb-4">
            At Suluhi, we believe that technology is more than just about
            building great products—it’s about creating connections that go
            beyond code. While you enjoy our stunning web apps, we want you to
            understand who we are and what we stand for. What’s behind the tech
            you use? Do we align with your values? Are we a secular company, or
            do we have a guiding philosophy that shapes our work?
          </p>
          <p>
            At Suluhi, we’re committed to being transparent not just about the
            quality of our products, but about the values and principles that
            drive us. We want you to know what we stand for—because it’s not
            just about what we create, but how we think and the impact we aim to
            make. Join us on this journey to not only explore innovative web
            applications but also the heart and mind behind them.
          </p>
          <div>
            <Link
              href={"/philosophy"}
              className="px-4 py-2 my-3 text-xs inline-block bg-pink-600 hover:bg-pink-700 rounded text-white"
            >
              Explore more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
