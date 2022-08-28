import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'

const App = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <Component {...pageProps} />
  </NextUIProvider>
)


export default App