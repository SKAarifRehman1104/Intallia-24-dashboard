import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
// import {  } from "@/assets/Vector.svg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "@/assets/Vector.svg";
import Vector from "@/assets/Vector (1).svg";
import Vectorimg from "@/assets/Vector (2).svg";
import Vectorimgr from "@/assets/Vector (3).svg";

// Zod schema for OTP validation
const otpSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be exactly 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

type OtpFormValues = z.infer<typeof otpSchema>;

const Verify = () => {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;
    const otp = getValues("otp").split("");

    if (/^\d$/.test(value)) {
      otp[index] = value;
      setValue("otp", otp.join(""));
      if (index < 5) inputRefs.current[index + 1]?.focus();
    } else if (value === "" && index > 0) {
      otp[index] = "";
      setValue("otp", otp.join(""));
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit = (data: OtpFormValues) => {
    console.log("OTP Submitted:", data.otp);
    // Add API call or further logic here
    setIsShowDialog(true);
  };

  return (
    <div className="w-[52%] pt-[120px] pl-24 bg-[#FFFFFF] flex justify-center">
      <div className="max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-2">
          Verify
          <span className="font-semibold bg-gradient-to-l from-[#06B2E1] to-[#09CE88] text-transparent bg-clip-text ml-2">
            OTP
          </span>
        </h2>
        <p className="text-sm text-gray-600">
          Enter the 6-digit verification code that has been sent to your email
        </p>
        <p className="text-sm font-medium text-gray-800 text-start ">
          example@hello.com
        </p>
        <p className="text-[9px] font-medium text-gray-800 text-start mt-5 leading-[300%]">
          Enter OTP
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Controller
            name="otp"
            control={control}
            render={({ field }) => (
              <div className="flex justify-between gap-2 mb-4">
                {Array(6)
                  .fill(null)
                  .map((_, i) => (
                    <Input
                      key={i}
                      type="text"
                      maxLength={1}
                      className={`w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        field.value[i] && "bg-[#D3ECEC]"
                      }`}
                      value={field.value[i] || ""}
                      onChange={(e) => handleChange(e, i)}
                      placeholder="-"
                      ref={(el) => (inputRefs.current[i] = el!)}
                    />
                  ))}
              </div>
            )}
          />
          {errors.otp && (
            <p className="text-red-500 text-sm text-left">
              {errors.otp.message}
            </p>
          )}

          <Button
            type="submit"
            className="w-[300px] h-[50px] py-2 text-center text-white rounded-md bg-gradient-to-r from-cyan-400 to-green-500 hover:opacity-90 transition ml-[33%]"
          >
            Verify OTP
          </Button>
        </form>

        <p className="mt-10">
          Haven’t received your OTP yet?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Resend
          </a>
        </p>
      </div>
      {isShowDialog && (
        <Dialog open={isShowDialog} onOpenChange={setIsShowDialog}>
          <DialogContent className="sm:max-w-[425px] ">
            <div className="flex justify-center items-center py-4 ">
              <img src={Image} alt="" className="relative" />
              <img
                src={Vector}
                alt=""
                className="absolute flex justify-center items-center"
              />
              <img
                src={Vectorimg}
                alt=""
                className="absolute flex justify-center items-center"
              />
              <img
                src={Vectorimgr}
                alt=""
                className="absolute flex justify-center items-center"
              />
            </div>
            <h1 className="font-plusJakarta font-bold text-4xl text-center bg-gradient-to-r from-[#0DAFDC]  to-[#22E9A2] bg-clip-text text-transparent leading-[121%]">
              Congratulations
            </h1>
            <p className="text-center font-medium font-plusJakarta leading-[25px]">
              Congratulations! You've successfully created your account.
            </p>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Verify;
