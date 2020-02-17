const Kraken = require('kraken');
let db = require('../models');
let fs = require('fs');


module.exports =  {
    saveImage: function (req, res, next) {
        const tempPath = req.file.path;
        const targetPath = path.join(__dirname, "./public/images/uploads/" + req.file.originalname);
    
        fs.rename(tempPath, targetPath, err => {
            if (err) {
                return next(err, req, res);
            }
            module.compressImage(targetPath, function(err, data){
                res
                .status(200)
                .contentType("text/plain")
                .json(data);
                });
        });
        
    },

    compressImage: function (path, next) {
        var kraken = new Kraken({
            api_key: process.env.KRAKEN_KEY,
            api_secret: process.env.KRAKEN_SECRET
        });
        var opts = {
            file: fs.createReadStream(path),
            wait: true
        };
        
        kraken.upload(opts, function (err, data) {
            if (err) {
                console.log('Failed. Error message: %s', err);

            } else {
                console.log('Success. Optimized image URL: %s', data.kraked_url);
            }
            next(err,data);
        });
    },

        
}