import Image from 'next/image'
import Link from 'next/link'

import Layout from '@shared/Layout'
import Flex from '@shared/Flex'
import Spacing from '@shared/Spacing'
import SignOutButton from '@shared/SignOutButton'
import OAuthLoginButton from '@components/sigin/OAuthLoginButton'

export default async function SigninPage() {
  return (
    <Layout className="bg-white-comportable">
      <div className="w-full h-[70%] centered-content gap-20">
        <Image src="/icons/logo.png" alt="" width={80} height={80} priority />
        <SignOutButton>
          <p className="text-black text-2xl font-bold tracking-[5px]">BULKUP</p>
        </SignOutButton>
      </div>
      <Flex className="w-full gap-30" justify="center">
        <OAuthLoginButton provider="naver">
          <OAtuhLogo iconName="naver" className="bg-naver" />
        </OAuthLoginButton>
        <OAuthLoginButton provider="kakao">
          <OAtuhLogo iconName="kakao" className="bg-kakao" />
        </OAuthLoginButton>
        <OAuthLoginButton provider="google">
          <OAtuhLogo iconName="google" className="border-gray-300 bg-white" />
        </OAuthLoginButton>
      </Flex>
      <Spacing size={30} />
      <Link href="/signin/email">
        <button className="w-[60%] horizontal-center bg-primary rounded-10 px-12 py-12 text-white">
          이메일 로그인
        </button>
      </Link>
      <Spacing size={20} />
      <Link href="/register">
        <p className="text-center text-primary">회원가입</p>
      </Link>
    </Layout>
  )
}

function OAtuhLogo({
  iconName,
  className,
}: {
  iconName: 'kakao' | 'naver' | 'google'
  className?: string
}) {
  return (
    <div
      className={`aspect-[1] w-50 rounded-[50%] centered-content shadow-md ${className}`}>
      <Image
        width={24}
        height={24}
        src={`/icons/${iconName}.png`}
        alt={`${iconName} 아이콘`}
      />
    </div>
  )
}
