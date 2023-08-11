import { ImYoutube, ImFacebook, ImTwitter } from "react-icons/im";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";

const header = () => {
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?") === true) {
      signOut();
    }
  };

  const router = useRouter();
  const { data } = useSession();
  console.log(data);
  return (
    <>
      <header className="bg-gray-300 ">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
          <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
            <input type="text" className="input-text" placeholder="Search..." />
          </div>
          <div className="shrink w-80 sm:order-2">
            <Link href={"/"} className="font-bold uppercase text-3xl">
              Design
            </Link>
          </div>

          <div className="w-96 order-3 gap-5 flex justify-center">
            <Link href={"/"} color="#888888">
              <ImYoutube />
            </Link>
            <Link href={"/"} color="#888888">
              <ImFacebook />
            </Link>
            <Link href={"/"} color="#888888">
              <ImTwitter />
            </Link>
          </div>
          {data?.user ? (
            <div className="shrink w-80 sm:order-2">
              {/* {router.push("/")} */}
              <span style={{ cursor: "pointer" }} onClick={handleLogout}>
                Logout
              </span>
            </div>
          ) : (
            <div className="shrink w-80 sm:order-2">
              <Link href={"/login"} className="font-bold uppercase text-3xl">
                Login
              </Link>
            </div>
          )}
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
