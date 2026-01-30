"use client";
import FormInput from "@/components/forms/FormInput";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { signIn } from "next-auth/react"
import SocialLogin from "@/components/shared/SocialLogin";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import Lottie from "lottie-react";
import login from "../../assets/lottie2.json"
import Container from "../shared/Container";
const LoginComponent = () => {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";
  const [eye, setEye] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const { email, password } = data;
      const { ok } = await signIn('credentials', { redirect: false, email, password });
      if (ok) {
        toast.success(`Login successful!`);
        window.location.href = callbackUrl;
      } else {
        toast.error(`Unauthorized! Please check your credentials.`);
      }
    } catch (error) {
      console.log("failed login", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="transition-colors duration-300">
      <div className="py-12 space-y-8 md:space-y-12 lg:space-y-0 lg:flex justify-around">
        <div className="w-full max-w-md mx-auto border border-gray-400 dark:border-slate-700 p-5 rounded-lg bg-white dark:bg-slate-800 transition-colors">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary dark:text-primary">SignIn Account</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput 
              name="email" 
              control={control} 
              label="Email" 
              type="email"
              placeholder="Enter your email"
              rules={{ required: "Email is required" }}
            />
            
            <div className="relative">
              <FormInput 
                name="password" 
                control={control} 
                label="Password" 
                type={eye ? "text" : "password"}
                placeholder="Enter your password"
                rules={{
                  required: "Password is required",
                  validate: {
                    hasUpper: (value) => /[A-Z]/.test(value) || "At least one uppercase letter",
                    length: (value) => value.length >= 6 || "Minimum 6 characters",
                  },
                }}
              />
              <div className="absolute text-gray-700 dark:text-gray-300 right-4 top-10 cursor-pointer">
                {eye ? (
                  <IoMdEye onClick={() => setEye(!eye)} size={20} />
                ) : (
                  <IoMdEyeOff onClick={() => setEye(!eye)} size={20} />
                )}
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4 transition-all">
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </form>

          <p className="mt-4 dark:text-gray-400">
            Don't Have an account?{" "}
            <Link 
              href={`/register?callbackUrl=${encodeURIComponent(callbackUrl)}`} 
              className="text-primary dark:text-blue-400 hover:underline"
            >
              Register
            </Link>
          </p>
          
          <div className="divider dark:before:bg-slate-700 dark:after:bg-slate-700">OR</div>
          
          <SocialLogin />
        </div>
         <Lottie className="w-full max-w-md mx-auto" animationData={login} loop={true} />
      </div>
    </Container>
  );
};

export default LoginComponent;