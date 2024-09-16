import Link from 'next/link'

import Layout from '@shared/Layout'
import Spacing from '@shared/Spacing'
import ArrowLeftIcon from '@icons/ArrowLeftIcon'
import Login from '@components/sigin/email/Login'

export default function SigninEmailPage() {
  return (
    <Layout className="bg-white-comportable">
      <header className="relative h-60 w-full flex justify-center items-center">
        <Link
          href="/signin"
          className="absolute left-20 top-[50%] -translate-y-1/2">
          <ArrowLeftIcon />
        </Link>
        <p className="text-base font-semibold">이메일 로그인</p>
      </header>
      <Spacing size={30} />
      <Login />
    </Layout>
  )
}
