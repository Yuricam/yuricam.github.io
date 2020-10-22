function F_Resize(h){
document.getElementById(F_FRAME_ID).height = h;
//window.scrollTo(0,$("#"+F_FRAME_ID).offset().top);
}
var get_screen_height = function(){
  if(window.self&&self.innerHeight) return self.innerHeight;
  if(document.documentElement&&document.documentElement.clientHeight) return document.documentElement.clientHeight;
  return document.body.clientHeight;
},
get_scroll_top = function(){
  if(typeof(window.pageYOffset) != "undefined") return window.pageYOffset;
  if(document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
  if(document.body) return document.body.scrollTop;
},
get_offset_top = function(o){
  var offset_t = o.offsetTop;
  while(o=o.offsetParent){
    offset_t += o.offsetTop;
  }
  return offset_t;
};
function chg_src(){
  var screenH = get_screen_height(), scrollT = get_scroll_top();
  var iframeH = get_offset_top(document.getElementById('CommFrame'));
  if (parseInt(screenH)+parseInt(scrollT) > parseInt(iframeH) - 200){
    document.getElementById('CommFrame').src = F_URL;
    $(window).unbind("scroll", chg_src);
    $(window).unbind("resize", chg_src);
  }
}
$(window).bind("scroll", chg_src);$(window).bind("resize", chg_src);chg_src();
