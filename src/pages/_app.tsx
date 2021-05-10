import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/analytics'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		firebase.analytics()
	}, [])
	return <Component {...pageProps} />
}

export default App
