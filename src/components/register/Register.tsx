'use client'

import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { auth, store } from '@remote/firebase'
import Spacing from '@shared/Spacing'
import PasswordInput from '@shared/PasswordInput'
import LabeledInput from '@shared/LabeledInput'
import EmailInput from '@shared/EmailInput'
import FullSizeButton from '@shared/FullSizeButton'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleSubmit = async () => {
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    if (password.length < 4) {
      alert('비밀번호는 4자리 이상이어야 합니다.')
      return
    }

    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    // await updateProfile(user, {
    //   displayName: email,
    // })

    // const newUser = {
    //   uid: user.uid,
    //   email: user.email,
    //   displayName: name,
    // }

    // await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)

    // navigate('/')
  }

  return (
    <section className="w-full flex flex-col items-center px-40">
      <LabeledInput label="이름">
        <EmailInput
          value={name}
          onChange={setName}
          placeholder="이름을 입력해주세요"
        />
      </LabeledInput>
      <Spacing size={30} />

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
      <Spacing size={30} />

      <LabeledInput label="비밀번호 확인">
        <PasswordInput
          value={passwordConfirm}
          onChange={setPasswordConfirm}
          placeholder="4자리 이상 비밀번호를 입력해주세요"
        />
      </LabeledInput>
      <Spacing size={40} />

      <FullSizeButton onClick={handleSubmit}>회원가입</FullSizeButton>
    </section>
  )
}
