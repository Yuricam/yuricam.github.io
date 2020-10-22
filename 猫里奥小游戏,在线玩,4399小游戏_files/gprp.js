var GPRP = GPRP || {};
var S5_IMG_4399 = S5_IMG_4399 || "//s4.img4399.com";
var YJ_MY_GPRP_URL = YJ_MY_GPRP_URL || "//my.4399.com/shoucang";
var GPRP_RESOURCE_URL = GPRP_RESOURCE_URL || "//gprp.4399.com/cg/resource";

(function(){
	var ie6 = window.navigator.userAgent.indexOf("MSIE 6.0") >= 0,
		ie7 = window.navigator.userAgent.indexOf("MSIE 7.0") >= 0;
	var ie = window.navigator.userAgent.indexOf("MSIE") >= 0;
	/*获取浏览器可见区域的高度*/
	function getVisibleWidth(){
		return window.innerWidth || document.documentElement.clientWidth;
	}

	/*获取浏览器可见区域的宽度*/
	function getVisibleHeight(){
		return window.innerHeight || document.documentElement.clientHeight;
	}

	/*获取滚动条滚动的高度*/
	function getScrollTop(){
		return  document.documentElement.scrollTop || document.body.scrollTop;
	} 

	function getFullWidth(){
		var offsetWidth = document.body.offsetWidth,
			width = "100%";

		//有水平滚动条
		if (offsetWidth > getVisibleWidth()){
			width = offsetWidth + "px";
		}

		return width;
	}

	function getFullHeight(){
		var offsetHeight = document.body.offsetHeight,
			height = offsetHeight + "px";

		if (offsetHeight < getVisibleHeight()){
			height = getVisibleHeight() + "px";
		}

		return height;
	}

	function getMaxZindex(){
		var all = document.getElementsByTagName("*"),
			max_zindex = 10000;
		for(var i = 0; i < all.length; i++){
			var zindex;

			if (all[i].currentStyle){
				zindex = parseInt(all[i].currentStyle["zIndex"]);
			} else if (window.getComputedStyle) {  
				zindex = parseInt(document.defaultView.getComputedStyle(all[i],null)["z-index"]);
			}

			if(max_zindex < zindex){
				max_zindex = zindex;
			}
		}

		return max_zindex;
	}

	function trim(str){
		return str.replace(/^\s+|\s+$/g, "")
	}

	function getCookied(name){
		var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
	}

	/*显示蒙层*/
	function lock(max_zindex){
		var mask = document.getElementById("j-gprp_dialog_mask");

		if(!mask){
			mask = document.createElement("div");
			mask.id = 'j-gprp_dialog_mask';
			document.body.appendChild(mask);
		}

		if(ie7){
			mask.style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiYWBgMGYgAjAxEAlGFVJHIUCAAQBnTgBKUse/FQAAAABJRU5ErkJggg==)";
		} else{
			mask.style.opacity = '0.2';
			mask.style.filter = 'alpha(opacity=20)';
			mask.style.backgroundColor = "#000";
		}
		
		mask.style.width = getFullWidth();
		mask.style.height = getFullHeight();
		mask.style.position = (ie6 ? "absolute" : "fixed");
		mask.style.left = '0px';
		mask.style.top = '0px';
		mask.style.zIndex = max_zindex + 1;
		mask.style.display = 'block';
		mask.onclick = function(){
			try{
				GPRP.addCollection.close();
			} catch(e){
				alert(e);
			}
		};

		(typeof lock.afterLock === "function") && lock.afterLock();

		/*if(ie){
			var flashs = document.getElementsByTagName("object");
			for(var i = 0; i < flashs.length; i++){
				flashs[i].style.display = "none";
			}
		}*/

		if(ie6){
			this._timer = setInterval(function(){
				mask.style.height = getFullHeight();
			},300);
		}
	};

	var last_window_resize_time = new Date();

	function resize(){
		var mask = document.getElementById("j-gprp_dialog_mask");
		if(!mask){return;}
		if (new Date() - last_window_resize_time < 100){return;}
		last_window_resize_time = new Date();
		mask.style.width = getFullWidth();
	}

	function unlock(){
		document.getElementById("j-gprp_dialog_mask").style.display = "none";
		/*if(ie){
			var flashs = document.getElementsByTagName("object");
			for(var i = 0; i < flashs.length; i++){
				flashs[i].style.display = "block";
			}
		}*/

		if(ie6){
			clearInterval(lock._timer);
		}

		(typeof unlock.afterUnlock === "function") && unlock.afterUnlock();
	}

	function jsonp(url, success, failure){
        var script = document.createElement("script"),
            calbackname = 'JSONP' + (new Date() - 0) + parseInt(Math.random() * 1000);

        success = typeof success === 'function' ? success : function(){};   
        failure = typeof failure === 'function' ? failure : function(){};

        window[calbackname] = success;

        if(document.attachEvent){
        	script.attachEvent("onload", function(e){
	            document.body.removeChild(script);
	            delete window[calbackname];  
	        }, false);

        	script.attachEvent("onerror", function(e){
	            failure();
	            document.body.removeChild(script);
	            delete window[calbackname];  
	        }, false);

        } else {
        	script.addEventListener("load", function(e){
	            document.body.removeChild(script);
	            delete window[calbackname];  
	        }, false);

        	script.addEventListener("error", function(e){
	            failure();
	            document.body.removeChild(script);
	            delete window[calbackname];  
	        }, false);
        }

        if(url.indexOf("?") >= 0){
            url += '&callback=' + calbackname;
        } else {
           url += '?callback=' + calbackname; 
        }

        script.src = url;

        document.body.appendChild(script);
    }

	if (ie6){
		window.attachEvent("onresize", resize);
	}

	function onCollectedDefault(options, type){
        var target;
        for(var i = 0; i < options.target.length; i++){
        	target = document.getElementById(options.target[i].id);
            target.href = "//my.4399.com/shoucang/";
	        target.target = "_blank";
	        target.onclick = function(){return true};
            options.target[i].oncollected(target, type);
        }
    }

    function onNotCollectedDefault(options, type){
    	var target;

        for(var i = 0; i < options.target.length; i++){
            target = document.getElementById(options.target[i].id);

            target.onclick = function(e){
            	//解决ie6下 href 为 javascript:void(0) 导致请求被abort
            	this.href = "";
            	e = e || window.event;
            	if(e.preventDefault){
            		e.preventDefault();
            	} else {
            		e.returnValue = false;
            	}
		    	//try{
	                GPRP.addCollection(options.gid, options.sid || 0, function(){
	                    onCollectedDefault(options, 0);
	                }, options.showDefaultPop);
	                return false;
	            //}catch(e){
	            	//alert(e);
	            //}

		        return true;
		    };

		    (typeof options.target[i].notcollected === 'function') && options.target[i].notcollected(target, type);
        }
    }

	GPRP.Collection = function(options){

		lock.afterLock = options.afterLock;
		unlock.afterUnlock = options.afterUnlock;

        GPRP.checkCollected(options.gid, options.sid, function(data){
        	if(data.hasCollected){
        		onCollectedDefault(options, 1);
        	} else {
        		onNotCollectedDefault(options, 1);
        	}
        });
    }

	GPRP.addCollection = function(gid, sid, callback, pop){
		pop = pop === false ? false : true;
		callback = (typeof callback === "function" ? callback : function(){});

		if(pop){
			var max_zindex = getMaxZindex();
			var loading = document.getElementById("j-gprp_dialog_loading");

			lock(max_zindex);
			
			if(!loading){
				loading = document.createElement("img");
				loading.id = 'j-gprp_dialog_loading';
				loading.width = 64;
				loading.height = 64;
				loading.style.backgroundColor = '#fff';
				loading.style.padding = '10px';
				loading.style.position = 'absolute';
				loading.style.top = '50%';
				loading.style.left = '50%';
				loading.style.marginLeft = '-32px';
				loading.src = S5_IMG_4399 + '/cg/resource/images/loading.gif';
				document.body.appendChild(loading);
			}	
			loading.style.zIndex = max_zindex + 3;
			loading.style.marginTop = (getScrollTop() -32) + 'px';
			loading.style.display = "block";
			
			var iframe = document.getElementById("j-gprp_dialog_iframe");
			if(!iframe){
				iframe = document.createElement("iframe");
				iframe.id = 'j-gprp_dialog_iframe';
				iframe.frameBorder = 0;
				iframe.width = 480;
				iframe.height = 400;
				iframe.scrolling = 'no';
				iframe.style.position = 'absolute';
				iframe.style.top = '50%';
				iframe.style.left = '50%';
				iframe.style.marginLeft = '-240px';
				
				iframe.allowTransparency = "true";
				document.body.appendChild(iframe);
			}
			iframe.style.zIndex = max_zindex + 2;
			iframe.style.display = "none";
			iframe.style.marginTop = (getScrollTop() -200) + 'px';
			iframe.src = GPRP_RESOURCE_URL + "/addCollection.html?gid=" + gid + '&sId=' + sid + "&r=" + (new Date() - 0);
		} else {
			jsonp('//gprp.4399.com/cg/add_collection.php?gid=' + gid + '&sId=' + sid, function(data){
				callback(data);
			});
		}
		GPRP.addCollection["callback_" + gid] = callback;
	}

	GPRP.addCollection.hideLoading = function(){
		var iframe = document.getElementById('j-gprp_dialog_iframe');
		iframe.style.display = "block";
		var loading = document.getElementById('j-gprp_dialog_loading')
		loading.style.display = "none";
	}

	GPRP.addCollection.close = function(){
		var iframe = document.getElementById('j-gprp_dialog_iframe');
		iframe.style.display = "none";
		var loading = document.getElementById('j-gprp_dialog_loading')
		loading.style.display = "none";
		unlock();
	}

	GPRP.checkCollected = function(gid, sid, callback){
		var Pauth = getCookied('Pauth');
		var offline_cookie = getCookied("_gprp_c") || "";
		
		offline_cookie = offline_cookie.split("|");
		
		//未登录直接判断
		if(!Pauth){
			for(var i =0; i < offline_cookie.length; i++){
				if(offline_cookie[i] == gid){
					callback({hasCollected : true});
					return;
				}
			}

			callback({hasCollected : false});
			return;
		}

		if(getCookied("_cg_flag") != null){
			jsonp('//gprp.4399.com/cg/hasCollected.php?gid=' + gid + '&sId=' + sid, function(data){
				callback(data);
			});
		} else {
			callback({hasCollected : false});
		}
	}

})();