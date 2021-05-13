module.exports = {
	env: {
		siteName: 'CopDeck',
		title: 'Be on top of your sneaker game | CopDeck',
		description:
			"We've taken the guesswork out of buying and selling sneakers. Ditch the spreadsheet and hours of manual price comparisons. Maximize profits and save time. Manage and share your inventory with ease.",
		twitterHandle: 'CopDeck_',
		twitter: 'https://twitter.com/CopDeck_',
		instagram: 'https://www.instagram.com/copdeck/',
		facebook: 'https://www.facebook.com/CopDeck',
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
