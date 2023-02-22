import { AuthContext } from '@/context/AuthContext'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <AuthContext>
      <Toaster />
      <Component {...pageProps} />
    </AuthContext>
  )
}
