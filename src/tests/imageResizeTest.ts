import resizeImage from '../utils/resizeImage'
import path from 'path'
describe('Test image processing function', () => {
	it('Throws found image error', async (): Promise<void> => {
		await expectAsync(
			resizeImage(
				'img1',
				'jpg',
				200,
				200,
				path.join(__dirname, '/../images'),
				path.join(__dirname, '../images/thumbnails/')
			)
		).toBeRejected()
	})

	it('Resolves successfully with right name / width / height', async (): Promise<void> => {
		await expectAsync(
			resizeImage(
				'img2',
				'jpg',
				200,
				200,
				path.join(__dirname, '/../images'),
				path.join(__dirname, '../images/thumbnails/')
			)
		).toBeResolved()
	})
})
