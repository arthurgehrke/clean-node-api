import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return as account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Developer',
        email: 'dev@dev.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
