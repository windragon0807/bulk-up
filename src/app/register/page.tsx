import Link from 'next/link'

import Layout from '@shared/Layout'
import Spacing from '@shared/Spacing'
import CloseIcon from '@icons/CloseIcon'
import Register from '@components/register/Register'

export default function RegisterPage() {
  return (
    <Layout className="bg-white-comportable">
      <header className="relative h-60 w-full flex justify-center items-center">
        <Link
          href="/signin"
          className="absolute right-20 top-[50%] -translate-y-1/2">
          <CloseIcon />
        </Link>
        <p className="text-base font-semibold">회원가입</p>
      </header>
      <Spacing size={30} />
      <Register />
    </Layout>
  )
}
