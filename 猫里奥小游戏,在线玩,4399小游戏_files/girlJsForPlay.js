function strlen(str){var i;var len = 0;for (i=0;i<str.length;i++) if (str.charCodeAt(i)>255) len+=2; else len++;return len;}
function checksearch(obj) {if (obj.k.value=="" || obj.k.value=="����С��Ϸ"){obj.k.className = "s-tex";obj.k.value="";alert("�����������ؼ���.");obj.k.focus();return false;}if (strlen(obj.k.value)<2){alert("�ؼ��ֲ�������2���ֽ�.");obj.k.focus();return false;}}
function deleteCookie (name) {  var exp = new Date();  exp.setTime (exp.getTime() - 1); var cval = getCookie (name); document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();}
function chkSosmart(){if(D("smart_input").value=="����С��Ϸ"){D("smart_input").value = "";}D("smart_input").className = "s-tex";}
function AddFav(strFileName,strWindow,strTitle){if (strFileName==""){strFileName = location.pathname.toString();strFileName = strFileName.substr(strFileName.lastIndexOf('/')+1);strFileName = strFileName.substring(0,strFileName.lastIndexOf("."))}if(window.sidebar){window.sidebar.addPanel(strTitle+',4399С��Ϸ www.4399.com','http://www.4399.com/flash/'+strFileName+'.htm','');}else{try{window.external.AddFavorite('http://www.4399.com/flash/'+strFileName+'.htm',strTitle+',4399С��Ϸ www.4399.com');}catch(e){alert("�����������֧�ָù���,��ʹ��Ctrl+D�ղر�ҳ");}}}
function down_win(intFlashId){try{new Image().src = "http://adtrace.5054399.com/click.js?from=play_sjyx";}catch(ex){}window.open('/down/'+intFlashId+'.htm','','');}
function setCookie(name,value){var Days = 30;var exp = new Date();exp.setTime(exp.getTime() + Days*24*60*60*1000);document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();}
function getCookie(name){var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg)) return unescape(arr[2]);else return null;}
function getCookie_u(name){var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg)) return arr[2];else return null;}
function get_scrheight(){if(self.innerHeight){return self.innerHeight;}else if(document.documentElement && document.documentElement.clientHeight){return document.documentElement.clientHeight;}else if(document.body){return document.body.clientHeight;}}//��ȡ�û���������ĸ�
function isIE6(){return !!window.ActiveXObject && !window.XMLHttpRequest;}
function isIE(){return 	!!window.ActiveXObject;}
function getFlashObj(){if(isIE()){return D("flashgame");}else{return D("flashgame1");}}
function getTop(e){var offset=e.offsetTop;if(e.offsetParent!=null) offset+=getTop(e.offsetParent);return offset;}
function GoToPL(){var objBestPosition = D("pl");if(isIE6()){var intBestPosition = parseInt(getTop(objBestPosition));}else{var intBestPosition = parseInt(getTop(objBestPosition))-40;} window.scrollTo(0,intBestPosition);if(pltnum<3){setTimeout(GoToPL,500);pltnum++;}}
function gotovideo(){var objBestPosition = D("videolist");if(isIE6()){var intBestPosition = parseInt(getTop(objBestPosition));}else{var intBestPosition = parseInt(getTop(objBestPosition))-40;}window.scrollTo(0,intBestPosition);if(pltnum<3){setTimeout(gotovideo,500);pltnum++;}}
function GetSize(w, h, m){var t;if(m == "w"){t = parseInt(_w * h/_h);return t;}else{t = parseInt(w * _h/_w);return t;}}
function get_screen_height(){return $(window).height();}
function get_screen_width(){return $(window).width();}
function getOs(){if(D("flashgame1")){return 1;}else{return 0;}}
function isNullObj(obj){for(var i in obj){if(obj.hasOwnProperty(i)){return false;}}return true;}

$(".textnote").click(function(){if($(".textnote").html().toLowerCase()=="<em>չ���鿴����</em>"){$(".textnote").html("<em>�������</em>");$("#p-tex").show();$(this).removeClass('more').addClass('put');}else{$(".textnote").html("<em>չ���鿴����</em>");$("#p-tex").hide();$(this).removeClass('put').addClass('more');}return false;});
$(".videonote").click(function(){if($(".videonote").html().toLowerCase()=="<em>չ���鿴����</em>"){$(".videonote").html("<em>�������</em>");$(".hv").show();$(this).removeClass('more').addClass('put');}else{$(".videonote").html("<em>չ���鿴����</em>");$(".hv").hide();$(this).removeClass('put').addClass('more');}return false;});
$(".versionnote").click(function(){if($(".versionnote").html().toLowerCase()=="<em>չ���鿴����</em>"){$(".versionnote").html("<em>�������</em>");$(".hgv").show();$(this).removeClass('more').addClass('put');}else{$(".versionnote").html("<em>չ���鿴����</em>");$(".hgv").hide();$(this).removeClass('put').addClass('more');}return false;});

//�·�����Ϸ�Ҳ�������ص�����³��ֵ�����
var jsrelatedgameIndex = 0;
var jswebgameIndex = 0;
var arr_relatedgame = new Array();
var arr_relatewebgame = new Array();

$("#jschanger a").each(function(index){
	$(this).mouseenter(function(){
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
		if(index==0){
			$("#jsrelatedgame").show();
			$("#jswebgame").hide();
		}else{
			$("#jsrelatedgame").hide();
			$("#jswebgame").show();
		}
	}).click(function(){
		return false;
	});
});

$("#jsrelatedgame a").click(function(){
	jsrelatedgameIndex++;
	if(jsrelatedgameIndex>arr_relatedgame.length-1){jsrelatedgameIndex=0;}
	showOneRelatedgame(arr_relatedgame[jsrelatedgameIndex]);
	return false;
});

$("#jswebgame a").click(function(){
	jswebgameIndex++;
	if(jswebgameIndex>arr_relatewebgame.length-1){jswebgameIndex=0;}
	showOneRelatedwebgame(arr_relatewebgame[jswebgameIndex]);
	return false;
});

function showjsrelatedgame(){
	var html = $("#relatedcontent ul li a").each(function(index){
		var link = $(this).attr("href");
		var img = $(this).find("img").attr("src");
		var title = $(this).find("img").attr("alt");
		var arr_one = new Array();
		arr_one['title'] = title;
		arr_one['img'] = img;
		arr_one['link'] = link;
		arr_relatedgame.push(arr_one);
	});
	//���ÿ6��һ��
	arr_relatedgame = array_chunk(arr_relatedgame,6);
	//��ʾ��һ��
	showOneRelatedgame(arr_relatedgame[0]);
}
function showOneRelatedgame(arr){
	var html = "";
	for(var a=0;a<arr.length;a++){
		html += '<li><a href="'+arr[a]['link']+'"><img alt="'+arr[a]['title']+'" src="'+arr[a]['img']+'">'+arr[a]['title']+'</a></li>';
	}
	$("#jsrelatedgame ul").html(html);
}

function showjswebgame(){
	var html = $("#webgamecontent ul li a").each(function(index){
		var link = $(this).attr("href");
		var img = $(this).find("img").attr("lz_src");
		var title = $(this).find("img").attr("alt");
		var arr_one = new Array();
		arr_one['title'] = title;
		arr_one['img'] = img;
		arr_one['link'] = link;
		arr_relatewebgame.push(arr_one);
	});
	//���ÿ6��һ��
	arr_relatewebgame = array_chunk(arr_relatewebgame,6);
	//��ʾ��һ��
	showOneRelatedwebgame(arr_relatewebgame[0]);
}
function showOneRelatedwebgame(arr){
	var html = "";
	for(var a=0;a<arr.length;a++){
		html += '<li><a href="'+arr[a]['link']+'"><img alt="'+arr[a]['title']+'" src="'+arr[a]['img']+'">'+arr[a]['title']+'</a></li>';
	}
	$("#jswebgame ul").html(html);
}
showjsrelatedgame();
showjswebgame();

