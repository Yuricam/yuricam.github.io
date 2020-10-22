var testswf = '/jss/objtest.swf';
document.write ("<div id='testflashplayer'><OBJECT ID='testplayer' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0' width='10' height='10'>");document.write ("<PARAM NAME='movie' VALUE='" + testswf + "'>");document.write("<embed id='testplayer1' name='testplaye' src='" + testswf + "' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='10' height='10'></embed>");document.write ("<PARAM NAME='quality' VALUE='high'>");document.write ("</OBJECT></div>");
var flashenabled = 0;
var isiebrowser = 0;
function hasUsableFlash(){
    var flashObj;
    if(typeof window.ActiveXObject != "undefined"){
        flashObj= new  ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        isiebrowser = 1;
    }else{
        flashObj= navigator.plugins['Shockwave Flash'];
    }
    return flashObj? true : false;
}
var result= hasUsableFlash();

//没有检测到flash插件 chrome是直接检测不到插件 firefox是可以检测到但是无法加载内容
if(!result){
    //console.info("未检测到flash插件");
}else{
    if(isiebrowser==0){
        //console.info("检测到flash插件，非ie浏览器");
        //尝试调用flash内部的checkflash方法 每隔x秒读取一次
        var myTimer = function (callback) {
            //var trycount = 0;
            var testpoint = setInterval(function(){
                try{
                    flashenabled = document.getElementById("testplayer1").checkflash();
                    callback(1);
                    closetrips();
                    //console.info("尝试调用flash函数");
                    clearInterval(testpoint);
                }catch(e){  
                    //console.info("x毫秒重试");
                    //trycount++;
                }
            },300);
        }
        myTimer(function (val) {
            flashenabled = val;
        });
    }else{
        flashenabled = 1;//未干涉flash加载的浏览器
    }
}
function closetrips(){
    $("#flashshowtrip").hide();
}

if(flashenabled==0) {
    $("#middlediv,#left_box").prepend('<div id="flashshowtrip"><div id="flashshowtrip2" style="height: 28px;display:none;line-height: 28px;font-size:14px; text-align: center;color: #393939; background: #fffadd;border: 2px solid #fef6c9">4399温馨提示：游戏加载异常，可点击游戏区域开启flash插件，如果无法开启可按照<a href="/loadimg/flashopen.html" style="color: #f00;cursor:pointer;">指引</a>来解决。<a href="" style="color: #f00;cursor:pointer;" onclick="closetrips();return false;">关闭</a></div></div>');
    setTimeout(function(){$("#flashshowtrip2").fadeIn(1000);},1000);
}else{
    $("#testflashplayer").hide();
}