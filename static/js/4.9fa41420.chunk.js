(this.webpackJsonpwhere_is_it_app=this.webpackJsonpwhere_is_it_app||[]).push([[4],{472:function(e,t,r){"use strict";r.r(t);var o=r(24),c=r(0),n=r(462),a=r(467),i=r(468),s=r(26),p=r(469),u=r(473),m=r(470),b=r(456),j=r.n(b),l=r(465),O=r(466),d=r(2),h=function(e){var t=e.position,r=e.icon,o=e.name,n=e.description;return Object(c.useMemo)((function(){return Object(d.jsx)(l.a,{position:t,icon:r,children:Object(d.jsx)(O.a,{children:Object(d.jsxs)("div",{children:[o||"A pretty CSS3 popup."," ",Object(d.jsx)("br",{})," ",n||"Easily customizable","."]})})})}),[n,r,o,t])},f=Object(c.memo)(h),x=r(204),w=r(18),y=r(15),M=function(e){var t=e.places,r=Object(w.a)(),b=Object(s.a)().palette,l=Object(c.useRef)(),O=Object(y.b)((function(e){return e.map})).zoom,h=Object(c.useState)([]),M=Object(o.a)(h,2),k=M[0],v=M[1],S=Object(y.b)((function(e){return e.direction})),g=S.direction,z=S.configuration;Object(c.useEffect)((function(){g&&v(g.routes[0].geometry.coordinates)}),[g]);var _=Object(c.useMemo)((function(){return j.a.divIcon({html:Object(n.renderToStaticMarkup)(Object(d.jsx)(a.a,{className:r.customMarker,style:{color:b.primary.main}})),popupAnchor:[2,-28]})}),[r.customMarker,b.primary.main]),A=Object(c.useMemo)((function(){return j.a.divIcon({html:Object(n.renderToStaticMarkup)(Object(d.jsx)(i.a,{className:r.customMarker})),popupAnchor:[2,-28]})}),[r.customMarker]);return Object(c.useEffect)((function(){l.current&&l.current.setView(z.departure,O)}),[z.departure,O]),Object(d.jsx)("div",{className:r.mapStyle,style:{margin:"-8px"},children:Object(d.jsxs)(p.a,{zoom:O,center:z.departure,className:r.mapStyle,zoomAnimation:!0,scrollWheelZoom:!0,zoomControl:!1,whenCreated:function(e){return l.current=e},children:[Object(d.jsx)(u.a,{attribution:'Map data \xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',url:"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",id:"mapbox/streets-v11",accessToken:x.a,tileSize:512,zoomOffset:-1}),z.departure&&Object(d.jsx)(f,{position:z.departure,icon:_}),t&&t.map((function(e,t){return Object(d.jsx)(f,{position:e.coordinate,icon:A},t)})),k.length>0&&Object(d.jsx)(m.a,{pathOptions:{color:b.error.main,weight:5},positions:k})]})})};t.default=Object(c.memo)(M)}}]);
//# sourceMappingURL=4.9fa41420.chunk.js.map