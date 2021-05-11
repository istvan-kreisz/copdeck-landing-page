import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/analytics'
import FirebaseContext from '../context/firebaseContext'

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

function App({ Component, pageProps }: AppProps) {
	const [firebaseApp, setFirebaseApp] = useState(null)

	useEffect(() => {
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig)
		}
		firebase.analytics()

		setFirebaseApp(firebase)
	}, [])
	return (
		<FirebaseContext.Provider value={firebaseApp}>
			<Component {...pageProps} />
		</FirebaseContext.Provider>
	)
}

export default App