//JSģ�������
var scrollMoveObj = null, scrollPageY = 0, scrollY = 0;
var scrollDivList = new Array();
function jsScroll(obj, w, className){if(typeof(obj) == 'string')	{obj = D(obj);}if(!obj || obj.scrollHeight <= obj.clientHeight || obj.clientHeight == 0) {return;}obj.scrollBarWidth = w||6;obj.style.overflow = 'hidden';obj.scrollBar = document.createElement('div');document.body.appendChild(obj.scrollBar);obj.scrollBarIndex = document.createElement('div');obj.scrollBar.appendChild(obj.scrollBarIndex);obj.scrollBar.style.position = 'absolute';obj.scrollBarIndex.style.position = 'absolute';obj.scrollBar.className = className || '';if(!className) {obj.scrollBar.style.backgroundColor = '#ddd';obj.scrollBarIndex.style.backgroundColor = '#aaa';}scrollDivList.push(obj);scrollResetSize(obj);obj.scrollBar.scrollDiv = obj;obj.scrollBarIndex.scrollDiv = obj;obj.onmousewheel = scrollMove;obj.scrollBar.onmousewheel = scrollMove;obj.scrollBarIndex.onmousewheel = scrollMove;obj.scrollBarIndex.onmousedown = function(evt){evt = evt || event;scrollPageY = evt.clientY;scrollY = this.scrollDiv.scrollTop;isScrollMove = true;document.body.onselectstart = function(){return false};scrollMoveObj = this.scrollDiv;if(this.scrollDiv.scrollBar.className == '') {this.scrollDiv.scrollBarIndex.style.backgroundColor = '#888';}return false;}}
window.onresize = function(){for(var i=0; i<scrollDivList.length; i++) {scrollResetSize(scrollDivList[i]);}}
function scrollResetSize(o) {if(o.scrollHeight <= o.clientHeight) {o.scrollTop = 0;o.scrollBar.style.display = 'none';} else {o.scrollBar.style.display = 'block';}var x=0, y=0;var p = o;while(p) {x += p.offsetLeft;y += p.offsetTop;p = p.offsetParent;}var borderTop = parseInt(o.style.borderTopWidth||0);var borderBottom = parseInt(o.style.borderBottomWidth||0);o.scrollBar.style.width = o.scrollBarWidth + 'px';o.scrollBar.style.height = o.clientHeight + 'px';o.scrollBar.style.top = y + borderTop + 'px';o.scrollBar.style.left = x + o.offsetWidth - o.scrollBarWidth + 'px';o.scrollBarIndex.style.width = o.scrollBarWidth + 'px';var h = o.clientHeight - (o.scrollHeight - o.clientHeight);if(h < 20) {h = 20;}o.scrollBarHeight = h;o.scrollBarIndex.style.height = h + 'px';o.scrollBarIndex.style.left = '0px';setScrollPosition(o);}
function setScrollPosition(o) {o.scrollBarIndex.style.top = (o.clientHeight - o.scrollBarHeight) * o.scrollTop / (o.scrollHeight - o.clientHeight) + 'px';}
document.documentElement.onmousemove = function(evt){if(!scrollMoveObj)return;evt = evt || event;var per = (scrollMoveObj.scrollHeight - scrollMoveObj.clientHeight) / (scrollMoveObj.clientHeight - scrollMoveObj.scrollBarHeight);scrollMoveObj.scrollTop = scrollY - (scrollPageY - evt.clientY) * per;setScrollPosition(scrollMoveObj);}
document.documentElement.onmouseup = function(evt){if(!scrollMoveObj)return;if(scrollMoveObj.scrollBar.className == '') {scrollMoveObj.scrollBarIndex.style.backgroundColor = '#aaa';}scrollMoveObj = null;document.body.onselectstart = function(){return true};}
function scrollMove(evt){var div = this.scrollDiv || this;if(div.scrollHeight <= div.clientHeight) return true;evt = evt || event;var step = 20;if(evt.wheelDelta < 0) {if(div.scrollTop >= (div.scrollHeight - div.clientHeight)) return true;div.scrollTop += step;} else {if(div.scrollTop == 0) return true;div.scrollTop -= step;}setScrollPosition(div);return false;}
//ģ�������
function bind(obj, type, handler){var node = typeof obj == "string" ? $(obj) : obj;if (node.addEventListener){node.addEventListener(type, handler, false);}else if (node.attachEvent) {node.attachEvent('on' + type, handler);}else {node['on' + type] = handler;}}  
function mouseWheel(obj, handler){var node = typeof obj == "string" ? $(obj) : obj;bind(node, 'mousewheel', function(event){var data = -getWheelData(event);handler(data);if (document.all){window.event.returnValue = false;}else {event.preventDefault();}});bind(node, 'DOMMouseScroll', function(event){var data = getWheelData(event);handler(data);event.preventDefault();});function getWheelData(event){var e = event || window.event;return e.wheelDelta ? e.wheelDelta : e.detail * 40;}}  
function addScroll(){this.init.apply(this, arguments);}  
function makescroll(mainDiv){
	addScroll.prototype = {  
		init : function(mainDiv, contentBox, className) {  
			var mainDiv = D(mainDiv);  
			var contentBox = D(contentBox);  
			var scrollDiv = this._createScroll(mainDiv, className);  
			this._resizeScorll(scrollDiv, mainDiv, contentBox);  
			this._tragScroll(scrollDiv, mainDiv, contentBox);  
			this._wheelChange(scrollDiv, mainDiv, contentBox);  
			this._clickScroll(scrollDiv, mainDiv, contentBox);  
		},  
		_createScroll : function(mainDiv, className) {  
			var _scrollBox = document.createElement('div')  
			var _scroll = document.createElement('div');  
			var span = document.createElement('span');  
			_scrollBox.appendChild(_scroll);  
			_scroll.appendChild(span);  
			_scroll.className = className;  
			mainDiv.appendChild(_scrollBox);  
			return _scroll;  
		},  
		_resizeScorll : function(element, mainDiv, contentBox) {  
			var p = element.parentNode;  
			var conHeight = contentBox.offsetHeight;  
			var _width = mainDiv.clientWidth;  
			var _height = mainDiv.clientHeight;  
			var _scrollWidth = element.offsetWidth;  
			var _left = _width - _scrollWidth;  
			//p.style.width = _scrollWidth + "px";  
			p.style.height = _height + "px";  
			p.style.left = _left + "px";  
			//p.style.position = "absolute";  
			//p.style.background = "#ccc";  
			p.className = "scrollcss";
			contentBox.style.width = (mainDiv.offsetWidth - _scrollWidth)  
					+ "px";  
			var _scrollHeight = parseInt(_height * (_height / conHeight));  
			if (_scrollHeight >= mainDiv.clientHeight) {  
				element.parentNode.style.display = "none";  
			}  
			try{element.style.height = _scrollHeight + "px";}catch(e){}  
		},  
		_tragScroll : function(element, mainDiv, contentBox) {  
			var mainHeight = mainDiv.clientHeight;  
			element.onmousedown = function(event) {  
				var _this = this;  
				var _scrollTop = element.offsetTop;  
				var e = event || window.event;  
				var top = e.clientY;  
				document.onmousemove = scrollGo;  
				document.onmouseup = function(event) {  
					this.onmousemove = null;  
				}  
				function scrollGo(event) {  
					var e = event || window.event;  
					var _top = e.clientY;  
					var _t = _top - top + _scrollTop;  
					if (_t > (mainHeight - element.offsetHeight)) {  
						_t = mainHeight - element.offsetHeight;  
					}  
					if (_t <= 0) {  
						_t = 0;  
					}  
					element.style.top = _t + "px";  
					contentBox.style.top = -_t  
							* (contentBox.offsetHeight / mainDiv.offsetHeight)  
							+ "px";  
					_wheelData = _t;  
				}  
			} 
		},    
		_wheelChange : function(element, mainDiv, contentBox) {  
			var node = typeof mainDiv == "string" ? $(mainDiv) : mainDiv;  
			var flag = 0, rate = 0, wheelFlag = 0;  
			if (node) {  
				mouseWheel(  
						node,  
						function(data) {  
							wheelFlag += data;  
							if (_wheelData >= 0) {  
								flag = _wheelData;  
								element.style.top = flag + "px";  
								wheelFlag = _wheelData * 12;  
								_wheelData = -1;  
							} else {  
								flag = wheelFlag / 12;  
							}  
							if (flag <= 0) {  
								flag = 0;  
								wheelFlag = 0;  
							}  
							if (flag >= (mainDiv.offsetHeight - element.offsetHeight)) {  
								flag = (mainDiv.clientHeight - element.offsetHeight);  
								wheelFlag = (mainDiv.clientHeight - element.offsetHeight) * 12;  

							}  
							element.style.top = flag + "px";  
							contentBox.style.top = -flag  
									* (contentBox.offsetHeight / mainDiv.offsetHeight)  
									+ "px";  
						});  
			}  
		},  
		_clickScroll : function(element, mainDiv, contentBox) {  
			var p = element.parentNode;  
			p.onclick = function(event) {  
				var e = event || window.event;  
				var t = e.target || e.srcElement;  
				var sTop = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop  
						: document.body.scrollTop;  
				var top = mainDiv.offsetTop;  
				var _top = e.clientY + sTop - top - element.offsetHeight  
						/ 2;  
				if (_top <= 0) {  
					_top = 0;  
				}  
				if (_top >= (mainDiv.clientHeight - element.offsetHeight)) {  
					_top = mainDiv.clientHeight - element.offsetHeight;  
				}  
				if (t != element) {  
					element.style.top = _top + "px";  
					contentBox.style.top = -_top  
							* (contentBox.offsetHeight / mainDiv.offsetHeight)  
							+ "px";  
					_wheelData = _top;  
				}  
			}
		}  
	}  
}
function initRelatedScroll(){
	_wheelData = -1;
	var relateddiv = D('relateddiv');  
	makescroll(relateddiv);
	$("#relatedcontent").css('top','0px');
	var ss = $("#relateddiv").html();
	$("#relateddiv").html(ss);
	new addScroll('relateddiv', 'relatedcontent', 'scrollDiv'); 
}
function initWebGameScroll(){
	_wheelData = -1;
	var webgamediv = D('webgamediv');  
	makescroll(webgamediv);
	$("#webgamecontent").css('top','0px');
	var ss = $("#webgamediv").html();
	$("#webgamediv").html(ss);
	new addScroll('webgamediv', 'webgamecontent', 'scrollDiv'); 
}

