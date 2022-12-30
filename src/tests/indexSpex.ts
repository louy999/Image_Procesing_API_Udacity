import supertest from 'supertest'
import resizeRouter from '../routes/resizeRouter'
const request = supertest(resizeRouter)
describe('Test endpoint responses', () => {
	it('gets the api endpoint', async (done) => {
		const response = await request.get('/resize')
		expect(response.status).toBe(200)
		done()
	})
})

import resizeImage from '../utils/resize_image'
const resizeImage = supertest(resizeImage)
describe('Tests for resizeImage function', () => {
	it('should be defined', () => {
		expect(resizeImage).toBeDefined
	})
})
