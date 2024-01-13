

import SearchBar from '@/components/SearchBar'
import '../globals.css'
import Header from '@/components/Header'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import tr from "@/messages/tr.json"
import en from "@/messages/en.json"

import Providers from '@/provider'




export default function RootLayout({ children, params:{locale} }) {
 
  let currentMessages = {};

  // Seçilen dile göre uygun dil mesajlarını belirleyin
  if (locale === 'tr') {
    currentMessages = tr;
  } else if (locale === 'en') {
    currentMessages = en;
  }
  return (
    <html lang={locale}>
      <body >
       
          <NextIntlClientProvider locale={locale} messages={currentMessages}>
            <Providers>
            {children}
            </Providers>
     
          </NextIntlClientProvider>
        
      </body>
    </html>
  )
}
