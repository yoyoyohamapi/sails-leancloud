/**
 * TodoController
 *
 * @description :: Server-side logic for managing Todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var AV = require('leanengine');
// 设置模型
var Todo = AV.Object.extend('Todo');
module.exports = {
    // 待做事项列表首页,显示列表
    index: function (req, res) {
        var query = new AV.Query(Todo);
        query.descending('createdAt');
        query.find({
            success: function (todos) {
                res.view(
                    'todo/index',
                    {
                        todos: todos
                    }
                );
            },
            error: function (err) {
                if (err.code === 101) {
                    // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
                    // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
                    res.view('todo/index', {
                        todos: []
                    });
                } else {
                    res.serverError();
                }
            }
        });
    },
    // 创建一条todo
    create: function (req, res) {
        var content = req.param('content');
        var todo = new Todo();
        todo.set('content', content);
        todo.save(null, {
            success: function(todo) {
                res.redirect('/todo');
            },
            error: function(err) {
                res.badRequest();
            }
        })
    }
};

