// Copyright (C) 2009-2013 CSSMenuTools Ltd. All rights reserved.
// http://www.cssmenutools.com
// ProductID:HorizontalMenu
// VERSION:2.1.2.0
// Trial copy.

/*
COMMON_STYLE:[Default Style,0,0,1,1,'Verdana,Arial,Helvetica,sans-serif',12,0,0,0,1,0,0,1,0,0,#0494F2,#FFFFFF,#0494F2,#FFFFFF,#0494F2,#0494F2,#B5EF49,#000000,#B5EF49,1,1,150,30,0,1,15,15,5,5,0,0,,,,,,,,,],[]
*/
var FGYNRVA = {
dummy:0,
MENU_NAME:'MTHM0',
TOPLEVEL_WIDTH_VARIANT:1,
TOPLEVEL_HEIGHT_VARIANT:0,
TOPLEVEL_WIDTH:800,
TOPLEVEL_HEIGHT:40,
TOPLEVEL_ALIGN:0,
TOPLEVEL_ITEMS_ALIGN:0,
TOPLEVEL_SPACING:1,
TOPLEVEL_TOP_PADDING:0,
TOPLEVEL_BORDER_WIDTH:0,
TOPLEVEL_BORDER_COLOR:'#026493',
TOPLEVEL_BG_COLOR:'',
USE_TOPLEVEL_BG_IMAGES:false,
TOPLEVEL_BG_LEFT_IMAGE:'',
TOPLEVEL_BG_MIDDLE_IMAGE:'',
TOPLEVEL_BG_RIGHT_IMAGE:'',
LEVEL2_MODE:1,
LEVEL2_HEIGHT:40,
LEVEL2_SPACING:1,
LEVEL2_TOP_PADDING:0,
LEVEL2_BORDER_WIDTH:0,
LEVEL2_BORDER_COLOR:'#00008B',
LEVEL2_BG_COLOR:'',
USE_LEVEL2_BG_IMAGES:false,
LEVEL2_BG_LEFT_IMAGE:'',
LEVEL2_BG_MIDDLE_IMAGE:'',
LEVEL2_BG_RIGHT_IMAGE:'',
DROPDOWN_SPACING:1,
DROPDOWN_PADDING:5,
DROPDOWN_FLEVEL_OFFSET_X:0,
DROPDOWN_FLEVEL_OFFSET_Y:1,
DROPDOWN_SUBLEVEL_OFFSET_X:0,
DROPDOWN_SUBLEVEL_OFFSET_Y:0,
DROPDOWN_OPEN_EFFECT:0,
DROPDOWN_OPEN_SPEED:10,
DROPDOWN_CLOSE_EFFECT:0,
DROPDOWN_CLOSE_SPEED:10,
DROPDOWN_DELAY:300,
DROPDOWN_SHADOW:true,
DROPDOWN_BG_COLOR:'#0494F2',
DROPDOWN_BORDER_COLOR:'#026493',
DROPDOWN_BORDER_WIDTH:0,
DROPDOWN_OPACITY:100,
USE_ABSOLUTE_POS:false,
X:0,
Y:0,
Z_INDEX:1000,
SEO_LINKS:0,
KEYBOARD:false,
LANGUAGE_RTL:false,
PREVIEW_BACKGROUND_COLOR:'#FFFFFF',
STREAM:[0,4,0,"Default Style","Contact Us","",0,'','',0,"Default Style","Services","",0,'','',0,"Default Style","Pinellas County","",0,'','',0,"Default Style","About Us","",0,'',''],
END_PARAMETERS:1,
browser:function(){var ua=navigator.userAgent.toLowerCase()
var ind=ua.indexOf('gecko')
this.mozilla=ind>0&&ua.substr(ind).length<17
this.opera=ua.indexOf('opera')>=0
this.safari=ua.indexOf('safari')>=0
this.ie=document.all&&!this.opera
this.ie6=this.ie&&ua.indexOf('msie 6')>0
this.ie7=this.ie&&ua.indexOf('msie 7')>0
this.ie8=this.ie&&ua.indexOf('msie 8')>0
this.ie9=this.ie&&ua.indexOf('msie 9')>0
this.macie=this.ie&&ua.indexOf('mac')>=0
this.winie=this.ie&&!this.macie
this.compatMode=document.compatMode=="CSS1Compat"
this.ieCanvas=this.compatMode?document.documentElement:document.body
return this},
setPathAdjustment:function(ID){var sl=''
var sc=document.getElementsByTagName('script')
for(var i=0;i<sc.length;i++){if(sc[i].innerHTML.search(ID)>-1)sl=sc[i].src}this.SCRIPT_LOCATION=sl.substr(0, sl.lastIndexOf('/')+1)},
adjustPath:function(path){var idf=path.charAt(0)
if(idf=='*'||idf=='&')return this.SCRIPT_LOCATION+path.substr(1)
return path},
isCurrent:function(r){if(!r)return false
var l=location.href.replace(/ /g,'%20')
if(r.search('//')==-1){if(r.charAt(0)=='/')
r=l.replace(/(.*\/\/[^\/]*).*/,'$1')+r
else
r=l.replace(/[^\/]*$/,'')+r}do{var r1=r
r=r1.replace(/[^\/]*\/\.\.\//,'')}while(r!=r1)
return r==l},
addLoadEvent:function(f){var done=0
function w(){if(!done){done=1
f()}}if(document.addEventListener){document.addEventListener('DOMContentLoaded', w, false)}if(this.br.ie&&window==top)(function(){try{document.documentElement.doScroll('left')}catch(e){setTimeout(arguments.callee, 0)
return}w()})()
var oldf=window.onload
if(typeof oldf!='function'){window.onload=w}else{window.onload=function(){try{oldf()}catch(e){}w()}}},
init:function(){var m=this
m.br=new m.browser
m.ID='MTHMFGYNRVA'
m.setPathAdjustment('MTHMMenu script ID:'+m.ID+' ')
m.addLoadEvent(m.onload)},
onload:function(){setTimeout('FGYNRVA.start()',0)},
start:function(){var m=this
m.currentItem=null
m.items=new Array()
m.dropdowns=new Array()
m.styles=new Array()
m.lastFoid=-1
m.defFoid=0
m.timeout=null
m.interval=null
m.opacity=!m.br.ie8 ? 100:100
m.filter=''
m.styles["Default Style"]={ind:1,mline_cntr:0};m.wrapper=document.getElementById(m.ID+'Div')
m.div=document.getElementById(m.ID+'Top')
var sPreloadTags="<ul>"
sPreloadTags+="<li class=\""+m.ID+"item1\"><a><span>link</span></a></li>"
sPreloadTags+="<li class=\""+m.ID+"item1Cur\"><a><span>link</span></a></li>"
sPreloadTags+="<li class=\""+m.ID+"item1Over\"><a><span>link</span></a></li>"
sPreloadTags+="</ul>"
var e=document.createElement('div')
e.className=m.ID+'Preload'
e.innerHTML=sPreloadTags
document.getElementsByTagName('body')[0].appendChild(e)
m.dropdowns[0]=new m.dropdown(m, null, 0, 0)
var i=0, st=m.STREAM
while(i<st.length){var index=st[i++]
var n=st[i++]
var foo=m.dropdowns[index]
var fo=foo.div
if(n==0){foo.isEmpty=true
continue}fo.onmouseover=m.onmouseover
fo.onmouseout=m.onmouseout
var typeNrm=0
var typeSrv=1
var btID=m.ID+'Bt_'+index+'_'
var linkID=m.ID+'Link_'+index+'_'
var fos='<ul>'
for(var j=0;j<n;j++){var it=m.items[linkID+j]=new Object
it.btID=btID+j
it.linkID=linkID+j
it.level=foo.level
it.childOpen=0
it.foid=index
it.cfoid=st[i++]
if(it.cfoid>0)m.dropdowns[it.cfoid]=new m.dropdown(m, it, it.cfoid, foo.level+1)
var stl=m.styles[st[i++]]
var clInd=stl.ind
var bUseTable=stl.mline_cntr&&(m.br.ie6||m.br.ie7)
var tagTxtOpen=bUseTable ? '<table cellspacing=0><tr><td><span>':'<span>'
var tagTxtClose=bUseTable ? '</span></td></tr></table>':'</span>'
var txt=st[i++]
var title=st[i++]
it.type=st[i++]
if(it.type==typeNrm){it.cls=m.ID+'item'+clInd
var href=m.adjustPath(st[i++])
it.sel=m.isCurrent(href)
if(href)it.href='http://www.cssmenutools.com/component/content/article/98.html'
it.target=st[i++]
if(it.target.substr(0,3)=='_MT'){it.func=st[i++]
it.params=st[i++]}if(foo.level>0){txt='<a id="'+it.linkID+'" href="'+(it.href?it.href:'#')+'" target="'+it.target+'" title="'+title+'">'+tagTxtOpen+txt+tagTxtClose+'</a>'
fos+='<li id="'+it.btID+'" class="'+it.cls+'">'+txt+'</li>'}}else if(it.type==typeSrv){if(foo.level>0){fos+='<li class="'+m.ID+'serv'+clInd+'" title="'+title+'"><div>'+tagTxtOpen+txt+tagTxtClose+'</div></li>'}}}fos+="</ul>"
if(foo.level>0)fo.innerHTML=fos
var SBWidth=0
var items=fo.getElementsByTagName('LI')
var len=items.length
if(foo.level>0){for(var j=0;j<len;j++){SBWidth=Math.max(SBWidth, items[j].offsetWidth)
if(j>0)items[j].style.marginTop=1+'px'}fo.style.width=SBWidth+'px'
fo.style.display='none'
if(m.br.ie6){fo.style.paddingTop=0
fo.children[0].style.marginTop=5+'px'}}var items=fo.getElementsByTagName('LI')
var len=items.length
for(var j=0;j<len;j++){var it=m.items[linkID+j]
if(it.type==typeSrv)continue
var btn=items[j]
var a=btn.getElementsByTagName('A')[0]
if(foo.level==0){a.id=linkID+j
btn.id=btID+j}if(it.sel){a.style.cursor='default'
while(it){var foCur=m.dropdowns[it.foid]
if(!it.selSet){it.selSet=true
if(!it.sel){it.selPar=true
btn=document.getElementById(it.btID)}btn.className=it.cls+' '+it.cls+'Cur'}it=foCur.itPar}}else{a.onmouseup=m.onmouseup}a.onfocus=function(){this.blur()};a.onclick=m.onclick}}m.updateDropdowns()},
onmouseover:function(evt){var m=FGYNRVA
m.cancelDropdownsUpdating()
var e=m.getSource(evt)
if(e)m.over(e)
else{var f=this.obj
m.lastFoid=f&&f.itPar ? f.itPar.cfoid:-1
m.updateDropdownsTimeLagged()}},
over:function(e){var m=this
var it=m.items[e.id]
if(it){m.currentItem=e
if(!it.sel&&(!it.selPar||!m.defFoid||it.level>0))e.parentNode.className=it.cls+' '+it.cls+'Over'
m.lastFoid=it.cfoid?it.cfoid:it.foid
m.updateDropdownsTimeLagged()}},
onmouseout:function(evt){var m=FGYNRVA
m.cancelDropdownsUpdating()
var e=m.getSource(evt)
if(e)m.out(e)
else{m.lastFoid=-1
m.updateDropdownsTimeLagged()}},
out:function(e){var m=this
var it=m.items[e.id]
if(it&&!it.sel&&!it.childOpen){if(it.selPar)e.parentNode.className=it.cls+' '+it.cls+'Cur'
else e.parentNode.className=it.cls}m.lastFoid=-1
m.updateDropdownsTimeLagged()},
onmouseup:function(evt){var m=FGYNRVA
m.isdown=false
var e=m.getSource(evt)
if(e)m.clicked(e)},
clicked:function(e){var m=FGYNRVA
var it=m.items[e.id]
if(it&&it.href){m.cancelDropdownsUpdating()
m.lastFoid=-1
m.updateDropdowns()
if(it.target)window.open(it.href,it.target)
else location=it.href}},
onclick:function(){return false},
updateDropdownsTimeLagged:function(){this.timeout=window.setTimeout('FGYNRVA.updateDropdowns()',300)},
cancelDropdownsUpdating:function(){window.clearTimeout(this.timeout)},
updateDropdowns:function(){var m=this
for(var i=1;i<m.dropdowns.length;i++)m.dropdowns[i].show=false
if(m.lastFoid<0)m.lastFoid=m.defFoid
if(m.lastFoid){var f=m.dropdowns[m.lastFoid]
while(f.itPar){f.show=true
f=m.dropdowns[f.itPar.foid]}}var l=m.dropdowns.length
for(var i=1;i<l;i++){var f=m.dropdowns[i]
if(!f.show&&f.shown)f.removeDropdown()}for(var i=1;i<l;i++){var f=m.dropdowns[i]
if(f.show&&!f.shown)f.showDropdown()}},
getSource:function(evt){var e=this.br.ie?event.srcElement:evt.target
while(e&&e.tagName!='A')e=e.parentNode
return e},
getOpacity:function(i){var op=this.opacity
if(i>0)op=op*5*(6-i)/ 100
return op},
getBGColor:function(col){return col?col:'transparent'},
getTop:function(e, base){var m=this
var top=0
while(e&&((base==0&&e!=m.wrapper)||(base==1&&((e.style.position!='absolute'&&e.style.position!='relative')||e==m.wrapper))||(base==2))){top+=e.offsetTop
e=e.offsetParent
if(e&&!m.br.opera){var bw=parseInt(e.style.borderTopWidth)
if(!bw)bw=0
top+=bw}}return top},
getLeft:function(e, base, objPar){var m=this
var left=0
while(e&&((base==0&&e!=objPar&&e!=m.wrapper)||(base==1&&((e.style.position!='absolute'&&e.style.position!='relative')||e==m.wrapper))||(base==2))){left+=e.offsetLeft
e=e.offsetParent}return left},
dummy:null};FGYNRVA.dropdown=function(m, itPar, index, level){var f=this
if(level==0){f.div=m.div
f.baseLeft=m.br.ie8?0:0
f.baseTop=m.div.offsetHeight-0}else{f.div=document.createElement('div')
f.div.className=m.ID+'_DD'
f.div.style.position='absolute'
f.div.style.left='-10000px'
f.clip=f.div.style.clip
m.wrapper.appendChild(f.div)
f.shadows=new Array
for(var s=1;s<=4;s++){f.shadows[s]=document.createElement('div')
f.shadows[s].style.display='none'
m.wrapper.appendChild(f.shadows[s])}f.intr=false}f.m=m
f.itPar=itPar
f.show=false
f.shown=!index
f.level=level
f.div.obj=f
f.obj='FGYNRVA.fo'+index
eval(f.obj+'=f')};FGYNRVA.dropdown.prototype={showDropdown:function(){var f=this
var it=f.itPar
var fo=f.div
if(!fo||f.intr||f.isEmpty)return
var m=f.m
var e=document.getElementById(it.btID)
var pfo=m.dropdowns[it.foid]
it.childOpen=1
f.intr=true
f.pfoid=it.foid
var docTop=(m.br.ie?m.br.ieCanvas.scrollTop:window.pageYOffset)-m.getTop(m.wrapper,2)
var docLeft=(m.br.ie?m.br.ieCanvas.scrollLeft:window.pageXOffset)-m.getLeft(m.wrapper,2)
var docHeight=m.br.ie?m.br.ieCanvas.clientHeight:window.innerHeight
var docWidth=m.br.ie?m.br.ieCanvas.clientWidth:window.innerWidth
var bFirstFO=f.level==1
var topLimit=docTop+2
var bottomLimit=docTop+docHeight-6
fo.style.top='-10000px'
fo.style.display='block'
f.baseWidth=fo.offsetWidth
f.baseHeight=fo.offsetHeight
var offsetX=bFirstFO ? 0:0
var offsetY=bFirstFO ? 1:0
f.baseLeft=pfo.baseLeft+(bFirstFO ? m.getLeft(e,0,m.wrapper):pfo.div.offsetWidth)+offsetX
f.baseTop=pfo.baseTop+(bFirstFO ? 0:e.offsetTop)+offsetY
if(f.baseLeft+f.baseWidth-docLeft>docWidth){var left=Math.min((bFirstFO ? docWidth+docLeft:pfo.baseLeft)-f.baseWidth-offsetX, m.wrapper.offsetWidth-f.baseWidth)
if(left>=0)f.baseLeft=left}if(!bFirstFO&&f.baseHeight+f.baseTop>bottomLimit){var t=bottomLimit-f.baseHeight
f.baseTop=t<topLimit ? topLimit:t}for(var i=1;i<=4;i++){var s=f.shadows[i]
s.innerHTML='.'
var ss=s.style
ss.display='none'
ss.position='absolute'
ss.left=(f.baseLeft+i)+'px'
ss.top=(f.baseTop+i)+'px'
ss.width=f.baseWidth+'px'
ss.height=f.baseHeight+'px'
ss.backgroundColor='#000000'
ss.zIndex=1000-i
var opacity=m.getOpacity(i)
ss.filter='progid:DXImageTransform.Microsoft.Alpha(opacity='+opacity+')'
ss.opacity=opacity/100}fo.style.display='none'
fo.style.top=f.baseTop+'px'
fo.style.left=f.baseLeft+'px'
f.animate=f.snap
f.openAnimated(0)},
removeDropdown:function(){var f=this
var it=f.itPar
it.childOpen=0
var e=document.getElementById(it.linkID)
if(e){if(it.selPar)e.parentNode.className=it.cls+' '+it.cls+'Cur'
else if(!it.sel)e.parentNode.className=it.cls}if(f.intr)return
f.intr=true
f.animate=f.snap
f.closeAnimated(100)},
hideDropdown:function(){var f=this
f.div.style.display='none'
for(var i=1;i<=4;i++){f.shadows[i].style.display='none'}},
clear:function(){var f=this},
clearClip:function(o){if(o.style.display!='none')o.style.display='block'
o.style.clip=this.m.br.ie?'rect(auto auto auto auto)':this.clip},
openAnimated:function(p){var f=this
if(p>100)p=100
var t=f.animate(f.div,p,0)
if(p==0)f.div.style.display=''
for(var i=1;i<=4;i++){var s=f.shadows[i]
f.animate(s,p,i)
if(p==0)s.style.display=''}if(p==100)f.finishAnimation(true)
else if(t)window.setTimeout(f.obj+'.openAnimated('+(p+10)+')',10)},
closeAnimated:function(p){var f=this
if(p<0)p=0
var t=f.animate(f.div,p,0)
for(var i=1;i<=4;i++){var s=f.shadows[i]
f.animate(s,p,i)}if(p==0){f.finishAnimation(false)}else if(t){window.setTimeout(f.obj+'.closeAnimated('+(p-10)+')',10)}},
finishAnimation:function(open){var f=this
if(!open)f.hideDropdown()
f.shown=open
f.intr=false
if(f.show){if(f.shown)f.clear()
else f.showDropdown()}if(!f.show&&f.shown)f.removeDropdown()},
snap:function(o,p,i){if(!p)this.div.style.display=''
this.finishAnimation(p?false:true)
return false},
dummy:null};FGYNRVA.init()
