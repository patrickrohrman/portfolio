import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/footer'

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
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36`} >
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-gray-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(39,211,245,0.4),rgba(255,255,255,0))]"></div>
            
        {/* <div className='bg-[#6be5e7] absolute top-[-6rem] -z-10 right-[1rem] h-[50rem] w-[35rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#f5fceb] absolute top-[-1rem] -z-10 right-[-35rem] h-[40rem] w-[35rem] rounded-full blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div> */}
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
         


        </ActiveSectionContextProvider>
       
      </body>
    </html>
  );
}
