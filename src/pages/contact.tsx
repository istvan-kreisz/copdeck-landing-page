import Layout from '../components/shared/defaultLayout'
import { useRef, useState } from 'react'
import InputButton from '../components/shared/inputButton'
import Popup from '../components/shared/popup'

export default function Contact() {
	const emailField = useRef<HTMLInputElement>()
	const messageField = useRef<HTMLTextAreaElement>()

	const [popupConfig, setPopupConfig] = useState({
		title: '',
		message: '',
		type: 'regular',
		show: false,
	})

	const didSend = () => {
		setPopupConfig({
			title: 'Message Sent!',
			message: "Thanks for reaching out. We'll get back to you shortly!",
			type: 'regular',
			show: true,
		})
	}

	const sendFailed = (error) => {
		setPopupConfig({
			title: 'Ooops!',
			message: 'Something went wrong. Please try again.',
			type: 'error',
			show: true,
		})
	}

	const closePopup = () => {
		setPopupConfig((currentState) => {
			return { ...currentState, show: false }
		})
	}

	const sendClicked = (event) => {
		event.preventDefault()
		const email = emailField.current.value
		const message = messageField.current.value
		if (!email || !message) {
			return
		}

		fetch('/api/contact', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: email, message: message }),
		})
			.then(async (response) => {
				try {
					const data = await response.json()
					if (!data.error) {
						didSend()
					} else {
						sendFailed(data.error)
					}
				} catch (error) {
					sendFailed(error)
				}
			})
			.catch((err) => {
				sendFailed(err)
			})
	}

	return (
		<Layout>
			<section
				className="container-default grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 justify-center items-center my-12 lg:my-16"
				id="q&a"
			>
				<div className="flex flex-col justify-center items-center md:items-start">
					<h2 className="text-center md:text-left mb-4 text-3xl sm:text-4xl">
						We’d love to hear from you
					</h2>
					<p className="font-medium text-center md:text-left leading-relaxed tracking-wider font-regular">
						This is a big one and i consider it one of the most important things for a
						designer to get right.
					</p>
				</div>

				<form
					className="flex flex-col space-y-5 md:space-y-7  items-stretch md:items-end  sm:items-center"
					onSubmit={sendClicked}
					action=""
				>
					<input
						ref={emailField}
						placeholder="Your email"
						type="email"
						id="email"
						name="email"
						className="w-full h-12 bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						required
					/>
					<textarea
						ref={messageField}
						style={{ resize: 'none' }}
						id="message"
						placeholder="Your message"
						name="message"
						rows={5}
						className="w-full h-32 bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						required
					></textarea>
					<InputButton name="Send message"></InputButton>
				</form>
				<Popup
					title={popupConfig.title}
					message={popupConfig.message}
					open={popupConfig.show}
					close={closePopup}
					style={popupConfig.type}
				></Popup>
			</section>
		</Layout>
	)
}
