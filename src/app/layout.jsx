"use client"
import './globals.css'
import Navbar from '@/Components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html>
      <body suppressHydrationWarning={true}>
        {/* <div> */}
          <Navbar />
          {children}
        {/* </div> */}
      </body>
    </html>
  )
}
