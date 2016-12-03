# require-module
主要使用require.js进行模块化开发和加载模块。
## 现有模块
flip弹窗模块、brower环境模块
## 页面引入js
```
<script type="text/javascript" src="js/require/require.min.js" data-main="js/main"></script>
```
## 配置
```
require.config({
//js模块的文件路径
baseUrl:"js",
//加载模块
paths:{
jquery:"jquery/jquery",
flip:"module/flip"
browser:"module/browser"
},
//依赖
shim:{
"flip":["jquery"]
},
waitSeconds:0
});
require(["jquery","flip"],function(jquery,flip){
//逻辑
});
```
## API

>```
filp
1.message 提示信息(单按钮)
2.btnMsg 提示信息(双按钮)
3.tips 提示信息
4.htmlText 多文字信息
5.formText 表单
6.loading 加载提示
```
例子：
无回调：filp.message("我是内容")
有回调：filp.message("我是内容",function(){ ... })
