exports.notfound = function(req,res,next){
	res.status(404);
	res.render('Opss, página não encontrada');
};

exports.serverError = function(err, req, res, next) {  
	res.status(err.status || 500);
	res.render('404');
    // res.render('error', {
    //     message: err.message,
    //     error: {}
    // });  
};