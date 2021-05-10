import SocialIcons from './socialIcons'
import Link from 'next/link'

const Footer = (props) => {
	return (
		<footer className="container-default mt-auto">
			<div className="pb-4 pt-10 flex justify-between mx-auto items-center">
				<Link href="/">
					<a aria-label="Home" className="flex items-center">
						<span className="sr-only">Icon</span>
						<img alt="Logo" className="sm:w-12 w-10" src="/images/logo4.svg" />
						<p className="ml-3 font-semibold text-base sm:text-lg">CopDeck</p>
					</a>
				</Link>
				<SocialIcons></SocialIcons>
			</div>

			<hr className="container-default border-blue-300 border-t-3" />
			<p className="text-gray-500 py-6 mx-auto text-sm text-center">
				Copyright © 2021 CopDeck. All Rights Reserved
			</p>
		</footer>
	)
}

export default Footer