//��Ϸ��Ⱦ
var minBoxWidth = 952;          //��С��������Ϸ�����
var minBoxHeight = 590;         //��С��������Ϸ���߶�
var minGameWidth = 660;         //��С��Ϸ��
var minGameHeight = 480;        //��С��Ϸ��

var topHeight;
if(get_screen_height()<=720){
	topHeight = 34;             //�Ϸ���С�߶�(����3px)
}else{
	topHeight = 38;             //�Ϸ����߶�
}

var gameInfoHeight = 30;        //��Ϸ������߶�
var functionInfoHeight = 70;    //��Ϸ���ܿ�����߶�

var bigdivFixTop = 13;          //����ϱ߾�
var bigdivFixLeft = 13;         //�����߾�
var bigdivFixRight = 13;        //����ұ߾�

var middleBottomFix = 24;       //�п��±߾�
var bottomFix = 7;              //�ײ�����

var widthFix = 34;              //��ȼ�϶�ܺ�
var heightFix = topHeight + bigdivFixTop + middleBottomFix + bottomFix;    //�߶ȼ�϶�ܺ�

var rightMaxWidth = 278;        //�Ҳ���
var rightTopFix = 33;           //�Ҳඥ���߶�
var rightTopTotalFix = 182;     //�����Ϸ���������Ҳඥ���ľ��� 172
var rightBottomFix = 98;        //�Ҳ�ײ����߶� 89

var gameWidth,gameHeight;
var bigdivWidth,bigdivHeight;
var middledivWidth,middledivHeight;
var rightboxHeight;
var relateddivscroll;
var swapHeight;

//��ȡ��Ϸ��ʵ���
function getJustgamewidth(){
	var justgamewidth = $("#flash22").width();
	if(justgamewidth == null){
		if(getOs()==0){
			justgamewidth = $("#flashgame").width();
		}else{
			justgamewidth = $("#flashgame1").width();
		}
	}
	return justgamewidth;
}

function gameReSize(_screenWidth,_screenHeight){
	if(isHumanResize == 1){
		//�����ȫ��״̬��
		if(D("fullpage0").className == "ovhid"){
			beautifulresize();
		}
		if(autoFixScreen){
			var _screenW;
			var _screenH;
			if(_screenWidth >0 && _screenHeight > 0){
				_screenW = _screenWidth;
				_screenH = _screenHeight;
			}else{
				_screenW = get_screen_width();
				_screenH = get_screen_height();
			}
			if(_screenW > _screenH){//����
				var xbox = showBoxByMaxHeight(_screenH);//�Ը߶���
			}else{//����
				var xbox = showBoxByMaxWidth(parseInt(_screenW * 0.95));//�Կ���
			}
			if(D("boxright").style.display == "none"){onRight();}
		}else{
			//ֱ�Ӹ���Ϸ�����ʾ
			var xbox = showBoxByGameSize(_w,_h);
		}
		//��Ⱦ
		if(!isNullObj(xbox)){setBox(xbox);}
	}
}

function beautifulresize(){
	isHumanResize = 1;
	gameReSize(0,0);
	if(isIE6 && $(".ins-s").css('display')=='block'){closeote();extnote();}
}

//������Ϊ��׼���
function showBoxByMaxHeight(screenH){
	var maxH = screenH;
	//�����ӻ���<720��ʱ���Ϸ��Զ�ƫ�ƣ������Զ����֣����ڶ�̬�������������¼�
	if(get_screen_height()<=720){maxH = screenH + topHeight;/*GoToBestPosition();*/}else{/*window.scrollTo(0,0);*/}
	var playbox = {};
	//������ӻ��߶��޷�������С���ߣ��Ͳ�����С
	if(get_screen_height() > minBoxHeight && get_screen_width() > minBoxWidth){
		playbox.bigdivHeight = maxH - topHeight - bottomFix - bigdivFixTop;
		playbox.middledivHeight = playbox.bigdivHeight - middleBottomFix;
		playbox.gameHeight = playbox.middledivHeight - gameInfoHeight - functionInfoHeight;
		playbox.gameboxHeight = playbox.bigdivHeight - middleBottomFix - gameInfoHeight - functionInfoHeight;
		playbox.gameWidth = GetSize(0,playbox.gameHeight,"w");
		playbox.middledivWidth = playbox.gameWidth;
		if(playbox.middledivWidth < 660){playbox.middledivWidth = 660;}
		playbox.bigdivWidth = playbox.gameWidth + bigdivFixLeft + rightMaxWidth;
		playbox.gameboxWidth = playbox.gameWidth;
		if(playbox.gameboxWidth < 660){playbox.gameboxWidth = 660;}
		//�����Χ̫խ�ˣ��͹̶���С��Χ
		if(playbox.bigdivWidth < minBoxWidth){
			playbox.bigdivWidth = minBoxWidth;
		}
		//���̫���ˣ��ĳ��Կ���
		if(playbox.bigdivWidth > get_screen_width()){
			playbox.bigdivWidth = get_screen_width();
			playbox = showBoxByMaxWidth(minBoxWidth);
		}else{
			playbox.rightboxHeight = playbox.bigdivHeight - rightTopFix;
			playbox.relateddivscroll = playbox.bigdivHeight - rightTopTotalFix - rightBottomFix;
			playbox.swapHeight = playbox.bigdivHeight - rightBottomFix;
		}
	}else{
		playbox = showBoxByMaxWidth(minBoxWidth);
	}
	return playbox;
}

