import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import styles from './post.module.css'
import Link from 'next/link'

export default function BlogPost({ siteTitle, frontmatter, markdownBody, description, postname }) {
	if (!frontmatter) return <></>

	return (
		<div>
			<header className="relative top-0 left-0 right-0 overflow-hidden z-0 h-96">
				<img
					className="object-cover w-full h-full"
					src={`/images/posts/${postname}/${postname}-large.jpg`}
					alt=""
				/>
				<div
					style={{
						backgroundColor: 'rgba(13, 28, 38, 0.88)',
					}}
					className="absolute top-0 left-0 bottom-0 right-0"
				></div>
				<div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
					<h1 className="text-gray-400 text-center text-4xl font-bold">
						{frontmatter?.title}
					</h1>
				</div>
				<div className="absolute container-default top-12 left-0 right-0">
					<Link href="/blog">
						<a className="text-gray-400 font-bold text-xl">Back to all articles</a>
					</Link>
				</div>
			</header>
			<main>
				<article className="container-default">
					<ReactMarkdown className={styles.article} remarkPlugins={[gfm]}>
						{markdownBody}
					</ReactMarkdown>
				</article>
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
