module.exports = (req, res, next) => {
    try {
        if (req.photos.length > 1){
            return next(new Error('Upload one photo'));
        }
        req.avatar =  req.photos[0];
        next();
    }catch (e) {
        next(e)
    }
}