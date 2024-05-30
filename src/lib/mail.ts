import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendTwoFactorTokenEmail = async (
	email: string,
	token: string,
) => {
	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: email,
		subject: "2FA код",
		html: `<p>Ваш код: ${token}</p>`
	})
}
	const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendPasswordResetEmail = async (
	email: string,
	token: string,
) => {
	const resetLink = `${domain}/auth/new-password?token=${token}`
	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: email,
		subject: "Сброс пароля",
		html: `<p>Нажми <a href="${resetLink}">сюда</a>чтобы сбросить пароль.</p>`
	})
}

export const sendVerificationEmail = async (
	email: string,
	token: string
) => {
	const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: email,
		subject: "Confirm your email",
		html: `<p>Нажми <a href="${confirmLink}">сюда</a>чтобы подтвердить email.</p>`
	})
}