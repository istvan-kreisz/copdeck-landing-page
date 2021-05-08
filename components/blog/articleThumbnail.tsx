import { ArrowRightIcon } from '@heroicons/react/outline'

const ArticleThumbnail = ({ title, description, imgName }) => {
	return (
		<div className="cursor-pointer group flex flex-col items-center md:items-start mb-6 md:mb-0">
			<div className="max-w-xs sm:max-w-sm lg:max-w-md">
				<div className="relative">
					<img
						className="w-full object-cover object-center rounded-3xl justify-self-center"
						alt="hero"
						src="https://dummyimage.com/350x420"
					/>
					<div className="bg-yellow-500 group-hover:bg-yellow-600 h-12 w-12 rounded-xl flex items-center absolute bottom-5 right-5">
						<ArrowRightIcon
							className="mx-auto text-center h-6 w-6 text-white"
							aria-hidden="true"
						></ArrowRightIcon>
					</div>
				</div>
				<h3 className="font-medium text-xl tracking-wider mb-3 mt-6">{title}</h3>
				<p className="font-normal text-left leading-relaxed tracking-wider line-clamp-2">
					{description}
				</p>
			</div>
		</div>
	)
}

export default ArticleThumbnail
