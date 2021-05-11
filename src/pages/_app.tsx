import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/remote-config'
import FirebaseContext from '../context/firebaseContext'
import ConfigContext from '../context/configContext'

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
	const [config, setRemoteConfig] = useState(null)

	useEffect(() => {
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig)
		}
		const remoteConfig = firebase.remoteConfig()

		remoteConfig.settings = {
			fetchTimeoutMillis: 60000,
			minimumFetchIntervalMillis: process.env.NODE_ENV === 'development' ? 1 : 3600000,
		}

		remoteConfig.defaultConfig = {
			hero_title: 'Welcome',
			hero_subtitle: 'this is some text',
		}
		remoteConfig
			.fetchAndActivate()
			.then((activated) => {
				if (process.env.NODE_ENV === 'development') {
					console.log('fetched config')
				}
				if (!activated) console.log('not activated')
				return remoteConfig.getAll()
			})
			.then((remoteFlags) => {
				setRemoteConfig(remoteFlags)
			})
			.catch((err) => {
				if (process.env.NODE_ENV === 'development') {
					console.log('fetching config failed')
					console.log(err)
				}
				setRemoteConfig(remoteConfig.defaultConfig)
			})

		firebase.analytics()
		setFirebaseApp(firebase)
	}, [])
	return (
		<ConfigContext.Provider value={config}>
			<FirebaseContext.Provider value={firebaseApp}>
				<Component {...pageProps} />
			</FirebaseContext.Provider>
		</ConfigContext.Provider>
	)
}

export default App
