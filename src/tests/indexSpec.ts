import resizeImage from '../utils/resizeImage'
import path from 'path'

describe('Test image processing function', () => {
	it('Resolves successfully with right name / width / height', async (): Promise<void> => {
		await expectAsync(
			resizeImage(
				`img2`,
				'jpg',
				1000,
				1000,
				path.join(__dirname, '/../../src/images'),
				path.join(__dirname, '/../../src/images/thumbnails')
			)
		).toBeResolved()
	})
})
