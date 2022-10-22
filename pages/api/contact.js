import nodemailer from 'nodemailer';

export default function (req, res) {
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
		from: 'temp1@liambrewster.co.uk',
		to: 'liam@liambrewster.co.uk',
		replyTo: email,
		subject: `Webiste Message From ${name}`,
		text: message + ' | Sent from: ' + email,
		html: `<div>${message}</div><p>Sent from:
        ${req.body.email}</p>`,
	};
	transporter.sendMail(mailData, function (err, info) {
		if (err) {
			console.log(err);
		} else {
			console.log(info);
		}
	});
	return res.status(200);
}
