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
			<section className="container-default grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 justify-center items-center my-12 lg:my-16">
				<div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
					<img
						className="object-cover  object-center rounded justify-self-center"
						alt="hero"
						src="https://dummyimage.com/378x453"
					/>

					<h3 className="font-semibold text-2xl tracking-wider mb-5 mt-6">
						Milan Lengyeltoti
					</h3>
					<h4 className="text-base mb-5 font-semibold uppercase text-blue-500 tracking-widest">
						Co-Founder & Marketing guru
					</h4>
					<p className="font-regular mb-8 text-left leading-relaxed tracking-wider w-4/5 lg:w-2/3">
						Here goes the founder’s note about why this is the best thing since sliced
						bread and why you’re passionate about this project. To learn more about us,
						visit the About page.{' '}
					</p>
					<SocialIcons></SocialIcons>
				</div>
				<div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
					<img
						className="object-cover  object-center rounded justify-self-center"
						alt="hero"
						src="https://dummyimage.com/378x453"
					/>

					<h3 className="font-semibold text-2xl tracking-wider mb-5 mt-6">
						Milan Lengyeltoti
					</h3>
					<h4 className="text-base mb-5 font-semibold uppercase text-blue-500 tracking-widest">
						Co-Founder & Marketing guru
					</h4>
					<p className="font-regular mb-8 text-left leading-relaxed tracking-wider w-4/5 lg:w-2/3">
						Here goes the founder’s note about why this is the best thing since sliced
						bread and why you’re passionate about this project. To learn more about us,
						visit the About page.{' '}
					</p>
					<SocialIcons></SocialIcons>
				</div>
			</section>
		</Layout>
	)
}
