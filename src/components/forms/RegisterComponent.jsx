"use client";
import FormInput from "@/components/forms/FormInput";
import SocialLogin from "@/components/shared/SocialLogin";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const RegisterComponent = () => {
  const [eye, setEye] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const { control, handleSubmit,  } = useForm({
    defaultValues: {
      image: "",
      name: "",
      email: "",
      password:"",
      nidno: "",
      contact: ""
    }
  });
  const onSubmit = async (data) => {
    try { 
        setLoading(true)
        console.log("react hook form", data)
    } catch (error) {
        
    }finally{
     setLoading(false)
    }
  };
  return (
    <div className="bg-base-200 rounded-xl shadow-lg">
    <div className="py-12 px-4 md:px-0">
      <div className="w-full max-w-md mx-auto border border-gray-400 p-5 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">Create Account</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          name="image" 
          control={control} 
          label="Photo" 
          placeholder="Photo URL.."
          rules={{ required: "Photo url is required" }}
        />
        <FormInput
          name="name" 
          control={control} 
          label="Name" 
          placeholder="Enter your name"
          rules={{ required: "Name is required" }}
        />

        <FormInput 
          name="email" 
          control={control} 
          label="Email" 
          type="email"
          placeholder="Enter your email"
          rules={{ 
            required: "Email is required",
            pattern: { 
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/, 
            message: "Invalid email! Must be like: example@email.com" 
            },
            validate: {
            isLowercase: (value) => 
            value === value.toLowerCase() || "Email must be in all lowercase characters"
          }
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
                value.length >= 8 || "Minimum 8 characters required",
            },
            }}
          />
          <div className="absolute text-gray-700 right-4 top-9.5 cursor-pointer">
            {eye ? <IoMdEye onClick={() => setEye(!eye)} size={20} /> : <IoMdEyeOff onClick={() => setEye(!eye)} size={20} />}
          </div>
        </div>
          <FormInput
          name="nidno" 
          control={control} 
          label="NID No" 
          rules={{ required: "NID No required" }}
          placeholder="Enter NID No"
        />
          <FormInput
          name="contact" 
          control={control} 
          label="Contact" 
          rules={{ required: "Contact No required" }}
          placeholder="Enter Contact No"
        />
        <button type="submit" className="btn btn-primary w-full mt-4">
          {loading ? "Submitting" : "Register"}
        </button>
      </form>
      <p className="mt-4">Alrady Have an account? <Link href={"/login"} className="text-primary">Login</Link></p>
      <SocialLogin />
    </div>
    </div>
    </div>
  );
}

export default RegisterComponent