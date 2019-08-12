export function setCache(key, value) {
  try {
    wx.setStorageSync(key, value)
  } catch (e) { }
}

export function getCache(key) {
  try {
    var value = wx.getStorageSync(key)
    if (value) {
      return value
    }
  } catch (e) {
  }
}

export function removeCache(key, t) {
  wx.removeStorage({ key }).then(t)
}

export function showTos(msg) {
  wx.showToast({
    title: msg,
    icon: 'none'
  })
}

// export function ht2xl(html) {
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
