import { ImYoutube, ImFacebook, ImTwitter } from "react-icons/im";
import {BsSearch} from "react-icons/bs";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";
import { useEffect, useState } from "react";
import QueryStr from 'query-string';
import Dashboard from '../pages/dashboard';

const header = ({blog}) => {
  console.log(blog)
    const router = useRouter();
    const [search,setSearch]=useState({
      title:""
    });
    useEffect(()=>{
      setSearch(router.query)
    }
      ,[])
    console.log(search);
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?") === true) {
      signOut();
    }
  };
  const handleLogin=()=>{
    router.push("/login")
  }
  const onSubmitHandler=(e)=>{
   e.preventDefault();
   var query=QueryStr.stringify(search);
   router.push(`/api/category?title${query}`)
  }
  const searchHandler=(e)=>{
    setSearch({...search,[e.target.name]:e.target.value})
  }
  const { data } = useSession();
  console.log(data);
  return (
    <>
      <header className="bg-gray-300 ">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
          <div className="shrink w-80 sm:order-2">
            <Link href={"/"} className="font-bold uppercase text-3xl">
              Circle Blogs
            </Link>
          </div>
          <form onSubmit={onSubmitHandler}>
          <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
            <input type="text" className="input-text"  placeholder="Search..."  onChange={searchHandler}/>
            <button onSubmit={onSubmitHandler}>
            <BsSearch/>
            </button>
            {/* <Link onSubmit={onSubmitHandler}>
              <BsSearch/>
            </Link> */}
          </div>
          </form>
          <div className="w-96 order-3 gap-5 flex justify-center topbar">
            <Link href={"/"} color="#888888">
                Home
            </Link>
            <Link href={"/about"} color="#888888">
              About
            </Link>
            {data?.user ? (
              <>
                <Link href={"/form"} color="#888888">
               Write
             </Link>
             <Link href={"/dashboard"} color="#888888">
               DB
             </Link>
            <div className="shrink w-80 sm:order-2">
            <button className="btnLogOut bg-gray-200" style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</button>
            </div>
            </>
          ) : (
            <div className="shrink w-80 sm:order-2">
                 <button className="btnLogOut bg-gray-200" style={{ cursor: "pointer" }} onClick={handleLogin}>Login</button>
            </div>
          )}
          </div>
      </div> 
       
      </header>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://blog-next-app-khaki.vercel.app/api/getall");
  const data = await res.json();

  return { props: { data } };
}

export default header;
