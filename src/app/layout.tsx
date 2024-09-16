import type { Metadata } from 'next'

import '@styles/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="font-pretendard">{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    template: '%s | Bulk-Up',
    default: 'Bulk-Up',
  },
  description: "Bulk-Up, Let's bulk up together!",
  other: {
    /* Allow web app to be run in full-screen mode - iOS. */
    'apple-mobile-web-app-capable': 'yes',
    /* Allow web app to be run in full-screen mode - Android. */
    'mobile-web-app-capable': 'yes',
  },
}
