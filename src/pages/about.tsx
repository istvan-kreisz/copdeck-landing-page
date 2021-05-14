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
				<h1 className="mb-6 text-center md:text-left">The team</h1>
				<p className="mb-8 sm:mb-10 text-center md:text-left">
					Just two dudes looking to disrupt the sneaker game by making reselling easy and
					fun as it should be.
				</p>
			</section>
			<section className="container-default grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 justify-center items-start my-14 lg:my-20">
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
						Sneakerhead. Marketer. Entrepreneur. First sneaker? Adidas NMD Tricolor.
						Grail? Air Jordan 1 Reverse SBB. My passion for sneaks eventually became a
						gig, but I'm still not the Don.
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
					<h4 className="text-base mb-5 font-semibold uppercase text-theme-orange tracking-widest">
						Co-Founder & Coding ninja
					</h4>
					<p className="mb-8 text-left w-full lg:w-2/3">
						I first heard about sneakers being a thing when my little brother bought a
						pair of Yeezys for around $500 and I thought he was out of his mind. Fast
						forward a few years and here I am spending way more than I should on
						sneakers and building a product for sneakerheads. Funny how things work
						out...
					</p>
				</div>
			</section>
		</Layout>
	)
}
