/* This example requires Tailwind CSS v2.0+ */
import Navbar from '../pages-lib/shared/navbar'
import LinkButton from '../pages-lib/shared/linkButton'
import { ArrowCircleRightIcon } from '@heroicons/react/outline'

export default function Example() {
	return (
		<div>
			<header>
				<Navbar></Navbar>
			</header>
			<main className="container relative mx-auto max-w-7xl px-4 sm:px-6 mt-2 lg:mt-4">
				<section className="text-gray-600 relative">
					<div className="relative  w-full flex  md:flex-row flex-col items-center justify-around">
						<div className="flex flex-col items-center lg:pr-48 justify-center order-2 md:order-first lg:flex-grow w-full">
							<img
								className="object-cover  object-center rounded"
								alt="hero"
								src="https://dummyimage.com/250x500"
							/>
							<a className="mt-12" href="/demo">
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
							<div className="flex justify-center">
								<LinkButton
									link="#mailing-list"
									name="Join our mailing list"
								></LinkButton>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
