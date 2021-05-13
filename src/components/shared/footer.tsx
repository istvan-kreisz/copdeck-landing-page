import SocialIcons from './socialIcons'
import Link from 'next/link'

const Footer = (props) => {
	return (
		<footer className="container-default mt-auto">
			<div className="pb-4 pt-10 flex justify-between mx-auto items-center">
				<Link href="/">
					<a aria-label="Home" className="flex items-center">
						<span className="sr-only">Icon</span>
						<img alt="Logo" className="sm:w-12 w-10" src="/images/logo.svg" />
						<p className="ml-3 hidden sm:block font-semibold text-base sm:text-lg text-gray-800">
							CopDeck
						</p>
					</a>
				</Link>
				<SocialIcons id="footer"></SocialIcons>
			</div>

			<hr className="container-default border-blue-300 border-t-3" />
			<p className="text-gray-500 py-6 mx-auto text-xs leading-4 sm:text-sm text-center">
				Copyright © 2021 CopDeck.
			</p>
		</footer>
	)
}

export default Footer
