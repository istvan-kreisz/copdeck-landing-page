import Link from 'next/link'

const LinkButton = ({ link, name }) => {
	return (
		<Link href={link}>
			<div className="flex cursor-pointer items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-2xl text-white bg-yellow-500 hover:bg-yellow-600 md:py-4 md:text-lg">
				{name}
			</div>
		</Link>
	)
}

export default LinkButton