//����Ϸ��Ϊ��׼���(��ϷС����С��ȵ����)
function showBoxByMaxgameWidth(screenW){
	if(screenW>150){
		var playbox = {};
		playbox.bigdivWidth = minBoxWidth;
		playbox.middledivWidth = minBoxWidth - rightMaxWidth - bigdivFixLeft;
		if(playbox.middledivWidth < minGameWidth){playbox.middledivWidth = minGameWidth;}
		playbox.gameWidth = screenW;
		playbox.gameboxWidth = playbox.gameWidth;
		playbox.gameHeight = GetSize(screenW,0,"h");
		playbox.gameboxHeight = playbox.gameHeight;
		
		if(playbox.gameboxHeight > minGameHeight){
			playbox.middledivHeight = playbox.gameboxHeight + functionInfoHeight + middleBottomFix;
		}else{
			playbox.middledivHeight = minGameHeight + functionInfoHeight;
		}

		if(playbox.gameboxHeight < playbox.middledivHeight - middleBottomFix - functionInfoHeight){
			playbox.gameboxHeight = playbox.middledivHeight - middleBottomFix - functionInfoHeight;
		}

		playbox.bigdivHeight = playbox.middledivHeight + middleBottomFix;
		if(playbox.bigdivHeight<590){playbox.bigdivHeight=590;}
		playbox.rightboxHeight = playbox.bigdivHeight - rightTopFix;
		playbox.relateddivscroll = playbox.bigdivHeight - rightTopTotalFix - rightBottomFix;
		playbox.swapHeight = playbox.bigdivHeight - rightBottomFix;

		var realW = playbox.gameWidth + bigdivFixLeft + rightMaxWidth + bigdivFixRight;
		var _wid = get_screen_width() - realW;
		if(_wid > 0 && D("boxright").style.display == "none"){
			onRight();
		}
		return playbox;
	}
}

//������Ϊ��׼���
function showBoxByMaxWidth(screenW){
	var playbox = {};
	if(screenW >= minBoxWidth){
		playbox.bigdivWidth = screenW;
		playbox.gameWidth = screenW - widthFix - rightMaxWidth;
		playbox.gameboxWidth = playbox.gameWidth;
		if(playbox.gameboxWidth < 660){playbox.gameboxWidth = 660;}
		playbox.middledivWidth = playbox.bigdivWidth - rightMaxWidth - bigdivFixLeft;
		if(playbox.middledivWidth < 660){playbox.middledivWidth = 660;}
		playbox.gameHeight = GetSize(playbox.gameWidth,0,"h");
		playbox.middledivHeight = playbox.gameHeight + gameInfoHeight + functionInfoHeight;
		playbox.bigdivHeight = playbox.middledivHeight + middleBottomFix;
		playbox.gameboxHeight = playbox.bigdivHeight - middleBottomFix - gameInfoHeight - functionInfoHeight;
		playbox.rightboxHeight = playbox.bigdivHeight - rightTopFix;
		playbox.relateddivscroll = playbox.bigdivHeight - rightTopTotalFix - rightBottomFix;
		playbox.swapHeight = playbox.bigdivHeight - rightBottomFix;

		var realW = playbox.gameWidth + bigdivFixLeft + rightMaxWidth + bigdivFixRight;
		var _wid = get_screen_width() - realW;
		if(_wid > 0 && D("boxright").style.display == "none"){
			onRight();
		}
	}
	return playbox;
}

//������Ϊ��׼��棨�����Ҳ�������ܣ�
function showBoxByMaxWidthWithoutRight(screenW){
	var playbox = {};
	if(screenW >= minBoxWidth && screenW < get_screen_width()){
		offRight();
		playbox.bigdivWidth = screenW;
		playbox.gameWidth = screenW - bigdivFixLeft;
		playbox.gameboxWidth = playbox.gameWidth;
		playbox.middledivWidth = playbox.bigdivWidth;
		playbox.gameHeight = GetSize(playbox.gameWidth,0,"h");
		playbox.middledivHeight = playbox.gameHeight + gameInfoHeight + functionInfoHeight;
		playbox.bigdivHeight = playbox.middledivHeight + middleBottomFix;
		playbox.gameboxHeight = playbox.bigdivHeight - middleBottomFix - gameInfoHeight - functionInfoHeight;
		playbox.rightboxHeight = playbox.bigdivHeight - rightTopFix;
		playbox.relateddivscroll = playbox.bigdivHeight - rightTopTotalFix - rightBottomFix;
		playbox.swapHeight = playbox.bigdivHeight - rightBottomFix;
	}
	return playbox;
}

//ֱ�Ӹ���Ϸ�����ʾ
function showBoxByGameSize(gameWidth,gameHeight){
	var playbox = {};
	//if(get_screen_height()<=720){GoToBestPosition();}else{window.scrollTo(0,0);}
	var realW = gameWidth + bigdivFixLeft + rightMaxWidth + bigdivFixRight;
	var _wid = get_screen_width() - realW;
	//�����
	if(gameWidth < 660){
		playbox.gameboxWidth = 660;
	}else{
		playbox.gameboxWidth = gameWidth;
	}
	if(_wid > 0){
		if(D("boxright").style.display == "none"){onRight();}
		playbox.bigdivWidth = playbox.gameboxWidth + rightMaxWidth + bigdivFixLeft;
	}else{
		if(gameWidth >= 660){
			offRight();
			playbox.bigdivWidth = playbox.gameboxWidth;
		}else{
			playbox.bigdivWidth = minBoxWidth;
		}
	}
	if(playbox.bigdivWidth < minBoxWidth){
		playbox.bigdivWidth = minBoxWidth;
		if(gameWidth <= 660){
			playbox.middledivWidth = playbox.gameboxWidth;
		}else{
			playbox.middledivWidth = playbox.gameboxWidth + (playbox.bigdivWidth - playbox.gameboxWidth);
		}
	}else{
		playbox.middledivWidth = playbox.gameboxWidth;
	}
	playbox.gameWidth = gameWidth;
	//�����
	if(gameHeight < 480){
		playbox.gameboxHeight = 480;
	}else{
		playbox.gameboxHeight = gameHeight;
	}
	playbox.gameHeight = gameHeight;
	playbox.middledivHeight = playbox.gameboxHeight + gameInfoHeight + functionInfoHeight;
	playbox.bigdivHeight = playbox.middledivHeight + middleBottomFix;
	playbox.rightboxHeight = playbox.bigdivHeight - rightTopFix;
	playbox.relateddivscroll = playbox.bigdivHeight - rightTopTotalFix - rightBottomFix;
	playbox.swapHeight = playbox.bigdivHeight - rightBottomFix;
	return playbox;
}
//�ر��Ҳ�
function offRight(){
	D("boxright").style.display = "none";
	showr_t();
}
function onRight(){
	hider_t();
	D("boxright").style.display = "block";
}
function isObject(x) { return x === Object(x); } 
function PX(str){return str.toString() + "px"}
function unPX(str){return parseInt(str.replace("px",""));}

//�Ŵ���С
function gamezoom(opt){
	isHumanResize = 0;
	var xbox = {};
	var bigdivWidth = unPX(D("bigdiv").style.width);
	var gamedivWidth = getJustgamewidth();
	if(opt==1){//�Ŵ�
		var _w2 = get_screen_width() - bigdivWidth + bigdivFixLeft + bigdivFixRight;//����Ⱥ�bigdiv��֮��
		if(_w2 > 0 && _w2 < rightMaxWidth){
			xbox = showBoxByMaxWidthWithoutRight(bigdivWidth);
		}else if(_w2 >= 100){
			if(gamedivWidth+100 < minGameWidth){
				gamedivWidth += 100;
				xbox = showBoxByMaxgameWidth(gamedivWidth);	
			}else{
				bigdivWidth += 100;
				xbox = showBoxByMaxWidth(bigdivWidth);
			}
		}else{
			gamedivWidth += 100;
			if(gamedivWidth<=minGameWidth){
				xbox = showBoxByMaxgameWidth(gamedivWidth);	
			}	
		}
	}else if(opt==-1){//��С
		if(D("boxright").style.display == "none"){onRight();}
		if(bigdivWidth - minBoxWidth >=  100){
			bigdivWidth -= 100;
			xbox = showBoxByMaxWidth(bigdivWidth);
		}else{
			if(gamedivWidth>100){
				gamedivWidth -= 100;
			}
			xbox = showBoxByMaxgameWidth(gamedivWidth);	
		}
	}
	if(!isNullObj(xbox)){setBox(xbox);}
	if(isIE6 && $(".ins-s").css('display')=='block'){closeote();extnote();}
}

