"use client"
import dynamic from 'next/dynamic';
const RegisterComponent = dynamic(() => import('@/components/forms/RegisterComponent'), { 
  ssr: false 
});
const RegisterPage = () => {
  return <RegisterComponent />
}

export default RegisterPage