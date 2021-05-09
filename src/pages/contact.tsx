import Layout from '../components/shared/layout'
import Button from '../components/shared/button'

export default function Contact() {
	const sendMessageClicked = () => {
		console.log('clicked')
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
					action="submit"
				>
					<input
						placeholder="Your email"
						type="email"
						id="email"
						name="email"
						className="w-full h-12 bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
					<textarea
						id="message"
						placeholder="Your message"
						name="message"
						rows={5}
						className="w-full h-32 bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					></textarea>

					<Button name="Send message" clicked={sendMessageClicked}></Button>
				</form>
			</section>
		</Layout>
	)
}
