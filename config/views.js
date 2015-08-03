/**
 * View Engine Configuration
 * (sails.config.views)
 *
 * Server-sent views are a classic and effective way to get your app up
 * and running. Views are normally served from controllers.  Below, you can
 * configure your templating language/framework of choice and configure
 * Sails' layout support.
 *
 * For more information on views and layouts, check out:
 * http://sailsjs.org/#!/documentation/concepts/Views
 */
var extras = require('swig-extras');
module.exports.views = {

    engine: 'swig',

    fn: function(path, data, db) {
        var swig = require('swig');
        // 开发环境下默认不缓存
        if (data.settigns.env === 'development') {
            swig.setDefaults({
                cache: false
            });
            /**
             * 设置一些常用路径
             */
            var paths = {
                scripts: '/js',
                style: '/styles/default',
                image: '/images',
                font: '/fonts',
                icon: '/icons',
                bower: '/bower_components'
            };

            if (!data.path) {
                data.path = paths;
            } else {
                for (var key in paths) {
                    if (!key in data.path) {
                        data.path[key] = paths[key];
                    }
                }
            }

            extras.useFilter(swig, 'split');
            return swig.renderFile(path, data, cb);
        }

    },



    layout: 'layout',

    partials: false


};