import NextAuth, { Awaitable, NextAuthOptions } from 'next-auth'
import Naver from 'next-auth/providers/naver'
import Kakao from 'next-auth/providers/kakao'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'

import { auth } from '@remote/firebase'
import { checkUser } from '@remote/user'
import { redirect } from 'next/navigation'

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
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials || !credentials.email || !credentials.password)
          return null

        try {
          // Firebase 로그인
          const user = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password,
          )

          if (user) {
            return user
          }

          return null
        } catch (e) {
          // Firebase 에러
          if (e instanceof FirebaseError) {
            if (e.code === 'auth/invalid-credential') {
              alert('가입되지 않은 이메일이거나, 비밀번호가 틀렸습니다.')
              return null
            }
          }
        }
      },
    }),
  ],
  callbacks: {
    /* 실행 순서: signIn -> jwt -> session */
    // { user: { id, name, image, email } }
    async signIn(props) {
      // if (!email) {
      //   return false
      // }
      console.log('ryong', props)
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
    signIn: '/signin',
  },
}

export default NextAuth(authOptions)
