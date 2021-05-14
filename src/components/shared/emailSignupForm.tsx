import { useState } from 'react'
import InputButton from './inputButton'
import Popup from './popup'
import { useContext, useEffect } from 'react'
import FirebaseContext from '../../context/firebaseContext'

const EmailSignupForm = ({ id, configId = '' }) => {
	const firebase = useContext(FirebaseContext)

	useEffect(() => {
		if (typeof window !== 'undefined' && !(window as any).didSignUpForNewsletter) {
			window['didSignUpForNewsletter'] = () => {
				didSignUp()
			}
		}
		return () => {}
	}, [])

	const [openSignupPopupConfig, setOpenSignupPopupConfig] = useState({
		title: '',
		message: '',
		type: 'regular',
		show: false,
	})

	const didSignUp = () => {
		firebase?.analytics().logEvent('signup_successful', {
			id: id,
			configId: configId,
		})

		setOpenSignupPopupConfig({
			title: 'Signup successful!',
			message:
				"Thanks for signing up and welcome to the CopDeck community! You'll receive your first email shortly.",
			type: 'regular',
			show: true,
		})
	}

	const closePopup = () => {
		setOpenSignupPopupConfig((currentState) => {
			return { ...currentState, show: false }
		})
	}

	const sendClicked = (event) => {
		event.preventDefault()
		firebase?.analytics().logEvent('signup_clicked', {
			id: id,
			configId: configId,
		})
	}

	return (
		<div
			id="mlb2-4083562"
			className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-4083562"
		>
			<form
				onSubmit={sendClicked}
				className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-5 lg:justify-center"
				action="https://static.mailerlite.com/webforms/submit/b0g2j1"
				data-code="b0g2j1"
				method="post"
				target="_blank"
			>
				<input
					id="email"
					className={`form-control ml-0 w-full h-12 lg:h-auto sm:w-80 bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 sm:px-3 leading-8 transition-colors duration-200 ease-in-out`}
					aria-label="email"
					aria-required="true"
					type="email"
					data-inputmask=""
					name="fields[email]"
					placeholder="Type your email addess here"
					autoComplete="email"
					required
				/>
				<input type="hidden" name="anticsrf" value="true" />
				<input type="hidden" name="ml-submit" value="1" className="hidden" />
				<InputButton name="Sign me up!"></InputButton>
				<Popup
					title={openSignupPopupConfig.title}
					message={openSignupPopupConfig.message}
					open={openSignupPopupConfig.show}
					close={closePopup}
					style={openSignupPopupConfig.type}
				></Popup>
			</form>
		</div>
	)
}

export default EmailSignupForm
