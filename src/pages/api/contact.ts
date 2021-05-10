import { VercelRequest, VercelResponse } from '@vercel/node'

export default async (req: VercelRequest, res: VercelResponse) => {
	const nodemailer = require('nodemailer')

	const transporter = nodemailer.createTransport({
		host: 'smtp.zoho.eu',
		port: 587,
		secure: false,
		auth: {
			user: process.env.CONTACT_EMAIL,
			pass: process.env.CONTACT_EMAIL_PASSWORD,
		},
	})

	try {
		const result = await new Promise((resolve, reject) => {
			// cors(req, res, () => {
			const mailOptions = {
				from: process.env.CONTACT_EMAIL,
				to: `${process.env.CONTACT_EMAIL}, ${''}`,
				subject: `CopDeck Message`,
				html: `<p style="font-size: 16px;">${req.body.message}</p>
                <br />
                <br />
                <br />
                ------------
                <br />
                From:
                <br />
                email: ${req.body.email}
            `,
			}

			transporter.sendMail(mailOptions, (err) => {
				if (err) {
					reject({ err: err?.toString() })
				} else {
					resolve({})
				}
			})
			// })
		})
		res.status(200).json(result)
	} catch (err) {
		res.status(400).send({ error: err.toString() ?? 'Unknown Error' })
	}
}
