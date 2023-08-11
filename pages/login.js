import { useState } from "react";
import { signIn } from "next-auth/react";
import Header from "../components/header";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from 'next/link'

const login = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };


  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        ...loginData,
      });
      router.push("/");
      console.log("abc")

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <Header></Header> */}
      <Toaster />
      <div className="formr">
        <form className="registerForm" onSubmit={onSubmitHandler}>
          <h1>Login</h1>

          <div className="formControlcontent">
            <label className="registerFormLabel">E-mail</label>
            <div className="inputControl">
              <input
                type="email"
                onChange={onChange}
                placeholder="Enter your Email"
                name="email"
                id="email"
                value={loginData.email}
              />
            </div>
            <label className="registerFormLabel">Password</label>
            <div className="inputControl">
              <input
                type="text"
                onChange={onChange}
                placeholder="Enter your Password"
                name="password"
                id="password"
                value={loginData.password}
              />
            </div>
            <div className="btnS">
              <button type="submit" className="btnSub">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default login;
