const Button = ({ name, clicked }) => {
	return (
		<button onClick={clicked} className="button-default">
			{name}
		</button>
	)
}

export default Button
