const FeatureBox = ({ title, description, imagename, children, className = '' }) => {
	return (
		<div className={`flex flex-col max-w-xs items-center ${className}`}>
			<img
				className="object-cover w-56 object-center rounded"
				src={`/images/${imagename}.png`}
				alt="Feature Preview"
			/>
			<div className="w-5/6 flex flex-row justify-center items-center mt-5 mb-4">
				<div className="h-9 w-9 text-theme-orange">{children}</div>
				<p className="font-medium text-lg text-white ml-4">{title}</p>
			</div>
			<p className="w-5/6 text-white">{description}</p>
		</div>
	)
}

export default FeatureBox
