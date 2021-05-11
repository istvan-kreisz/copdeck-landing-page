import { useRouter } from 'next/router'
import Head from 'next/head'

const meta = ({
	canonicalURL = null,
	title = process.env.title,
	description = process.env.description,
	image = null,
}) => {
	const router = useRouter()
	const canonical = (canonicalURL || process.env.baseURL) + router.route

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={canonical} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			{/* og */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:site_name" content={process.env.siteName} />
			<meta
				property="og:image"
				content={`${
					process.env.baseURL + '/' + (image || 'images/thumbnailImageFacebook.png')
				}`}
			/>
			<meta property="og:url" content={`${canonical}`} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="627" />
			<link rel="shortcut icon" href="/images/favicons/favicon.ico" />
			<meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID} />
			{/* twitter */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:site" content={process.env.twitterHandle} />
			<meta name="twitter:creator" content={process.env.twitterHandle} />
			<meta
				property="twitter:image"
				content={`${
					process.env.baseURL + '/' + (image || 'images/thumbnailImageTwitter.png')
				}`}
			/>
		</Head>
	)
}
export default meta
