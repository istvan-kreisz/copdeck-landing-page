import SocialIcons from './socialIcons'

const Footer = (props) => {
	return (
		<footer className="container-default mt-auto">
			<div className="px-5 pb-4 pt-10 flex justify-between mx-auto items-center">
				<a className="flex items-center" href="/">
					<span className="sr-only">Icon</span>
					<img className="h-12 sm:h-16 w-auto " src="sneaker.png" />
					<p className="ml-3 font-semibold text-base sm:text-lg">CopDeck</p>
				</a>
				<SocialIcons></SocialIcons>
			</div>

			<hr className="container-default border-blue-300 border-t-3" />
			<p className="text-gray-500 py-6 mx-auto text-sm text-center">
				Copyright © 2019 Kraft8. All Rights Reserved
			</p>
		</footer>
	)
}

export default Footer
