import ArticleThumbnail from '../components/blog/articleThumbnail'
import Layout from '../components/shared/layout'

export default function About() {
	return (
		<Layout>
			<section className="container-default mt-2 lg:mt-4 text-gray-600">
				<h1 className="sm:text-4xl text-3xl mb-8 text-center font-medium sm:leading-normal tracking-wide text-gray-900">
					CopDeck Blog
				</h1>
				<p className="max-w-md mx-auto mb-16 sm:mb-32 leading-relaxed font-regular text-center">
					Mission statement goes here Mission statement goes here Mission statement goes
					here Mission statement goes here Mission statement goes here
				</p>
			</section>
			<section className="container-default grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 content-center justify-center items-center my-12 lg:my-16">
				<ArticleThumbnail
					title="title title"
					description="this is an article, read it. this is an article, read it. this is an article, read it"
					imgName=""
				></ArticleThumbnail>
				<ArticleThumbnail
					title="title title"
					description="this is an article, read it. this is an article, read it. this is an article, read it"
					imgName=""
				></ArticleThumbnail>
				<ArticleThumbnail
					title="title title"
					description="this is an article, read it. this is an article, read it. this is an article, read it"
					imgName=""
				></ArticleThumbnail>
				<ArticleThumbnail
					title="title title"
					description="this is an article, read it. this is an article, read it. this is an article, read it"
					imgName=""
				></ArticleThumbnail>
				<ArticleThumbnail
					title="title title"
					description="this is an article, read it. this is an article, read it. this is an article, read it"
					imgName=""
				></ArticleThumbnail>
			</section>
		</Layout>
	)
}
