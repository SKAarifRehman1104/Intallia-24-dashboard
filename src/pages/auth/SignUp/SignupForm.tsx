import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "@/assets/indiaflag.svg";

const signupSchema = z
  .object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    contactNumber: z
      .string()
      .regex(/^\d{10}$/, "Contact Number must be 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

const SignupForm = ({
  onSubmit,
}: {
  onSubmit: (data: SignupFormValues) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  return (
    <div className="w-full md:w-1/2 flex justify-center bg-[#FFFFFF] py-[3%] h-[89vh] overflow-y-scroll ">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold mb-1">Sign Up</h2>
        <p className="text-gray-500 mb-2 text-sm">
          Hello! Let’s get started and sharpen your skills with some
          expert-level quizzes!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div>
            <Label htmlFor="fullName">
              Full Name<span className="text-red-500 text-sm">*</span>
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter Name"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">
              Email<span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <Label htmlFor="contactNumber">
              Contact Number<span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <span className="mr-2 flex gap-2">
                <img src={Image} alt="India Flag" /> +91
              </span>
              <Input
                id="contactNumber"
                type="text"
                placeholder="1234567890"
                className="flex-1 border-none focus:ring-0"
                {...register("contactNumber")}
              />
            </div>
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">
                {errors.contactNumber.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password">
              Password<span className="text-red-500">*</span>
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="*******"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <Label htmlFor="confirmPassword">
              Confirm Password<span className="text-red-500">*</span>
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="*******"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Sign Up Button */}
          <div className="flex justify-center md:justify-end items-center">
            <Button
              type="submit"
              className="w-[300px] h-[50px] py-2 text-center text-white rounded-md bg-gradient-to-r from-cyan-400 to-green-500 hover:opacity-90 transition "
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
