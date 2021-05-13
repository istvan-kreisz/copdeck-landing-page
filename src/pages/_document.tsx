import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/LibreFranklin-VariableFont_wght.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/images/favicon/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/images/favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/images/favicon/favicon-16x16.png"
					/>
					<link rel="manifest" href="/images/favicon/site.webmanifest" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff" />
					<script
						async
						src="https://platform.twitter.com/widgets.js"
						charSet="utf-8"
					></script>
					<script src="/mailerlite.js" type="text/javascript"></script>
					<script
						src="https://static.mailerlite.com/js/w/webforms.min.js?v0c75f831c56857441820dcec3163967c"
						type="text/javascript"
					></script>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
