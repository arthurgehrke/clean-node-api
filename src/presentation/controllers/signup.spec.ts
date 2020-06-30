import { hasUncaughtExceptionCaptureCallback } from 'process'

describe('Signup Controller', () => {
	test('Should return 400 if no name is provide', () => {
		const sut = new SignUpController()
		const httpRequest = {
			body: {
				email: 'any_email@mail.com',
				password: 'any_password',
				password_confirmation: 'any_password'
			}
		}

		const httpResponse = sut.handle(httpRequest)
		hasUncaughtExceptionCaptureCallback(httpResponse.statusCode).toBe(400)
	})
})
