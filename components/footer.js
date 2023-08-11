import { ImYoutube,ImFacebook,ImTwitter } from "react-icons/im";
import Link from 'next/link';
import Newsletter from '../components/_child/newsletter';

const footer = () => {
  return (
    <>
    <Newsletter/>
      <footer className="bg-gray-50">
        <div className="container max-auto flex justify-center py-12">
          <div className="py-5">
            <div className="flex gap-6 justify-center ">
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
            <p className="py-5 text-gray-500">Copyright 1999-2023 by Refsnes Data. All Rights Reserved.</p>
            <p className="text-gray-400 text-center">Terms & Conditions
            </p>
          </div>
        </div>
        
      </footer>
    </>
  );
};

export default footer;
