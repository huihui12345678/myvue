	
//对checkbox全选做简单封装。
//@namespace jQuery扩展函数
//@param {chkAllId} checkbox全选Id,{type} 被选checkbox name,
//@return void
$.extend({
	checkboxAll:function(type,chkAllId,callback){
		var arr=[];			
		var checke = $('input[name="'+type+'"]').length
		var checkBoxes = $('input[name="'+type+'"]')
		checkBoxes.click(function() {
			$(this).each(function(){ 	        	
		    arr.push($(this).val());
		});
			arr.length===checke?$(chkAllId).prop('checked', true):$(chkAllId).prop('checked', false);	
		});				             	
		$( chkAllId).click(function() {
			var isCheck = $(this).is(":checked");
			$.each(checkBoxes, function() {
				$(this).prop('checked', isCheck);
					
			});        			       					
		});
		if (callback) callback(checkBoxes,$( chkAllId));
	}
})	
/**
 * 对ajax请求做了封装，统一项目的ajax请求。
 * @namespace jQuery扩展封装
 * @param {url} 请求的url地址
 * @param {params} JSON格式的参数,如{name:'abc','age':10}
 * @param {callback} 调用成功后回调函数,可不传
 * @return json数据
 */
;
$.extend({
	ajaxAsync: function(url, params , callback) {
		jQuery.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: params,
			async:true,
			success: function(data) {
				if (typeof callback == 'function') {
					callback(data);
				}
			},
			error: function() {
				alert('发生系统错误');
			},
			beforeSend: function() {
				// Handle the beforeSend event
			},
			complete: function() {
				// Handle the complete event
			}
		});
	},
	ajaxSubmit: function(url, params, callback) {
		jQuery.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: params,
			success: function(data) {
				if (typeof callback == 'function') {
					callback(data);
				}
			},
			error: function() {
				alert('发生系统错误');
			},
			beforeSend: function() {
				// Handle the beforeSend event
			},
			complete: function() {
				// Handle the complete event
			}
		});
	}
});
