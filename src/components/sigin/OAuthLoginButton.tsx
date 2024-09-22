'use client'

import { ReactNode } from 'react'
import { getProviders, signIn } from 'next-auth/react'
import { useQuery } from 'react-query'

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

  return (
    <button
      onClick={() =>
        signIn(providers[provider].id, {
          callbackUrl: providers[provider].callbackUrl,
        })
      }>
      {children}
    </button>
  )
}
