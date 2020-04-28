(function() {
	Util = {
		setLocalStorage: function(name, obj) {
			if (typeof obj == "object") {
				obj = JSON.stringify(obj)
			}
			localStorage.setItem(name, obj)
		},
		//获取缓存数据
		getLocalStorage: function(key) {
			var data;
			try {
				var obj = localStorage.getItem(key);
				data = JSON.parse(obj);
			} catch (e) {
				data = obj;
			}
			return data;
		},
		//清空缓存数据
		removeLocalStorage: function(key) {
			localStorage.removeItem(key)
		},
				setStorage: function(name, obj) {
			if (typeof obj == "object") {
				obj = JSON.stringify(obj)
			}
			sessionStorage.setItem(name, obj)
		},
		//获取缓存数据
		getStorage: function(key) {
			var data;
			try {
				var obj = sessionStorage.getItem(key);
				data = JSON.parse(obj);
			} catch (e) {
				data = obj;
			}
			return data;
		},
		//清空缓存数据
		removeStorage: function(key) {
			sessionStorage.removeItem(key)
		},
}
})()