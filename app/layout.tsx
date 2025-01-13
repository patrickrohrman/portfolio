import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Patrick Rohrman Portfolio',
  description: 'Patrick Rohrman, Web Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className='bg-[#AFF5F6] absolute top-[-6rem] -z-10 left-[19rem] h-[50rem] w-[50rem] rounded-full blur-[20rem] sm:w-[75rem]'></div>
        <div className='bg-[#f5faed] absolute top-[-1rem] -z-10 right-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
