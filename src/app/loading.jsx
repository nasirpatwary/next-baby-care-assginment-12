"use client"
import { RotatingLines } from 'react-loader-spinner'
const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-292px)]">
      <RotatingLines
      visible={true}
      height="96"
      width="96"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
     />
    </div>
  )
}

export default loading