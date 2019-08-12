"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wxapi;

var isFunc = function isFunc(v) {
  return typeof v === 'function';
};

function wxapi(type) {
  return new Promise(function (resolve, reject) {
    if (isFunc(wx[type])) {
      wx[type]({
        success: function success(data) {
          resolve(data);
        },
        failed: function failed(error) {
          reject(error);
        }
      });
    }
  });
}