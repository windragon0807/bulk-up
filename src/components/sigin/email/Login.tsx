'use client'

import { useState, MouseEvent, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

import Spacing from '@shared/Spacing'
import PasswordInput from '@shared/PasswordInput'
import LabeledInput from '@shared/LabeledInput'
import EmailInput from '@shared/EmailInput'
import FullSizeButton from '@shared/FullSizeButton'

export default function Login() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (email === '') {
        alert('이메일을 입력해주세요.')
        return
      }

      if (password === '') {
        alert('비밀번호를 입력해주세요.')
        return
      }

      if (password.length < 4) {
        alert('비밀번호는 4자리 이상이어야 합니다.')
        return
      }

      const status = await signIn('credentials', {
        email,
        password,
        callbackUrl: '/',
        redirect: false,
      })

      if (status == null) return

      // 로그인 성공
      if (status.ok) {
        router.push('/')
        return
      }

      // 로그인 실패
      alert('이메일 또는 비밀번호가 올바르지 않습니다.')
    },
    [email, password], // eslint-disable-line react-hooks/exhaustive-deps
  )

  return (
    <form className="w-full flex flex-col items-center px-40">
      <LabeledInput label="이메일">
        <EmailInput
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
          autoComplete="email"
        />
      </LabeledInput>
      <Spacing size={30} />

      <LabeledInput label="비밀번호">
        <PasswordInput
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="4자리 이상 비밀번호를 입력해주세요"
          autoComplete="current-password"
        />
      </LabeledInput>
      <Spacing size={40} />

      <FullSizeButton onClick={handleSubmit}>이메일 로그인</FullSizeButton>
      <Spacing size={20} />

      <Link href="/register">
        <p className="text-center text-primary">회원가입</p>
      </Link>
    </form>
  )
}
