const SocialIcons = ({
	twitter = process.env.twitter,
	instagram = process.env.instagram,
	facebook = process.env.facebook,
}) => {
	return (
		<span className="inline-flex justify-center md:justify-start space-x-6">
			<a href={twitter}>
				<img className="h-6" src="/images/twitter.svg" alt="" />
			</a>
			<a href={instagram}>
				<img className="h-6" src="/images/instagram.svg" alt="" />
			</a>
			<a href={facebook}>
				<img className="h-6" src="/images/facebook.svg" alt="" />
			</a>
		</span>
	)
}

export default SocialIcons
