import { useRef, useState } from 'react'
import InputButton from './inputButton'
import Popup from './popup'
import { useContext } from 'react'
import FirebaseContext from '../../context/firebaseContext'

const EmailSignupForm = ({ id, configId = '' }) => {
	const firebase = useContext(FirebaseContext)

	const [openSignupPopupConfig, setOpenSignupPopupConfig] = useState({
		title: '',
		message: '',
		type: 'regular',
		show: false,
	})

	const didSignUp = () => {
		setOpenSignupPopupConfig({
			title: 'Signup successful!',
			message:
				"Thanks for signing up and welcome to the CopDeck community! You'll receive your first email shortly.",
			type: 'regular',
			show: true,
		})
	}

	const signupFailed = (error) => {
		setOpenSignupPopupConfig({
			title: 'Ooops!',
			message: 'Something went wrong. Please try again.',
			type: 'error',
			show: true,
		})
	}

	const closePopup = () => {
		setOpenSignupPopupConfig((currentState) => {
			return { ...currentState, show: false }
		})
	}

	const emailField = useRef<HTMLInputElement>()

	const sendClicked = (event) => {
		event.preventDefault()
		const email = emailField.current.value
		if (!email) {
			return
		}
		firebase?.analytics().logEvent('signup_clicked', {
			id: id,
			configId: configId,
		})

		fetch('/api/signup', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: email }),
		})
			.then(async (response) => {
				try {
					const data = await response.json()
					if (!data?.error) {
						firebase?.analytics().logEvent('signup_successful', {
							id: id,
							configId: configId,
						})
						didSignUp()
					} else {
						firebase?.analytics().logEvent('signup_failed', {
							id: id,
							error: data.error?.message ?? 'Unknown Error Type1',
						})
						signupFailed(data?.error)
					}
				} catch (error) {
					firebase?.analytics().logEvent('signup_failed', {
						id: id,
						error: error?.message ?? 'Unknown Error Type2',
					})
					signupFailed(error)
				}
			})
			.catch((err) => {
				firebase?.analytics().logEvent('signup_failed', {
					id: id,
					error: err?.message ?? 'Unknown Error Type3',
				})
				signupFailed(err)
			})
	}

	return (
		<form
			onSubmit={sendClicked}
			className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-5 lg:justify-center"
			action=""
		>
			<input
				className={`ml-0 w-full h-12 lg:h-auto sm:w-80 bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 sm:px-3 leading-8 transition-colors duration-200 ease-in-out`}
				ref={emailField}
				placeholder="Type your email addess here"
				type="email"
				id="email"
				required
			/>
			<InputButton name="Sign me up!"></InputButton>
			<Popup
				title={openSignupPopupConfig.title}
				message={openSignupPopupConfig.message}
				open={openSignupPopupConfig.show}
				close={closePopup}
				style={openSignupPopupConfig.type}
			></Popup>
		</form>
	)
}

export default EmailSignupForm
