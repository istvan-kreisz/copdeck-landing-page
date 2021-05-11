import SocialIcons from '../components/shared/socialIcons'
import EmailSignupForm from '../components/shared/emailSignupForm'
import FeatureBox from '../components/home/featureBox'
import Layout from '../components/shared/defaultLayout'
import LinkButton from '../components/shared/linkButton'
import { useLayoutEffect, useState, useEffect, useContext } from 'react'
import FirebaseContext from '../context/firebaseContext'
import ConfigContext from '../context/configContext'

import { SearchIcon } from '@heroicons/react/outline'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Home() {
	const [arrows, setArrows] = useState<any>()
	const firebase = useContext(FirebaseContext)
	const remoteConfig = useContext(ConfigContext)

	useEffect(() => {
		firebase?.analytics().logEvent('visited_home')
	}, [])

	useLayoutEffect(() => {
		const tawkSource = 'https://embed.tawk.to/60992321b1d5182476b7784f/1f5b32ffa'
		const scripts = Array.from(window.document.body.querySelectorAll('script'))
		const hasScript =
			scripts.find((script) => {
				script.src === tawkSource
			}) !== undefined
		if (hasScript) return

		window['Tawk_API'] = window['Tawk_API'] || {}
		window['Tawk_LoadStart'] = new Date()

		var script = document.createElement('script')
		const firstScript = document.getElementsByTagName('script')[0]
		script.async = true
		script.src = tawkSource
		script.setAttribute('crossorigin', '*')
		firstScript.parentNode.insertBefore(script, firstScript)

		if (!arrows) {
			setArrows(require('react-arrows'))
		}

		return () => {
			script?.parentNode?.removeChild(script)
		}
	}, [])

	console.log(remoteConfig)

	return (
		<Layout>
			<section className="container-default mt-2 lg:mt-4">
				<div className="relative  w-full flex  md:flex-row flex-col items-center justify-around">
					<div className="flex flex-col items-center lg:pr-48 justify-center order-2 md:order-first lg:flex-grow w-full">
						<img
							className="object-cover w-64  object-center rounded transform lg:-rotate-6"
							alt="App Preview"
							src="/images/hero_edited.png"
						/>
						{/* <Link href="/demo">
							<a aria-label="Demo" className="mt-12">
								<div className="group flex flex-row content-center items-center mb-3">
									<div className="flex flex-col content-center items-center">
										<p className="group-hover:text-gray-900 text-base font-bold mb-2">
											Try the demo!
										</p>
										<p className="group-hover:text-gray-900 text-xs">
											Free & no signup!
										</p>
									</div>
									<ArrowCircleRightIcon
										className="h-10 w-10 ml-3 text-green-400 group-hover:text-green-500"
										aria-hidden="true"
									></ArrowCircleRightIcon>
								</div>
							</a>
						</Link> */}
					</div>
					<div className="flex-shrink ml-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="mb-4">{remoteConfig?.title}</h1>
						<p className="mb-12 sm:mb-20">{remoteConfig?.subtitle}</p>
						<p className="text-xs font-medium text-gray-900 mb-3">
							Sign up to get exclusive updates about the beta
						</p>

						<div className="w-full sm:w-auto">
							<EmailSignupForm
								id="home-hero"
								configId={remoteConfig?.id}
							></EmailSignupForm>
						</div>

						<div className="mt-12">
							<SocialIcons id="home-hero"></SocialIcons>
						</div>
					</div>
				</div>
			</section>
			<section className="relative mt-10" id="features">
				<img className="w-screen" src="/images/wave1_o.png" alt="" />
				<div className="w-screen -mt-1 lg:-mt-10 py-10 sm:pt-0 bg-theme-blue">
					<h2 className="text-white text-center mb-16 lg:mb-0">Why CopDeck?</h2>
					<div className="container-default grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 sm:gap-y-10 place-items-center">
						<FeatureBox
							title="Stop wasting time checking prices"
							description="Use CopDeck's price comparison feature to see the best prices on the biggest reselling sites at a glance."
							imagename="hero_edited"
							className="order-1"
							id="feature1"
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
						<FeatureBox
							title="Never miss a good deal"
							description="Set price alerts and we'll notify you when prices move."
							imagename="pricealert_edited"
							className="lg:mt-12 order-2"
							id="feature2"
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
						<FeatureBox
							title="Your spreadsheets on steroids"
							description="Maintaining spreadsheets is cumbersome. With CopDeck, managing your inventory is a breeze."
							imagename="inventory_edited"
							className="lg:mt-44 order-3"
							id="feature3"
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
						<div className="flex flex-col max-w-xs justify-center items-center lg:mb-16 order-6 lg:order-4">
							<div className="flex flex-col p-6 border-theme-orange border-2 rounded-lg">
								<h4 className="text-white font-regular text-xl sm:text-2xl mb-3">
									Interested?
								</h4>

								<p className="tracking-widest text-white mb-6">
									Sign up for our newsletter and we'll let you know when the first
									beta is out.
								</p>
								<LinkButton name="Sign me up!" link="#mailing-list"></LinkButton>
							</div>
						</div>

						<FeatureBox
							title="Show them what you got"
							description="Share your inventory in our in-app feed or generate a shareable link to it."
							imagename="feed_edited"
							className="order-4 lg:order-5"
							id="feature4"
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
						<FeatureBox
							title="Keep your finances in check"
							description="See monthly financial statistics about your spendings and profits."
							imagename="stats_edited"
							className="lg:mt-8 order-5 lg:order-6"
							id="feature5"
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
					</div>
				</div>
				<img className="w-full" src="/images/wave2_o.png" alt="" />
			</section>
			<section className="relative mt-4" id="testimonials">
				<div className="container-default text-center mx-auto">
					<h2 className="text-center mb-6 mt-6">Here's what our fans say</h2>
					<p className="text-center max-w-sm mx-auto">
						We want to hear from you! Tag{' '}
						<span className="text-theme-blue">@CopDeck</span> in your tweet, and we may
						feature it here.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-8 sm:mt-24">
						<div>
							<blockquote className="twitter-tweet tw-align-center">
								<p lang="en" dir="ltr">
									A major part of real-world AI has to be solved to make
									unsupervised, generalized full self-driving work, as the entire
									road system is designed for biological neural nets with optical
									imagers
								</p>
								&mdash; Elon Musk (@elonmusk){' '}
								<a href="https://twitter.com/elonmusk/status/1387901003664699392?ref_src=twsrc%5Etfw">
									April 29, 2021
								</a>
							</blockquote>{' '}
							<script
								async
								src="https://platform.twitter.com/widgets.js"
								charSet="utf-8"
							></script>
						</div>
						<div className="lg:mt-10 lg:ml-16 md:mt-5 md:ml-8">
							<blockquote className="twitter-tweet tw-align-center">
								<p lang="en" dir="ltr">
									God is so good 😊 Today I am voting for the first time in my
									life for the President of the United States, and it&#39;s for
									someone I truly trust...me. 🇺🇸 🕊
								</p>
								&mdash; ye (@kanyewest){' '}
								<a href="https://twitter.com/kanyewest/status/1323641120778145792?ref_src=twsrc%5Etfw">
									November 3, 2020
								</a>
							</blockquote>{' '}
							<script
								async
								src="https://platform.twitter.com/widgets.js"
								charSet="utf-8"
							></script>
						</div>
						<div className="md:mt-2">
							<blockquote className="twitter-tweet tw-align-center">
								<p lang="en" dir="ltr">
									God is so good 😊 Today I am voting for the first time in my
									life for the President of the United States, and it&#39;s for
									someone I truly trust...me. 🇺🇸 🕊
								</p>
								&mdash; ye (@kanyewest){' '}
								<a href="https://twitter.com/kanyewest/status/1323641120778145792?ref_src=twsrc%5Etfw">
									November 3, 2020
								</a>
							</blockquote>{' '}
							<script
								async
								src="https://platform.twitter.com/widgets.js"
								charSet="utf-8"
							></script>
						</div>
						<div className="lg:mt-10 md:mt-5">
							<blockquote className="twitter-tweet tw-align-center">
								<p lang="en" dir="ltr">
									A major part of real-world AI has to be solved to make
									unsupervised, generalized full self-driving work, as the entire
									road system is designed for biological neural nets with optical
									imagers
								</p>
								&mdash; Elon Musk (@elonmusk){' '}
								<a href="https://twitter.com/elonmusk/status/1387901003664699392?ref_src=twsrc%5Etfw">
									April 29, 2021
								</a>
							</blockquote>{' '}
							<script
								async
								src="https://platform.twitter.com/widgets.js"
								charSet="utf-8"
							></script>
						</div>
					</div>
				</div>
			</section>
			<section className="relative mt-24" id="q&a">
				<div className="w-screen  bg-theme-blue">
					<div className="container-default grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 justify-center items-center py-16 md:py-24">
						<div className="flex flex-col justify-center items-center md:items-start">
							<h2 className="text-white text-center md:text-left mb-4">
								If you were wondering...
							</h2>
							<p className="text-white text-center md:text-left">
								Have more questions or feedback? Feel free to reach out on{' '}
								<a className="underline" href={process.env.twitter}>
									Twitter
								</a>
								, on the{' '}
								<a className="underline" href="/contact">
									Contact
								</a>{' '}
								page or just use the on-site chat in the bottom right corner.
							</p>
						</div>

						<div className="flex flex-col space-y-4">
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="flex flex-col w-full px-6 py-5 text-base font-medium text-left bg-white rounded-2xl hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-600 focus-visible:ring-opacity-75">
											<div className="flex flex-row w-full justify-between items-center">
												<span className="text-sm md:text-base">
													What is your refund policy?
												</span>
												<ChevronUpIcon
													className={`${
														open ? 'transform rotate-180' : ''
													} w-8 h-8 text-theme-blue`}
												/>
											</div>
											<Disclosure.Panel className="pt-4 pb-2 text-sm">
												If you're unhappy with your purchase for any reason,
												email us within 90 days and we'll refund you in
												full, no questions asked.
											</Disclosure.Panel>
										</Disclosure.Button>
									</>
								)}
							</Disclosure>
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="flex flex-col w-full px-6 py-5 text-base font-medium text-left bg-white rounded-2xl hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-600 focus-visible:ring-opacity-75">
											<div className="flex flex-row w-full justify-between items-center">
												<span>What is your refund policy?</span>
												<ChevronUpIcon
													className={`${
														open ? 'transform rotate-180' : ''
													} w-8 h-8 text-theme-blue`}
												/>
											</div>
											<Disclosure.Panel className="pt-4 pb-2 text-sm">
												If you're unhappy with your purchase for any reason,
												email us within 90 days and we'll refund you in
												full, no questions asked.
											</Disclosure.Panel>
										</Disclosure.Button>
									</>
								)}
							</Disclosure>
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="flex flex-col w-full px-6 py-5 text-base font-medium text-left bg-white rounded-2xl hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-600 focus-visible:ring-opacity-75">
											<div className="flex flex-row w-full justify-between items-center">
												<span>What is your refund policy?</span>
												<ChevronUpIcon
													className={`${
														open ? 'transform rotate-180' : ''
													} w-8 h-8 text-theme-blue`}
												/>
											</div>
											<Disclosure.Panel className="pt-4 pb-2 text-sm">
												If you're unhappy with your purchase for any reason,
												email us within 90 days and we'll refund you in
												full, no questions asked.
											</Disclosure.Panel>
										</Disclosure.Button>
									</>
								)}
							</Disclosure>
						</div>
					</div>
				</div>
			</section>
			<section className="container-default relative mt-16 md:mt-24" id="mission">
				<h2 className="text-center mb-4">Our vision</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 justify-center items-center my-16 lg:my-20">
					<img
						className="object-cover  object-center rounded justify-self-center"
						alt="Founder Photo"
						src="https://dummyimage.com/355x520"
					/>

					<div className="flex flex-col items-center md:items-start">
						<h3 className="text-base mb-6 font-semibold uppercase text-theme-blue tracking-widest">
							Co-Founder & Marketing guru
						</h3>
						<h4 className="font-semibold text-4xl tracking-wider mb-6">
							Milan Lengyeltoti
						</h4>
						<p className="text-left">
							Having been in the sneaker game for years, I became frustrated with the
							difficulty of finding the best prices. Not to mention the countless
							hours wasted managing spreadsheets to keep track of spendings and share
							my inventory with potential buyers. I knew that there must be a better
							way and my frustration sparked the idea of CopDeck. Our goal is to make
							reselling and collecting sneakers easy and hassle-free for every
							sneakerhead out there.
						</p>
					</div>
				</div>
			</section>
			<section className="relative mt-24" id="mailing-list">
				<div className="w-screen  bg-theme-blue">
					<div className="container-default flex flex-col text-center justify-center items-center py-16 md:py-24">
						<h3 className="text-base mb-6 font-semibold uppercase text-theme-orange tracking-widest">
							let's stay in touch
						</h3>
						<h4 className="text-white font-semibold text-4xl tracking-wider mb-6">
							Want to try CopDeck?
						</h4>
						<p className="max-w-md text-white mb-6">
							CopDeck is not publicly available yet, but rest assured we’re hard at
							work to change that. Join our mailing list to get exclusive updates
							about the beta version. As a bonus we'll also send you some tips on how
							to level up your sneaker game.
						</p>
						<div className="w-full sm:w-auto sm:mx-auto">
							<EmailSignupForm
								id="home-cta"
								configId={remoteConfig?.id}
							></EmailSignupForm>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
