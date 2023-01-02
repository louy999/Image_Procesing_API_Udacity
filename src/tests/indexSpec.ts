import resizeImage from '../utils/resizeImage'
import path from 'path'
import app from '../app'
import request from 'supertest'
import {data} from '../utils/data'

describe('Test the endpoint response', () => {
	it('test against the actual resize endpoint, with the correct URL and proper parameters', async (): Promise<void> => {
		const randomItem = Math.floor(Math.random() * data.length)

		const res = await request(app).get(
			`/resize?name=${data[randomItem]}&width=200&height=200`
		)
		expect(res.status).toEqual(200)
	})
})

describe('Test image processing function', () => {
	it('Resolves successfully with right name / width / height', async (): Promise<void> => {
		await expectAsync(
			resizeImage(
				`img2`,
				'jpg',
				1000,
				1000,
				path.join(__dirname, '/../images'),
				path.join(__dirname, '/../images/thumbnails')
			)
		).toBeResolved()
	})
})
