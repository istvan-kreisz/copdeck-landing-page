import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import styles from './post.module.css'
import Link from 'next/link'
import Footer from '../../components/shared/footer'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import EmailSignupForm from '../../components/shared/emailSignupForm'

export default function BlogPost({ frontmatter, markdownBody, postname }) {
	return (
		<div>
			<header className="container-default">
				<div className="group cursor-pointer my-12">
					<Link href="/blog">
						<div className="flex items-center space-x-4">
							<div className="bg-yellow-500 group-hover:bg-yellow-600 h-12 w-12 rounded-xl flex items-center">
								<ArrowLeftIcon
									className="mx-auto text-center h-6 w-6 text-white"
									aria-hidden="true"
								></ArrowLeftIcon>
							</div>
							<a className="text-gray-800 font-bold text-xl">Back to all articles</a>
						</div>
					</Link>
				</div>

				<div className={styles.header}>
					<img
						className="object-fill w-full h-full rounded-3xl"
						src={`/images/posts/${postname}/${postname}-large.jpg`}
						alt=""
					/>
					<div
						style={{
							backgroundColor: 'rgba(13, 28, 38, 0.88)',
						}}
						className="rounded-3xl absolute top-0 left-0 bottom-0 right-0"
					></div>
					<div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
						<h1 className="text-gray-400 text-center text-2xl sm:text-3xl md:text-4xl font-bold p-10">
							{frontmatter?.title}
						</h1>
					</div>
				</div>
			</header>
			<main className="container-default">
				<ReactMarkdown className={styles.article} remarkPlugins={[gfm]}>
					{markdownBody}
				</ReactMarkdown>
				<div className="bg-blue-600 my-20 rounded-3xl mx-auto flex flex-col space-y-8 items-center px-8 py-8 max-w-2xl">
					<h3 className="text-white w-3/4 font-semibold text-xl m-0 text-center md:text-2xl leading-6">
						Sign up to the newsletter for more sneaker reselling tips & tricks!
					</h3>
					<EmailSignupForm></EmailSignupForm>
				</div>
			</main>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const { postname } = params

	const content = await import(`../../posts/${postname}.md`)
	const data = matter(content.default)

	return {
		props: {
			frontmatter: data.data,
			markdownBody: data.content,
			postname: postname,
		},
	}
}

export async function getStaticPaths() {
	const blogSlugs = ((context) => {
		const keys = context.keys()
		const data = keys.map((key, index) => {
			let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
			return slug
		})
		return data
	})(require.context('../../posts', true, /\.md$/))

	const paths = blogSlugs.map((slug) => `/posts/${slug}`)

	return {
		paths,
		fallback: false,
	}
}
