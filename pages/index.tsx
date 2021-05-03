/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Demo', href: '/demo' },
	{ name: 'About', href: '/about' },
	{ name: 'Contact', href: '/contact' },
]

export default function Example() {
	return (
		<div>
			<h4>asdsds</h4>
			<Popover className="relative bg-white overflow-hidden">
				{({ open }) => (
					<>
						<h3>sdsdsd</h3>
						<h2>Almost before we knew it, we had left the ground.</h2>
						<div className="max-w-7xl mx-auto">
							<div className="relative mx-auto px-4 z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
								<div className="relative pt-6 px-4 sm:px-6 lg:px-8">
									<nav
										className="relative flex items-center justify-between sm:h-10"
										aria-label="Global"
									>
										<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
											<div className="flex items-center justify-between w-full md:w-auto">
												<a href="/">
													<span className="sr-only">Icon</span>
													<img
														className="h-8 w-auto sm:h-10"
														src="sneaker.png"
													/>
												</a>
												<div className="-mr-2 flex items-center md:hidden">
													<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
														<span className="sr-only">
															Open main menu
														</span>
														<MenuIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													</Popover.Button>
												</div>
											</div>
										</div>
										<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className="font-medium text-gray-500 hover:text-gray-900"
												>
													{item.name}
												</a>
											))}
										</div>
									</nav>
								</div>

								<Transition
									show={open}
									as={Fragment}
									enter="duration-150 ease-out"
									enterFrom="opacity-0 scale-95"
									enterTo="opacity-100 scale-100"
									leave="duration-100 ease-in"
									leaveFrom="opacity-100 scale-100"
									leaveTo="opacity-0 scale-95"
								>
									<Popover.Panel
										focus
										static
										className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
									>
										<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
											<div className="px-5 pt-4 flex items-center justify-between">
												<div>
													<img
														className="h-8 w-auto"
														src="sneaker.png"
														alt=""
													/>
												</div>
												<div className="-mr-2">
													<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
														<span className="sr-only">
															Close main menu
														</span>
														<XIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													</Popover.Button>
												</div>
											</div>
											<div className="px-2 pt-2 pb-3 space-y-1">
												{navigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
													>
														{item.name}
													</a>
												))}
											</div>
											<a
												href="/"
												className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
											>
												Log in
											</a>
										</div>
									</Popover.Panel>
								</Transition>

								<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
									<div className="sm:text-center lg:text-right">
										<h1 className="text-3xl tracking-wide font-black text-gray-900 sm:text-4xl md:text-5xl">
											<span
												style={{
													fontVariationSettings: 'wght 700',
												}}
												className="block"
											>
												Sneaker reselling made easy.
											</span>
										</h1>
										<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
											Ditch the spreadsheet. Price comparison, inventory
											management, price alerts and a built in buy & sell feed.
										</p>
										<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
											<div className="rounded-md shadow">
												<a
													href="#mailing-list"
													className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
												>
													Get started
												</a>
											</div>
										</div>
									</div>
								</main>
							</div>
						</div>
						<div className="">
							<img
								className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
								src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
								alt=""
							/>
						</div>
					</>
				)}
			</Popover>
		</div>
	)
}
