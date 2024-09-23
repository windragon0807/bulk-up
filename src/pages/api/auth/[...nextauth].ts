import NextAuth, { NextAuthOptions } from 'next-auth'
import Naver from 'next-auth/providers/naver'
import Kakao from 'next-auth/providers/kakao'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'

import { auth } from '@remote/firebase'
import { checkUser } from '@remote/user'

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
    // { user: { id, name, image, email } }
    async signIn(props) {
      // if (!email) {
      //   return false
      // }
      console.log('ryong2', props)
      /** 여기에서 Firebase DB 계정 추가하는 작업 필요 */
      // checkUser({ email: props.user.email ?? '' })
      return true
    },
    // https://next-auth.js.org/configuration/callbacks#session-callback
    // async session({ session, token }) {
    //   /**
    //    * console.log(session);
    //    * {
    //    *   user: {
    //    *     name: '이름',
    //    *     email: '이메일',
    //    *     image: '이미지',
    //    *   },
    //    *   expires: '만료일',
    //    * }
    //    */
    //   const user = session?.user;
    //   if (user) {
    //     // 세션 정보 커스텀 : https://next-auth.js.org/getting-started/typescript
    //     session.user = {
    //       ...user,
    //       username: user.email?.split('@')[0] || '',
    //       id: token.id as string,
    //     };
    //   }
    //   return session;
    // },
    // // https://next-auth.js.org/configuration/callbacks#jwt-callback
    // async jwt({ token, user }) {
    //   if (user) {
    //     token.id = user.id;
    //   }
    //   return token;
    // },
  },
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/',
  },
}

export default NextAuth(authOptions)
