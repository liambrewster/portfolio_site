import nodemailer from 'nodemailer';
// TODO: add some route protection for SPAM
export default async (req, res) => {
	const { MAIL_PORT, MAIL_HOST, MAIL_USER, MAIL_PASSWORD } = process.env;
	const { name, email, message } = req.body;

	const transporter = nodemailer.createTransport({
		port: MAIL_PORT,
		host: MAIL_HOST,
		auth: {
			user: MAIL_USER,
			pass: MAIL_PASSWORD,
		},
		secure: true,
	});
	const mailData = {
		from: {
			name: `${name} - Website Contact`,
			address: MAIL_USER,
		},
		to: 'liam@liambrewster.co.uk',
		replyTo: email,
		subject: `Website Contact Message From ${name}`,
		text: message + ' | Sent from: ' + email,
		html: `<div>${message}</div><p>Sent from:
        ${email}</p>`,
	};
	await new Promise((resolve, reject) => {
		transporter.sendMail(mailData, function (err, info) {
			if (err) {
				reject(err);
			} else {
				resolve(info);
			}
		});
	});
	return res.status(200).end();
};
