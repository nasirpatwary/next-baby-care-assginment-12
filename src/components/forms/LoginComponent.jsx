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
const LoginComponent = () => {
  const params = useSearchParams()
  const callbackUrl = params.get("callbackUrl") || "/"
  const [eye, setEye] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const { control, handleSubmit} = useForm({
    defaultValues: {
      email: "",
      password:"",
    },
  });
  const onSubmit = async (data) => {
    try {
      setLoading(true)
      const {email, password} = data
      const {ok, status} = await signIn('credentials', { redirect: false, email, password })
      if (ok) {
        toast.success(`login status ${status} successfully!`)
        window.location.href = callbackUrl
      }else{
        toast.error(` unauthorized bad status ${status} code!`)
      }
    } catch (error) {
      console.log("faild login", error)
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="bg-base-200 rounded-xl shadow-lg">
      <div className="py-12 px-4 md:px-0">
      <div className="w-full max-w-md mx-auto border border-gray-400 p-5 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">SignIn Account</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormInput 
            name="email" 
            control={control} 
            label="Email" 
            type="email"
            placeholder="Enter your email"
            rules={{ 
              required: "Email is required",
            }}
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
                hasUpper: (value) =>
                  /[A-Z]/.test(value) ||
                  "At least one uppercase letter required",
                hasLower: (value) =>
                  /[a-z]/.test(value) ||
                  "At least one lowercase letter required",
                hasNumber: (value) =>
                  /\d/.test(value) || "At least one number required",
                hasSpecial: (value) =>
                  /[@$!%*?&]/.test(value) ||
                  "At least one special character (@$!%*?&) required",
                length: (value) =>
                  value.length >= 6 || "Minimum 6 characters required",
              },
              }}
            />
            <div className="absolute text-gray-700 right-4 top-9.5 cursor-pointer">
              {eye ? <IoMdEye onClick={() => setEye(!eye)} size={20} /> : <IoMdEyeOff onClick={() => setEye(!eye)} size={20} />}
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-full mt-4">
            {loading ? "Submitting" : "Login"}
          </button>
        </form>
        <p className="mt-4">Don't Have an account? <Link href={`/register?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="text-primary">Register</Link></p>
        <SocialLogin />
      </div>
      </div>
    </div>
  );
}

export default LoginComponent