"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1539],{81539:function(e,t,o){o.d(t,{L:function(){return C}});var i=o(52322),s=o(26779),l=o(6852),n=o(39650),r=o.n(n),a=o(38483),d=o(2784),c=o(18978),h=o(65186),p=o(951),u=o(4237),g=o(51611),x=o(87949),y=o(52852),f=o(97313),m=(o(39724),o(93408));const j=e=>{let{point:t,onSelect:o,onHover:s,focusPointIndex:l,myIndex:n,totalPoints:r,lineColor:a,icon:d,myHeight:c,children:h}=e;return(0,i.jsxs)(m.Z,{style:{flexDirection:"row",alignItems:"flex-start",flex:1,width:"100%",overflow:"hidden"},children:[(0,i.jsx)(m.Z,{style:{position:"relative",marginBottom:20}}),(0,i.jsx)(m.Z,{style:{flex:1,flexGrow:1},children:h})]})};var w=o(66178),v=o(82941);(0,a.styled)(l.xv,"text-base text-black my-4");const{width:b,height:k}=x.Z.get("window"),C=e=>{var t;const o=e.route,n=d.useRef([]),[a,x]=(0,d.useState)(!1),[m,b]=(0,d.useState)(),[C,S]=(0,d.useState)(),[I,z]=(0,d.useState)(),[P,G]=(0,d.useState)(),[H,R]=(0,d.useState)(0),[M,A]=(0,d.useState)(-1),[Z,B]=(0,d.useState)(e.height);o.slug;return(0,d.useEffect)((()=>{let e=window.navigator.userAgent;e.match(/android/i)?z("https://play.google.com/store/apps/details?id=app.mapstory.hoejskoleruten"):e.match(/iphone/i)&&z("https://apps.apple.com/dk/app/h%C3%B8jskoleruten/id1658564464")}),[]),(0,d.useEffect)((()=>{if(!o)return;if(void 0===H)return;if(!(null===o||void 0===o?void 0:o.points))return;const e=o.points[H];console.log(null===e||void 0===e?void 0:e.distanceAlong);const t=(null===e||void 0===e?void 0:e.distanceAlong)>0?(0,s.dnL)(o.feature,0,null===e||void 0===e?void 0:e.distanceAlong,{units:"kilometers"}):void 0;b({...t})}),[H]),(0,d.useEffect)((()=>{if(!(null===o||void 0===o?void 0:o.points))return;B(k/2*.8);const e=o.points[H];if(!e)return;const t=e.feature.geometry.coordinates;G(t)}),[H,o,k]),(0,i.jsxs)(v.b,{onClick:e.onClose,children:[C&&(0,i.jsx)(w.s,{route:{params:{point:C}},onClose:S}),(0,i.jsxs)(l.G7,{className:"bg-light backdrop-grayscale",style:{flexDirection:"column",height:"100%"},children:[(0,i.jsx)("div",{style:{marginRight:10,height:50,width:50,position:"absolute",zIndex:200,top:20,left:20,backgroundColor:"white",borderRadius:25},resizeMode:"contain",children:(0,i.jsx)(p.LHV,{size:50,onClick:()=>{window.parent.postMessage({type:"closeRequest"},"*")}})}),(0,i.jsxs)(g.ZP,{attributionControl:!1,style:{width:"100%",height:0===(null===(t=o.points)||void 0===t?void 0:t.length)?"100%":"50%",zIndex:10,top:0,left:0,right:0},initialViewState:{bounds:o.bounds,fitBoundsOptions:{padding:{bottom:200,left:50,top:50,right:50}}},mapLib:r(),mapStyle:"https://api.maptiler.com/maps/hybrid/style.json?key=DbU8BokPxNlBCu78jNOb",children:[(0,i.jsx)(g.Pv,{}),(0,i.jsx)(g.$j,{}),P&&(0,i.jsx)(g.Jx,{longitude:P[0],latitude:P[1],anchor:"bottom",offset:[0,-5],children:(0,i.jsxs)(y.Z,{onPress:()=>{},children:[(0,i.jsx)(l.xv,{style:{position:"absolute",textAlign:"center",left:0,right:0,color:"white"},children:H+1}),(0,i.jsx)(c.Pau,{strokeWidth:20,fill:"#000",color:"white",onClick:()=>{window.parent.postMessage({type:"closeRequest"},"*")},size:30})]})},"mark"+H),(0,i.jsxs)(g.Hw,{id:"my",type:"geojson",data:{type:"FeatureCollection",features:[o.feature]},children:[(0,i.jsx)(g.mh,{type:"line",paint:{"line-width":2,"line-color":"#FC6933","line-opacity":.5}}),(0,i.jsx)(g.mh,{id:"white",type:"line",paint:{"line-width":4,"line-color":"white"}})]}),(0,i.jsxs)(g.Hw,{id:"my-data",type:"geojson",data:{type:"FeatureCollection",features:[m]},children:[(0,i.jsx)(g.mh,{type:"line",paint:{"line-width":2,"line-color":"#FC6933","line-opacity":.5}}),(0,i.jsx)(g.mh,{id:"white",type:"line",paint:{"line-width":4,"line-color":"white"}})]}),(0,i.jsx)(g.Hw,{id:"elapsed",type:"geojson",data:{type:"FeatureCollection",features:[m]},children:(0,i.jsx)(g.mh,{id:"orange",type:"line",paint:{"line-width":2,"line-color":"red","line-dasharray":[2,2],"line-dasharray-transition":{delay:0,duration:100}}})}),(0,i.jsx)(g.Hw,{id:"my-points",type:"geojson",data:{type:"FeatureCollection",features:o.points?o.points.map((e=>e.feature)):[]},children:(0,i.jsx)(g.mh,{type:"circle",paint:{"circle-radius":3}})})]}),o.points&&o.points.length>0&&(0,i.jsxs)("div",{style:{backgroundColor:"#ccc",borderTopLeftRadius:20,borderTopRightRadius:20,position:"absolute",bottom:0,zIndex:20,top:"40%",right:0,left:0,scrollSnapType:"y mandatory",scrollSnapAlign:"start",scrollSnapStop:"always",flex:1,overflowY:"scroll"},onScroll:e=>{const t=(e.currentTarget.scrollTop+(Z-10))/Z,i=Math.floor(t);if(!(i<0||i>o.points.length-1)&&i!==H){R(i);for(let e of n.current);}},children:[(0,i.jsx)(l.G7,{style:{top:0,right:0,left:0,backgroundColor:"#ccc",zIndex:50}}),o.points&&o.points.map(((e,t)=>{var s,r,a,d;const p=t===H;return(0,i.jsx)("div",{style:{scrollSnapAlign:"start",color:"black",width:"100%",padding:20,height:Z},children:(0,i.jsxs)(j,{myHeight:Z,lineColor:"black",icon:(0,i.jsx)(h.G1X,{size:30}),totalPoints:o.points.length,myIndex:t,focusPointIndex:H,onHover:()=>{},onSelect:()=>{R(t)},point:e,children:[!p&&(0,i.jsx)(l.G7,{className:"transition-all "+(p?"shadow-medium shadow-dark":"backdrop-blur-sm backdrop-grayscale"),style:{shadowColor:"black",shadowRadius:[10,10],position:"absolute",zIndex:40,left:0,right:0,top:0,bottom:0}}),(0,i.jsx)(y.Z,{style:{flex:0,top:0,right:0,left:0,bottom:0,flexDirection:"row",alignContent:"center",alignItems:"center",width:"100%"},onHoverIn:()=>{},onPress:()=>{console.log(e),e.video?A(t):(R(t),S(e))},children:(0,i.jsxs)(l.G7,{style:{overflow:"hidden",borderRadius:6,width:"100%"},children:[(0,i.jsxs)(l.G7,{style:{height:"100%",width:"100%"},children:[(0,i.jsx)(l.G7,{className:"transition-all "+(p?"shadow-medium shadow-dark":"backdrop-blur-sm backdrop-grayscale"),style:{zIndex:10,top:0,right:0,bottom:0,left:0}}),(0,i.jsx)(f.Z,{resizeMode:"cover",style:{width:"100%",height:Z-20},resizeMethod:"auto",source:{cache:"force-cache",uri:e.imageUrl}}),M===t&&o.points[M]&&(0,i.jsx)(u.Z,{autoPlay:!0,paused:!1,volume:1,ref:e=>{n.current[M]=e},style:{position:"absolute",left:0,right:0,bottom:0,zIndex:300},audio:!0,playbackId:o.points[M].video.playbackId,metadata:{video_id:"video-id-123456",video_title:"Bick Buck Bunny",viewer_user_id:"user-id-bc-789"},streamType:"on-demand"})]}),(0,i.jsxs)(l.G7,{style:{position:"absolute",top:10,right:10,zIndex:30},children:[(0,i.jsx)(l.xv,{style:{position:"absolute",textAlign:"center",left:10,right:10,lineHeight:30,color:"white"},children:t+1}),(0,i.jsx)(c.Pau,{strokeWidth:20,fill:"#000",color:"white",onClick:()=>{window.parent.postMessage({type:"closeRequest"},"*")},size:50})]}),(0,i.jsxs)(l.G7,{style:{backgroundColor:null===(s=e.image.asset.metadata.palette.darkMuted)||void 0===s?void 0:s.background,position:"absolute",top:0,left:0,padding:10},children:[(0,i.jsx)(l.G7,{children:(0,i.jsx)(l.xv,{style:{color:null===(r=e.image.asset.metadata.palette.darkMuted)||void 0===r?void 0:r.foreground,fontWeight:"400"},children:(null===(a=e.distanceAlong)||void 0===a?void 0:a.toFixed(2))+" km"})}),(0,i.jsx)(l.xv,{style:{color:null===(d=e.image.asset.metadata.palette.darkMuted)||void 0===d?void 0:d.foreground,fontSize:20,fontWeight:"400"},children:e.title})]})]})})]})},t)})),(0,i.jsx)("div",{style:{height:"25vh"}})]})]})]})}}}]);