import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { checkUser } from '@remote/user'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  callbacks: {
    /* 실행 순서: signIn -> jwt -> session */
    // { user: { id, name, image, email } }
    async signIn(props) {
      console.log('ryong', props)
      // if (!email) {
      //   return false
      // }
      /** 여기에서 Firebase DB 계정 추가하는 작업 필요 */
      checkUser({ email: props.user.email ?? '' })
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
