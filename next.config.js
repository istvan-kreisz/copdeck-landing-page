module.exports = {
	// todo
	env: {
		siteName: 'CopDeck',
		title: 'page title',
		description: 'page description',
		twitterHandle: 'IKreisz',
		twitter: 'https://www.twitter.com/IKreisz',
		instagram: 'https://instagram.com/kreiszistvan',
		facebook: 'https://www.facebook.com/kreisz.istvan',
		twitterIK: 'https://www.twitter.com/IKreisz',
		instagramIK: 'https://instagram.com/kreiszistvan',
		facebookIK: 'https://www.facebook.com/kreisz.istvan',
		twitterML: 'https://www.twitter.com/LengyeltotiM',
		instagramML: 'https://www.instagram.com/l.milan',
		facebookML: 'https://www.facebook.com/leemilan2001',
		baseURL: 'htttps://copdeck.com/',
	},
	future: {
		webpack5: true,
	},
	target: 'serverless',
	webpack: function (config, { isServer }) {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		})
		if (isServer) {
			require('./scripts/generate-sitemap')
		}
		return config
	},
}
