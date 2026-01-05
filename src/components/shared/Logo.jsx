import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-xl">
        <Image width={20} height={20} src="/logo.png" alt='brand logo' />
        <p className="font-bold text-inherit"><span className="text-primary">Care</span>.xyz</p>
    </Link>
  )
}

export default Logo