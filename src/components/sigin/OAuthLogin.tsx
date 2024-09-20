'use client'

import { ReactNode } from 'react'
import { ClientSafeProvider, signIn } from 'next-auth/react'

export default function OAuthLogin({
  provider,
  children,
}: {
  provider: ClientSafeProvider
  children: ReactNode
}) {
  return (
    <button
      onClick={() =>
        signIn(provider.id, { callbackUrl: provider.callbackUrl })
      }>
      {children}
    </button>
  )
}
