/*
 * @Author: Blues
 * @Description: require.js加载模块，调用模块和书写逻辑
 * @upDate: 2016-12-01 00:00:00
 */
require.config({
	//js模块的文件路径
	baseUrl:"js",		
	//加载模块
	paths:{
		jquery:"jquery/jquery",
		flip:"module/flip",
        browser:"module/browser"
	},
	shim:{
		"flip":["jquery"]
	},
	waitSeconds:0
});
require(["jquery","flip","browser"],function(jquery,flip,browser){
	jquery(function(){	

		//提示信息(单按钮)
		$(".btn1").on("click",function(e){		
			e.preventDefault();  
			flip.message("提示信息(单按钮)");
		});	

		//提示信息(双按钮)
		$(".btn2").on("click",function(e){		
			e.preventDefault();  
			flip.btnMsg("提示信息(双按钮)","取消",function(){
				console.log("回调");
			});
		});	

		//提示信息(无按钮)
		$(".btn3").on("click",function(e){		
			e.preventDefault();  
			flip.tips("提示信息(无按钮)");
		});	

		//多文字信息
		$(".btn4").on("click",function(e){		
			e.preventDefault();  
			var html = "<p>1、我是内容我是内容</p>";
			html += "<p>2、我是内容我是内容</p>";
			html += "<p>3、我是内容我是内容</p>";
			html += "<p>4、我是内容我是内容</p>";
			html += "<p>5、我是内容我是内容</p>";
			flip.htmlText("活动规则",html);
		});

        //表单
        $(".btn5").on("click",function(e){
            e.preventDefault();
            flip.formText("请输入表单信息",function(){
                alert("回调");
            });
        });

		//加载提示
		$(".btn6").on("click",function(e){
			e.preventDefault();  
			flip.loading("加载提示");
		});

        //环境判断
        $(".btn7").on("click",function(e){
            e.preventDefault();
            if (browser.versions.ios) {
                flip.message("IOS系统");
            } else if (browser.versions.android) {
                flip.message("Android系统");
            };
        });
        
	});
})
