import Link from 'next/link'

const LinkButton = ({ link, name }) => {
	return (
		<Link href={link}>
			<div className="button-default">{name}</div>
		</Link>
	)
}

export default LinkButton
