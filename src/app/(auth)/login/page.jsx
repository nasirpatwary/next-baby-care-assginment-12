"use client"
import dynamic from 'next/dynamic';
const LoginComponent = dynamic(() => import('@/components/forms/LoginComponent'), { 
  ssr: false 
});
const LoginPage = () => {
  return <LoginComponent />
}

export default LoginPage