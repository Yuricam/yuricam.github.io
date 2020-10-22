function $s(i,a){$g(i).style.display=a?'':'none';}
function getCookie(name){var strCookies = document.cookie;var cookieName = name + "=";var valueBegin, valueEnd, value;valueBegin = strCookies.indexOf(cookieName);if (valueBegin == -1) return null;valueEnd = strCookies.indexOf(";", valueBegin);if (valueEnd == -1)valueEnd = strCookies.length;value = strCookies.substring(valueBegin+cookieName.length,valueEnd);return unescape(value);}
function setCookie (name, value) {var argv = setCookie.arguments;var argc = setCookie.arguments.length;var path = (argc > 2) ? argv[2] : null;var expireDays = (argc > 3) ? argv[3] : 365;var domain = (argc > 4) ? argv[4] : ".4399.com";var secure = (argc > 5) ? argv[5] : false;var date=new Date();date.setTime(date.getTime()+expireDays*24*3600*1000);deleteCookie (name);document.cookie = name + "=" +  escape(value) + ((expireDays == null) ? "" : ("; expires=" + date.toGMTString())) + ((path == null) ? "" : ("; path=" + path));}
//带domain参数的，针对news跨域情况处理
function setCookie2 (name, value) {var argv = setCookie2.arguments;var argc = setCookie2.arguments.length;var path = (argc > 2) ? argv[2] : null;var expireDays = (argc > 3) ? argv[3] : 365;var domain = (argc > 4) ? argv[4] : ".4399.com";var secure = (argc > 5) ? argv[5] : false;var date=new Date();date.setTime(date.getTime()+expireDays*24*3600*1000);deleteCookie (name);document.cookie = name + "=" +  escape(value) + ((expireDays == null) ? "" : ("; expires=" + date.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ";domain=4399.com";}
function deleteCookie (name) {  var exp = new Date();  exp.setTime (exp.getTime() - 1); var cval = getCookie (name); document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();}
var hsgames_length=30;
function gethsgames(mark){var c=getCookie(mark);if(!c)return new Array();var t=c.split("|||");if(t[0]!=="4399.com")return new Array();t.shift();return t}
function getlastgame(){var a=document.location;a=a.href.replace(a.hash,'').replace(a.search,'').replace('?','');var c=a.split("/");a=c[c.length-1];a=a.substr(0,a.length-4);var b=[title,a];return b}
function ordergame(h){var c=new Array();for(var i in h){var ogame=h[i].split("||");c[i]=ogame}return c.sort(function(a,b){return b[2]-a[2]})}
function sethscookie(){var a=getlastgame();var b=gethsgames("cookie_hs");var c=false;for(var i in b){var ohsgame=b[i].split("||");if(ohsgame.slice(0,2).join()==a.join()){ohsgame[2]++;b[i]=ohsgame.join("||");c=true;break}}if(!c){a.push("0");b.unshift(a.join("||"));if(b.length>hsgames_length)b.pop()}b.unshift("4399.com");var d=b.join("|||");setCookie('cookie_hs',d,'/',999999)}
var wwwnum = 25;//限制www的显示25个
var svid = getCookie("_4399stats_vid");
function showlink(str){
	var strGamePic;
	var intid = 0;
	if(!isNaN(str)){
		intid = parseInt(str);
	}else if(!isNaN(str.replace("_",""))){
		intid = parseInt(str.split("_")[0]);
	}
	if (intid == 0){
		str = str.replace("indexhtml","").replace("indexhtm","").replace("indexphp","");
		if(str.indexOf("ssjj4399com")!=-1){str="ssjj4399com";}
		if(str.indexOf("lds4399com")!=-1){str="lds4399com";}
		if(str.indexOf("news4399comcsbh")!=-1){str="news4399comcsbh";}
		if(str.indexOf("xp4399com")!=-1){str="xp4399com";}
		if(str.indexOf("sjsj4399com")!=-1){str="sjsj4399com";}
		if(str.indexOf("news4399comhxjy")!=-1){str="news4399comhxjy";}
		if(str.indexOf("news4399comaoqi")!=-1){str="news4399comaoqi";}
		if(str.indexOf("my4399comyxpm")!=-1){str="my4399comyxpm";}
		if(str.indexOf("news4399comtank")!=-1){str="news4399comtank";}
		if(str.indexOf("news4399comjlp")!=-1){str="news4399comjlp";}
		if(str.indexOf("my4399comyxmsdzls")!=-1){str="my4399comyxmsdzls";}		
		strGamePic = "http://imga999.5054399.com/upload_pic/minilogo/"+str+".jpg";
	}else{
		var sx = (intid % 5) + 1;
		strGamePic = "http://imga"+sx+".5054399.com/upload_pic/minilogo/"+intid+".jpg";
	}
	return strGamePic;
}
function statPlayed(f){try{new Image().src = "http://played.5054399.com/trace.js?from="+f;}catch(ex){}return true;}
function readid(str){var stater = str;if(!isNaN(str)){stater = parseInt(str);}else if(!isNaN(str.replace("_",""))){stater = str.split("_")[0];}return stater;}
//处理www的
function editCookie(deleteid,sname){var aa = confirm("确实要删除 "+sname+" 的游戏记录吗?");if(aa==true){var a="4399.com";var b=ordergame(gethsgames("cookie_hs"));if(b.length>0){for(var i in b){if(b[i][1]!=deleteid){if(a==""){a=b[i][0]+"||"+b[i][1]+"||"+b[i][2];}else{a=a+"|||"+b[i][0]+"||"+b[i][1]+"||"+b[i][2];}}}}setCookie('cookie_hs',a,'/',999999);showhsgames();}}
$("#hscontentdiv a").live("mouseenter",function(){$("#hscontentdiv span").removeClass('clo');$(this).next("span").addClass('clo');});
//处理news的
function isIE6(){return !!window.ActiveXObject && !window.XMLHttpRequest;}
function editCookie2(deleteid,sname){var aa = confirm("确实要删除 "+sname+" 的游戏记录吗?");if(aa==true){var a="4399.com";var b=ordergame(gethsgames("global_hs"));if(b.length>0){for(var i in b){var simplelink = b[i][1].replace(/\//g,"").replace(/\./g,"");if(simplelink!=deleteid){if(a==""){a=b[i][0]+"||"+b[i][1]+"||"+b[i][2];}else{a=a+"|||"+b[i][0]+"||"+b[i][1]+"||"+b[i][2];}}}}setCookie2('global_hs',a,'/',999999);showhsgames();}}
var hsfast=false;
var laststr = "-1";
function showhsgames(){
	var a="";
	var wwwi = 0;
	var b=gethsgames("cookie_hs");
	var mynews = gethsgames("global_hs");
	var combins = ordergame(b.concat(mynews));
	if(combins.length>0){
		$("#hscontentdiv span").removeClass('clo');
		for(var combin in combins){
			var slink = combins[combin][1];
			var sname = combins[combin][0];
			if(slink && sname){
				if(slink.indexOf("4399.com")>=0){
					var simplelink = slink.replace(/\//g,"").replace(/\./g,"");
					var hsgamelink="http://"+slink;
					var controlname = 'close'+simplelink;
					hsgamelink = hsgamelink.replace("..",".");
					a+="<a href='"+hsgamelink+"' title='玩了"+(++combins[combin][2])+"次,鼠标点击右侧删除图标可以从记录中删掉此游戏记录' onclick='return statPlayed(\""+svid+"_"+readid(simplelink)+"\");'><img src='"+showlink(simplelink)+"' onerror='this.src=\""+img404()+"\"'/>"+combins[combin][0]+"</a><span onclick='editCookie2(\""+simplelink+"\",\""+sname+"\")' id='"+controlname+"'>&nbsp;</span>";
				}else{
					if(wwwi<wwwnum){
						var hsgamelink=slink;
						var controlname = 'close'+slink;
						if(hsgamelink){
							if(hsgamelink.indexOf("_")){
								var hsgamelinks = hsgamelink.split("_");
								if(hsgamelinks.length>0){
									hsgamelink = hsgamelinks[0];
								}
							}
						}
						hsgamelink = hsgamelink.replace("aa","");
						hsgamelink += '.htm';
						hsgamelink = hsgamelink.replace("..",".");
						a+="<a href='/flash/"+hsgamelink+"' title='玩了"+(++combins[combin][2])+"次,鼠标点击右侧删除图标可以从记录中删掉此游戏记录' onclick='return statPlayed(\""+svid+"_"+readid(slink)+"\");'><img src='"+showlink(slink)+"' onerror='this.src=\""+img404()+"\"'/>"+combins[combin][0]+"</a><span onclick='editCookie(\""+slink+"\",\""+sname+"\")' id='"+controlname+"'>&nbsp;</span>";
					}
					wwwi++;
				}
			}
		}
		$g('myhistory').style.display='block';
		var nowstr = '<div id="hscontentdiv">'+a+'</div>';
		if(laststr!=nowstr){
			$g('hscontent').innerHTML=nowstr;
			laststr = nowstr; 
		}
		if($g('hscontent').scrollWidth>$g('hscontent').offsetWidth){
			$g('hscontent').style.width=($g('myhistory').offsetWidth-220)+"px";
			$s('hsb',1);
		}else{
			$s('hsb',0);//fix bug
		}
	}else{
		$g('myhistory').style.display='none';
	}
	$g('hsl').onmouseover=function(){hsm(1,0)};
	$g('hsl').onmouseout=function(){hsm(1,1)};
	$g('hsl').onmousedown=function(){hsfast=true};
	$g('hsl').onmouseup=function(){hsfast=false};
	$g('hsr').onmouseover=function(){hsm(0,0)};
	$g('hsr').onmouseout=function(){hsm(0,1)};
	$g('hsr').onmousedown=function(){hsfast=true};
	$g('hsr').onmouseup=function(){hsfast=false};
	window.setTimeout(function(){showhsgames()},5000);
}
function img404(){return "http://imga.5054399.com/upload_pic/minilogo/def.jpg";}
function hsm(f,s){if($g('hscontent').scrollLeft=="0"){if($g('hsl').className=="hsl-y"){$g('hsl').className="hsl-n";}}else{if($g('hsl').className=="hsl-n"){$g('hsl').className="hsl-y";}}if($g('hscontent').scrollLeft+$g('hscontent').offsetWidth>=$g('hscontent').scrollWidth){if($g('hsr').className=="hsr-y"){$g('hsr').className="hsr-n";$(".mask-p").css("display","none");}}else{if($g('hsr').className=="hsr-n"){$g('hsr').className="hsr-y";if(!isIE6()){$(".mask-p").css("display","block");}}}if(s){clearTimeout(hst);}else{$g('hscontent').scrollLeft+=hsfast?f?-10:10:f?-3:3;hst=window.setTimeout(function(){hsm(f,s)},20)}}
function hsClear(){if (confirm("确定清空‘我玩过的游戏’吗？")){setCookie('cookie_hs','','/',999999);setCookie2('global_hs','','/',999999);$g('myhistory').style.display='none';}}
if(typeof(title)!="undefined")sethscookie();
showhsgames();