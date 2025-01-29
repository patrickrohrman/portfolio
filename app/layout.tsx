import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Patrick Rohrman Portfolio',
  description: 'Patrick Rohrman, Web Developer.',
}

export default function RootLayout({children,}:{children: React.ReactNode})
{
  return (
    <html lang="en"
    className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36`} >
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-gray-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(39,211,245,0.4),rgba(255,255,255,0))]">
        </div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>       
      </body>
    </html>
  );
}