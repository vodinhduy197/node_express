const {body, validationResult, param} = require('express-validator');

exports.validateInsertTask = [body('task', 'Chua nhap ten task').not().isEmpty(), 
    function(req, res, next)  {
        const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(422).json({ errors: errors.array() });
        //     // return;
        //   }

        if (!errors.isEmpty()) {
            var messages = [];
            errors.array().forEach(function(error){
                messages.push(error.msg);
            });
            
            req.flash('error', messages);

            return res.redirect('back');
        } else {
            next();
        }
    // return true;
}];

exports.validateDeleteTask = [param('taskId').exists(),
    function(req, res, next)  {
        const errors = validationResult(req);
        console.log(req.param.taskId);
        console.log(errors);

        if (!errors.isEmpty()) {
            // var messages = [];
            // errors.array().forEach(function(error){
            //     messages.push(error.msg);
            // });
            
            req.flash('error', 'id task không tồn tại');

            return res.redirect('back');
        } else {
            next();
        }
    // return true;
}];
