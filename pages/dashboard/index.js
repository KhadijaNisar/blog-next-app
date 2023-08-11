import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiRead } from "react-icons/ci";
import { MdOutlineCreate, MdDelete } from "react-icons/md";
import { useEffect } from "react";
import {router} from "next/router";
const index = ({ data }) => {
  const HandleDel= async(slug)=>{
    console.log(slug)
    const del = await fetch(`/api/blog/${slug}`,{
      method:"DELETE",
    })

  }

  // console.log(data);
  return (
    <>
      <div className="dbOuterDiv">
        {data?.message?.map((v, i) => (
          <div key={v._id} className="dbInnerDiv">
            <div>
            <Image src={v.image} width={400} height={400} alt="img"></Image>
            </div>
            <div className="innerDivText">
            <h1>{v.title}</h1>
            <div className="innerDivIcon">
            <Link href={`/posts/${v.slug}`}>
              <CiRead style={{color:"blue"}}/>
            </Link>
            <Link href={`/updateForm/${v.slug}`}>
              <MdOutlineCreate style={{color:"green"}}/>
            </Link>
            <MdDelete onClick={()=>{
              (window.confirm("Do you want to delete this Blog?"))?( HandleDel(v.slug)):(null)
            }} style={{fontSize:"xx-large",color:"red"}} />
             </div> 
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default index;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/getall");
  const data = await res.json();

  return { props: { data } };
}
