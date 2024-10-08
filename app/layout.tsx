import "./css/style.css"

import { Inter } from "next/font/google"
import localFont from "next/font/local"
import Theme from "./theme-provider"
import SideNavigation from "@/components/ui/side-navigation"
import Header from "@/components/ui/header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const aspekta = localFont({
  src: [
    {
      path: "../public/fonts/Aspekta-500.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Aspekta-650.woff2",
      weight: "650",
    },
  ],
  variable: "--font-aspekta",
  display: "swap",
})

export const metadata = {
  title: "SSF Space",
  description: "SSF Space",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body className={`${inter.variable} ${aspekta.variable} font-inter antialiased bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-200 tracking-tight`}>
        <Theme>
          <div className="max-w-7xl mx-auto">
            <div className="min-h-screen flex">
              <SideNavigation />

              {/* Main content */}
              <main className="grow overflow-hidden px-6">
                <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">
                  <Header />
                  {children}
                </div>
              </main>
            </div>
          </div>
        </Theme>
      </body>
    </html>
  )
}
