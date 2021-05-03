import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default App
