const SocialIcons = (props) => {
	return (
		<span className="inline-flex justify-center md:justify-start space-x-6">
			<a href={process.env.twitter}>
				<img className="h-6" src="/images/twitter.svg" alt="" />
			</a>
			<a href={process.env.instagram}>
				<img className="h-6" src="/images/instagram.svg" alt="" />
			</a>
			<a href={process.env.facebook}>
				<img className="h-6" src="/images/facebook.svg" alt="" />
			</a>
		</span>
	)
}

export default SocialIcons
