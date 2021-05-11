import SocialIcons from '../components/shared/socialIcons'
import LinkButton from '../components/shared/linkButton'
import EmailSignupForm from '../components/shared/emailSignupForm'
import FeatureBox from '../components/home/featureBox'
import Layout from '../components/shared/defaultLayout'
import { useLayoutEffect } from 'react'

import { ArrowCircleRightIcon, SearchIcon, CheckIcon } from '@heroicons/react/outline'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Home() {
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

		return () => {
			script?.parentNode?.removeChild(script)
		}
	}, [])

	return (
		<Layout>
			<section className="container-default mt-2 lg:mt-4">
				<div className="relative  w-full flex  md:flex-row flex-col items-center justify-around">
					<div className="flex flex-col items-center lg:pr-48 justify-center order-2 md:order-first lg:flex-grow w-full">
						<img
							className="object-cover w-64  object-center rounded transform -rotate-6"
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
					<div className="ml-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="mb-4">Sneaker reselling made easy.</h1>
						<p className="mb-12 sm:mb-20">
							Ditch the spreadsheet. Price comparison, inventory management, price
							alerts and a built in buy & sell feed.
						</p>
						<p className="text-xs mb-3">To get exclusive updates about updates:</p>
						<LinkButton link="#mailing-list" name="Join our mailing list"></LinkButton>
						<div className="mt-12">
							<SocialIcons></SocialIcons>
						</div>
					</div>
				</div>
			</section>
			<section className="relative mt-10" id="features">
				<img className="w-screen" src="/images/wave1_o.png" alt="" />
				<div className="w-screen -mt-1 lg:-mt-10 py-10 sm:pt-0 bg-theme-blue">
					<h2 className="text-white text-center mb-16 lg:mb-6">
						Check out these features
					</h2>
					<div className="container-default grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 sm:gap-y-10 place-items-center">
						<FeatureBox
							title="Search sneakers"
							description="Better a diamond with a flaw than a pebble without one."
							imagename="hero_edited"
							className="order-1"
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
						<FeatureBox
							title="Search sneakers"
							description="Better a diamond with a flaw than a pebble without one."
							imagename="pricealert_edited"
							className="lg:mt-12 order-2"
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
						<FeatureBox
							title="Search sneakers"
							description="Better a diamond with a flaw than a pebble without one."
							imagename="inventory_edited"
							className="lg:mt-44 order-3"
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
						<div className="flex flex-col justify-center items-center lg:mb-16 order-6 lg:order-4">
							<div className="flex flex-col p-6 border-theme-orange border-2 rounded-lg">
								<h4 className="text-white font-regular text-lg mb-3">Summary</h4>
								<div className="flex flex-row justify-center items-center mb-3">
									<CheckIcon className="text-white h-5 w-5"></CheckIcon>
									<p className="ml-3 tracking-widest text-white">
										Blah blah blah blah
									</p>
								</div>

								<div className="flex flex-row justify-center items-center mb-3">
									<CheckIcon className="text-white h-5 w-5"></CheckIcon>
									<p className="ml-3 tracking-widest text-white">
										Blah blah blah blah
									</p>
								</div>

								<div className="flex flex-row justify-center items-center mb-3">
									<CheckIcon className="text-white h-5 w-5"></CheckIcon>
									<p className="ml-3 tracking-widest text-white">
										Blah blah blah blah
									</p>
								</div>

								<div className="flex flex-row justify-center items-center mb-3">
									<CheckIcon className="text-white h-5 w-5"></CheckIcon>
									<p className="ml-3 tracking-widest text-white">
										Blah blah blah blah
									</p>
								</div>
							</div>
						</div>

						<FeatureBox
							title="Search sneakers"
							description="Better a diamond with a flaw than a pebble without one."
							imagename="feed_edited"
							className="order-4 lg:order-5"
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
						<FeatureBox
							title="Search sneakers"
							description="Better a diamond with a flaw than a pebble without one."
							imagename="stats_edited"
							className="lg:mt-8 order-5 lg:order-6"
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
					</div>
				</div>
				<img className="w-full" src="/images/wave2_o.png" alt="" />
			</section>
			<section className="relative mt-4" id="testimonials">
				<div className="container-default text-center mx-auto">
					<h2 className="text-center mb-6 mt-6">Testimonials</h2>
					<p className="text-center max-w-sm mx-auto">
						If you like us, send a tweet with our twitter handle{' '}
						<span className="text-theme-blue">@CopDeck</span> and we may feature your
						tweet here!
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
								Got questions? We've got answers.
							</h2>
							<p className="text-white text-center md:text-left">
								This is a big one and i consider it one of the most important things
								for a designer to get right.
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
				<h2 className="text-center mb-4">Our mission</h2>

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
							Here goes the founder’s note about why this is the best thing since
							sliced bread and why you’re passionate about this project. To learn more
							about us, visit the About page.{' '}
						</p>
					</div>
				</div>
			</section>
			<section className="relative mt-24" id="mailing-list">
				<div className="w-screen  bg-theme-blue">
					<div className="container-default flex flex-col text-center justify-center items-center py-16 md:py-24">
						<h3 className="text-base mb-6 font-semibold uppercase text-theme-orange tracking-widest">
							Follow our journey
						</h3>
						<h4 className="text-white font-semibold text-4xl tracking-wider mb-6">
							Want some updates?
						</h4>
						<p className="max-w-md text-white mb-6">
							CopDeck is not publicly available yet, but rest assured we’re hard at
							work to change that. If you want to get exlusive updates about the
							product join our mailing list{' '}
						</p>
						<div className="w-full sm:w-auto sm:mx-auto">
							<EmailSignupForm></EmailSignupForm>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
