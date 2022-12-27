import supertest from 'supertest'
import resizeRouter from '../routes/resizeRouter'
const request = supertest(resizeRouter)
describe('Test endpoint responses', () => {
	it('gets the api endpoint', async (done) => {
		const response = await request.get('/api')
		expect(response.status).toBe(200)
		done()
	})
})
