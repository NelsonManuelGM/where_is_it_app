(this.webpackJsonpwhere_is_it_app=this.webpackJsonpwhere_is_it_app||[]).push([[0],{15:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var a=n(44),i=function(){return Object(a.b)()},r=a.c},18:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var a=n(36),i=n(374),r=n(382),o=n(376);var c,s=(c={},Object(i.a)(Object(a.a)({palette:{grayscale:{dark:"#000000",darkGray:"#232323",main:"#777777",light:"#ffffff"}}},c)));s=Object(r.a)(s);var l=Object(o.a)({mapStyle:{width:"100%",height:"100vh",position:"relative"},customMarker:{position:"absolute",color:s.palette.warning.main,top:"-200%",left:"-100%",width:"2.3rem",height:"2.3rem"},dashboardStyle:{color:s.palette.grayscale.light,background:s.palette.grayscale.dark,opacity:"85%",padding:"0.5rem",borderRadius:"5px"},drawerSelectedItem:{background:s.palette.warning.main}})},240:function(t,e){},242:function(t,e){},255:function(t,e){},257:function(t,e){},285:function(t,e){},286:function(t,e){},291:function(t,e){},293:function(t,e){},300:function(t,e){},319:function(t,e){},373:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(14),o=n.n(r),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var l,u=function(t){t&&t instanceof Function&&n.e(5).then(n.bind(null,463)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),r(t),o(t)}))},d=n(450),f=(n(231),n(44)),b=n(449),j=(n(205),n(15)),p=n(36),g=n(45),O=n.n(g),h=n(70),m=n(31),x=Object(m.b)("coordinate/configuration",function(){var t=Object(h.a)(O.a.mark((function t(e,n){var a,i,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.latitude,i=e.longitude,r=e.accuracy,n.dispatch({type:"direction/setConfiguration",payload:{departure:{lat:a,lng:i}}}),t.abrupt("return",{latitude:a,longitude:i,accuracy:r});case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),y=Object(m.c)({name:"coordinate",initialState:{latitude:0,longitude:0,accuracy:0,gpsAccuracyThreshold:30,positionAccuracyThreshold:20},reducers:{updateConfiguration:function(t,e){Object(p.a)({},e.payload)},updateGpsAccuracy:function(t,e){t.gpsAccuracyThreshold=e.payload.flag?30:18e3},positionAccuracy:function(t,e){t.positionAccuracyThreshold=e.payload.flag?20:90}},extraReducers:function(t){t.addCase(x.fulfilled,(function(t,e){var n=e.payload;t.latitude=n.latitude,t.longitude=n.longitude,t.accuracy=n.accuracy}))}}),v=y.actions;v.updateConfiguration,v.positionAccuracy,v.updateGpsAccuracy,y.reducer;!function(t){t.PERMISSION_DENIED="PERMISSION_DENIED",t.POSITION_UNAVAILABLE="POSITION_UNAVAILABLE",t.API_REQUEST_ERROR="API_REQUEST_ERROR",t.GEO_LOCATION_UNSUPPORTED="GEO_LOCATION_UNSUPPORTED",t.TIMEOUT="TIMEOUT",t.WARNING="WARNING",t.SUCCESS="SUCCESS",t.NONE="NONE"}(l||(l={}));var S={notification:"",type:l.NONE},w=Object(m.c)({name:"notification",initialState:S,reducers:{changeNotification:function(t,e){t.notification=e.payload.notification,t.type=e.payload.type||l.NONE}}}),E=(w.actions.changeNotification,w.reducer,function(t){var e=Object(f.b)(),n=Object(j.b)((function(t){return t.coordinates})).gpsAccuracyThreshold,i=Object(j.b)((function(t){return t.coordinates})),r=Object(a.useRef)(),o=Object(a.useCallback)((function(t){console.log("Latitude: "+t.coords.latitude.toPrecision(21)+" Longitude: "+t.coords.longitude.toPrecision(21)+" Accuracy: "+t.coords.accuracy),void 0===n||t.coords.accuracy<=n?i.latitude===t.coords.latitude&&i.longitude===t.coords.longitude||(e(x({latitude:t.coords.latitude,longitude:t.coords.longitude,accuracy:t.coords.accuracy})),e({type:"notification/changeNotification",payload:{notification:""}})):setTimeout((function(){(void 0!==n||t.coords.accuracy>n)&&e({type:"notification/changeNotification",payload:{notification:"Failed to reach desired accuracy"}})}),1e3)}),[n,i.latitude,i.longitude,e]),c=Object(a.useCallback)((function(n){if(n)switch(n.code){case n.TIMEOUT:e({type:"notification/changeNotification",payload:{notification:n.message,type:l.TIMEOUT}}),r.current=navigator.geolocation.watchPosition(o,c,t);break;case n.PERMISSION_DENIED:e({type:"notification/changeNotification",payload:{notification:n.message,type:l.PERMISSION_DENIED}})}}),[e,o,t]),s=function(){r.current&&navigator.geolocation&&navigator.geolocation.clearWatch(r.current)};return Object(a.useEffect)((function(){return navigator.geolocation?r.current=navigator.geolocation.watchPosition(o,c,t):e({type:"notification/changeNotification",payload:{notification:"It can't handle geo location",type:l.GEO_LOCATION_UNSUPPORTED}}),s}),[e,c,o,t]),s});function k(t){return t*Math.PI/180}var N,C,z,I,_=function(t,e,n,a){var i=k(n-t),r=k(a-e),o=k(t),c=k(n),s=Math.sin(i/2)*Math.sin(i/2)+Math.sin(r/2)*Math.sin(r/2)*Math.cos(o)*Math.cos(c);return 6371*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))*1e3},T=n(24),P=n(407),A=n(409),M=n(452),R=n(213),D=n.n(R),L=n(18),F=n(12),U=n(13),B=n(2),W=U.b.div(N||(N=Object(F.a)(["\n  position: absolute;\n  z-index: 500;\n  bottom: 40px;\n  left: 3%;\n  border-radius: 0;\n"]))),G=function(t){var e=document.getElementById("app-notification"),n=Object(a.useMemo)((function(){return Object(B.jsxs)(W,{children:[" ",t.children," "]})}),[t.children]);return e?o.a.createPortal(n,e):null},X=Object(a.memo)(G),K=function(){var t=Object(j.b)((function(t){return t.error})),e=t.notification,n=t.type,r=Object(L.a)().dashboardStyle,o=i.a.useState(!e),c=Object(T.a)(o,2),s=c[0],u=c[1],d=Object(a.useCallback)((function(){switch(n){case l.SUCCESS:return"success";case l.WARNING:return"warning";default:return"error"}}),[n]);return Object(B.jsx)(B.Fragment,{children:e&&Object(B.jsx)(X,{children:Object(B.jsx)(P.a,{in:s,className:r,children:Object(B.jsx)(M.a,{severity:d(),action:Object(B.jsx)(A.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(t,e){"clickaway"!==e&&u(!1)},children:Object(B.jsx)(D.a,{fontSize:"inherit"})}),style:{backgroundColor:"unset",color:"white"},children:e})})})})},q=Object(a.memo)(K),H=n(423),Y=n(26),V=n(130),Q=n(410),Z=n(411),J=n(412),$=n(413),tt=n(414),et=n(415),nt=n(416),at=n(417),it=n(418),rt=n(419),ot=n(420),ct=n(421),st=n(422),lt=function(t){var e=t.type,n=t.modifier;if("arrive"===e)return Object(B.jsx)(Q.a,{fontSize:"large"});if("depart"===e)return Object(B.jsx)(Z.a,{fontSize:"large"});if("end of road"===e)return"left"===n?Object(B.jsx)(J.a,{style:{transform:"rotateX(180deg)"},fontSize:"large"}):"right"===n?Object(B.jsx)($.a,{style:{transform:"rotateX(180deg)"},fontSize:"large"}):Object(B.jsx)(tt.a,{fontSize:"large"});if("on ramp"===e)return"left"===n?Object(B.jsx)(J.a,{style:{transform:"rotateX(180deg)"},fontSize:"large"}):"right"===n?Object(B.jsx)($.a,{style:{transform:"rotateX(180deg)"},fontSize:"large"}):"slight right"===n?Object(B.jsx)(et.a,{fontSize:"large"}):Object(B.jsx)(et.a,{style:{transform:"rotateY(180deg)"},fontSize:"large"});if("turn"===e){if("right"===n)return Object(B.jsx)($.a,{style:{transform:"rotateX(180deg)"},fontSize:"large"});if("slight right"===n)return Object(B.jsx)(et.a,{fontSize:"large"});if("left"===n)return Object(B.jsx)(J.a,{style:{transform:"rotateX(180deg)"},fontSize:"large"});if("slight left"===n)return Object(B.jsx)(et.a,{style:{transform:"rotateY(180deg)"},fontSize:"large"});if("straight"===n)return Object(B.jsx)(nt.a,{fontSize:"large"});if("sharp right"===n)return Object(B.jsx)($.a,{style:{transform:"rotateX(180deg)"},fontSize:"large"});if("sharp left"===n)return Object(B.jsx)(J.a,{style:{transform:"rotateX(180deg)"},fontSize:"large"})}else{if("off ramp"===e)return"slight right"===n?Object(B.jsx)(et.a,{fontSize:"large"}):Object(B.jsx)(et.a,{style:{transform:"rotateY(180deg)"},fontSize:"large"});if("fork"===e)return"slight right"===n?Object(B.jsx)(et.a,{fontSize:"large"}):Object(B.jsx)(et.a,{style:{transform:"rotateY(180deg)"},fontSize:"large"});if("roundabout"===e){if("slight right"===n||"right"===n)return Object(B.jsx)(at.a,{fontSize:"large"});if("slight left"===n||"left"===n)return Object(B.jsx)(it.a,{fontSize:"large"});if("straight"===n)return Object(B.jsx)(nt.a,{fontSize:"large"})}else{if("roundabout turn"===e)return"right"===n?Object(B.jsx)(rt.a,{fontSize:"large"}):"left"===n?Object(B.jsx)(ot.a,{fontSize:"large"}):"slight right"===n?Object(B.jsx)(rt.a,{fontSize:"large"}):Object(B.jsx)(ot.a,{fontSize:"large"});if("new name"===e){if("slight right"===n)return Object(B.jsx)(et.a,{fontSize:"large"});if("slight left"===n)return Object(B.jsx)(et.a,{fontSize:"large"});if("straight"===n)return Object(B.jsx)(nt.a,{fontSize:"large"})}else{if("continue"!==e)return Object(B.jsx)(st.a,{fontSize:"large"});if("left"===n)return Object(B.jsx)(J.a,{style:{transform:"rotateX(180deg)"},fontSize:"large"});if("right"===n)return Object(B.jsx)($.a,{style:{transform:"rotateX(180deg)"},fontSize:"large"});if("uturn"===n)return Object(B.jsx)(ct.a,{fontSize:"large"});if("slight right"===n)return Object(B.jsx)(et.a,{fontSize:"large"});if("slight left"===n)return Object(B.jsx)(et.a,{style:{transform:"rotateY(180deg)"},fontSize:"large"});if("straight"===n)return Object(B.jsx)(nt.a,{fontSize:"large"})}}}},ut=U.b.div(C||(C=Object(F.a)(["\n  min-height: 40px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-bottom: 5px;\n\n  width:250px;\n\n  @media screen and (max-width:600px){\n      width:70px;\n  }\n"]))),dt=function(t){var e=t.navigation,n=t.onClickBox,a=Object(Y.a)(),i=Object(L.a)().dashboardStyle,r=Object(j.b)((function(t){return t.map}));return Object(B.jsx)(ut,{theme:a,onClick:n,className:i,children:e&&Object(B.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[Object(B.jsx)(H.a,{fontSize:"small",style:{margin:"0 0.5rem"}}),!r.responsive&&Object(B.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(B.jsx)(V.a,{variant:"body1",children:e.maneuver.instruction}),Object(B.jsx)(V.a,{variant:"body2",style:{color:a.palette.secondary.main},children:function(t){var e=[];return t.name&&e.push(t.name),t.destinations&&e.push(t.destinations),e.join("\n")}(e)}),Object(B.jsxs)(V.a,{variant:"subtitle2",style:{color:a.palette.grayscale.main},children:[e.distance.toFixed()," meters | ",(e.duration/60).toFixed()," min"]})]}),lt({type:e.maneuver.type,modifier:e.maneuver.modifier})]})})},ft=Object(a.memo)(dt),bt=n(96),jt=n(453),pt=n(425),gt=n(426),Ot=n(427),ht=n(424),mt=Object(U.b)(jt.a)(z||(z=Object(F.a)(["\n  .MuiPaper-root {\n    background-color: ",";\n    opacity: 90%;\n    max-width:400px;\n\n    @media screen and (max-width: 375px) {\n        width: 310px;\n    }\n  }\n"])),(function(t){return t.theme.palette.grayscale.darkGray})),xt=function(t){var e=t.open,n=t.onDrawerClose,i=t.route,r=t.currentStep,o=Object(L.a)().drawerSelectedItem,c=Object(Y.a)(),s=function(t){var e=[];return t.name&&e.push(t.name),t.destinations&&e.push(t.destinations),e.join("\n")},l=Object(a.useCallback)((function(t){if(t&&void 0!==r){var e,n=Object(bt.a)(t.children);try{var a=function(){var t=e.value;"DIV"===t.tagName&&t.classList.forEach((function(e){var n;e===r.toString()&&(null===(n=t.attributes[0].ownerElement)||void 0===n||n.classList.add(o))}))};for(n.s();!(e=n.n()).done;)a()}catch(i){n.e(i)}finally{n.f()}}}),[r,o]);return Object(B.jsxs)(mt,{anchor:"right",open:e,onClose:n,theme:c,children:[Object(B.jsx)(ht.a,{fontSize:"inherit",onClick:n,style:{color:c.palette.grayscale.main,marginRight:"90%",padding:"10px 0 0 8px",cursor:"pointer"}}),Object(B.jsx)(pt.a,{ref:l,children:i&&i.legs[0].steps.map((function(t,e){return Object(B.jsx)("div",{style:{paddingTop:"4px",paddingBottom:"6px"},className:"".concat(e),children:Object(B.jsxs)(gt.a,{alignItems:"flex-start",children:[Object(B.jsx)(Ot.a,{style:{color:"white"},children:lt({type:t.maneuver.type,modifier:t.maneuver.modifier})}),Object(B.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(B.jsx)(V.a,{variant:"body1",style:{color:c.palette.grayscale.light},children:t.maneuver.instruction}),Object(B.jsx)(V.a,{variant:"body2",style:{color:c.palette.secondary.main},children:s(t)}),Object(B.jsxs)(V.a,{variant:"subtitle2",style:{color:c.palette.grayscale.main},children:[t.distance.toFixed()," meters | ",(t.duration/60).toFixed()," min"]})]})]})},e)}))})]})},yt=Object(a.memo)(xt),vt=n(428),St=n(429),wt=n(430),Et=n(431),kt=n(432);!function(t){t.driving="driving",t.cycling="cycling",t.walking="walking",t.drivingTraffic="driving-traffic"}(I||(I={}));var Nt,Ct=function(t){var e=[];return t.coordinates.forEach((function(t){e.push([t[1],t[0]])})),{type:t.type,coordinates:e}},zt=function(t){return{bearing_after:t.bearing_after,bearing_before:t.bearing_before,location:[t.location[1],t.location[0]],instruction:t.instruction,type:t.type,modifier:t.modifier}},It=function(t){var e=[];return t.forEach((function(t){e.push({driving_side:t.driving_side,destinations:t.destinations,mode:t.mode,duration:t.duration,name:t.name,distance:t.distance,maneuver:zt(t.maneuver),geometry:Ct(t.geometry)})})),e},_t=function(t){var e=[];return t.forEach((function(t){e.push({summary:t.summary,distance:t.distance,duration:t.distance,steps:It(t.steps)})})),e},Tt=function(t){var e=[];return t.forEach((function(t){e.push({duration:t.duration,distance:t.distance,legs:_t(t.legs),geometry:Ct(t.geometry)})})),e},Pt=function(t){var e=[];return t.forEach((function(t){e.push({distance:t.distance,location:[t.location[1],t.location[0]],name:t.name})})),e},At=n(214),Mt=n.n(At).a.create({baseURL:"https://api.mapbox.com/directions/v5/mapbox/"}),Rt=function(t,e){var n=["".concat(t.lng,"%2C").concat(t.lat)];return e.map((function(t){return n.push("".concat(t.lng,"%2C").concat(t.lat))})),n.join("%3B")},Dt=function t(e){var n,a=!1;if(void 0!==(n=e).lat&&void 0!==n.lng)a=0!==e.lng&&0!==e.lat;else{var i,r=Object(bt.a)(e);try{for(r.s();!(i=r.n()).done;){a=t(i.value)}}catch(o){r.e(o)}finally{r.f()}}return a},Lt=function(){var t=Object(h.a)(O.a.mark((function t(e){var n,a,i,r,o,c,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.alternatives,a=e.target,i=e.departure,r=e.profile,o=e.steps,c="",i&&a&&Dt(i)&&Dt(a)&&(c=Rt(i,a)),s="".concat(r,"/").concat(c,"?alternatives=").concat(n,"&geometries=geojson&steps=").concat(o,"&bearings=60,45;45,45&overview=full&access_token=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/where_is_it_app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MAPBOX_TOKEN),t.next=6,Mt.get(s);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();!function(t){t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected"}(Nt||(Nt={}));var Ft,Ut,Bt,Wt,Gt,Xt,Kt,qt,Ht,Yt,Vt,Qt,Zt,Jt,$t={configuration:{profile:I.driving,departure:{lat:0,lng:0},target:[{lat:25.69125971191103,lng:-80.3877791296447}],steps:!0,alternatives:!1},direction:void 0,status:Nt.fulfilled},te=Object(m.b)("direction/requestDirection",function(){var t=Object(h.a)(O.a.mark((function t(e,n){var a,i,r,o;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=n.getState(),i=a.direction,t.next=4,Lt({alternatives:i.configuration.alternatives,target:i.configuration.target,departure:i.configuration.departure,profile:i.configuration.profile,steps:i.configuration.steps});case 4:return r=t.sent,o=r.data,n.dispatch({type:"notification/changeNotification",payload:{notification:""}}),t.abrupt("return",{routes:Tt(o.routes),waypoints:Pt(o.waypoints)});case 10:t.prev=10,t.t0=t.catch(0),console.log("direction request error: ",t.t0),n.dispatch({type:"notification/changeNotification",payload:{notification:t.t0.message,type:l.API_REQUEST_ERROR}});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()),ee=Object(m.c)({name:"direction",initialState:$t,reducers:{setConfiguration:function(t,e){t.configuration=Object(p.a)(Object(p.a)({},t.configuration),e.payload)},setStatus:function(t,e){t.status=e.payload.status}},extraReducers:function(t){t.addCase(te.pending,(function(t){t.status=Nt.pending,t.direction=void 0})),t.addCase(te.fulfilled,(function(t,e){var n=e.payload;t.status=Nt.fulfilled,t.direction=n})),t.addCase(te.rejected,(function(t){t.status=Nt.rejected}))}}),ne=ee.actions,ae=(ne.setConfiguration,ne.setStatus,ee.reducer,U.b.div(Ft||(Ft=Object(F.a)(["\n  width: 130px;\n\n  .MuiBottomNavigation-root {\n    background-color: unset;\n    height: unset;\n  }\n\n  .MuiBottomNavigationAction-root {\n    max-width: unset;\n    min-width: unset;\n    color: unset;\n  }\n\n  .MuiBottomNavigationAction-root.Mui-selected {\n    color: ",";\n    padding-top: 8px;\n  }\n\n  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {\n    padding-top: 8px;\n  }\n"])),(function(t){return t.theme.palette.warning.main}))),ie=function(){var t=Object(L.a)().dashboardStyle,e=Object(Y.a)(),n=Object(f.b)(),i=Object(a.useCallback)((function(t){n({type:"direction/setConfiguration",payload:{profile:t}}),n({type:"direction/setStatus",payload:{status:Nt.pending}})}),[n]),r=Object(a.useState)(0),o=Object(T.a)(r,2),c=o[0],s=o[1];return Object(B.jsx)(ae,{style:{padding:0},className:t,theme:e,"data-testid":"locomotion-picker",children:Object(B.jsxs)(vt.a,{value:c,onChange:function(t,e){s(e)},children:[Object(B.jsx)(St.a,{onClick:function(){return i(I.driving)},icon:Object(B.jsx)(wt.a,{fontSize:"small"}),about:"Driving","data-testid":"btn-driving"}),Object(B.jsx)(St.a,{onClick:function(){return i(I.cycling)},icon:Object(B.jsx)(Et.a,{fontSize:"small"}),about:"Cycling","data-testid":"btn-cycling"}),Object(B.jsx)(St.a,{onClick:function(){return i(I.walking)},icon:Object(B.jsx)(kt.a,{fontSize:"small"}),about:"Walking","data-testid":"btn-walking"})]})})},re=Object(a.memo)(ie),oe=n(433),ce=U.b.div(Ut||(Ut=Object(F.a)(["\n  top: 20px;\n  right: 25px;\n  position: absolute;\n  z-index: 500;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"]))),se=U.b.div(Bt||(Bt=Object(F.a)(["\n  min-height: 40px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-bottom: 5px;\n\n  width:250px;\n\n  @media screen and (max-width:600px){\n      width:70px;\n  }\n"]))),le=function(t){var e=t.location,n=Object(L.a)().dashboardStyle,i=Object(j.b)((function(t){return t.direction})).direction,r=Object(j.b)((function(t){return t.coordinates})).positionAccuracyThreshold,o=Object(a.useState)(),c=Object(T.a)(o,2),s=c[0],l=c[1],u=Object(a.useState)(),d=Object(T.a)(u,2),f=d[0],b=d[1],p=Object(a.useState)(!1),g=Object(T.a)(p,2),O=g[0],h=g[1],m=Object(a.useState)(),x=Object(T.a)(m,2),y=x[0],v=x[1],S=Object(a.useCallback)((function(){h(!O)}),[O]);return Object(a.useEffect)((function(){i&&v(i.routes[0])}),[i]),Object(a.useEffect)((function(){i&&(null===i||void 0===i||i.routes[0].legs[0].steps.forEach((function(t,n){var a=0;t.geometry.coordinates.forEach((function(t){a=_(e.lat,e.lng,t[0],t[1]),console.log("DISTANCE IN METERS -> : ",parseInt(a.toFixed(2))),parseInt(a.toFixed(2))<=r&&l(n)}))})))}),[i,null===i||void 0===i?void 0:i.routes,e.lat,e.lng,r]),Object(a.useEffect)((function(){void 0!==s&&i&&b(null===i||void 0===i?void 0:i.routes[0].legs[0].steps[s])}),[s,i,null===i||void 0===i?void 0:i.routes]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ce,{"data-testid":"navigation-box",children:f?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ft,{navigation:f,onClickBox:S}),Object(B.jsx)(re,{})]}):Object(B.jsx)(se,{className:n,children:Object(B.jsx)(oe.a,{disableShrink:!0,style:{color:"white"},size:25})})}),y&&Object(B.jsx)(yt,{open:O&&void 0!==s,onDrawerClose:S,route:y,currentStep:s})]})},ue=Object(a.memo)(le),de=n(434),fe=Object(U.b)(jt.a)(Wt||(Wt=Object(F.a)(["\n  .MuiPaper-root {\n    background-color: ",";\n    opacity: 90%;\n    max-width: 500px;\n    width: 100%;\n\n    @media screen and (max-width: 450px){\n      width: 400px;\n    }\n\n    @media screen and (max-width: 375px){\n      width: 310px;\n    }\n  }\n"])),(function(t){return t.theme.palette.grayscale.darkGray})),be=function(t){var e=t.open,n=t.onCloseDrawer,a=Object(Y.a)();return Object(B.jsx)(fe,{anchor:"left",open:e,onClose:n,theme:a,children:Object(B.jsx)(ht.a,{fontSize:"inherit",onClick:n,style:{color:a.palette.grayscale.main,marginLeft:"90%",padding:"10px 8px 0 0",cursor:"pointer"}})})},je=Object(a.memo)(be),pe=U.b.div(Gt||(Gt=Object(F.a)(["\n  width: 20px;\n  height: 20px;\n  left: 25px;\n  top: 25px;\n  position: absolute;\n  z-index: 500;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 8px;\n  cursor: pointer;\n"]))),ge=function(){var t=Object(L.a)().dashboardStyle,e=Object(a.useState)(!1),n=Object(T.a)(e,2),i=n[0],r=n[1],o=Object(a.useCallback)((function(){r(!i)}),[i]);return Object(B.jsxs)(pe,{className:t,onClick:function(){return r(!i)},"data-testid":"product-box-responsive",children:[Object(B.jsx)(de.a,{fontSize:"large"}),Object(B.jsx)(je,{open:i,onCloseDrawer:o})]})},Oe=Object(a.memo)(ge),he=U.b.div(Xt||(Xt=Object(F.a)(["\n  width: 500px;\n  height: 100vh;\n  top:0;\n  left: 0;\n  \n  position: absolute;\n  z-index: 500;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 8px;\n  cursor: pointer;\n\n  @media screen and (max-width: 1024px){\n      width: 450px;\n  }\n\n"]))),me=function(){var t=Object(L.a)().dashboardStyle;return Object(B.jsx)(he,{className:t,"data-testid":"product-box",children:"testing panel"})},xe=Object(a.memo)(me),ye=function(){return Object(j.b)((function(t){return t.map})).responsive?Object(B.jsx)(Oe,{}):Object(B.jsx)(xe,{})},ve=Object(a.memo)(ye),Se=n(435),we=n(436),Ee=n(437),ke=n(438),Ne=n(439),Ce=n(440),ze=Object(U.b)(Se.a)(Kt||(Kt=Object(F.a)(["\n  .MuiPaper-root {\n    color: ",";\n    background-color: ",";\n    opacity: 90%;\n  }\n\n  .MuiTypography-colorTextSecondary {\n    color: ",";\n  }\n"])),(function(t){return t.theme.palette.error.main}),(function(t){return t.theme.palette.grayscale.dark}),(function(t){return t.theme.palette.grayscale.light})),Ie=function(){var t=Object(j.b)((function(t){return t.error})),e=t.notification,n=t.type,r=i.a.useState(!1),o=Object(T.a)(r,2),c=o[0],s=o[1],u=Object(Y.a)(),d=function(t,e){"clickaway"!==e&&(s(!1),window.location.reload())};return Object(a.useEffect)((function(){n===l.PERMISSION_DENIED&&s(!0)}),[n]),Object(B.jsxs)(ze,{open:c,onClose:d,theme:u,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(B.jsx)(we.a,{id:"alert-dialog-title",children:e}),Object(B.jsx)(Ee.a,{children:Object(B.jsxs)(ke.a,{id:"alert-dialog-description",children:[Object(B.jsx)(V.a,{variant:"h6",children:"Oppps! we can't find your location!"}),Object(B.jsx)("br",{}),Object(B.jsx)(V.a,{variant:"subtitle2",children:"Activate your GPS in order to find you current location"})]})}),Object(B.jsx)(Ne.a,{children:Object(B.jsx)(Ce.a,{onClick:d,style:{color:u.palette.error.main},autoFocus:!0,children:"OK!"})})]})},_e=Object(a.memo)(Ie),Te=n(441),Pe=n(217),Ae=n(377),Me=n(443),Re=n(444),De=n(445),Le=n(454),Fe=n(442),Ue=U.b.div(qt||(qt=Object(F.a)(["\n    margin-bottom:5px;\n    padding:5px 5px 2px 6px;\n\n    cursor: pointer;\n"]))),Be=Object(U.b)(Te.a)(Ht||(Ht=Object(F.a)(["\n    z-index: 500;\n    position: absolute;\n    margin-right: 2px;\n    background-color: ",";\n\n    .MuiPaper-root{\n        background-color: unset;\n        color: ",";\n        margin: unset;\n        padding: 2px;\n    }\n"])),(function(t){return t.theme.palette.grayscale.darkGray}),(function(t){return t.theme.palette.grayscale.light})),We=function(){var t=Object(j.a)(),e=Object(L.a)().dashboardStyle,n=Object(Y.a)(),i=Object(a.useState)(null),r=Object(T.a)(i,2),o=r[0],c=r[1],s=Object(a.useState)(!1),l=Object(T.a)(s,2),u=l[0],d=l[1],f=Object(a.useState)(!0),b=Object(T.a)(f,2),g=b[0],O=b[1],h=Object(a.useState)(!0),m=Object(T.a)(h,2),x=m[0],y=m[1],v=function(e){"gps-accuracy"===e.target.name?(O((function(t){return!t})),t({type:"coordinate/updateGpsAccuracy",payload:{flag:!g}})):(y((function(t){return!t})),t({type:"coordinate/positionAccuracy",payload:{flag:!x}})),console.log(e.target.name)};return Object(B.jsxs)(Ue,{"data-testid":"configuration-button",className:e,onClick:function(t){c(t.currentTarget),d(!u)},children:[Object(B.jsx)(Fe.a,{}),Object(B.jsx)(Be,{open:u,anchorEl:o,theme:n,placement:"left-end",className:e,transition:!0,children:function(t){var e=t.TransitionProps;return Object(B.jsx)(Pe.a,Object(p.a)(Object(p.a)({},e),{},{timeout:350,children:Object(B.jsx)(Ae.a,{children:Object(B.jsx)(Me.a,{component:"fieldset",children:Object(B.jsxs)(Re.a,{children:[Object(B.jsx)(De.a,{control:Object(B.jsx)(Le.a,{checked:g,onChange:v,name:"gps-accuracy"}),label:"GPS Accuracy"}),Object(B.jsx)(De.a,{control:Object(B.jsx)(Le.a,{checked:x,onChange:v,name:"position-accuracy"}),label:"Position Accuracy"})]})})})}))}})]})},Ge=Object(a.memo)(We),Xe=n(446),Ke=n(447),qe=U.b.div(Yt||(Yt=Object(F.a)(["\n  width: 20px;\n  height: 70px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n\n  cursor: pointer;\n"]))),He=function(){var t=Object(L.a)().dashboardStyle,e=Object(j.b)((function(t){return t.map})).zoom,n=Object(j.a)(),a=function(t){var a=e;t&&e<18&&++a,!t&&a>12&&--a,n({type:"map/changeZoom",payload:{zoom:a}})};return Object(B.jsxs)(qe,{className:t,children:[Object(B.jsx)(Xe.a,{"data-testid":"increase-zoom",onClick:function(){return a(!0)}}),Object(B.jsx)(Ke.a,{"data-testid":"decrease-zoom",onClick:function(){return a(!1)}})]})},Ye=Object(a.memo)(He),Ve=U.b.div(Vt||(Vt=Object(F.a)(["\n    position: absolute;\n    right: 25px;\n    bottom: 100px;\n    z-index: 500;\n\n    display: flex;\n    flex-direction: column;\n"]))),Qe=function(){return Object(B.jsxs)(Ve,{"data-testid":"configuration-box",children:[Object(B.jsx)(Ge,{}),Object(B.jsx)(Ye,{})]})},Ze=Object(a.memo)(Qe),Je=Object(m.c)({name:"map",initialState:{zoom:15,responsive:!1},reducers:{changeZoom:function(t,e){t.zoom=e.payload.zoom},setResponsive:function(t,e){t.responsive=e.payload.responsive}}}),$e=Je.actions,tn=($e.changeZoom,$e.setResponsive),en=(Je.reducer,function(){var t=Object(j.a)(),e=Object(j.b)((function(t){return t.direction})).configuration,n=Object(j.b)((function(t){return t.error})).type;Object(a.useEffect)((function(){e.target&&e.departure.lat&&e.departure.lng&&t(te())}),[e.departure.lat,e.departure.lng,e.target,e.profile,t]);var i=Object(a.useCallback)((function(){var e=window.innerWidth;t(tn(e<=600?{responsive:!0}:{responsive:!1}))}),[t]);return Object(a.useEffect)((function(){return window.addEventListener("load",i),function(){return window.removeEventListener("load",i)}}),[i]),Object(a.useEffect)((function(){return window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}}),[i]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ue,{location:e.departure}),Object(B.jsx)(Ze,{}),Object(B.jsx)(ve,{}),n===l.PERMISSION_DENIED?Object(B.jsx)(_e,{}):Object(B.jsx)(q,{})]})}),nn=Object(a.memo)(en),an={places:[{coordinate:{lat:25.684283415043094,lng:-80.41913012972027},name:"Publix Super Market at Higate Square"},{coordinate:{lat:25.672061446129067,lng:-80.4312322559634},name:"Fresco y M\xe1s"},{coordinate:{lat:25.683939172142516,lng:-80.43275405895899},name:"Festival Supermarket"},{coordinate:{lat:25.714857552456085,lng:-80.39435588386571},name:"El Ranchito Marketplace"},{coordinate:{lat:25.713024753573123,lng:-80.4330950291638},name:"Presidente Supermarket"},{coordinate:{lat:25.715601288890685,lng:-80.43029425388335},name:"Sedano's Supermarket"},{coordinate:{lat:25.69125971191103,lng:-80.3877791296447},name:"Publix Super Market at Kendall Town & Country"},{coordinate:{lat:25.68687493692666,lng:-80.40242022778254},name:"Puerto Madero Miami"}]},rn=Object(m.c)({name:"places",initialState:an,reducers:{addPlace:function(t,e){return Object(p.a)({},e.payload)}}}),on=(rn.actions.addPlace,function(t){return t.places}),cn=(rn.reducer,n(451)),sn=n(448),ln=U.b.div(Qt||(Qt=Object(F.a)(["\n  right: 25px;\n  top: 200px;\n  width: 260px;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  z-index: 450;\n  position: absolute;\n\n  .MuiInputBase-input {\n    color: ",";\n    font-size: large;\n  }\n\n  .MuiFormLabel-root {\n    font-size: 1rem;\n  }\n\n  .MuiFormLabel-root.Mui-focused {\n    color: ",";\n  }\n"])),(function(t){return t.theme.palette.grayscale.dark}),(function(t){return t.theme.palette.warning.main})),un=Object(U.b)(cn.a)(Zt||(Zt=Object(F.a)(["\n  width: 100%;\n  margin-bottom: 1rem;\n"]))),dn=function(t){var e=t.onSetTarget,n=Object(Y.a)();return Object(B.jsxs)(ln,{theme:n,children:[Object(B.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(B.jsx)(un,{id:"lat",label:"Latitude",variant:"filled"}),Object(B.jsx)(un,{id:"lng",label:"Longitude",variant:"filled"})]}),Object(B.jsx)(Ce.a,{variant:"contained",color:"default",startIcon:Object(B.jsx)(sn.a,{}),style:{color:n.palette.grayscale.light,background:n.palette.grayscale.dark,opacity:"85%",borderRadius:"0px",padding:"0.5rem",height:"130px",margin:"0 0 1rem 0.5rem",minWidth:"2rem"},onClick:function(t){t.preventDefault();var n=document.getElementById("lat").value,a=document.getElementById("lng").value;e({lat:n,lng:a})}})]})},fn=Object(a.memo)(dn),bn=U.b.div(Jt||(Jt=Object(F.a)(["\n    bottom: 5%;\n    right: 25px;\n    position: absolute;\n    z-index: 500;\n"]))),jn=function(){var t=Object(j.a)(),e=Object(j.b)((function(t){return t.coordinates})),n=e.latitude,i=e.longitude,r=e.accuracy,o=Object(L.a)().dashboardStyle,c=Object(a.useCallback)((function(e){var n=[];e.lat&&e.lng&&(n.push(e),t({type:"direction/setConfiguration",payload:{target:n}}))}),[t]);return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(bn,{className:o,children:Object(B.jsxs)(V.a,{variant:"subtitle2",children:["lat: ",n," / lng: ",i," / accuracy: ",r]})}),Object(B.jsx)(fn,{onSetTarget:c})]})},pn=Object(a.memo)(jn);var gn,On=function(){var t=i.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,471))})),e=E({enableHighAccuracy:!0,timeout:5e3,maximumAge:6e3}),r=Object(j.b)(on).places,o=Object(j.b)((function(t){return t.direction})).configuration;return Object(a.useEffect)((function(){(o.departure.lat||o.departure.lng)&&setTimeout((function(){e()}),1e3)}),[e,o.departure.lat,o.departure.lng]),Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(nn,{}),Object(B.jsx)(a.Suspense,{fallback:Object(B.jsx)(b.a,{}),children:Object(B.jsx)(t,{places:r})}),Object(B.jsx)(pn,{}),Object(B.jsx)("div",{id:"app-notification","data-testid":"app-notification"})]})})},hn=Object(U.a)(gn||(gn=Object(F.a)(["\n  .leaflet-div-icon {\n    background: transparent;\n    border: none;\n  }\n\n  .MuiBottomNavigation-root{\n    background-color: ",";\n  }\n"])),L.b.palette.grayscale.dark),mn=n(41),xn=Object(mn.b)({places:rn.reducer,map:Je.reducer,direction:ee.reducer,error:w.reducer,coordinates:y.reducer}),yn=Object(m.a)({reducer:xn,devTools:!1});o.a.render(Object(B.jsx)(i.a.StrictMode,{children:Object(B.jsxs)(d.a,{theme:L.b,children:[Object(B.jsx)(f.a,{store:yn,children:Object(B.jsx)(On,{})}),Object(B.jsx)(hn,{})]})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/where_is_it_app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/where_is_it_app","/service-worker.js");c?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):s(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):s(e,t)}))}}(),u()}},[[373,1,2]]]);
//# sourceMappingURL=main.7ff21cde.chunk.js.map