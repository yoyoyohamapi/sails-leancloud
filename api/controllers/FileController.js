/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var AV = require('leanengine');
// 设置模型
var FileTest = AV.Object.extend('FileTest');

module.exports = {
    upload: function (req, res) {
        // 获得表单文本域
        var name = req.param('name');
        var fileTest = new FileTest();
        var avFile;

        // 新建一个Buffer对象，用以缓存图像内容
        var buffer = new Buffer("");
        req.file('file').upload({
            // 上传文件时，每次读到buffer，写入文件
            saveAs: function (fs, cb) {
                avFile = new AV.File(fs.filename, fs.read());
                // 通过Promise规范串行化存储规范
                avFile.save()
                    .then(function (saved) {
                        fileTest.set('name', name);
                        fileTest.set('file', saved);
                        fileTest.save(null, {
                            success: function (fileTest) {
                                return res.json('上传成功');
                            },
                            error: function (err) {
                                return res.badRequest();
                            }
                        });
                    });
            }
        });
    }
};

