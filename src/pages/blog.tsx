import ArticleCard from '../components/blog/articleCard'
import Layout from '../components/shared/defaultLayout'
import matter from 'gray-matter'
import { useState, useEffect, useContext } from 'react'
import FirebaseContext from '../context/firebaseContext'

const Blog = ({ articles }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [filters, setFilters] = useState([])
	const firebase = useContext(FirebaseContext)

	useEffect(() => {
		firebase?.analytics().logEvent('visited_blog')
	}, [])

	const generateCards = (articles, searchTerm, filters) => {
		if (articles && articles.length > 0) {
			return articles
				.filter((article) => {
					const matchesTitle =
						article?.frontMatter?.title?.toLowerCase()?.search(searchTerm) !== -1
					let matchesFilters = true
					if (filters.length > 0) {
						matchesFilters =
							article?.frontmatter?.tags &&
							filters.reduce((previous, current) => {
								return previous && article?.frontmatter?.tags?.includes(current)
							}, true)
					}
					return matchesTitle && matchesFilters
				})
				.map((article, index) => {
					const cardProps = {
						index: index,
						tags: article.frontmatter.tags,
						title: article.frontmatter.title,
						description: article.frontmatter.description,
						date: article.frontmatter.date,
						image: article.frontmatter.image,
						slug: article.slug,
					}
					return <ArticleCard key={article.slug} {...cardProps}></ArticleCard>
				})
		} else {
			return null
		}
	}

	const articlesList = generateCards(articles, searchTerm, filters)

	return (
		<Layout>
			<section className="container-default mt-2 lg:mt-4">
				<h1 className="mb-6 text-center">CopDeck Blog</h1>
				<p className="max-w-md mx-auto mb-16 sm:mb-24 text-center">
					Mission statement goes here Mission statement goes here Mission statement goes
					here Mission statement goes here Mission statement goes here
				</p>
			</section>
			<section className="container-default">
				{articlesList ? (
					<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 content-center justify-center items-center my-12 lg:my-16">
						{articlesList}
					</ul>
				) : (
					<h2 className="my-32 font-bold opacity-50 text-5xl text-gray-600 mx-auto text-center">
						Coming soon!
					</h2>
				)}
			</section>
		</Layout>
	)
}

export default Blog

export async function getStaticProps() {
	const articles = ((context) => {
		const keys = context.keys()
		const values: any[] = keys.map(context)

		const data = keys.map((key, index) => {
			let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
			const value = values[index]
			const document = matter(value.default)
			return {
				frontmatter: document.data,
				markdownBody: document.content,
				slug,
			}
		})
		return data
	})(require.context('../posts', true, /\.md$/))

	return {
		props: {
			articles: articles.reverse(),
		},
	}
}
