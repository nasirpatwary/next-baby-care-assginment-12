"use client"
import LoadingComponent from '@/components/shared/LoadingComponent';
import dynamic from 'next/dynamic';
const LoginComponent = dynamic(() => import('@/components/forms/LoginComponent'), { 
  ssr: false,
  loading: () => <LoadingComponent />
});
const LoginPage = () => {
  return <LoginComponent />
}

export default LoginPage