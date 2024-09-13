import Image from 'next/image'

import Layout from '@shared/Layout'
import Flex from '@shared/Flex'
import Spacing from '@shared/Spacing'

export default function SigninPage() {
  return (
    <Layout className="bg-white-comportable">
      <div className="w-full h-[70%] centered-content gap-20">
        <Image src="/icons/logo.png" alt="" width={80} height={80} />
        <p className="text-black text-2xl font-bold tracking-[5px]">BULKUP</p>
      </div>
      <Flex className="w-full gap-30" justify="center">
        <NaverLogo />
        <KakaoLogo />
        <GoogleLogo />
      </Flex>
      <Spacing size={30} />
      <button className="w-[60%] horizontal-center bg-primary rounded-10 px-12 py-12 text-white">
        이메일로 로그인
      </button>
      <Spacing size={20} />
      <p className="text-center text-primary">회원가입</p>
    </Layout>
  )
}

function KakaoLogo() {
  return (
    <div className="aspect-[1] w-50 bg-kakao rounded-[50%] centered-content shadow-md">
      <Image
        width={24}
        height={24}
        src="/icons/kakao.png"
        alt="카카오 아이콘"
      />
    </div>
  )
}

function NaverLogo() {
  return (
    <div className="aspect-[1] w-50 bg-naver rounded-[50%] centered-content shadow-md">
      <Image
        width={24}
        height={24}
        src="/icons/naver.png"
        alt="네이버 아이콘"
      />
    </div>
  )
}

function GoogleLogo() {
  return (
    <div className="aspect-[1] w-50 border border-gray-300 bg-white rounded-[50%] centered-content shadow-md">
      <Image width={24} height={24} src="/icons/google.png" alt="구글 아이콘" />
    </div>
  )
}
