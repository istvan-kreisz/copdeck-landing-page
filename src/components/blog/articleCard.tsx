import { ArrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const ArticleCard = (props) => {
	return (
		<li
			key={props.index}
			className="cursor-pointer group flex flex-col items-center md:items-start mb-6 md:mb-0"
		>
			<Link href="/posts/[postname]" as={`/posts/${props.slug}`}>
				<a aria-label={`post ${props.slug}`} className="max-w-xs sm:max-w-sm lg:max-w-md">
					<div className="relative filter drop-shadow">
						<img
							className="w-full object-cover object-center rounded-3xl justify-self-center"
							alt="Post Preview"
							src={'images/posts/' + props.slug + '/' + props.slug + '-thumbnail.png'}
						/>
						<div className="bg-theme-orange group-hover:bg-theme-orange-dark h-12 w-12 rounded-xl flex items-center absolute bottom-5 right-5">
							<ArrowRightIcon
								className="mx-auto text-center h-6 w-6 text-white"
								aria-hidden="true"
							></ArrowRightIcon>
						</div>
					</div>
					{/* <ul className="">
						{props.tags.map((element) => {
							return <li key={element}>{element}</li>
						})}
					</ul> */}

					<h3 className="text-xl mb-3 mt-6">{props.title}</h3>
					<p className="text-left line-clamp-2">{props.description}</p>
					{/* <p>{props.date}</p> */}
				</a>
			</Link>
		</li>
	)
}

export default ArticleCard
