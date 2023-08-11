import Link from "next/link";
import Image from "next/image";
import Author from "../components/_child/author";

const section4 = ({ blog }) => {
  return (
    <section className="container mx-auto md:px-20 py-16 grid  gap-4 lg:grid-cols-2">
      <div className="grid">
        {blog?.message.map((v,i)=>(
          (v.category=="Sports")?(<div className="item order-1">
          <h1 className="font-bold text-4xl py-12 ">{v.category}</h1>
          <div className="flex flex-col gap-6">
            <div className="flex gap-5">
              <div className="image flex flex-col justify-start">
                <Link href={`/posts/${v.slug}`}>
                  <Image
                    src={v.image}
                    className="rounded"
                    width={300}
                    height={250}
                  ></Image>
                </Link>
              </div>
              <div className="info flex justify-center flex-col">
                <div className="info flex justify-center flex-col py-4">
                  <div className="cat">
                    <Link
                      href={`/posts/${v.slug}`}
                      className="text-orange-600 hover:text-orange-800"
                    >
                      {v.category}
                    </Link>
                    <Link
                      href={`/posts/${v.slug}`}
                      className="text-gray-800 hover:text-gray-600"
                    >
                      -{new Date(v.createdAt).toDateString()}
                    </Link>
                  </div>
                </div>
                <div className="title">
                  <Link
                    href={`/posts/${v.slug}`}
                    className="tet-xl font-bold text-gray-800 hover:text-gray-600"
                  >
                    {v.title}
                  </Link>
                </div>
                <Author></Author>
              </div>
            </div>
          </div>
        </div>):(null)
        ))}
      </div>
      <div className="grid">
        {blog?.message.map((v,i)=>(
          (v.category=="Information")?(<div className="item order-1">
          <h1 className="font-bold text-4xl py-12 ">{v.category}</h1>
          <div className="flex flex-col gap-6">
            <div className="flex gap-5">
              <div className="image flex flex-col justify-start">
                <Link href={`/posts/${v.slug}`}>
                  <Image
                    src={v.image}
                    className="rounded"
                    width={300}
                    height={250}
                  ></Image>
                </Link>
              </div>
              <div className="info flex justify-center flex-col">
                <div className="info flex justify-center flex-col py-4">
                  <div className="cat">
                    <Link
                      href={`/posts/${v.slug}`}
                      className="text-orange-600 hover:text-orange-800"
                    >
                      {v.category}
                    </Link>
                    <Link
                      href={`/posts/${v.slug}`}
                      className="text-gray-800 hover:text-gray-600"
                    >
                      -{new Date(v.createdAt).toDateString()}
                    </Link>
                  </div>
                </div>
                <div className="title">
                  <Link
                    href={`/posts/${v.slug}`}
                    className="tet-xl font-bold text-gray-800 hover:text-gray-600"
                  >
                    {v.title}
                  </Link>
                </div>
                <Author></Author>
              </div>
            </div>
          </div>
        </div>):(null)
        ))}
      </div>
    </section>
  );
};

export default section4;
