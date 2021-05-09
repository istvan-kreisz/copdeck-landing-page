import { useRef, useState } from 'react'
import InputButton from './inputButton'

const EmailSignupForm = () => {
	const emailField = useRef<HTMLInputElement>()

	const sendClicked = (event) => {
		event.preventDefault()
		const email = emailField.current.value
		if (!email) {
			return
		}

		console.log('asdsdsdsds')

		fetch('/api/contact', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: email, message: 'yo' }),
		})
			.then(async (response) => {
				try {
					console.log(response)
					const data = await response.json()
					console.log(data)
					if (!data.error) {
						console.log('great success')
					} else {
						// failed
					}
				} catch (error) {
					// failed
				}
			})
			.catch((err) => {
				// failed
			})
	}

	return (
		<form
			onSubmit={sendClicked}
			className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5"
			action=""
		>
			<label htmlFor="email"></label>
			<input
				className={`w-80 bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
				ref={emailField}
				placeholder="Type your email addess here"
				type="email"
				id="email"
				required
			/>
			<InputButton name="Sign me up!"></InputButton>
		</form>
	)
}

export default EmailSignupForm
