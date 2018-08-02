function ajax({type,url,data,dataType,success}){
	//1. 获得xhr对象
	var xhr=new XMLHttpRequest();
	//2. 监听事件
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var res=xhr.responseText;
			if(dataType!==undefined
				&&dataType.toLowerCase()==="json")
				res=JSON.parse(res);
			success(res);
		}
	}
	//补: 如果data是对象形式，就转为字符串格式
	//data: "username=zhangdong&pwd=123456"
	//      {username:zhangdong,pwd:123456}
	if(typeof data==="object"){
		var arr=[];
		for(var key in data){
			arr.push(key+"="+data[key])
						//username=zhangdong
						//pwd=123456
		}
		data=arr.join("&");
	}
	//如果type是get，且data不为空，就拼到url末尾
	if(type.toLowerCase()=="get"&&data!=undefined)
		url+="?"+data;
	//3.打开连接
	xhr.open(type,url,true); 
	//4.发送请求
	if(type.toLowerCase()=="post")
		//增加：设置消息头
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	if(type.toLowerCase()=="get")
		xhr.send(null);
	else
		xhr.send(data);
}