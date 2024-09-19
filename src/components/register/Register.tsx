'use client'

import { ChangeEvent, useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'

import { auth, store } from '@remote/firebase'
import Spacing from '@shared/Spacing'
import PasswordInput from '@shared/PasswordInput'
import LabeledInput from '@shared/LabeledInput'
import EmailInput from '@shared/EmailInput'
import FullSizeButton from '@shared/FullSizeButton'
import { COLLECTIONS } from '@/constants'

export default function Register() {
  const navigate = useRouter()

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const handleSubmit = async () => {
    if (formValues.password !== formValues.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    if (formValues.password.length < 4) {
      alert('비밀번호는 4자리 이상이어야 합니다.')
      return
    }

    const { user } = await createUserWithEmailAndPassword(
      auth,
      formValues.email,
      formValues.password,
    )

    await updateProfile(user, {
      displayName: formValues.name,
    })

    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: formValues.name,
    }

    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)

    navigate.push('/')
  }

  return (
    <section className="w-full flex flex-col items-center px-40">
      <LabeledInput label="이름">
        <EmailInput
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="이름을 입력해주세요"
        />
      </LabeledInput>
      <Spacing size={30} />

      <LabeledInput label="이메일">
        <EmailInput
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="이메일을 입력해주세요"
        />
      </LabeledInput>
      <Spacing size={30} />

      <LabeledInput label="비밀번호">
        <PasswordInput
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="4자리 이상 비밀번호를 입력해주세요"
        />
      </LabeledInput>
      <Spacing size={30} />

      <LabeledInput label="비밀번호 확인">
        <PasswordInput
          name="passwordConfirm"
          value={formValues.passwordConfirm}
          onChange={handleChange}
          placeholder="4자리 이상 비밀번호를 입력해주세요"
        />
      </LabeledInput>
      <Spacing size={40} />

      <FullSizeButton onClick={handleSubmit}>회원가입</FullSizeButton>
    </section>
  )
}
