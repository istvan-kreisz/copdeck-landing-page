import { useRouter } from 'next/router'
import { useContext } from 'react'
import FirebaseContext from '../../context/firebaseContext'

const SocialIcons = ({
	twitter = process.env.twitter,
	instagram = process.env.instagram,
	facebook = process.env.facebook,
	id,
}) => {
	const router = useRouter()
	const firebase = useContext(FirebaseContext)

	const twitterClicked = (e) => {
		e.preventDefault()
		firebase?.analytics().logEvent('social_link_clicked', {
			id: id,
			site: 'twitter',
		})
		router.push(twitter)
	}

	const igClicked = (e) => {
		e.preventDefault()
		firebase?.analytics().logEvent('social_link_clicked', {
			id: id,
			site: 'instagram',
		})
		router.push(instagram)
	}

	const fbClicked = (e) => {
		e.preventDefault()
		firebase?.analytics().logEvent('social_link_clicked', {
			id: id,
			site: 'facebook',
		})
		router.push(facebook)
	}

	return (
		<span className="inline-flex justify-center md:justify-start space-x-6">
			<a aria-label="Twitter" href={twitter} onClick={twitterClicked}>
				<img className="h-6" src="/images/twitter.svg" alt="Twitter Link" />
			</a>
			<a aria-label="Instagram" href={instagram} onClick={igClicked}>
				<img className="h-6" src="/images/instagram.svg" alt="Instagram Link" />
			</a>
			<a aria-label="Facebook" href={facebook} onClick={fbClicked}>
				<img className="h-6" src="/images/facebook.svg" alt="Facebook Link" />
			</a>
		</span>
	)
}

export default SocialIcons
