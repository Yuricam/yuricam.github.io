//��½��ɺ�֪ͨflash
function loginCallback(uid, displayName){
	if(_playMode==4){
		try{document.getElementById('flash22').contentWindow.loginCallback();}catch(e){}//iframe
		try{document.getElementById('flash22').contentWindow.postMessage({eventType:'login'},'*')}catch(e){}//iframe
	}else{
		if(isIE()){
			try{document.getElementById("flashgame").loginCallback();}catch(e){}
			try{document.getElementById("flashgame").postMessage({eventType:'login'},'*')}catch(e){}
		}else{
			try{document.getElementById("flashgame1").loginCallback();}catch(e){}
			try{document.getElementById("flashgame1").postMessage({eventType:'login'},'*')}catch(e){}
		}	
	}
	try{
		loginsuccessdo(UniLogin.getUid());
	}catch(e){}
}

//�˳���ɺ�֪ͨflash
function logoutCallback(){
	if(_playMode==4){
		try{document.getElementById('flash22').contentWindow.logoutCallback();}catch(e){}//iframe
		//try{document.getElementById('flash22').contentWindow.postMessage({eventType:'logoutEvent'},'*')}catch(e){}//iframe
	}else{
		if(isIE()){
			try{document.getElementById("flashgame").logoutCallback();}catch(e){}
			//try{document.getElementById("flashgame").postMessage({eventType:'logoutEvent'},'*')}catch(e){}
		}else{
			try{document.getElementById("flashgame1").logoutCallback();}catch(e){}
			//try{document.getElementById("flashgame1").postMessage({eventType:'logoutEvent'},'*')}catch(e){}
		}	
	}
	try{
		logoutsuccessdo();
	}catch(e){}
}

//����ԭ���Ǹ�֪�Ѿ��رյ�¼
function closeLogRegWindow(){
	if(_playMode==4){
		try{document.getElementById('flash22').contentWindow.closeLogRegWindow();}catch(e){}//iframe
	}else{
		if(isIE()){
			try{document.getElementById("flashgame").closeLogRegWindow();}catch(e){}
		}else{
			try{document.getElementById("flashgame1").closeLogRegWindow();}catch(e){}
		}
	}
}

uloginProp = {};
uloginProp.divId = null;
uloginProp.appId = "dev4399";
uloginProp.layout = "vertical";
uloginProp.layoutSelfAdapting = "false"; //���Բ����ã�ȱʡΪ"true"
uloginProp.displayMode = "popup";
uloginProp.qrLogin = "true";
uloginProp.loginCallback = loginCallback; 
uloginProp.logoutCallback = logoutCallback; 
uloginProp.regCallback = loginCallback;
uloginProp.regMode = "reg_auto";
uloginProp.iframeStylePosition = "fixed";
//ԭ����Ϸ���ӹرջص�����֪ͨflash��¼���Ѿ��ر�
uloginProp.postPopupShowFunction = closeLogRegWindow;
uloginProp.flashDisplayMode="hide";
//uloginProp.css = "http://s4.img4399.com/flashUniLogin/css/style.css?v=20121016";
//uloginProp.verifyCss = "http://cdn.h5wan.4399sj.com/anti-indulge-frame/dist/drop/assets/dark.css";
uloginProp.getPopupUcenterTop = function() {
	return 160;
}
UniLogin.setUnionLoginProps(uloginProp);