// var ref=escape(document.referrer);
// function gv_4399cookie(of){
//   var es = document.cookie.indexOf(";",of);
//   if(es==-1) es=document.cookie.length;
//   return unescape(document.cookie.substring(of,es));
// }
// function gc_4399cookie(n){
//   var arg=n+"=";
//   var alen=arg.length;
//   var clen=document.cookie.length;
//   var i=0;
//   while(i<clen){
//     var j=i+alen;
//     if(document.cookie.substring(i,j)==arg) return gv_4399cookie(j);
//     i=document.cookie.indexOf(" ",i)+1;
//     if(i==0) break;
//   }
//   return -1;
// }

// var isPhone = (window.android || window.onJsUniqueId) ? true : false;
// var user = gc_4399cookie("Pauth");
// var uid = 0;
// var udid = 0;

// if (typeof(nFlashId)=='undefined')
//   var nFlashId = 0;
// if (user.length)
// {
//   user_arr = user.split('|');
//   if(user_arr.length>2)
//   {
//     uid = user_arr[0];
//   }
// }
// if (isPhone) {
//   if (login && login.onLoadUserInfo() && login.onLoadUserInfo().indexOf('uid') >= 0) {
//     uid = eval("(" + login.onLoadUserInfo() + ")").uid;
//   }
//   udid = window.android ? android.getUniqueId() : onJsUniqueId();
// }

// if(uid && nFlashId)
// {
//   var time_ed = new Date();
//   var time = parseInt(time_ed.getTime());
//   var data = 'gameid='+nFlashId+'&uid='+uid+'&time='+time;

//   if(isPhone)
//   {
//     data = 'gameid='+nFlashId+'&uid='+uid+'&time='+time+'&udid='+udid;
//   }

//   try {
//     new Image().src = "//club.stat.5054399.net/stat.gif?"+data;
//   } catch(e) {}
// }
//document.write('<meta name="referrer" content="no-referrer-when-downgrade">');
var metaTag=document.createElement('meta');
metaTag.name = "referrer";
metaTag.content = "no-referrer-when-downgrade";
document.getElementsByTagName('head')[0].appendChild(metaTag);
var isPhone = (window.android || window.onJsUniqueId) ? true : false;

(function() {
  var rC = function(n) {
    var c = (('; '+document.cookie).split('; '+n+'=')[1] || '') + ';';
    return decodeURIComponent(c.substring(0, c.indexOf(';')));
  };
  var wC = function(n, v, d, t) {
    var e;
    if (t) {
      var dt = new Date();
      dt.setTime(dt.getTime() + (t * 86400000));
      e = "; expires=" + dt.toGMTString()
    } else {
      e = ""
    }
    document.cookie = n + "=" + encodeURIComponent(v) + e + "; path=/; domain=." + d
  };
  var gI = function() {
    var now = String((new Date()).getTime());
    var data = window._4399stats || {};
    var _Pauth = rC('Pauth');
    data.uid = (_Pauth == '') ? '': (_Pauth.split('|'))[0];
    if (isPhone) {
      if (login && login.onLoadUserInfo() && login.onLoadUserInfo().indexOf('uid') >= 0) {
        data.uid = eval("(" + login.onLoadUserInfo() + ")").uid;
      }
      data.udid = window.android ? android.getUniqueId() : onJsUniqueId();
    }
    var _vid = rC('_4399stats_vid');
    if (_vid == "") {
      data.vid = now + String(parseInt(Math.random() * 10000));
      wC('_4399stats_vid', data.vid, '4399.com', 9999)
    } else {
      data.vid = _vid
    }

    data.m = window.location.href.split('#')[1] || '';
    data.f = rC('_cg_flag') ? 1 : '';
    data.c = rC('_gprp_c') ? 1 : '';
    var gf = rC('_gprp_f');
    if (gf) {
      gf = gf.split('|');
      data.m = gf[0];
      data.g = gf[1];
    }
    data.t = now;
    data.v = 1;
    var info = [];
    for (var i in data) {
      info.push(i + '=' + encodeURIComponent(data[i]))
    }
    try {
      new Image().src = "//gprp.4399api.net/s?" + info.join('&')
    } catch(e) {}
  };
  gI();
})();