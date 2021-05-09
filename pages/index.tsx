import SocialIcons from '../components/shared/socialIcons'
import Button from '../components/shared/button'
import LinkButton from '../components/shared/linkButton'
import EmailSignupForm from '../components/shared/emailSignupForm'
import FeatureBox from '../components/home/featureBox'
import Popup from '../components/shared/popup'
import Layout from '../components/shared/layout'
import Link from 'next/link'
import { useState } from 'react'

import { ArrowCircleRightIcon, SearchIcon, CheckIcon } from '@heroicons/react/outline'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Home() {
	const [openSignupPopup, setOpenSignupPopup] = useState(false)

	const signupClicked = () => {
		console.log('sdsdsd')
		setOpenSignupPopup(true)
	}

	return (
		<Layout>
			<section className="container-default mt-2 lg:mt-4 text-gray-600">
				<div className="relative  w-full flex  md:flex-row flex-col items-center justify-around">
					<div className="flex flex-col items-center lg:pr-48 justify-center order-2 md:order-first lg:flex-grow w-full">
						<img
							className="object-cover  object-center rounded"
							alt="hero"
							src="https://dummyimage.com/250x500"
						/>
						<Link href="/demo">
							<a className="mt-12">
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
						</Link>
					</div>
					<div className="ml-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="sm:text-4xl text-3xl mb-4 font-medium sm:leading-normal tracking-wide text-gray-900">
							Sneaker reselling made easy.
						</h1>
						<p className="mb-8 leading-relaxed font-regular sm:mb-20">
							Ditch the spreadsheet. Price comparison, inventory management, price
							alerts and a built in buy & sell feed.
						</p>
						<p className="text-xs mb-3">To get exclusive updates about updates:</p>
						<LinkButton link="#mailing-list" name="Join our mailing list"></LinkButton>
						<div className="mt-16">
							<SocialIcons></SocialIcons>
						</div>
					</div>
				</div>
				<Popup open={openSignupPopup} setOpen={setOpenSignupPopup}></Popup>
			</section>
			<section className="relative mt-10" id="features">
				<img className="w-screen" src="/images/wave1_o.svg" alt="" />
				<div className="w-screen -mt-1  bg-blue-600">
					<h2 className="text-white text-center mb-16 text-3xl sm:text-4xl">
						Check out these features
					</h2>
					<div className="container-default grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 place-items-center">
						<FeatureBox
							title="Search sneakers"
							description="Better a diamond with a flaw than a pebble without one."
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
						<FeatureBox
							title="Search sneakers"
							description="Better a diamond with a flaw than a pebble without one."
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
						<FeatureBox
							title="Search sneakers"
							description="Better a diamond with a flaw than a pebble without one."
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
						<div className="flex flex-col justify-center items-center">
							<div className="flex flex-col p-6 border-yellow-500 border-2 rounded-lg">
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
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
						<FeatureBox
							title="Search sneakers"
							description="Better a diamond with a flaw than a pebble without one."
						>
							<SearchIcon></SearchIcon>
						</FeatureBox>
					</div>
				</div>
				<img className="w-full" src="/images/wave2_o.svg" alt="" />
			</section>
			<section className="relative mt-4" id="testimonials">
				<div className="container-default text-center mx-auto">
					<h2 className="text-center mb-8 mt-0 text-3xl sm:text-4xl">Testimonials</h2>
					<p className="text-center max-w-sm mx-auto font-semibold text-base">
						If you like us, send a tweet with our twitter handle{' '}
						<span className=" text-blue-600">@CopDeck</span> and we may feature your
						tweet here!
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-10">
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
				<div className="w-screen  bg-blue-600">
					<div className="container-default grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 justify-center items-center py-16 md:py-24">
						<div className="flex flex-col justify-center items-center md:items-start">
							<h2 className="text-white text-center md:text-left mb-4 text-3xl sm:text-4xl">
								Got questions? We've got answers.
							</h2>
							<p className="text-white font-medium text-center md:text-left leading-relaxed tracking-wider font-regular">
								This is a big one and i consider it one of the most important things
								for a designer to get right.
							</p>
						</div>

						<div className="flex flex-col space-y-4">
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="flex flex-col w-full px-6 py-5 text-base font-medium text-left text-gray-600 bg-white rounded-2xl hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-600 focus-visible:ring-opacity-75">
											<div className="flex flex-row w-full justify-between items-center">
												<span>What is your refund policy?</span>
												<ChevronUpIcon
													className={`${
														open ? 'transform rotate-180' : ''
													} w-8 h-8 text-blue-600`}
												/>
											</div>
											<Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
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
										<Disclosure.Button className="flex flex-col w-full px-6 py-5 text-base font-medium text-left text-gray-600 bg-white rounded-2xl hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-600 focus-visible:ring-opacity-75">
											<div className="flex flex-row w-full justify-between items-center">
												<span>What is your refund policy?</span>
												<ChevronUpIcon
													className={`${
														open ? 'transform rotate-180' : ''
													} w-8 h-8 text-blue-600`}
												/>
											</div>
											<Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
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
										<Disclosure.Button className="flex flex-col w-full px-6 py-5 text-base font-medium text-left text-gray-600 bg-white rounded-2xl hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-600 focus-visible:ring-opacity-75">
											<div className="flex flex-row w-full justify-between items-center">
												<span>What is your refund policy?</span>
												<ChevronUpIcon
													className={`${
														open ? 'transform rotate-180' : ''
													} w-8 h-8 text-blue-600`}
												/>
											</div>
											<Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
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
			<section className="container-default relative mt-16" id="mission">
				<h2 className="text-center mb-4 text-3xl sm:text-4xl">Our mission</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 justify-center items-center my-16 lg:my-24">
					<img
						className="object-cover  object-center rounded justify-self-center"
						alt="hero"
						src="https://dummyimage.com/355x520"
					/>

					<div className="flex flex-col items-center md:items-start">
						<h3 className="text-base mb-6 font-semibold uppercase text-blue-500 tracking-widest">
							Co-Founder & Marketing guru
						</h3>
						<h4 className="font-semibold text-4xl tracking-wider mb-6">
							Milan Lengyeltoti
						</h4>
						<p className="font-regular text-left leading-relaxed tracking-wider ">
							Here goes the founder’s note about why this is the best thing since
							sliced bread and why you’re passionate about this project. To learn more
							about us, visit the About page.{' '}
						</p>
					</div>
				</div>
			</section>
			<section className="relative mt-24" id="mailing-list">
				<div className="w-screen  bg-blue-600">
					<div className="container-default flex flex-col text-center justify-center items-center py-16 md:py-24">
						<h3 className="text-base mb-6 font-semibold uppercase text-yellow-500 tracking-widest">
							Follow our journey
						</h3>
						<h4 className="text-white font-semibold text-4xl tracking-wider mb-6">
							Want some updates?
						</h4>
						<p className="max-w-md font-regular text-white leading-relaxed tracking-wider mb-6">
							CopDeck is not publicly available yet, but rest assured we’re hard at
							work to change that. If you want to get exlusive updates about the
							product join our mailing list{' '}
						</p>
						<EmailSignupForm></EmailSignupForm>
					</div>
				</div>
			</section>
		</Layout>
	)
}
