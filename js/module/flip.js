//模块(依赖jquery)
define(["jquery"], function(jquery) {

	//弹窗样式
	var flipCss=".flip{display:none;position:fixed;left:0;top:0;z-index:1000;width:100%;height:100%}.flip-bg{position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.6)}.flip-body{position:absolute;left:50%;top:50%;z-index:1000;width:300px;padding:20px;background:#fff;border-radius:6px;-webkit-border-radius:6px;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);font-size:14px;color:#333;font-family:Microsoft Yahei;}.title{text-align:center;font-size:24px;color:#333;font-weight:700;border-bottom:1px solid #ccc;margin-bottom:20px;padding-bottom:15px}.flip-text{line-height:28px;margin-bottom:20px;text-align:center}.btn-con{width:100%;text-align:center;font-size:16px}.btn-con a{padding:8px 0;display:block;background:#1493D9;color:#fff;text-decoration:none;border-radius:6px;-webkit-border-radius:6px}.btn-two a{display:inline-block;width:42%;margin:0 3%}.loading{display:none;position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.6)}.load-cont{position:absolute;left:50%;top:50%;z-index:1000;width:300px;padding:20px;background:#fff;border-radius:6px;-webkit-border-radius:6px;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);font-size:14px;color:#333;font-family:Microsoft Yahei;}.load-icon{position:relative;margin:0 auto 10px;width:30px;height:30px}.load-icon div{position:absolute;left:0;top:0;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both}.load-icon div:first-child{background:#ed5565;height:10px;width:10px;top:12px;left:12px;-webkit-animation:scale 1s 0s cubic-bezier(.09,.57,.49,.9) infinite;animation:scale 1s 0s cubic-bezier(.09,.57,.49,.9) infinite}.load-icon div:last-child{border:2px solid #ed5565;height:30px;width:30px;border-color:#ed5565 transparent #ed5565 transparent;-webkit-animation:rotate 1s 0s cubic-bezier(.09,.57,.49,.9) infinite;animation:rotate 1s 0s cubic-bezier(.09,.57,.49,.9) infinite}.pop-rult{font-size:14px;line-height:28px;}.pop-rult h2{text-align:center;font-size:18px;border-bottom:1px solid #ccc;margin-bottom:15px;padding-bottom:15px;}@keyframes scale{30%{-webkit-transform:scale(.3);transform:scale(.3)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes rotate{0%{-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1)}50%{-webkit-transform:rotate(180deg) scale(.6);transform:rotate(180deg) scale(.6)}100%{-webkit-transform:rotate(360deg) scale(1);transform:rotate(360deg) scale(1)}}.load-tet{text-align:center}.flip-tips{position:absolute;left:50%;top:50%;width:70%;line-height:28px;padding:15px 10px;color:#e33e00;background:rgba(0,0,0,.6);text-align:center;font-size:18px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);animation:bounceInUp .6s ease both;-webkit-animation:bounceInUp .6s ease both;-moz-animation:bounceInUp .6s ease both;}@-webkit-keyframes bounceInUp{0%{opacity:0;top:45%;}100%{opacity:1;top:50%;}}@-moz-keyframes bounceInUp{0%{opacity:0;top:45%;}100%{opacity:1;top:50%;}}@keyframes bounceInUp{0%{opacity:0;top:45%;}100%{opacity:1;top:50%;}}";
	
	//创建style标签并插入
	var b = document.createElement("style");
	if (document.getElementsByTagName("head")[0].appendChild(b), b.styleSheet) {
		b.styleSheet.disabled || (b.styleSheet.cssText = flipCss);
	} else try {
		b.innerHTML = flipCss
	} catch (c) {
		b.innerText = flipCss
	};

	//插入弹窗html结构
	$(document.body).append("<div class='flip'><div class='flip-bg'></div><div class='flip-body'></div></div>");

	//弹框模块	
	var flip ={		
		flipFrame:$(".flip"),
		flipBg:$(".flip-bg"),
		flipBody:$(".flip-body"),
		filpBtn:$(".confirm"),
		//初始化按钮点击事件
		initial: function() {
			flip.flipBg.on("click",function(){
				flip.closeFlip();
			});
			$("#confirm").on("click",function(){
				flip.closeFlip();
			});			
		},
		//提示信息(单按钮)
		message: function(text,callback) {
			if (text != null && text != undefined && text != "undefined") {
				flip.flipBody.html("<div class='title'>温馨提示</div><div class='flip-text'>"+text+"</div><div class='btn-con'><a href='javascript:void(0);' id='confirm'>确定</a></div>");
				flip.flipFrame.show();
				flip.initial();	
				$("#confirm").off("click").on("click", function() {
					flip.closeFlip();
					if (callback != null && callback != undefined && callback != "" && callback != "undefined") {
						callback();
					};
				});				
			};
		},
		//提示信息(双按钮)
		btnMsg: function(text,btnTxt,callback) {
			if (text != null && text != undefined && text != "undefined") {
				flip.flipBody.html("<div class='title'>温馨提示</div><div class='flip-text'>"+text+"</div><div class='btn-con btn-two'><a href='javascript:void(0);' id='confirm'>确定</a><a href='javascript:void(0);' id='doFunction'>"+btnTxt+"</a></div>");
				flip.flipFrame.show();
				flip.initial();	
				$("#doFunction").off("click").on("click", function() {
					flip.closeFlip();					
					if (callback != null && callback != undefined && callback != "" && callback != "undefined") {
						callback();
					};
				});			
			};
		},
		//提示信息(无按钮)
		tips: function (text) {
			if (text != null && text != undefined && text != "undefined") {
				flip.flipFrame.append("<div class='flip-tips'>"+text+"</div>");
				flip.flipBg.hide();
				flip.flipBody.hide();
				flip.flipFrame.show();
				setTimeout(function() {
					flip.closeTips();
				},2000);				
			};	
		},
		//多文字信息
		htmlText: function(title,text,callback){
			flip.flipBody.html("<div class='pop-rult'><h2>"+title+"</h2></div>");
			flip.flipBody.find(".pop-rult").append(text);
			flip.flipFrame.show();
			flip.initial();				
		},
		//加载提示
		loading: function(text){
			if (text != null && text !=undefined && text != "undefined") {
				flip.flipFrame.after("<div class='loading'><div class='load-cont'><div class='load-icon'><div></div><div></div></div><p class='load-tet'>"+text+"</p></div></div>");
				$(".loading").show();					
			};
		},						
		//关闭弹窗
		closeFlip:function(){
			flip.flipFrame.hide();
			flip.flipBody.html("");
		},
		//自动关闭提示
		closeTips:function(){
			flip.flipFrame.hide();	
			flip.flipBg.show();		
			flip.flipBody.show();		
			flip.flipFrame.find(".flip-tips").remove()
		},
		//关闭加载
		closeLoading:function(){
			$(".loading").hide().html("");					
		}
	}  
    return flip;
});