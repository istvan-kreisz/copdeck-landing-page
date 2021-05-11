import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const Header = (props) => {
	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Blog', href: '/blog' },
	]

	return (
		<header>
			<Popover className="relative z-10 bg-white">
				{({ open }) => (
					<div className="container-default">
						<div className="relative mx-auto z-10 pb-8 bg-white sm:pb-20">
							<div className="relative pt-8">
								<nav
									className="relative flex items-center justify-between sm:h-10"
									aria-label="Global"
								>
									<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
										<div className="flex items-center justify-between w-full md:w-auto">
											<Link href="/">
												<a aria-label="Home" className="flex items-center">
													<span className="sr-only">Icon</span>
													<img
														className="sm:w-12 w-10"
														src="/images/logo5.svg"
														alt="Logo"
													/>
													<p className="ml-3 font-semibold text-lg text-gray-800">
														CopDeck
													</p>
												</a>
											</Link>
											<div className="-mr-2 flex items-center md:hidden">
												<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
													<span className="sr-only">Open main menu</span>
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
											<Link key={item.name} href={item.href}>
												<a className="font-medium text-gray-500 hover:text-gray-800">
													{item.name}
												</a>
											</Link>
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
									className="absolute top-0 inset-x-0 py-6 transition transform origin-top-right md:hidden"
								>
									<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
										<div className="px-5 pt-4 flex items-center justify-between">
											<div>
												<img
													className="w-10"
													src="/images/logo5.svg"
													alt="Logo"
												/>
											</div>
											<div className="-mr-2">
												<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
													<span className="sr-only">Close main menu</span>
													<XIcon className="h-6 w-6" aria-hidden="true" />
												</Popover.Button>
											</div>
										</div>
										<div className="px-2 pt-2 pb-3 space-y-1">
											{navigation.map((item) => (
												<Link key={item.name} href={item.href}>
													<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50">
														{item.name}
													</a>
												</Link>
											))}
										</div>
									</div>
								</Popover.Panel>
							</Transition>
						</div>
					</div>
				)}
			</Popover>
		</header>
	)
}

export default Header
