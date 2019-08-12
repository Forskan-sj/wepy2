"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCache = setCache;
exports.getCache = getCache;
exports.removeCache = removeCache;
exports.showTos = showTos;

function setCache(key, value) {
  try {
    wx.setStorageSync(key, value);
  } catch (e) {}
}

function getCache(key) {
  try {
    var value = wx.getStorageSync(key);

    if (value) {
      return value;
    }
  } catch (e) {}
}

function removeCache(key, t) {
  wx.removeStorage({
    key: key
  }).then(t);
}

function showTos(msg) {
  wx.showToast({
    title: msg,
    icon: 'none'
  });
} // export function ht2xl(html) {
//   const temp = html.replace(/<div/g, '<view')
//     .replace(/<\/div>/g, '/view>')
//     .replace(/<p/g, '<view')
//     .replace(/<\/p>/g, '/view>')
//     .replace(/<span/g, '<text')
//     .replace(/\/span>/g, '/text>')
//     .replace(/↵/g, '')
//     .replace(/&mdash/g, '——')
//     .replace(/&ldquo;/g, '"')
//     .replace(/&rdquo;/g, ' ')
//   console.log(temp.split('/view>'))
//   // return
//     // .replace(/<div>/g, '<view>')
//     // .replace(/<div>/g, '<view>')
// }