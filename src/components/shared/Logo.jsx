import Link from 'next/link'
import { Ambulance } from "lucide-react";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-xl">
        <Ambulance className='text-primary' />
        <p className="font-bold text-inherit"><span className="text-primary">Care</span>.xyz</p>
    </Link>
  )
}

export default Logo