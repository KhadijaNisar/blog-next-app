import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import Author from "../components/_child/author";

const section1 = ({ blog }) => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const bg = {
    background: "url('images/banne.png') no-repeat",
    backgroundPosition: "right top",
  };
  return (
    <section className="py-16" style={bg}>
    <div className="container mx-auto md:px-20 ">
      <h1 className="font-bold text-3xl pb-12 text-center ">Trending</h1>
      <Slider {...settings}>
        {blog?.message.map((v, i) => (
          <div className="grid md:grid-cols-2 gap-4 section1g" key={v._id}>
            <div className="image items-center">
              <Link href={`/posts/${v.slug}`}>
                <Image className="section1Img"
                  src={v.image}
                  width={600}
                  height={500}
                  alt={v.altText}
                ></Image>
              </Link>
            </div>
            <div className="info flex justify-center flex-col">
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
                  -August 03,2023
                </Link>
              </div>
              <div className="title">
                <Link
                  href={`/posts/${v.slug}`}
                  className="tet-1xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
                >
                  {v.title}
                </Link>
              </div>
              <p className="text-gray-500 py-3">{v.metadescription}</p>
              <Author></Author>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
  );
};

export default section1;

{/* <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20 ">
        <h1 className="font-bold text-3xl pb-12 text-center ">Trending</h1>
        <Slider {...settings}>
          {blog?.message.map((v, i) => (
            <div className="grid md:grid-cols-2 gap-4 section1g" key={v._id}>
              <div className="image items-center">
                <Link href={`/posts/${v.slug}`}>
                  <Image className="section1Img"
                    src={v.image}
                    width={600}
                    height={500}
                    alt={v.altText}
                  ></Image>
                </Link>
              </div>
              <div className="info flex justify-center flex-col">
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
                    -August 03,2023
                  </Link>
                </div>
                <div className="title">
                  <Link
                    href={`/posts/${v.slug}`}
                    className="tet-1xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
                  >
                    {v.title}
                  </Link>
                </div>
                <p className="text-gray-500 py-3">{v.metadescription}</p>
                <Author></Author>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section> */}