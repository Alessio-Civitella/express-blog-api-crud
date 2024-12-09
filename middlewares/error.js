const Error = (err, req, res, next) => {
    res.statusCode = 500;
    res.json({
        error : true,
        message : "Errore del server!"
    })
    };
    
    module.exports = Error;