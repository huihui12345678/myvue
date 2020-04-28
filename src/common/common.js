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
		}
	}
	//获取数据类型
	 function typeOf(obj) {
        var type = Object.prototype.toString.call(obj);
        return type.replace("[object ", "").replace("]", "").toLowerCase();
    };
    //时间格式化
    function dateFormat(date, format) {
        format = format && format.toString().length > 0 ? format : "yyyy-MM-dd";
        if (date && format && date.toString().length > 0) {
            var x = date,
            y = format.toString();
            try {
                if (typeOf(x) !== "date") {
                    if (typeOf(x) == 'string') {
                        x = x.toString().replace(/-/g, "/");
                    }
                    x = new Date(x);
                }
                var z = {
                    M: x.getMonth() + 1,
                    d: x.getDate(),
                    h: x.getHours(),
                    m: x.getMinutes(),
                    s: x.getSeconds()
                };
                y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
                    return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
                });
                return y.replace(/(y+)/g, function(v) {
                    return x.getFullYear().toString().slice(-v.length)
                });
            } catch (e) {
                return "";
            }
        } else {
            return "";
        }
    };
   
// 获取url参数值   n为参数名

var getP = function(n) {
	var hrefstr, pos, parastr, para, tempstr;
	hrefstr = window.location.href;
	pos = hrefstr.indexOf("?");
	parastr = hrefstr.substring(pos + 1);
	para = parastr.split("&");
	tempstr = "";
	for (var i = 0; i < para.length; i++) {
		tempstr = para[i];
		pos = tempstr.indexOf("=");
		if (tempstr.substring(0, pos).toLowerCase() == n.toLowerCase()) {
			return tempstr.substring(pos + 1);
		}
	}
	return '';
};
// 对checkbox全选做简单封装。
// * @namespace jQuery扩展函数
// * @param {chkAllId} checkbox全选Id,{type} 被选checkbox name,
// * @return void
	
$.extend({
	checkboxAll:function(obj){
	var arr=[];			
	var checke = $('input[name="'+obj.type+'"]').length
	var checkBoxes = $('input[name="'+obj.type+'"]')			
	checkBoxes.click(function() {
			var _this=$(this)
	_this.each(function(){ 
		_this.is(":checked")&&arr.indexOf(_this.val())?arr.push(_this.val()):arr.splice(arr.indexOf(_this.val()),1);
	});
		arr.length===checke?$(obj.chkAllId).prop('checked', true):$(obj.chkAllId).prop('checked', false);	
	if (obj.callback) obj.callback(checkBoxes,$( obj.chkAllId),arr);
	});
	$( obj.chkAllId).click(function() { 
		arr=[];	
	var isCheck = $(this).is(":checked");       		
		$.each(checkBoxes, function() {
			arr.push($(this).val())	        		
			arr&&isCheck?arr.splice(2,0):arr=[]         			
			$(this).prop('checked', isCheck);				
				});  
				if (obj.callback) obj.callback(checkBoxes,$( obj.chkAllId),arr);
			});
	}
})		
})()
