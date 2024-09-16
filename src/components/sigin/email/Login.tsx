'use client'

import { useState } from 'react'
import Link from 'next/link'

import Spacing from '@shared/Spacing'
import PasswordInput from '@shared/PasswordInput'
import LabeledInput from '@shared/LabeledInput'
import EmailInput from '@shared/EmailInput'
import FullSizeButton from '@shared/FullSizeButton'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <section className="w-full flex flex-col items-center px-40">
      <LabeledInput label="이메일">
        <EmailInput
          value={email}
          onChange={setEmail}
          placeholder="이메일을 입력해주세요"
        />
      </LabeledInput>
      <Spacing size={30} />

      <LabeledInput label="비밀번호">
        <PasswordInput
          value={password}
          onChange={setPassword}
          placeholder="4자리 이상 비밀번호를 입력해주세요"
        />
      </LabeledInput>
      <Spacing size={40} />

      <FullSizeButton>이메일 로그인</FullSizeButton>
      <Spacing size={20} />

      <Link href="/register">
        <p className="text-center text-primary">회원가입</p>
      </Link>
    </section>
  )
}
