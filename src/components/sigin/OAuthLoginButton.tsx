'use client'

import { ReactNode } from 'react'
import { getProviders, signIn } from 'next-auth/react'
import { useQuery } from 'react-query'

import TextBallon from '@shared/TextBallon'
import { LOCALSTORAGE } from '@constants/localStorage'

export default function OAuthLoginButton({
  provider,
  children,
}: {
  provider: 'naver' | 'kakao' | 'google'
  children: ReactNode
}) {
  const { data: providers } = useQuery({
    queryKey: ['providers'],
    queryFn: getProviders,
  })

  if (providers == null) {
    return children
  }

  if (providers[provider] == null) {
    return children
  }

  const savedProvider = localStorage.getItem(LOCALSTORAGE.OAUTH_PROVIDER)

  return (
    <button
      className="relative"
      onClick={() => {
        if (savedProvider !== provider) {
          localStorage.setItem(LOCALSTORAGE.OAUTH_PROVIDER, provider)
        }

        signIn(providers[provider].id, {
          callbackUrl: providers[provider].callbackUrl,
        })
      }}>
      {children}
      {savedProvider === provider && (
        <div
          className="absolute min-w-[300px] -top-50 -left-20 cursor-default"
          onClick={e => e.stopPropagation()}>
          <TextBallon>최근 로그인</TextBallon>
        </div>
      )}
    </button>
  )
}
