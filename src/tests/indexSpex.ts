import app from '../app'
import request from 'supertest'
import {data} from '../utils/data'

describe('Test the endpoint response', () => {
	it('test against the actual resize endpoint, with the correct URL and proper parameters', async (): Promise<void> => {
		const randomItem = Math.floor(Math.random() * data.length)

		const res = await request(app).get(
			`/resize?name=${data[randomItem]}&width=200&height=200`
		)
		expect(res.statusCode).toEqual(200)
	})
})
