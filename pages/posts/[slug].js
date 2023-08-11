import Format from "../../layout/format";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = ({ data }) => {
  const [blog, setBlog] = useState([]);
  console.log(blog);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/getall");
      const data = await res.json();
      setBlog(data);
    };
    getData();
  }, []);

  function createHtml(data) {
    return { __html: data };
  }
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">{/* <Author></Author> */}</div>
        <div>{data.singleBlog.category}</div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            {data.singleBlog.title}
          </h1>
          <p className="text-gray-500 text-xl text-center">
            {data.singleBlog.metadescription}
          </p>
        </div>
        <div className="py-10">
          <Image
            src={data.singleBlog.image}
            alt="abc"
            width={900}
            height={600}
          ></Image>
        </div>
        //Related Posts
        <div
          dangerouslySetInnerHTML={createHtml(data.singleBlog.description)}
          className="content text-gray-600 text-lg flex flex-col gap-4"
        ></div>
        {/* <Related data={data}></Related> */}
        <h1 className="font-bold text-3xl py-12 ">Related</h1>
        {blog?.message?.map((v, i) => (
          <section className="pt-20 ">
            {/* <h1 className="font-bold text-3xl py-12 ">Related</h1> */}
            <div className="flex flex-col gap-10">
              <div className="flex gap-5">
                <div className="image flex flex-col justify-start">
                  <Link href={"/"}>
                    <Image
                      src={v.image}
                      className="rounded"
                      width={300}
                      height={200}
                    ></Image>
                  </Link>
                </div>
                <div className="info flex justify-center flex-col">
                  <div className="info flex justify-center flex-col py-4">
                    <div className="cat">
                      <Link
                        href={"/"}
                        className="text-orange-600 hover:text-orange-800"
                      >
                        {v.category}
                      </Link>
                      <Link
                        href={"/"}
                        className="text-gray-800 hover:text-gray-600"
                      >
                        -{new Date(v.createdAt).getDate()}
                      </Link>
                    </div>
                  </div>
                  <div className="title">
                    <Link
                      href={"/"}
                      className="tet-xl font-bold text-gray-800 hover:text-gray-600"
                    >
                      {v.title}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>
    </Format>
  );
};

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  console.log(slug);
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  const data = await res.json();
  return { props: { data } };
}

export default page;
