import app from '../app'
import supertest from 'supertest'
import {data} from '../utils/data'
import resizeImage from '../utils/resizeImage'
const request = supertest(app)

describe('Test the endpoint response', () => {
	it('test against the actual resize endpoint, with the correct URL and proper parameters', async () => {
		const res = await request.get(`/resize?name=img1&width=800&height=800`)
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
				'/home/louy/Documents/projects/udacity_first/src/images',
				'/home/louy/Documents/projects/udacity_first/src/images'
			)
		).toBeResolved()
	})
})
