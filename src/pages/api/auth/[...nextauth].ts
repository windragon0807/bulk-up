import NextAuth, { NextAuthOptions } from 'next-auth'
import Naver from 'next-auth/providers/naver'
import Kakao from 'next-auth/providers/kakao'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'

import { auth } from '@remote/firebase'
import { addUserIfNotExist } from '@remote/user'

export const authOptions: NextAuthOptions = {
  providers: [
    Naver({
      clientId: process.env.NAVER_OAUTH_ID || '',
      clientSecret: process.env.NAVER_OAUTH_SECRET || '',
    }),
    Kakao({
      clientId: process.env.KAKAO_OAUTH_ID || '',
      clientSecret: process.env.KAKAO_OAUTH_SECRET || '',
    }),
    Google({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
    Credentials({
      name: 'firebase-email',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null

        try {
          /* Firebase 이메일, 패스워드 로그인 */
          const user = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password,
          )

          if (user) {
            return {
              id: user.user.uid,
              name: user.user.displayName,
              email: user.user.email,
              image: user.user.photoURL,
            }
          }

          return null
        } catch (error) {
          if (error instanceof FirebaseError) {
            if (error.code === 'auth/invalid-credential') {
              console.log(error)
            }
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    /* 라이프 사이클: signIn -> jwt -> session */
    async signIn(props) {
      console.log('SignIn Info', props)

      await addUserIfNotExist({
        provider: props.account?.provider ?? '',
        uid: props.user.id,
        email: props.user.email ?? '',
        displayName: props.user.name ?? '',
      })

      return true
    },
  },
  pages: {
    signIn: '/',
  },
}

export default NextAuth(authOptions)
