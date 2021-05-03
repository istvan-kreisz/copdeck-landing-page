/* This example requires Tailwind CSS v2.0+ */
import Navbar from '../pages-lib/shared/navbar'

export default function Example() {
	return (
		<div>
			<header>
				<Navbar></Navbar>
			</header>
			<main className="container relative mx-auto max-w-7xl px-4 sm:px-6 mt-2 lg:mt-4">
				<section className="text-gray-600 relative">
					<div className="relative  w-full flex  md:flex-row flex-col items-center justify-around">
						<div className="flex justify-center order-2 md:order-first lg:flex-grow w-full  content-center">
							<img
								className="object-cover lg:pr-48 object-center rounded"
								alt="hero"
								src="https://dummyimage.com/250x500"
							/>
						</div>
						<div className="ml-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
							<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
								Sneaker reselling made easy.
							</h1>
							<p className="mb-8 leading-relaxed">
								Ditch the spreadsheet. Price comparison, inventory management, price
								alerts and a built in buy & sell feed.
							</p>
							<div className="flex justify-center">
								<a
									href="#mailing-list"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
								>
									Get started
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
