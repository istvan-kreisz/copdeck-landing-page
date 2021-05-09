import { useRef, useState } from 'react'
import InputButton from './inputButton'
import Popup from './popup'

const EmailSignupForm = () => {
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
					if (!data.error) {
						didSignUp()
					} else {
						signupFailed(data.error)
					}
				} catch (error) {
					signupFailed(error)
				}
			})
			.catch((err) => {
				signupFailed(err)
			})
	}

	return (
		<form
			onSubmit={sendClicked}
			className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5"
			action=""
		>
			<input
				className={`ml-0 w-80 bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
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
