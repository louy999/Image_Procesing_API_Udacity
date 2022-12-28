import express, {Request, Response} from 'express'
import path from 'path'
import {getImageName, isImageAvailable} from '../utils'
import resizeImage from '../utils/resizeImage'
const resizeRouter = express.Router()

resizeRouter.get('/', async (req: Request, res: Response) => {
	const fileName = req.query.name && (req.query.name as string).split('.')[0]
	const fileExtension = (req.query.fileExtension as string) || 'jpg'
	const width = req.query.width as string

	const height = req.query.height as string
	if (!fileName) {
		return res.status(400).json({
			error: 'Please specify the file name',
		})
	}

	if (!width) {
		return res.status(400).json({
			error: 'Please specify width  values',
		})
	}
	if (!Number(width)) {
		return res.status(400).json({
			error: 'Please write width number',
		})
	}
	if (!height) {
		return res.status(400).json({
			error: 'Please specify height values',
		})
	}
	if (!Number(height)) {
		return res.status(400).json({
			error: 'Please specify height values',
		})
	}

	const imageAvailable = isImageAvailable(fileName + '.' + fileExtension)

	if (!imageAvailable) {
		return res.status(404).json({
			error: 'The requested image is not available',
		})
	}

	const fullFileName = getImageName(fileName, width, height, fileExtension)
	const requestedSizeAvailable = isImageAvailable(fullFileName)

	if (requestedSizeAvailable) {
		console.log('Image already available, returning cached image')
		return res
			.status(200)
			.sendFile(path.join(__dirname, '/../images/', fullFileName))
	}

	resizeImage(
		fileName,
		fileExtension,
		parseInt(width),
		parseInt(height),
		path.join(__dirname, '/../images'),
		path.join(__dirname, '../images/thumbnails/')
	)
		.then((filePath) => res.sendFile(filePath))
		.catch((error) => {
			console.log(error)
			res.json({
				error: 'Image could not be resized',
				success: false,
			})
		})
})

export default resizeRouter
