'use client'

import { ReactNode } from 'react'
import { useSession, signOut } from 'next-auth/react'

export default function SignOutButton({ children }: { children: ReactNode }) {
  const { data: session } = useSession()
  console.log('ryong', session)

  if (session == null) {
    return children
  }

  return (
    <button style={{ border: '1px solid gray' }} onClick={() => signOut()}>
      {children}
    </button>
  )
}
