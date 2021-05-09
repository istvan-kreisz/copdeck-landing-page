import Header from './header'
import Footer from './footer'
// import Meta from '../Meta/Meta'

export default function Layout({ children, ...props }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header></Header>
			<main id="main">{children}</main>
			<Footer></Footer>
		</div>
	)
}