function setBox(box){
	if(D("gameTop")){
		D("gameTop").style.width = PX(box.bigdivWidth);//��Ϸ���Ϸ����ܲ˵�
	}
	player.style.width = PX(box.gameWidth);
	player.style.height = PX(box.gameHeight);
	D("bigdiv").style.width = PX(box.bigdivWidth);
	D("bigdiv").style.height = PX(box.bigdivHeight);
	D("middlediv").style.width = PX(box.middledivWidth);//��Ӧ���ܲ˵��Ҷ���
	if(box.middledivHeight>0){
		D("middlediv").style.height = PX(box.middledivHeight);
	}
	D("gamebox").style.height = PX(box.gameHeight);//��Ӧ���ܲ˵��¶���
	D("rightbox").style.height = PX(box.rightboxHeight);//��Ӧ�Ҳ�߶���������
	D("relateddiv").style.height = PX(box.relateddivscroll);//��ʼ�������Ϸ�������߶�
	D("webgamediv").style.height = PX(box.relateddivscroll);
	D("swap").style.height = PX(box.swapHeight);
	if($("#topdiv").css('height')!='95px'){
		var topdivheight = parseInt(unPX($("#swap").css('height')))-40;
		$("#topdiv").css('height',PX(topdivheight));
	}
	D("gamebox").style.width = PX(box.gameboxWidth);
	D("gamebox").style.height = PX(box.gameboxHeight);
	D("addiv").style.width = PX(box.gameboxWidth);
	D("addiv").style.height = PX(box.gameboxHeight);
	D("swfdiv").style.width = PX(box.gameboxWidth);
	D("swfdiv").style.height = PX(box.gameboxHeight);
	D("swfdiv").style.paddingTop = PX(parseInt(box.gameboxHeight - box.gameHeight)/2);
	initRelatedScroll();
	initWebGameScroll();
}

//����ȫ��Ļ�������¼�
var move=function(e){
	e.preventDefault && e.preventDefault();
	e.returnValue=false;
	e.stopPropagation && e.stopPropagation();
	return false;
}
var keyFunc=function(e){
	if(navigator.userAgent.indexOf("Firefox")>0){
		var currKey=0,e=e||event; currKey=e.keyCode||e.which||e.charCode;
		if((37<=currKey && currKey<=40) || currKey<=32){
			return move(e);
		}
	}
}

function chgFull(num){
	if(num==1){//ȫ��ģʽ
		isHumanResize = 0;
		document.body.onkeydown=keyFunc;
		fullpage();
		D("fullpage0").className = "ovhid";
		D("fullpage2").className = "method";
		D("fullpage2").style.right = "0px";
		D("fullpage2").style.display = "block";
		D("fullpage1").style.display = "block";
		D("fullpage3").style.display = "none";
		D("bigdiv").style.width = "100%";
		D("middlediv").style.width = "100%";
		D("bigdiv").style.padding = "0px";
		if(D("topdiv")){
			D("methodinfo").innerHTML = D("topdiv").innerHTML;
		}
	}else{//�˳�
		try{
		document.body.onkeydown = function(){return true;}
		D("fullpage0").className = "";
		D("fullpage2").className = "method method_cur";
		D("fullpage2").style.display = "none";
		D("fullpage2").style.right = "2000px";
		D("fullpage1").style.display = "none";
		D("fullpage3").style.display = "none";
		D("bigdiv").style.width = "";
		D("middlediv").style.width = "";
		D("bigdiv").style.padding = "";
		D("swfdiv").style.marginTop = "0px";
        D("functiontools").style.display = "block";
		if(D("randtip")){D("randtip").style.display = "block";}
		GoToBestPosition();
		beautifulresize();
		}catch(e){}
	}
}
function fullpage(){
	window.scrollTo(0,0);
	var f_width = "100%";
	var f_height = get_screen_height()-32; 
	var ff_width = GetSize(0,f_height,"w");
	
	D("gamebox").style.height = f_height+"px";
	D("gamebox").style.width = f_width;
	D("bigdiv").style.height = f_height+32+"px";
	
	D("addiv").style.height = f_height+"px";
	D("addiv").style.width = f_width;
	
	if(!autoFixScreen){
		__f_height = _h;
		__ff_width = _w;
		__magintop = parseInt((f_height-_h)/2);
		if(__magintop<=0){__magintop=0;}
	}else{
		__f_height = f_height;
		__ff_width = ff_width;
		__magintop = 0;
	}
	
	player.style.height = __f_height+"px";
	player.style.width = __ff_width+"px";
	
	D("swfdiv").style.height = __f_height+"px";
	D("swfdiv").style.width = __ff_width+"px";
	D("swfdiv").style.paddingTop = __magintop+"px";
	//D("swfdiv").style.paddingTop = "0px";
	
	D("methodinfo").style.height = (f_height-15)+"px";
	D("fullpage2").style.top = parseInt((f_height-94)/2)+"px";
    D("functiontools").style.display = "none";
	
	if(D("randtip")){
		if(get_screen_width()<1034){
			D("randtip").style.display = "none";
		}else{
			D("randtip").style.display = "block";
		}
	}
}
//ȫ���·Ŵ���С
function fullzoom(num){
	if(num==1){//�Ŵ�
		var clientheight = get_screen_height()-32; 
		var thish = parseInt(D("swfdiv").style.height.replace("px",""))+60;
		var thisw = GetSize(0,thish,"w");
		if(clientheight-thish>=0){
			D("swfdiv").style.height = thish+"px";
			D("swfdiv").style.width = thisw+"px";
			player.style.height = thish+"px";
			player.style.width = thisw+"px";
			D("swfdiv").style.paddingTop = parseInt((clientheight - thish)/2)+"px";
		}
	}else{
		var clientheight = get_screen_height()-32; 
		var thish = parseInt(D("swfdiv").style.height.replace("px",""))-60;
		var thisw = GetSize(0,thish,"w");
		if((thish*thisw)>67710){
			D("swfdiv").style.height = thish+"px";
			D("swfdiv").style.width = thisw+"px";
			player.style.height = thish+"px";
			player.style.width = thisw+"px";
			D("swfdiv").style.paddingTop = parseInt((clientheight - thish)/2)+"px";
		}
	}
}
//ȫ���²鿴����˵��
function chgTips(){
	if(D("fullpage3").style.display == "none"){
		D("fullpage2").className = "method method_cur";
		D("fullpage2").style.right = "200px";
		D("fullpage2").style.display = "block";
		D("fullpage3").style.display = "block";
	}else{
		D("fullpage2").className = "method";
		D("fullpage2").style.display = "block";
		D("fullpage2").style.right = "0px";
		D("fullpage3").style.display = "none";
	}
}

if(isIE()){$('#methodinfo').click(function(){chgTips();chgTips();});}

//my�ղ�
function setAddFav(){
	try{
		var collected_btn_img_url = "";
		(function(){
		  var img = new Image();
		  img.src = collected_btn_img_url;
		  img.style.display = 'none';
		  document.body.appendChild(img);
		})();

		var __timer;
		GPRP.Collection({
			gid : nFlashId,
			sid : 0,
			afterLock:function(){
				hiddenswf();
				var iframe_height, iframe, preheight = document.body.offsetHeight;
				__timer = setInterval(function(){
					!iframe && (iframe = D("j-gprp_dialog_iframe"));

					if(iframe && document.body.offsetHeight != preheight){
						iframe_height = iframe.offsetHeight;
						if(iframe_height < 10) return;
						iframe.height = iframe_height + 1;
						iframe.height = iframe_height;
					}
				},300);
			},
			afterUnlock:function(){
				displayswf();
				clearInterval(__timer);
			},
			target : [
				{
					id : "j-gprp_addColllection_top",
					oncollected : function(target){
						var thisstyle = getCookie("box_style");
						target.innerHTML = '�����ղغ�';
						$("#j-gprp_addColllection_top").removeClass('fb5').addClass('fb9 scclass');
					}
				},

				{
					id : "j-gprp_addColllection",
					oncollected : function(target){
						target.innerHTML = '�������ղغС�';
						$("#j-gprp_addColllection_top").removeClass('fb5').addClass('fb9 scclass');
					}
				}
			]
		});
	}catch(e){}
}

