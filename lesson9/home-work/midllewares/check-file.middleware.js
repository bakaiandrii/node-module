const {MAX_DOC_SIZE, MAX_PHOTO_SIZE, PHOTO_MIMETYPES, DOCS_MIMETYPES} = require('../config/constants')

module.exports = (req, res, next) => {
    try {

        console.log('---------------req.file-----------------');
        console.log(req.files);
        console.log('---------------req.file-----------------');

        if (!req.files) {
            return next();
        }

        const photos = [];
        const docs = [];

        const files = Object.values(req.files);

        for (let i = 0, len = files.length; i < len; i++) {
            const {size, name, mimetype} = files[i];

            if (PHOTO_MIMETYPES.includes(mimetype)) {
                if (size > MAX_PHOTO_SIZE) {
                    return next(new Error('Max size'));
                }
                photos.push(files[i]);
            } else if (DOCS_MIMETYPES.includes(mimetype)) {
                if (size > MAX_DOC_SIZE) {
                    return next(new Error('Max size'));
                }
                docs.push(files[i])
            } else {
                return next(new Error('NOT VALID FILE'));
            }

            req.photos = photos;
            req.docs = docs;

            next();
        }

    } catch (e) {
        next(e)
    }
}