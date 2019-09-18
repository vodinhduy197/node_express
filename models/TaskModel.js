let conn = require('../bin/db');

exports.getAllTasks = function() {
    let sql = "SELECT * FROM TASK";

    return new Promise(function(resolve, reject) {
        conn.query(sql, function(err, data) {
            if(err) {
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
}

exports.insertTask = function(newTask) {
    let sql = "INSERT INTO TASK(name) VALUE(?)";

    return new Promise(function(resolve, reject) {
        conn.query(sql, newTask, function(err, data) {
            if(err) {
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
}

exports.deleteTask = function(taskId) {
    let sql = "DELETE FROM task WHERE ID = ?";

    return new Promise(function(resolve, reject) {
        conn.query(sql, taskId, function(err, data) {
            if(err) {
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
}