//���ƹص�
var bigdivpaddingtop;
var closeright = 0;
function turnOff(){
	isHumanResize = 0;
	$("#shadow").css("height",10000);
	$("#gamebox").css("position","relative");
	$("#turnedOn").css("position","absolute");
	$("#shadow").toggle();
	$("#turnedOff").hide();
	$("#uplayer").hide();
	$("#turnedOn").show();
	$("#light-switch").css("z-index",7);
	//$("#gameTop").css("z-index",4);
	$(".tbar").hide();
	bigdivpaddingtop = $("#bigdiv").css('paddingTop');
	//��Ϸ����
	if(D("boxright").style.display != "none"){
		offRight();
		closeright = 1;
		middledivwidth = D("middlediv").style.width;
		D("middlediv").style.width = PX(unPX(D("middlediv").style.width) + rightMaxWidth + bigdivFixTop);
	}
}
function turnOn(){
	$("#turnedOff").show();
	$("#uplayer").show();
	$("#turnedOn").hide();
	$(".tbar").show();
	//$("#gamebox").css("position","unset");
	//$("#turnedOn").css("position","unset");
	D("shadow").style.display = "none";
	$("#light-switch").css("z-index",0);
	$("#gameTop").css("z-index",6);
	$("#bigdiv").css('paddingTop',bigdivpaddingtop);
	try{D("middlediv").style.width = middledivwidth;}catch(e){}
	if(closeright==1){onRight();closeright=0;}
}
function GoToBestPosition(){
	if(D("fullpage0").className == ''){
		var objBestPosition = D("bestposition");
		var intBestPosition = getTop(objBestPosition)-3;
		window.scrollTo(0,intBestPosition);
	}
}
function GoToBestPositionById(id,num){
	var objBestPosition = D(id);
	var intBestPosition = getTop(objBestPosition)-num;
	window.scrollTo(0,intBestPosition);
}
//��ʾ������flash����
function showNewLoading(){
	var this_width = "100%";//D("swfdiv").style.width;
	var this_height = "100%";//D("swfdiv").style.height;
	var loading = '<object id="loadingframe" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="'+this_width+'" height="'+this_height+'">';
	loading += '<param name="movie" value="gameloader2.swf" />';
	loading += '<param name="quality" value="high" />';
	loading += '<param name="wmode" value="transparent" />';
	loading += '<param name="allowScriptAccess" value="always" />'
	loading += '<embed id="loadingframe1" name="loadingframe1" src="gameloader2.swf" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="'+this_width+'" height="'+this_height+'" allowScriptAccess="always"></embed>';
	loading += '</object>';
	D("addiv").innerHTML = loading;//�����°����������ĬĬ������Ϸ
}

//��ʾ�ɰ�ϸ��������
function showLoading(){
	var this_width = "100%";
	var this_height = "12";
	var loading = '<object id="loadingframecell" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="'+this_width+'" height="'+this_height+'">';
	loading += '<param name="movie" value="/flash/cell.swf" />';
	loading += '<param name="quality" value="high" />';
	loading += '<param name="wmode" value="transparent" />';
	loading += '<param name="allowScriptAccess" value="always" />'
	loading += '<embed id="loadingframecell1" name="loadingframe1" src="/flash/cell.swf" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="'+this_width+'" height="'+this_height+'" allowScriptAccess="always"></embed>';
	loading += '</object>';
	D("loadingdiv").innerHTML = loading;//���ؾɰ����������ĬĬ������Ϸ
}

//����flash������
function newLoadingFlash(){//����ֵ,��ǰ��������ļ���Ĭ�ϴ�1���ܼ�������ļ���Ĭ�ϴ�1
	var objThisFlash = getFlashObj();
	var intPercentage=0;
	
	try {if (objThisFlash) intPercentage = objThisFlash.PercentLoaded();}
	catch(e){}
	if (intPercentage < 0) intPercentage = 100;
	if (_playMode!=1) intPercentage = 100;
	setloaded(intPercentage,1,1);
	if (intPercentage == 100) {
		D("addiv").style.display = "none";
		try{D("progresser").style.display = "none";}catch(e){}
		try{D("randtip").style.display = "block";}catch(e){}
        chgfunction();
		isloading = false;
		return;
	}
	window.setTimeout(newLoadingFlash,300);
}

//��ʱ���ã��°���������
function setloaded(intPercentage,loaded,total){
	if(isIE()){
		try {D("loadingframe").setloaded(intPercentage,1,1);}catch(e){}
	}else{
		try {D("loadingframe1").setloaded(intPercentage,1,1);}catch(e){}
	}		
}

//��ʱ���ã��ɰ�С��������
function setloadedcell(intPercentage,loaded,total){
	if(isIE()){
		try {D("loadingframecell").setloaded(intPercentage,1,1);}catch(e){}
	}else{
		try {D("loadingframecell1").setloaded(intPercentage,1,1);}catch(e){}
	}		
}

function loadingFlash(){
	var objThisFlash = getFlashObj();
	var intPercentage=0;
	
	try {if (objThisFlash) intPercentage = objThisFlash.PercentLoaded();}
	catch(e){}
	
	if (intPercentage < 0) intPercentage = 100;
	if (_playMode!=1) intPercentage = 100;
	setloadedcell(intPercentage,1,1);
	if (intPercentage == 100) {
		D("loadingdiv").style.display = "none";
		try{D("progresser").style.display = "none";}catch(e){}
		try{D("randtip").style.display = "block";}catch(e){}
		return;
	}
	window.setTimeout(loadingFlash,300);
}

function Replay(){
	var strMovieUrl;
	switch (_playMode){
	case "4":
		player.src = player.src;
		break;
	default:
		if(getOs()==0){
			strMovieUrl = player.movie;
			player.movie = " ";
			player.movie = strMovieUrl;
		}else{
			D("swfdiv").innerHTML = D("swfdiv").innerHTML;
			player = D("flashgame1");
		}
	}
	//������������ͣ
	toggleSound(1); 
	toggleGame(0);
}

function showswf(){
	D("swfdiv").style.display="block";
	D("addiv").style.display="none";
    chgfunction();
	isloading = false;
}
$("#showplay1,#showplay2,.ico-t1").mouseenter(function(){showPlayed(1);}).mouseleave(function(){showPlayed(0);})
$("#showc1,#showc2,.ico-t2").mouseenter(function(){showc(1);}).mouseleave(function(){showc(0);})
$("#sharebtn,.baidu-share").mouseenter(function(){$(".baidu-share").show();}).mouseleave(function(){$(".baidu-share").hide();})
$(".nav,.t-nav").mouseenter(function(){$(".t-nav").show();$("#dhs").attr('class','nav active');}).mouseleave(function(){$(".t-nav").hide();$("#dhs").attr('class','nav');});
$(".ins-m").click(function(){
	extnote();
});
function extnote(){
	$("#bottomdiv").hide();
	var topdivheight = parseInt(unPX($("#swap").css('height')))-40;
	$("#topdiv").css('height',PX(topdivheight));
	$("#topdiv").css('overflow-y','auto');
	$(".ins-m").css('display','none');
	$(".ins-s").css('display','block');
	$(".ins").css('height',"auto");
	$(".ins").css('paddingBottom',"35px");
	return false;
}
$(".ins-s").click(function(){
	closeote();
});
function closeote(){
	$("#bottomdiv").show();
	$("#topdiv").css('height','95px');
	$("#topdiv").css('overflow-y','hidden');
	$("#topdiv").css('overflow','hidden');
	$(".ins-m").css('display','block');
	$(".ins-s").css('display','none');
	$(".ins").css('height',"125px");
	$(".ins").css('paddingBottom',"0px");
	initWebGameScroll();
	initRelatedScroll();
	return false;
}
$("#relatedtab").mouseenter(function(){
	_showrelateddiv();
})
$("#webgametab").mouseenter(function(){
	$("#relatedtab").attr('class','');
	$("#relateddiv").hide();
	$("#webgametab").attr('class','on');
	$("#webgamediv").show();
	$("#webgamediv").html($("#webgamediv").html().replace(/lz_src/g,"src"));
	initWebGameScroll();
})
function _showrelateddiv(){
	$("#relatedtab").attr('class','on');
	$("#relateddiv").show();
	$("#webgametab").attr('class','');
	$("#webgamediv").hide();
	initRelatedScroll();
}
window.onresize = function(){
	if(D("fullpage0").className == 'ovhid'){
		fullpage();
	}
}

