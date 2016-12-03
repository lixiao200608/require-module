//环境判断模块
define([], function() {
    var browser = {
        versions: function() {
            var u = navigator.userAgent;
            return {
                trident: u.indexOf("Trident") > -1,
                presto: u.indexOf('Presto') > -1,
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
                webkit: u.indexOf("AppleWebKit") > -1,
                mobile: !!u.match(/AppleWebKit.*Mobile.*/),
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
                iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1,
                iPad: u.indexOf("iPad") > -1,
                iPod: u.indexOf("iPod") > -1,
                weixin: u.indexOf("MicroMessenger") > -1 || u.indexOf("MQQBrowser") > -1,
                market: u.indexOf("baidubrowser") > -1 || u.indexOf("UBrowser") > -1 || u.indexOf("UCBrowser") > -1 || u.indexOf("UC") > -1 || u.indexOf("360SE") > -1 || u.indexOf("IUC") > -1,
            }
        }()
    };
    return browser;
    window.browser = browser;
});