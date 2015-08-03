/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
  // 项目启动时加载leancloud
  var AV = require('leanengine');
  AV.initialize(
      sails.config.leancloud.APP_ID,
      sails.config.leancloud.APP_KEY,
      sails.config.leancloud.MASTER_KEY);
  cb();
};
