module.exports = {
	env: {
		twitter: 'https://www.twitter.com/IKreisz',
		instagram: 'https://instagram.com/kreiszistvan',
		facebook: 'https://www.facebook.com/kreisz.istvan',
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
