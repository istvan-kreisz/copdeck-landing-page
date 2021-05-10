const FeatureBox = ({ title, description, imagename, children }) => {
	return (
		<div className="flex flex-col max-w-xs items-center">
			<img
				className="object-cover object-center rounded"
				src={`/images/${imagename}.png`}
				alt="Feature Preview"
			/>
			<div className="w-5/6 flex flex-row justify-center items-center mt-5 mb-6">
				<div className="h-9 w-9 text-yellow-500">{children}</div>
				<p className="font-medium text-lg text-white ml-4">{title}</p>
			</div>
			<p className="w-11/12 font-medium text-white">{description}</p>
		</div>
	)
}

export default FeatureBox
