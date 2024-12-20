import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <script src="https://alwingulla.com/88/tag.min.js" data-zone="97268" async data-cfasync="false"></script>
      <Script src="/ss.js" data-cfasync="false" type="text/javascript" />
      <Script src="/banner.js" data-cfasync="false" type="text/javascript" />
    </html>
  )
}
