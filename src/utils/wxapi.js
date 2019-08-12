var isFunc = function (v) {
  return typeof v === 'function'
}

export default function wxapi (type) {
  return new Promise((resolve, reject) => {
		if(isFunc(wx[type])) {
			wx[type]({
				success(data) {
					resolve(data)
				},
				failed(error) {
					reject(error)
				}
			})
		}
	})
}