//���Ҳ������Ϸ���ɼ������,�·��Զ����������ϲ�������Ϸ
function showr_t(){
	var str = $("#rtgame").html().toLowerCase();
	var fy = 1;
	var lis = "<ul class='ul-like' id='pg"+fy+"'>";
	strs = str.split("</li>");
	if(strs.length>=40){
		for(var i=1;i<=40;i++){
			var li = strs[i-1].replace(/lz_src/g,"src");
			if(i>8){
				lis += li.replace(/src/g,"lz_src")+"</li>";
			}else{
				lis += li+"</li>";
			}
			if(i%8==0 && i<40){
				fy++;
				lis += "</ul><ul class='ul-like' style='display:none' id='pg"+fy+"'>";
			}
		}
		lis += "</ul>";
		$("#plike").show();
		$("#r_t").html(lis);
	}
}

function hider_t(){
	if(D("plike")){
		D("plike").style.display = "none";
	}
}

function switchpage(totalpage,controller,page){
	var prepage = page-1;
	if(prepage<1){prepage=totalpage}
	var prestring = D(controller+"_pre").href;
	prestring = prestring.replace(/,[0-9]+\)+/g,","+prepage+"\)");
	D(controller+"_pre").href = prestring;
	
	var nextpage = page+1;
	if(nextpage>totalpage){nextpage=1}
	var nextstring = D(controller+"_nex").href;
	nextstring = nextstring.replace(/,[0-9]+\)+/g,","+nextpage+"\)");
	D(controller+"_nex").href = nextstring;
	
	for(var i=1;i<=totalpage;i++){
		if(i==page){	
			D(controller+i).style.display = "block";
			D("tfpg"+i).className = "pagon";
			D(controller+i).innerHTML = D(controller+i).innerHTML.replace(/lz_src/g,"src");
		}else{
			D("tfpg"+i).className = "";
			D(controller+i).style.display = "none";
		}
	}
}

//�ض���
function MoveLeftLayer() {
    var mytop = get_scroll_mytop();
	var textbodypos = parseInt(getTop(D("txtbody")));
	var plpos = parseInt(getTop(D("pl")));
    if (mytop > textbodypos && $(window).width()>1024){
        try{$('#sides').show();}catch(e){}
    }else{
        try{$('#sides').hide();}catch(e){}
    }
	if (mytop > textbodypos){
		$("#ntop").css('position','fixed');
	}else{
		$("#ntop").css('position','relative');
	}
	//��������Ѿ������� �Ͳ������ӳ��ظ���λ
	if(mytop>=plpos-10){pltnum = 3;}
}

