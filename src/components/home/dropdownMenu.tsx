import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const DropdownMenu = ({ title, description }) => {
	return (
		<Disclosure>
			{({ open }) => (
				<>
					<Disclosure.Button className="flex flex-col w-full px-6 py-5 text-base font-medium text-left bg-white rounded-2xl hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-600 focus-visible:ring-opacity-75">
						<div className="flex flex-row w-full justify-between items-center">
							<span className="text-sm md:text-base">{title}</span>
							<ChevronUpIcon
								className={`${
									open ? 'transform rotate-180' : ''
								} w-8 h-8 text-theme-blue`}
							/>
						</div>
						<Disclosure.Panel className="pt-4 pb-2 text-sm">
							{description}
						</Disclosure.Panel>
					</Disclosure.Button>
				</>
			)}
		</Disclosure>
	)
}

export default DropdownMenu
