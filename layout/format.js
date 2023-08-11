import Header from "../components/header";
import Footer from "../components/footer";
import Head from 'next/head';
import Topbar from "../components/topbar";

const format = ({children,blog}) => {
  return (
    <>
        <Head>
            <title>Blog</title>
        </Head>
      {/* <Header /> */}
      <Topbar blog={blog}/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default format;
