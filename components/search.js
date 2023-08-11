import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/author";

const search = ({ blog }) => {
  // console.log(blog?.message);
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {blog?.message.map((v, i) => (
          <div className="item" key={v._id}>
            <div className="images">
              <Link href={`/posts/${v.slug}`}>
                <Image src={v.image} className="section2Img" width={500} height={350} alt={v.altText}></Image>
              </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
              <Link
                href={"/"}
                className="text-orange-600 hover:text-orange-800"
              >
                {v.category}
              </Link>
              <Link href={`/posts/${v.slug}`} className="text-gray-800 hover:text-gray-600">
               -{new Date(v.createdAt).toDateString()}
              </Link>
            </div>
            <div className="title">
              <Link
                href={`/posts/${v.slug}`}
                className="tet-xl font-bold text-gray-800 hover:text-gray-600"
              >
                {v.title}
              </Link>
            </div>
            <p className="text-gray-500 py-3">{v.subtitle}</p>
            <Author></Author>
          </div>
        ))}
      </div>
    </section>
  );
};

export default search;
