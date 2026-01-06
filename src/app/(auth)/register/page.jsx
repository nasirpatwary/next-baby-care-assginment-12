"use client"
import LoadingComponent from '@/components/shared/LoadingComponent';
import dynamic from 'next/dynamic';
const RegisterComponent = dynamic(() => import('@/components/forms/RegisterComponent'), { 
  ssr: false,
  loading: () => <LoadingComponent /> 
});
const RegisterPage = () => {
  return <RegisterComponent />
}

export default RegisterPage