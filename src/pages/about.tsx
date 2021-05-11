import Layout from '../components/shared/defaultLayout'
import { useContext, useEffect } from 'react'
import FirebaseContext from '../context/firebaseContext'

export default function About() {
	const firebase = useContext(FirebaseContext)

	useEffect(() => {
		firebase?.analytics().logEvent('visited_about')
	}, [])

	return (
		<Layout>
			<section className="container-default mt-2 lg:mt-4">
				<h1 className="mb-6 text-center md:text-left">Meet the team</h1>
				<p className="mb-8 sm:mb-20 text-center md:text-left">
					Mission statement goes here Mission statement goes here Mission statement goes
					here Mission statement goes here Mission statement goes here Mission statement
					goes here Mission statement goes here Mission statement goes here Mission
					statement goes here Mission statement goes here
				</p>
			</section>
			<section className="container-default grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 justify-center items-center my-20 lg:my-24">
				<div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
					<a href={process.env.twitterML} className="relative">
						<img
							className="object-cover w-96  object-center rounded justify-self-center"
							alt="Founder Photo"
							src="/images/milan.jpg"
						/>
						<div
							style={{
								backgroundColor: 'rgba(13, 28, 38, 0.2)',
							}}
							className="rounded absolute top-0 left-0 bottom-0 right-0"
						></div>
					</a>

					<h3 className="font-semibold text-2xl tracking-wider mb-5 mt-6">
						Milan Lengyeltoti
					</h3>
					<h4 className="text-base mb-5 font-semibold uppercase text-theme-blue tracking-widest">
						Co-Founder & Marketing guru
					</h4>
					<p className="mb-8 text-left w-full lg:w-2/3">
						Here goes the founder’s note about why this is the best thing since sliced
						bread and why you’re passionate about this project. To learn more about us,
						visit the About page.{' '}
					</p>
				</div>
				<div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
					<a href={process.env.twitterIK} className="relative">
						<img
							className="object-cover w-96  object-center rounded justify-self-center"
							alt="Founder Photo"
							src="/images/istvan.jpg"
						/>
						<div
							style={{
								backgroundColor: 'rgba(13, 28, 38, 0.2)',
							}}
							className="rounded absolute top-0 left-0 bottom-0 right-0"
						></div>
					</a>

					<h3 className="font-semibold text-2xl tracking-wider mb-5 mt-6">
						Istvan Kreisz
					</h3>
					<h4 className="text-base mb-5 font-semibold uppercase text-theme-blue tracking-widest">
						Co-Founder & Marketing guru
					</h4>
					<p className="mb-8 text-left w-full lg:w-2/3">
						Here goes the founder’s note about why this is the best thing since sliced
						bread and why you’re passionate about this project. To learn more about us,
						visit the About page.{' '}
					</p>
				</div>
			</section>
		</Layout>
	)
}
