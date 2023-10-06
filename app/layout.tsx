import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { soraSans } from '@/common/style/fonts'
import { METADATA } from '@/common/constant/metadata'
import Layouts from '@/components/Layouts'
export const metadata: Metadata = {
  creator: METADATA.creator,
  description: METADATA.description,
  keywords: METADATA.keyword,
  authors: {
    name: METADATA.creator,
  },
  openGraph: {
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={soraSans.className}>
        <Providers>
          <Layouts>
            {children}
          </Layouts>
        </Providers>
      </body>
    </html>
  )
}
