import fs from 'fs'
import path from 'path'

export function isImageAvailable(fileName = ''): boolean {
	if (fileName.length === 0) return false

	const filePath = path.join(__dirname, '../images', `${fileName}`)

	console.log('Checking the availability of: ', filePath)

	try {
		if (fs.existsSync(filePath)) {
			return true
		}
	} catch (err) {
		console.error(err)
		return false
	}

	return false
}

export function getImageName(
	fileName: string,
	width: string | number,
	height: string | number,
	fileExtension = 'jpg'
): string {
	return `${fileName}_${width}_${height}.${fileExtension}`
}
