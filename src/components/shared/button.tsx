const Button = ({ name, style, clicked }) => {
	return (
		<button
			onClick={clicked}
			className={`button-default ${style === 'error' ? 'bg-red-500 hover:bg-red-600' : ''}`}
		>
			{name}
		</button>
	)
}

export default Button
