import { Inter } from 'next/font/google'
import './globals.css'

// import 'react-loading-skeleton/dist/skeleton.css'
// import 'simplebar-react/dist/simplebar.min.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='light'>
      <Providers>
        <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}>
          <Navbar/>
          {children}
        </body>
      </Providers>
    </html>
  )
}