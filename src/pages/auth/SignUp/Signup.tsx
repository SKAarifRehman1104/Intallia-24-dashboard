import myImage from '@/assets/Frame 25.svg';
import SignupForm from './SignupForm';
import SignupImg from "@/assets/Hired-bro 1.svg";
import { useState } from 'react';
import OtpVerification from './OtpVerification';
import { useToast } from "@/components/ui/use-toast"

const Singup = () => {
  const [isShowV, setIsShowV] = useState(false);

  return (
    <div className="h-screen">
      <div className="container">
        <div className="flex justify-between items-center h-[72px]">
          <div className="">
            <img src={myImage} alt="Example" />
          </div>
          <div className="flex gap-2 items-center">
            <button className="ring-1 rounded-lg py-1 px-3 ring-[#242426]">
              Login
            </button>
            <button className="rounded-lg bg-[#242426] py-2 px-3 text-[#FFFFFF] leading-[21px]">
              Singup
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-5 md:p-0">
        <div className="hidden md:w-1/2 bg-[rgb(242,244,247)] md:flex items-center justify-center flex-col gap-5 sticky top-0 h-[90vh]">
          <img src={SignupImg} alt="signup" />
          <h2 className="font-semibold text-5xl leading-[41px] text-center ">
            Explore. Practice. Get Hired!
          </h2>
        </div>
        {!isShowV && (
          <SignupForm
            onSubmit={(e) => {
              console.log(e);
              setIsShowV(true);
            }}
          />
        )}
        {isShowV && <OtpVerification />}
      </div>
    </div>
  );
}

export default Singup;
