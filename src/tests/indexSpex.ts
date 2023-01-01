import app from '../app'
import {data} from '../utils/data'
import supertest from 'supertest'
const request = supertest(app)
describe('Test the endpoint response', () => {
	it('test against the actual resize endpoint, with the correct URL and proper parameters', async (): Promise<void> => {
		const randomItem = Math.floor(Math.random() * data.length)

		const res = await request.get(
			`/resize?name=${data[randomItem]}&width=200&height=200`
		)
		expect(res.statusCode).toEqual(200)
	})
})
