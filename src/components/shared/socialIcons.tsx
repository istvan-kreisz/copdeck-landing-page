const SocialIcons = ({
	twitter = process.env.twitter,
	instagram = process.env.instagram,
	facebook = process.env.facebook,
}) => {
	return (
		<span className="inline-flex justify-center md:justify-start space-x-6">
			<a aria-label="Twitter" href={twitter}>
				<img className="h-6" src="/images/twitter.svg" alt="Twitter Link" />
			</a>
			<a aria-label="Instagram" href={instagram}>
				<img className="h-6" src="/images/instagram.svg" alt="Instagram Link" />
			</a>
			<a aria-label="Facebook" href={facebook}>
				<img className="h-6" src="/images/facebook.svg" alt="Facebook Link" />
			</a>
		</span>
	)
}

export default SocialIcons