function get_scroll_mytop(){
     if(typeof(window.pageYOffset) != "undefined") return window.pageYOffset;
     if(document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
     if(document.body) return document.body.scrollTop;
}
if(!isIE6()){
	window.onscroll = MoveLeftLayer;
	$(window).bind("resize", MoveLeftLayer);
}
/**      �ű���ʼ��        **/

var pltnum = 0;
var arrTemp = _gameMark.split("|");
var _playMode = arrTemp[0];
var _playscript = arrTemp[1];

//��ʼ��������
var _wheelData = -1;
setAddFav();
var player;
var isloading = true;
switch (_playMode){
	case "4":
		player = D("flash22");
		break;
	default:
		if(getOs()==0){
			player = D("flashgame");
		}else{
			player = D("flashgame1");
		}
}
if(newLoading==0){
	showLoading();
	loadingFlash();
	setTimeout(showswf,time_out);
}else{
	showNewLoading();
	newLoadingFlash();
}
$(document).ready(function(){
	gameReSize(0,0);
});

//�������� ie 678 �� window.onresize ����body�ߴ�仯 �Զ�������bug
var globalWidth = 0;
var globalHeight = 0;
var isHumanResize = 1;//��ie6��7��8������resize�¼�(��Ϊ����)
var onWindowResize = function(){   
    var queue = [],  
        indexOf = Array.prototype.indexOf || function(){  
            var i = 0, length = this.length;   
            for( ; i < length; i++ ){   
                if(this[i] === arguments[0]){  
                    return i;  
                }  
            }  
            return -1;  
        };  
    var isResizing = {},    
    lazy = true,
    listener = function(e){
		var h = window.innerHeight || (document.documentElement && document.documentElement.clientHeight) || document.body.clientHeight; 
		var w = window.innerWidth || (document.documentElement && document.documentElement.clientWidth) || document.body.clientWidth;  
		if(globalWidth == 0){
			globalWidth = w;
			isHumanResize1 = 1;
		}else if(globalWidth != w){
			isHumanResize1 = 1;
			globalWidth = w;
		}else{
			isHumanResize1 = 0;
		}
		if(globalHeight == 0){
			globalHeight = h;
			isHumanResize2 = 1;
		}else if(globalHeight != h){
			isHumanResize2 = 1;
			globalHeight = h;
		}else{
			isHumanResize2 = 0;
		}
		//if(isHumanResize1==1 || isHumanResize2==1){
		//	isHumanResize = 1;
		//	alert("isHumanResize1"+isHumanResize1);
		//	alert("isHumanResize2"+isHumanResize2);
		//}
        if( h === isResizing.h && w === isResizing.w){   
            return;   
        }else{  
            e = e || window.event;   
            var i = 0, len = queue.length;   
            for( ; i < len; i++){   
                queue[i].call(this, e);   
            }   
            isResizing.h = h,   
            isResizing.w = w;   
        }   
    };   
    return {  
        init: function(){  
            if(lazy){  
                if(window.addEventListener){   
                    window.addEventListener('resize', listener, false);   
                }else{   
                    window.attachEvent('onresize', listener);   
                }   
                lazy = false;   
            }  
        },  
        add: function(fn){  
            if(typeof fn === 'function'){  
                this.init();  
                queue.push(fn);   
            }else{ }   
            return this;   
        },   
        remove: function(fn){  
            if(typeof fn === 'undefined'){   
                queue = [];   
            }else if(typeof fn === 'function'){   
                var i = indexOf.call(queue, fn);   
                if(i > -1){   
                    queue.splice(i, 1);   
                }   
            }   
            return this;   
        },  
        insert: function(index,fn){  
            if(typeof fn === 'function'){  
                this.init();  
                var len=queue.length;  
                if(index>=len){  
                    queue[index]=fn;  
                }else{  
                    for(var i=len-1;i>=index;i--){  
                        queue[i+1]=queue[i];  
                    }  
                    queue[index]=fn;  
                }  
            }else{ }   
            return this;   
        },  
        trigger: function(){  
            var len=queue.length;  
            for(var i=0;i<len;i++){  
                queue[i]();  
            }  
        }  
    };   
}.call(this);  
onWindowResize.add(function(){gameReSize(0,0)});

//��ͼ
function cutshot(){if(_playMode==4){D('flash22').contentWindow.cutshot();}else{if(isIE()){try{D("flashgame").cutshot();}catch(e){}}else{try{D("flashgame1").cutshot();}catch(e){}}}}
//����
function toggleSound(num){
	if(_playMode==4){
		D('flash22').contentWindow.toggleSound(num);//iframe
	}else{
		if(isIE()){
			try{D("flashgame").toggleSound(num);}catch(e){}
		}else{
			try{D("flashgame1").toggleSound(num);}catch(e){}
		}	
	}
	var str = D("functiontools").innerHTML;
	var str2 = D("functiontools_fullpage").innerHTML;
	if(num==0){
		str = str.replace('toggleSound(0)','toggleSound(100)');
		str = str.replace('fb1','fb2');
		str = str.replace('����','����');
		str2 = str2.replace('toggleSound(0)','toggleSound(100)');
		str2 = str2.replace('b1','b1on');
	}else{
		str = str.replace('toggleSound(100)','toggleSound(0)');	
		str = str.replace('fb2','fb1');
		str = str.replace('����','����');
		str2 = str2.replace('toggleSound(100)','toggleSound(0)');	
		str2 = str2.replace('b1on','b1');
	}
	D("functiontools").innerHTML = str;
	D("functiontools_fullpage").innerHTML = str2;
}

//��ͣ
function toggleGame(bools){
	if(_playMode==4){
		D('flash22').contentWindow.toggleGame(bools);
	}else{
		if(isIE()){
			try{D("flashgame").toggleGame(bools);}catch(e){}
		}else{
			try{D("flashgame1").toggleGame(bools);}catch(e){}
		}	
	}
	var str = D("functiontools").innerHTML;
	if(bools){
		str = str.replace('toggleGame(true)','toggleGame(false)');
		str = str.replace('fb3','fb4');
		str = str.replace('��ͣ','��ʼ');
	}else{
		str = str.replace('toggleGame(false)','toggleGame(true)');	
		str = str.replace('fb4','fb3');
		str = str.replace('��ʼ','��ͣ');
	}
	D("functiontools").innerHTML = str;
}

//����flash������״̬���ı�ҳ����ͣ��ʼ��ť
function setGameStatus(bools) {
	//true ������ false ��ͣ
	var str = D("functiontools").innerHTML;
	if(bools){
		str = str.replace('toggleGame(false)','toggleGame(true)');	
		str = str.replace('fb4','fb3');
		str = str.replace('��ʼ','��ͣ');
	}else{
		str = str.replace('toggleGame(true)','toggleGame(false)');
		str = str.replace('fb3','fb4');
		str = str.replace('��ͣ','��ʼ');
	}
	D("functiontools").innerHTML = str;	
}

//�л����ܰ�ť
function chgfunction(){
	var str = '';
	var str_full = "";
	var FunctionSelector1 = 0;
	var FunctionSelector2 = 0;
	var FunctionSelector3 = 0;
	if(FunctionSelector.indexOf("|")>0){
		var FunctionSelectors = FunctionSelector.split("|");
		FunctionSelector1 = FunctionSelectors[0];
		FunctionSelector2 = FunctionSelectors[1];
		FunctionSelector3 = FunctionSelectors[2];
	}

	if(FunctionSelector1>0 || FunctionSelector2>0 || FunctionSelector3>0){
		if(FunctionSelector1=="1"){
			str += '<a id="screencuts" class="fb6" href="" onclick="cutshot();return false;">��ͼ</a>';
			str_full += '<a class="b2" onclick="cutshot();return false;" href="">��ͼ</a>';
		}
		if(FunctionSelector2=="2"){
			str += '<a id="soundcontrol" id="soundcontrol" class="fb1" href="" onclick="toggleSound(0);return false;">����</a>';
			str_full += '<a class="b1" onclick="toggleSound(0);return false;" href="">����</a>';
		}
		if(FunctionSelector3=="3"){
			str += '<a id="pausecontrol" id="pausecontrol" class="fb3" href="" onclick="toggleGame(true);return false;">��ͣ</a>';
		}
		D("functiontools").style.display = "block";
		D("functiontools_fullpage").style.display = "block";
		$("#functiontools").html(str);
		$("#functiontools_fullpage").html(str_full);
	}
	if(D("ifull")){D("ifull").style.display = "inline";}
}

function hiddenSwfDiv(){
	D("pusher").style.display = "block";
	D("pusher").style.height="2000px";
}

function displaySwfDiv(){
	D("pusher").style.height="0px";
	D("pusher").style.display = "none";
}

//��Ϸ��ͼ������
function showcomment(commerid,picurl){
	var winW = $(window).width();	
	var winH = $(window).height();
	w = 340;
	h = 224;
	var leftpx = (winW > w) ? (winW-w)/2 : 0;
	var toppx = 220;//(winH > h) ? (winH-h)/2 : 0;

	D("showResult").style.left = leftpx+"px";
	D("showResult").style.top = toppx+"px";
	hiddenSwfDiv();	
	D("showResult").style.display = "block";
	var result = '<meta http-equiv="Content-Type" content="text/html; charset=gb2312">';
	result +='<div class="play_tips">';
	result +='<form action="http://comment.4399pk.com/api_post_comm.php" method="post" name="sub" target="commer">';
	result +='<div class="play_tips_top"><b>��Ϸ��ͼ��ʾ</b><span class="play_tips_close" title="�ر�" onclick="closeScreenShot()"><a href="#"></a></span></div>';
	result +='<div class="play_tips_lr">';
	result +='<div class="play_tips_left"><img src="'+picurl+'" width="116" height="114" /></div>';
	result +='<div class="play_tips_right">';
	result +='<input name="cid" type="hidden" value="'+commerid+'" />';
	result +='<input name="url" type="hidden" value="'+picurl+'" />';
	result +='<textarea class="play_input2" name="comment" cols="26" rows="8">��Ϸ����</textarea>';
	result +='</div>';
	result +='</div>';
	result +='<div style="clear:both;"></div>';
	result +='<div class="tips_btn">';
	result +='<ul>';
	result +='<li style="cursor:pointer" onclick="document.sub.submit();closeScreenShot();return false;">ȷ ��</li>';
	result +='<li style="cursor:pointer" onclick="closeScreenShot()">ȡ ��</li>';
	result +='</ul>';
	result +='</div>';
	result +='</form>';
	result +='</div>';
	D("showResult").innerHTML = result;
	$("#shadow1").css("height",1500).hide();
	$("#shadow1").toggle();
}

//�رս�ͼ��
function closeScreenShot(){
	displaySwfDiv();	
	D("showResult").style.display = "none";
	D("shadow1").style.display = "none";
}

//��flash�ṩ��Ϸ����
function getGameInfo(){
	//��|��|��ϷID|����
	return _w+"|"+_h+"|"+nFlashId+"|"+title;
}

//��flash�ṩ��½��Ϣ
function getPauth(){
	// |�û�id|�û���|
	var strs = "|0||";
	var Pauth = getCookie("Pauth");
	if (Pauth) {
		if(Pauth.indexOf("|")){
			var Pauths = Pauth.split("|");
			if(Pauths.length>2){
				if (Pauths[0]>0) {
					strs = "|"+Pauths[0]+"|"+Pauths[1]+"|";	
				}
			}
		}
	}
	return strs;
}

//baidu����
function bdshare2(title,img){
	tag = ["qzone","tqq","tsina","weixin"];
	window._bd_share_config={
		"common":{
		"bdSnsKey":"on",
		"bdDesc":title,
		"bdUrl":window.location.href,
		"bdText":title,
		"bdMini":"2",
		"bdMiniList":false,
		"bdPic":img,
		"bdStyle":"0",
		"onAfterClick":function(cmd){},
		"bdSize":"24"
		},"share":{}
	};
	var oHead = document.getElementsByTagName('head').item(0);
    var oScript= document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src="/jss/bdshare2.0.js";
    oHead.appendChild( oScript); 
	//$("head").append("<script type='text/javascript' src='/jss/bdshare2.0.js' ></script>");
}
bdshare2(share_title,share_img);
if(get_screen_height()<=720){GoToBestPosition();}

//ֱ�Ӽ��ز���ϲ��
getCNXH();

var jscnxhindex = 0;
$(".cnxhchg").click(function(){
	if(hasgetCNXH==1){
		jscnxhindex++;
		if(jscnxhindex>arr_cnxh.length-1){jscnxhindex=0;}
		fillcnxh2(arr_cnxh[jscnxhindex]);
	}
	return false;
});
new SoSmart;