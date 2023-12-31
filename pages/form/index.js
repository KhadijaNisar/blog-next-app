import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Footer from "../../components/footer";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import {GiCancel} from 'react-icons/gi';

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const form = () => {
  const editor = useRef(null);

  const [tempImage, setTempImage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    metadescription: "",
    authorname: "",
    altText: "",
    category: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadToCloudinary = async () => {
    try {
      const data = new FormData();
      data.append("file", tempImage);
      data.append("upload_preset", "blogimg");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/myuploads123/image/upload",
        { body: data, method: "POST" }
      );
      console.log(res);
      const jsonRes = await res.json();
      console.log(jsonRes);
      return jsonRes.secure_url;
    } catch (error) {
      console.log(error);
    }
  };
  const tempImageEmpty= ()=>{
    setTempImage(null);
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const uploadImg = await uploadToCloudinary();
      const res = await axios.post("/api/blog", {
        ...formData,
        image: uploadImg,
      });
      res && toast.success("Blog has been uploaded successfully");
      if (!res) {
        toast.error("Blog has not been uploaded");
      }


      setFormData({
        title: "",
        subtitle: "",
        description: "",
        metadescription: "",
        authorname: "",
        altText: "",
        category: "",

      })
      setTempImage(null)

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Toaster />
      <div className="outerdiv">
        <h1>
          What's On Your <span>Mind?</span>
        </h1>
        <form className="form" onSubmit={onSubmit}>
          <label className="formlabel">Title</label>
          <div>
            <input
              type="text"
              onChange={onChange}
              placeholder="Please enter title (50-100 characters)"
              name="title"
              id="title"
              value={formData.title}
            />
          </div>
          <label className="formlabel">Sub-title</label>
          <div>
            <input
              type="text"
              onChange={onChange}
              placeholder="Please Enter the Sub-Title"
              name="subtitle"
              id="subtitle"
              value={formData.subtitle}
            />
          </div>
          <label className="formlabel">Meta-Description</label>
          <div>
            <input
              type="text"
              onChange={onChange}
              placeholder="Please Enter the Meta-Description"
              name="metadescription"
              id="metadescription"
              value={formData.metadescription}
            />
          </div>
          <label className="formlabel">Category</label>
          <div>
            <input
              type="text"
              onChange={onChange}
              placeholder="Enter the Category"
              name="category"
              id="category"
              value={formData.category}
            />
          </div>

          <label className="formlabel">Write here</label>
          <div>
            <JoditEditor
              ref={editor}
              value={formData.description}
              tabIndex={1}
              onBlur={(v) => setFormData({ ...formData, description: v })}
              onChange={(v) => setFormData({ ...formData, description: v })}
            />
          </div>
          {tempImage ? (
            <div style={{display:"flex",position:"relative"}}>
              <img width={600} height={600} src={URL.createObjectURL(tempImage)} />
            <button onClick={tempImageEmpty} style={{position:"absolute",top:"0px", right:"0px"}}><GiCancel></GiCancel></button>
            </div>
          ) : (
            <div className="TraceDiv">
              <label className="formlabel" htmlFor="image">
                Upload
              </label>
              <div>
                <input 
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => setTempImage(e.target.files[0])}
                  placeholder="Upload the Image"
                  name="image"
                  id="image"
                />
              </div>
            </div>
          )}

          <label htmlFor="altText" className="formlabel">
            Alternate Image Text
          </label>
          <div>
            <input
              type="text"
              onChange={onChange}
              placeholder="Enter the altText"
              name="altText"
              id="altText"
              value={formData.altText}
            />
          </div>

          <label className="formlabel">Author Name</label>
          <div>
            <input
              type="text"
              onChange={onChange}
              placeholder="Enter the Author Name"
              name="authorname"
              id="authorname"
              value={formData.authorname}
            />
          </div>

          <div className="btn">
            <button className="btnReset">Reset</button>
            <button type="submit" className="btnSubmit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default form;
