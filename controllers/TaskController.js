let task = require('../models/TaskModel');
const {validationResult} = require('express-validator');
exports.index = function (req, res) {
    task.getAllTasks()
        .then((result) => {
            res.render('index', {result: result, success: req.flash('success'), errors: req.flash('error')});
        })
        .catch((err) => {
            req.flash('error', err);
        })
}

exports.insert = function (req, res) {
    let newTask = req.body.task;
    
    task.insertTask(newTask)
        .then((result) => {
            // console.log(result);
            req.flash('success', "Thêm thành công");
        })
        .catch((err) => {
            console.log(err);
            req.flash('error', "Thêm thất bại");
        })
        .finally(() => {
            res.redirect('back');
        })

}

exports.delete = function(req, res) {
    let taskId = req.params.taskId;

    task.deleteTask(taskId)
        .then((result) => {
            // console.log(result);
            req.flash('success', "Xóa thành công");
        })
        .catch((err) => {
            req.flash('error', 'Xóa thất bại');
        })
        .finally(() => {
            res.redirect('back');
        })
}