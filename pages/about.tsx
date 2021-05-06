/* This example requires Tailwind CSS v2.0+ */
import LinkButton from '../components/shared/linkButton'
import SocialIcons from '../components/shared/socialIcons'
import Layout from '../components/shared/layout'

export default function Example() {
	const signupClicked = () => {
		console.log('clicked')
	}

	return (
		<Layout>
			<section className="container-default mt-2 lg:mt-4 text-gray-600">
				<h1 className="sm:text-4xl text-3xl mb-4 font-medium sm:leading-normal tracking-wide text-gray-900">
					Meet the team
				</h1>
				<p className="mb-8 leading-relaxed font-regular sm:mb-20">
					Mission statement goes here Mission statement goes here Mission statement goes
					here Mission statement goes here Mission statement goes here Mission statement
					goes here Mission statement goes here Mission statement goes here Mission
					statement goes here Mission statement goes here
				</p>
			</section>
			<section></section>
		</Layout>
	)
}
