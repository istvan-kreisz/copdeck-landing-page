import Header from './header'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ children, ...props }) {
	return (
		<div className="flex flex-col min-h-screen">
			{/* todo: add separate title for each page? - do we need that for SEO? */}
			<Meta></Meta>
			<Header></Header>
			<main id="main">{children}</main>
			<Footer></Footer>
		</div>
	)
}
