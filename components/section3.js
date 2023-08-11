import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import Author from "../components/_child/author";
const section3 = ({ blog }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <Slider {...settings}>
        {blog?.message.map((v, i) => (
          <div className="grid " key={v._id}>
            <div className="images">
              <Link href={`/posts/${v.slug}`}>
                <Image className="section3Img"
                  src={v.image}
                  width={600}
                  height={400}
                ></Image>
              </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
              <div className="cat">
                <Link
                  href={`/posts/${v.slug}`}
                  className="text-orange-600 hover:text-orange-800"
                >
                  {v.category}
                </Link>
                <Link href={`/posts/${v.slug}`} className="text-gray-800 hover:text-gray-600">
                  -{new Date(v.createdAt).toDateString()}
                </Link>
              </div>
            </div>
            <div className="title">
              <Link
                href={`/posts/${v.slug}`}
                className="tet-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
              >
                {v.title}
              </Link>
            </div>
            <p className="text-gray-500 py-3">
              {v.metadescription}
            </p>
            <Author></Author>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default section3;
