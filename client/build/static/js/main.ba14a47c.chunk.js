(this["webpackJsonplets-add-venture"]=this["webpackJsonplets-add-venture"]||[]).push([[0],{130:function(e,t,a){},131:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(10),s=a.n(c),i=(a(98),a(45),a(8)),r=a.n(i),l=a(18),o=a(7),u=(a(99),a(1));var d=function(){return Object(u.jsx)("div",{className:"mtn-logo pt-5",children:Object(u.jsx)("svg",{width:"64",height:"42",viewBox:"0 0 64 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M19.4978 2.33334L1.42221 40.8333H62.5778L52.6362 20.0736L47.6655 24.2255L35.9164 8.37256L27.7824 20.0736L19.4978 2.33334Z",fill:"#488E27",stroke:"#615D5D",strokeOpacity:"0.87"})})})},j=a(82),b=a(83),p=a(64),h=a(28),m=a(23),f=a(9),O=a.n(f),g="https://lets-add-venture.herokuapp.com",x=function(e){return O.a.post(g+"/api/users/",e)},v=function(e){return O.a.post(g+"/api/friend/send",e)},A=function(e){return O.a.put(g+"/api/friend/accept",e)},y=function(e,t,a){return O.a.get("https://climb-api.openbeta.io/geocode/v1/climbs?latlng=".concat(e,"%2C").concat(t,"&radius=").concat(a))},w=function(e){return console.log(e),O.a.post(g+"/api/pastClimbs",e)},k=a(11);a(35).config();var N=function(){var e=Object(k.b)(),t=e.getAccessTokenSilently,a=e.user,c="https://dev-dwofmg2f.us.auth0.com/api/v2/",s=Object(n.useState)(),i=Object(o.a)(s,2),f=i[0],g=i[1],x=Object(n.useState)(),v=Object(o.a)(x,2),A=v[0],y=v[1],w=Object(n.useState)(),N=Object(o.a)(w,2),S=N[0],C=N[1],T=Object(n.useState)(),E=Object(o.a)(T,2),B=E[0],I=E[1],z=Object(n.useState)(),P=Object(o.a)(z,2),_=P[0],Q=P[1],D=Object(n.useState)({}),R=Object(o.a)(D,2),F=R[0],L=R[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(r.a.mark((function e(){var n,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.sub.split("|",2)[1],e.prev=1,e.next=4,t({audience:"".concat(c)});case 4:return s=e.sent,"https://lets-add-venture.herokuapp.com/api/users/",e.next=8,O.a.post("https://lets-add-venture.herokuapp.com/api/users/",{headers:{Authorization:"Bearer ".concat(s)},auth0_id:n,email:a.email});case 8:i=e.sent,L(i.data[0]),g(i.data[0].profile.user_name),y(i.data[0].profile.user_pronoun),C(i.data[0].profile.user_intensity),I(i.data[0].profile.climbing_ability),Q(i.data[0].profile.bouldering_ability),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.log(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var M=function(){var e=Object(l.a)(r.a.mark((function e(a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,t({audience:"".concat(c)});case 4:return n=e.sent,"https://lets-add-venture.herokuapp.com/api/profiles/",e.next=8,O.a.post("https://lets-add-venture.herokuapp.com/api/profiles/",{headers:{Authorization:"Bearer ".concat(n)},user_name:f,user_pronoun:A,user_intensity:S,climbing_ability:B,bouldering_ability:_,user_id:F.id});case 8:e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:document.location="/profile";case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"profile-q-background",children:Object(u.jsxs)(j.a,{fluid:!0,children:[Object(u.jsxs)(b.a,{className:"mb-2",children:[Object(u.jsx)(d,{}),Object(u.jsx)("h6",{className:"mt-1 tell-us-more",children:"Tell us more about you..."})]}),Object(u.jsx)(b.a,{className:"pl-2 pr-2",children:Object(u.jsx)(p.a,{className:"questions-form text-center mb-5",onSubmit:M,children:Object(u.jsxs)("div",{className:"form-group mt-2 px-5 pt-1",children:[Object(u.jsx)("label",{className:"labels",for:"inputUsername",children:"Username"}),Object(u.jsx)("input",{className:"pb-1 form-control",type:"text",placeholder:"Username (required)",name:"user-name",onChange:function(e){return g(e.target.value)},defaultValue:f}),Object(u.jsx)("div",{className:"form-group mt-2 px-5",children:Object(u.jsxs)("div",{className:"mb-2",onChange:function(e){return y(e.target.value)},children:[Object(u.jsx)("label",{className:"labels",for:"pronouns",children:"Preferred Pronoun:"}),Object(u.jsx)(p.a.Check,{inline:!0,value:"He/Him/His",label:"He | Him | His",name:"pronouns",type:"radio",id:"masculine_pronouns",checked:"He/Him/His"===A}),Object(u.jsx)(p.a.Check,{value:"She/Her/Hers",label:"She | Her | Hers",name:"pronouns",type:"radio",id:"feminine_pronouns",checked:"She/Her/Hers"===A}),Object(u.jsx)(p.a.Check,{value:"They/Them/Theirs",label:"They | Them | Theirs",name:"pronouns",type:"radio",id:"neutral_pronouns",checked:"They/Them/Theirs"===A}),Object(u.jsx)(p.a.Check,{value:"Prefer not to disclose",label:"Prefer not to disclose",name:"pronouns",type:"radio",id:"na_pronouns",checked:"Prefer not to disclose"===A})]})}),Object(u.jsxs)("div",{className:"form-group ",children:[Object(u.jsx)("label",{className:"labels question-header",children:"How would you rate your climbing intensity?"}),Object(u.jsx)("label",{className:" labels question-header",children:"(5 being the most intense)"}),Object(u.jsxs)("div",{className:"mb-1",onChange:function(e){return C(e.target.value)},children:[Object(u.jsx)(p.a.Check,{inline:!0,value:"1",label:"1",name:"intensity",type:"radio",id:"lowest_intensity",checked:"1"==S}),Object(u.jsx)(p.a.Check,{inline:!0,value:"2",label:"2",name:"intensity",type:"radio",id:"low_intensity",checked:"2"==S}),Object(u.jsx)(p.a.Check,{inline:!0,value:"3",label:"3",name:"intensity",type:"radio",id:"mid_intensity",checked:"3"==S}),Object(u.jsx)(p.a.Check,{inline:!0,value:"4",label:"4",name:"intensity",type:"radio",id:"high_intensity",checked:"4"==S}),Object(u.jsx)(p.a.Check,{inline:!0,value:"5",label:"5",name:"intensity",type:"radio",id:"highest_intensity",checked:"5"==S})]})]}),Object(u.jsx)(b.a,{className:"form-group",children:Object(u.jsxs)(h.a,{size:"12",children:[Object(u.jsx)("label",{children:"Climbing Ability:"}),Object(u.jsx)("input",{className:"form-control",type:"text",placeholder:"Climbing Ability (<5.9 - 5.13+)",name:"climb-ability",onChange:function(e){return I(e.target.value)},defaultValue:B})]})}),Object(u.jsx)(b.a,{className:"form-group",children:Object(u.jsxs)(h.a,{size:"12",children:[Object(u.jsx)("label",{children:"Bouldering Ability:"}),Object(u.jsx)("input",{className:"form-control",type:"text",placeholder:"Bouldering Ability (V0 - V10+)",name:"boulder-ability",onChange:function(e){return Q(e.target.value)},defaultValue:_})]})}),Object(u.jsx)(m.a,{type:"submit",className:"home-buttons",disabled:!f,children:"Submit"})]})})})]})})},S=a(54),C=a(17);var T=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(u.jsx)("div",Object(C.a)({className:t},e))};var E=function(e){return Object(u.jsx)("div",Object(C.a)({className:"row".concat(e.fluid?"-fluid":"")},e))};var B=function(e){return Object(u.jsx)("div",Object(C.a)({className:"container".concat(e.fluid?"-fluid":"")},e))},I=(a(130),a(131),a(12)),z=(a(52),function(){var e=Object(k.b)().loginWithRedirect,t=Object(I.f)(),a=function(e){t.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)};return Object(u.jsx)(m.a,{size:"lg",className:"home-buttons",onClick:function(){return e({redirectUri:"https://lets-add-venture.netlify.app/profile",onRedirectCallback:{onRedirectCallback:a}})},children:Object(u.jsx)("b",{children:"Log In"})})}),P=function(){var e=Object(k.b)().logout;return Object(u.jsx)(m.a,{size:"lg",className:"logout-button btn-sm btn-dark",onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},_=function(){return Object(k.b)().isAuthenticated?Object(u.jsx)(P,{}):Object(u.jsx)(z,{})},Q=function(){return Object(u.jsx)("div",{className:"",children:Object(u.jsx)(_,{})})},D=a(152),R=a(154),F=a(84);var L=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2);return t[0],t[1],Object(u.jsxs)(D.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(u.jsx)(D.a.Brand,{href:"/profile",children:"Lets+Venture"}),Object(u.jsx)(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsxs)(D.a.Collapse,{id:"basic-navbar-nav",children:[Object(u.jsxs)(R.a,{className:"mr-auto",children:[Object(u.jsx)(R.a.Link,{href:"/",children:"Home"}),Object(u.jsx)(R.a.Link,{href:"/map",children:"Map"}),Object(u.jsx)(Q,{})]}),Object(u.jsx)(p.a,{inline:!0,children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(h.a,{children:Object(u.jsx)(F.a,{type:"text",placeholder:"Search",className:"mr-sm-2"})}),Object(u.jsx)(h.a,{children:Object(u.jsx)(m.a,{variant:"outline-secondary",children:"Search"})})]})})]})]})};var M=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],c=t[1];function s(e){var t=e.target,n=t.name,s=t.value;c(Object(C.a)(Object(C.a)({},a),{},Object(S.a)({},n,s)))}return Object(u.jsxs)("div",{className:"signup-background",children:[Object(u.jsx)(d,{}),Object(u.jsx)("div",{className:"mt-4",children:Object(u.jsx)("h4",{children:"Create an account to save your progress."})}),Object(u.jsx)("form",{children:Object(u.jsxs)(B,{className:"mt-3 px-5",children:[Object(u.jsx)(E,{className:"form-group pb-4",children:Object(u.jsx)(T,{size:"12",children:Object(u.jsx)("input",{className:"form-control",type:"text",placeholder:"First Name",name:"firstName",onChange:s})})}),Object(u.jsx)(E,{className:"form-group pb-4",children:Object(u.jsx)(T,{size:"12",children:Object(u.jsx)("input",{className:"form-control",type:"text",placeholder:"Last Name",name:"lastName",onChange:s})})}),Object(u.jsx)(E,{className:"form-group pb-4",children:Object(u.jsx)(T,{size:"12",children:Object(u.jsx)("input",{className:"form-control",type:"text",placeholder:"Email Address",name:"email",onChange:s})})}),Object(u.jsx)(E,{className:"form-group pb-4",children:Object(u.jsx)(T,{size:"12",children:Object(u.jsx)("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",onChange:s})})}),Object(u.jsx)(m.a,{onClick:function(e){e.preventDefault(),a.firstName&&console.log("we got the first name"),a.password&&console.log("we got the password"),a.firstName&&a.email&&a.password&&x({firstName:a.firstName,lastName:a.lastName,email:a.email,password:a.password}).then(document.location.replace("/questions")).catch((function(e){return console.log(e)}))},type:"submit",className:" signup-button",children:"Submit"})]})})]})},H=a(42),U=a(43),G=a(91),q=a(89),K=a(92),X=function(e){var t=e.text;return Object(u.jsx)("div",{children:t})},Y=function(e){Object(G.a)(a,e);var t=Object(q.a)(a);function a(){return Object(H.a)(this,a),t.apply(this,arguments)}return Object(U.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"container pt-5 pb-5",style:{height:"80vh",width:"80%"},children:Object(u.jsx)(K.a,{bootstrapURLKeys:{key:"AIzaSyBRcAglui0WEbZB4Gc1UAFNkc5-VyGACVQ"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,children:Object(u.jsx)(X,{lat:59.955413,lng:30.337844,text:"My Marker"})})})}}]),a}(n.Component);Y.defaultProps={center:{lat:37.7459,lng:-119.5332},zoom:8};var Z=a(30);a(35).config();var J=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)([{meta_mp_route_id:1,lat:0,lng:0}]),r=Object(o.a)(i,2),l=r[0],d=r[1],j=function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude};s(t)};Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition(j)}),[]),Object(n.useEffect)((function(){d(e.allResults),console.log(e.allResults)}),[e]);return Object(u.jsx)(Z.b,{googleMapsApiKey:"AIzaSyBRcAglui0WEbZB4Gc1UAFNkc5-VyGACVQ",children:Object(u.jsxs)(Z.a,{mapContainerStyle:{height:"50vh",width:"100%"},zoom:13,center:c,children:[c.lat?Object(u.jsx)(Z.c,{position:c,title:"Home",onDragEnd:function(e){return function(e){var t=e.latLng.lat(),a=e.latLng.lng();s({lat:t,lng:a})}(e)},draggable:!0}):null,l.map((function(e){return Object(u.jsx)(Z.c,{position:{lat:e.lat,lng:e.lng},name:e.name},e.meta_mp_route_id)}))]})})},V=a(71),W=(a(134),a(88),[{featureType:"water",elementType:"geometry",stylers:[{visibility:"on"},{color:"#aee2e0"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#abce83"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#769E72"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#7B8758"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#EBF4A4"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{visibility:"simplified"},{color:"#8dab68"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#5B5B3F"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ABCE83"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#A4C67D"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#9BBF72"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#EBF4A4"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#87ae79"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#7f2200"},{visibility:"off"}]},{featureType:"administrative",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"},{visibility:"on"},{weight:4.1}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#495421"}]},{featureType:"administrative.neighborhood",elementType:"labels",stylers:[{visibility:"off"}]}]),$=(a(9),["places"]),ee={width:"100vw",height:"60vh"};var te=function(e){var t=Object(n.useState)({lat:37.8651,lng:-119.5383}),a=Object(o.a)(t,2),c=(a[0],a[1],Object(n.useState)(!1)),s=Object(o.a)(c,2),i=(s[0],s[1],Object(n.useState)([])),r=Object(o.a)(i,2),l=r[0],d=r[1],j=Object(n.useState)(null),b=Object(o.a)(j,2),p=(b[0],b[1]),h=Object(n.useState)(e.allResults),m=Object(o.a)(h,2),f=(m[0],m[1]),O={styles:W,zoomControl:!0},g=Object(Z.d)({googleMapsApiKey:"",libraries:$}),x=g.isLoaded,v=g.loadError;Object(n.useEffect)((function(){f(e.allResults),console.log(e.allResults),d((function(t){return[].concat(Object(V.a)(t),[{lat:e.mapLat,lng:e.mapLng,time:new Date}])})),console.log(l)}),[e]);var A=Object(n.useCallback)((function(e){console.log(e),d((function(t){return[].concat(Object(V.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])}))}),[]),y=Object(n.useRef)(),w=Object(n.useCallback)((function(e){y.current=e}),[]);return v?"Error loading maps":x?Object(u.jsx)("div",{children:Object(u.jsx)(Z.a,{mapContainerStyle:ee,zoom:9,center:{lat:e.mapLat,lng:e.mapLng},options:O,onClick:A,onLoad:w,children:l.map((function(t){return Object(u.jsx)(Z.c,{position:{lat:e.climbLat,lng:e.climbLng},icon:{url:"/climbing.svg",scaledSize:new window.google.maps.Size(32,32),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15)},onClick:function(){p(t)}},t.time.toISOString())}))})}):"Loading Maps"};var ae=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(te,{})})};a(135);var ne=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(),s=Object(o.a)(c,2),i=(s[0],s[1]);return Object(u.jsxs)("div",{className:"container login-background",children:[Object(u.jsx)(d,{}),Object(u.jsx)("div",{className:"row text-center mt-4",children:Object(u.jsx)("h4",{children:"Enter your email and password to Login!"})}),Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log("Hello")},children:Object(u.jsxs)(B,{className:"mt-3 px-5",children:[Object(u.jsx)(E,{className:"form-group pb-4",children:Object(u.jsx)(T,{size:"12",children:Object(u.jsx)("input",{className:"form-control",type:"text",placeholder:"Email",name:"email",onChange:function(e){return a(e.target.value)}})})}),Object(u.jsx)(E,{className:"form-group pb-4",children:Object(u.jsx)(T,{size:"12",children:Object(u.jsx)("input",{className:"form-control",type:"text",placeholder:"Password",name:"password",onChange:function(e){return i(e.target.value)}})})}),Object(u.jsx)(m.a,{href:"/profile",className:"login-button",children:"Submit"})]})})]})},ce=a(153),se=a.p+"static/media/alaska.4f29544c.jpeg",ie=a.p+"static/media/logoLettering.7842e965.svg",re=a.p+"static/media/logo.37309cd9.svg",le=function(){var e=Object(k.b)().loginWithRedirect,t=Object(I.f)(),a=function(e){t.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)};return Object(u.jsx)(m.a,{size:"lg",className:"mt-2 home-buttons",onClick:function(){return e({redirectUri:"https://lets-add-venture.netlify.app/questions",onRedirectCallback:{onRedirectCallback:a},screen_hint:"signup"})},children:Object(u.jsx)("b",{children:"Sign Up"})})},oe=a.p+"static/media/girl-climber.ff65ec3f.jpeg",ue=a.p+"static/media/guys-climbers.c7e7d2c0.jpeg";var de=function(){return Object(u.jsx)("div",{className:"home-page-background",children:Object(u.jsxs)(j.a,{fluid:!0,children:[Object(u.jsx)(b.a,{children:Object(u.jsxs)(h.a,{children:[Object(u.jsx)("img",{className:"pb-4 pt-5 pr-1 logo-svg",src:re}),Object(u.jsx)("img",{className:"pb-4 pt-5 logo-lettering",src:ie})]})}),Object(u.jsx)(b.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsxs)(ce.a,{children:[Object(u.jsxs)(ce.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:se,alt:"First slide"}),Object(u.jsx)(ce.a.Caption,{children:Object(u.jsx)("h6",{children:"Search climbs anywhere in the world."})})]}),Object(u.jsxs)(ce.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:oe,alt:"Second slide"}),Object(u.jsx)(ce.a.Caption,{children:Object(u.jsx)("h6",{children:"Go Explore!"})})]}),Object(u.jsxs)(ce.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:ue,alt:"Third slide"}),Object(u.jsx)(ce.a.Caption,{children:Object(u.jsx)("h6",{children:"Meet up with similarly skilled climbers based on their skill set listed on their profile!"})})]})]})})}),Object(u.jsx)(b.a,{children:Object(u.jsx)("p",{className:"pb-5",id:"home-p",children:"Connect with others to enjoy and explore the great outdoors!"})}),Object(u.jsx)(b.a,{children:Object(u.jsxs)(h.a,{children:[Object(u.jsx)(_,{}),Object(u.jsx)(le,{})]})})]})})};var je=a(27),be=a(138),pe=a(139);a(136);var he=function(e){var t=e.ownProfile;console.log(t);var a=e.friendStatus,c=t||"add friend"!=a,s=Object(n.useState)({variant:"primary",text:"Add Friend"}),i=Object(o.a)(s,2),r=i[0],l=i[1],d=Object(n.useState)({auth0_id:e.auth0_id,receiver:e.receiver,status:1}),j=Object(o.a)(d,2),b=j[0],p=j[1];Object(n.useEffect)((function(){p({auth0_id:e.auth0_id,receiver:e.receiver,status:1})}),[e]);var h=function(){console.log(b),v(b).then((function(e){console.log(e.data),l({text:"Pending...",variant:"success",disabled:!0})})).catch((function(e){console.log(e)}))};return console.log(c),Object(u.jsx)(m.a,{hidden:c,onClick:function(e){console.log("Add friend clicked"),h(),l(e.target={text:"Pending",variant:"success",disabled:!0})},variant:r.variant,disabled:r.disabled,children:r.text})};var me=function(e){var t=e.ownProfile;console.log(t);var a=e.friendStatus;console.log(a);var c=t||"accept request"!=a,s=Object(n.useState)({variant:"info",text:"Accept Request"}),i=Object(o.a)(s,2),r=i[0],l=i[1],d=Object(n.useState)({auth0_id:e.auth0_id,sender:e.sender,status:2}),j=Object(o.a)(d,2),b=j[0],p=j[1];Object(n.useEffect)((function(){p({auth0_id:e.auth0_id,sender:e.sender,status:2})}),[e]);var h=function(){console.log(b),A(b).then((function(e){console.log(e.data),l({text:"Pending...",variant:"success",disabled:!0})})).catch((function(e){console.log(e)}))};return console.log(c),Object(u.jsx)(m.a,{hidden:c,onClick:function(e){console.log("Accept friend clicked"),h(),l(e.target={text:"Accepted!",variant:"success",disabled:!0})},variant:r.variant,disabled:r.disabled,children:r.text})},fe=a(155),Oe=a(151);var ge=function(e){var t=Object(u.jsxs)(fe.a,{children:[Object(u.jsx)(fe.a.Title,{as:"h4",children:e.climbTitle}),Object(u.jsxs)(fe.a.Content,{as:"h5",children:["Difficulty: ",e.difficulty]})]});return Object(u.jsx)("div",{children:Object(u.jsx)(Oe.a,{trigger:"click",placement:"top",overlay:t,children:Object(u.jsx)(m.a,{variant:"success",children:e.climbTitle})})})};a(35).config();var xe=function(){var e,t=Object(I.g)().pathname.split("/"),a=parseInt(t[2])||0,c=Object(k.b)(),s=c.getAccessTokenSilently,i=c.user.sub.split("|",2)[1],d=Object(n.useState)(""),j=Object(o.a)(d,2),b=j[0],h=j[1],f=Object(n.useState)(""),g=Object(o.a)(f,2),x=(g[0],g[1]),v=Object(n.useState)("data:image/png;base64,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"),A=Object(o.a)(v,2),y=A[0],w=A[1],N=Object(n.useState)({}),S=Object(o.a)(N,2),C=S[0],T=S[1],E=Object(n.useState)(!1),B=Object(o.a)(E,2),z=B[0],P=B[1],_=Object(n.useState)("0"),Q=Object(o.a)(_,2),D=Q[0],R=Q[1],F=Object(n.useState)(!1),M=Object(o.a)(F,2),H=M[0],U=M[1],G=Object(n.useState)(!1),q=Object(o.a)(G,2),K=q[0],X=q[1],Y=Object(n.useState)([]),Z=Object(o.a)(Y,2),J=Z[0],V=Z[1];Object(n.useEffect)((function(){W()}),[]);var W=function(){var t=Object(l.a)(r.a.mark((function t(){var n,c,l,o,u,d,j,b;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://dev-dwofmg2f.us.auth0.com/api/v2/",a||(a=i,P(!0)),t.prev=2,t.next=5,s({audience:"".concat("https://dev-dwofmg2f.us.auth0.com/api/v2/")});case 5:return n=t.sent,c="https://lets-add-venture.herokuapp.com/api/users/profile/".concat(a),t.next=9,O.a.get(c,{headers:{Authorization:"Bearer ".concat(n)}});case 9:if(!(l=t.sent).data&&z&&(document.location="/questions"),z){t.next=17;break}return u="https://lets-add-venture.herokuapp.com/api/users/profile/".concat(i),t.next=15,O.a.get(u,{headers:{Authorization:"Bearer ".concat(n)}});case 15:o=t.sent,e=o.data;case 17:T({username:l.data.profile.user_name,pronoun:l.data.profile.user_pronoun,intensity:l.data.profile.user_intensity,climbingAbility:l.data.profile.climbing_ability,boulderingAbility:l.data.profile.bouldering_ability,pastClimbs:l.data.pastClimbs,userId:l.data.id}),V(l.data.pastClimbs),l.data.auth0_id!==i||z?(P(!1),d=ee(l.data),2===(j=$(d)).status?(R("friends"),U(!0)):1===j.status?j.receiver===e.id?R("accept request"):(R("pending request"),X(!0)):R("add friend")):P(!0),(b=l.data.photos.length)&&w(l.data.photos[b-1].url),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(2),console.log(t.t0.message);case 27:case"end":return t.stop()}}),t,null,[[2,24]])})));return function(){return t.apply(this,arguments)}}(),$=function(t){console.log(e);var a=t.filter((function(t){return t.id===e.id}));return a.length>0?a[0].friend:0},ee=function(e){return e.sender.concat(e.receiver)},te=Object(n.useRef)(null),ae=function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){w(t.result)}},ne=function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://lets-add-venture.herokuapp.com/api/images/upload",{method:"POST",body:JSON.stringify({data:t,user_id:C.userId}),headers:{"Content-type":"application/json"}});case 3:h(""),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"sky",children:[Object(u.jsx)(L,{}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(p.a,{children:Object(u.jsx)("input",{type:"file",style:{display:"none"},ref:te,name:"image",onChange:function(e){var t=e.target.files[0];ae(t),x(t),h(e.target.value)},value:b,className:"form-input"})}),Object(u.jsx)("div",{className:"userImg",children:y&&Object(u.jsx)(be.a,{className:"mt-5",onClick:function(e){z&&te.current.click()},src:y,alt:"picture to be uploaded",style:{height:"160px"},roundedCircle:!0})}),Object(u.jsx)("div",{children:Object(u.jsx)(m.a,{hidden:!b,variant:"success",className:"mt-2",type:"submit",value:"submit",size:"sm",onClick:function(e){e.preventDefault(),y&&ne(y)},children:"Submit"})})]}),Object(u.jsxs)("div",{className:"username",children:[Object(u.jsxs)("h1",{children:[" ",C.username]}),Object(u.jsxs)("h6",{children:[" ",C.pronoun," "]}),Object(u.jsx)(m.a,{href:"/questions",variant:"outline-info",size:"sm",hidden:!z,children:"Edit Profile"}),Object(u.jsx)(he,{receiver:C.userId,ownProfile:z,auth0_id:i,friendStatus:D}),Object(u.jsx)(me,{sender:C.userId,ownProfile:z,auth0_id:i,friendStatus:D}),Object(u.jsx)(m.a,{variant:"success",disabled:!0,hidden:!H,children:"Friend"}),Object(u.jsx)(m.a,{variant:"success",disabled:!0,hidden:!K,children:"Pending..."})]}),Object(u.jsx)("div",{className:"list",children:Object(u.jsxs)(pe.a,{variant:"flush",children:[Object(u.jsxs)(pe.a.Item,{children:["Preferred Intensity: ",C.intensity]}),Object(u.jsxs)(pe.a.Item,{children:["Climbing Ability: ",C.climbingAbility]}),Object(u.jsxs)(pe.a.Item,{children:["Bouldering Ability: ",C.boulderingAbility]}),Object(u.jsxs)(pe.a.Item,{children:["Saved Climbs: ",J.map((function(e){return Object(u.jsx)(ge,{climbTitle:e.climb_name,difficulty:e.rating},e.api_id)}))]})]})})]})]})},ve=a(90),Ae=a(49);a(140);function ye(e){var t=Object(k.b)(),a=(t.getAccessTokenSilently,t.user.sub.split("|",2)[1]),c=Object(n.useState)({image:" ",climb_name:" ",rating:" ",wall:" ",firstAscent:" ",description:" "}),s=Object(o.a)(c,2),i=s[0],r=s[1],l=Object(n.useState)(!1),d=Object(o.a)(l,2),j=d[0],b=d[1],p={image:e.image,name:e.climbTitle,rating:e.difficulty,wall:e.wall,firstAscent:e.FrAsc,description:e.description};return Object(u.jsx)(h.a,{className:"mt-4",xs:12,sm:8,md:8,lg:4,children:Object(u.jsxs)(Ae.a,{style:{width:"18rem"},children:[Object(u.jsx)(Ae.a.Img,{variant:"top",src:e.image}),Object(u.jsxs)(Ae.a.Header,{children:["Name: ",e.climbTitle]}),Object(u.jsxs)(Ae.a.Body,{className:"font-weight-light",children:["Rating: ",e.difficulty,Object(u.jsx)("br",{}),"Wall: ",e.wall,Object(u.jsx)("br",{}),"First Ascent: ",e.FrAsc,Object(u.jsx)("br",{}),e.description,Object(u.jsx)(m.a,{onClick:function(t){console.log("This is the save button"),r(Object(C.a)(Object(C.a)({},i),{},{climbData:p})),b(!0),console.log(p),w({climb_name:e.climbTitle,rating:e.difficulty,auth0_id:a,api_id:e.api_id}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))},disabled:j,id:e.api_id,children:"Save"})]})]})})}a(35).config();var we=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,c=[],s=1;s<=Math.ceil(a/t);s++)c.push(s);return Object(u.jsx)("div",{children:Object(u.jsxs)(j.a,{className:"pagination",fluid:"md",children:[Object(u.jsx)("p",{children:"Pages"}),Object(u.jsx)(b.a,{children:Object(u.jsx)("ul",{children:c.map((function(e){return Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{onClick:function(){return n(e)},className:"page-link",children:e})},e)}))})})]})})},ke=function(){return Object(u.jsx)("div",{className:"spinner",children:Object(u.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})},Ne=a(48),Se=a.n(Ne);a(141);a(35).config();var Ce=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),d=i[0],j=i[1],b=Object(n.useState)(3),f=Object(o.a)(b,2),O=f[0],g=f[1],x=Object(n.useState)({}),v=Object(o.a)(x,2),A=v[0],w=v[1],k=Object(n.useState)(""),N=Object(o.a)(k,2),S=N[0],C=N[1],T=Object(n.useState)(!1),E=Object(o.a)(T,2),B=E[0],I=E[1],z=Object(n.useState)(1),P=Object(o.a)(z,2),_=P[0],Q=P[1],D=Object(n.useState)(20),R=Object(o.a)(D,2),F=R[0],M=(R[1],Object(n.useState)([])),H=Object(o.a)(M,2),U=H[0],G=H[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,y("".concat(A.lat),"".concat(A.lng),"".concat(O));case 3:t=e.sent,console.log(A.lattt,A.long,"this is the lattitude and longitude?"),console.log(t.data,"this is the climb data"),c(t.data),I(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[A]),Object(n.useEffect)((function(){!function(e){console.log("getting lat long array");var t=e.map((function(e){return{lat:e.lat,lng:e.lng}}));console.log(U),G(t)}(a)}),[a]),Se.a.setApiKey("AIzaSyAT9GjmNKN1wikpdQ5T8kyxvJNiSF6qJMg"),Se.a.setLanguage("en"),Se.a.setRegion("usa");var q=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se.a.fromAddress(d);case 2:t=e.sent,a=t.results[0].geometry.location,n=a.lat,c=a.lng,w({lat:n,lng:c}),console.log(A.lat,A.lng);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=_*F,X=K-F,Y=a.slice(X,K);return Object(u.jsxs)("div",{className:"container map-background",children:[Object(u.jsx)(L,{}),Object(u.jsxs)("div",{className:"pt-5 title",children:[" ","Where Will you go? ",Object(u.jsx)(ve.a,{})]}),Object(u.jsx)(J,{className:"map-page",allResults:a,children:Object(u.jsx)("div",{className:"map-section"})}),Object(u.jsxs)("div",{className:"justify-content-center search-bar pt-4 row",children:[Object(u.jsxs)(h.a,{xs:8,sm:8,md:6,children:[Object(u.jsx)("input",{className:" form-control",type:"text",placeholder:"Search for a climb!",onChange:function(e){return j(e.target.value)}}),Object(u.jsxs)(p.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(u.jsx)(p.a.Label,{}),Object(u.jsxs)(p.a.Control,{placeholder:"search with a radius of... km",as:"select",onChange:function(e){return g(e.target.value)},children:[Object(u.jsx)("option",{children:"search with a radius of...km"}),Object(u.jsx)("option",{children:"1"}),Object(u.jsx)("option",{children:"2"}),Object(u.jsx)("option",{children:"3"}),Object(u.jsx)("option",{children:"4"}),Object(u.jsx)("option",{children:"5"})]})]})]}),Object(u.jsx)(h.a,{xs:2,sm:2,md:2,children:Object(u.jsx)(m.a,{onClick:q,children:" Search "})})]}),a.length?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"search-bar pt-4 row",children:Object(u.jsx)(h.a,{xs:8,sm:8,md:6,children:Object(u.jsx)("input",{className:"ml-5 form-control",type:"text",placeholder:"Filter climb by difficulty",onChange:function(e){return C(e.target.value)}})})}),S.length?Object(u.jsx)("div",{className:"map-render container row",loading:"lazy",children:a.filter((function(e){return e.yds===S})).map((function(e){return Object(u.jsx)(ye,{climbTitle:e.name,FrAsc:e.fa,difficulty:e.yds,wall:e.meta_parent_sector},e.meta_mp_route_id)}))}):Object(u.jsx)("div",{children:B?ke():Object(u.jsxs)("div",{className:"container row",loading:"lazy",children:[Y.map((function(e){return Object(u.jsx)(ye,{climbTitle:e.name,FrAsc:e.fa,difficulty:e.yds,wall:e.meta_parent_sector,api_id:e.meta_mp_route_id},e.meta_mp_route_id)})),Object(u.jsx)(we,{postsPerPage:F,totalPosts:a.length,paginate:function(e){Q(e)}})]})})]}):Object(u.jsx)("h4",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})},Te=a(93),Ee=function(e){var t=e.component,a=Object(Te.a)(e,["component"]);return Object(u.jsx)(I.a,Object(C.a)({component:Object(k.c)(t,{onRedirecting:function(){return Object(u.jsx)(ke,{})}})},a))},Be=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],s="http://localhost:3001",i=Object(k.b)().getAccessTokenSilently,d=function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(s,"/api/messages/public-message"));case 3:t=e.sent,c(t.data.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i();case 3:return t=e.sent,e.next=6,O.a.get("".concat(s,"/api/messages/protected-message"),{headers:{Authorization:"Bearer ".concat(t)}});case 6:a=e.sent,c(a.data.message),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"External API"}),Object(u.jsx)("p",{children:"Use these buttons to call an external API. The protected API call has an access token in its authorization header. The API server will validate the access token using the Auth0 Audience value."}),Object(u.jsxs)("div",{className:"btn-group mt-5",role:"group","aria-label":"External API Requests Examples",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-primary",onClick:d,children:"Get Public Message"}),Object(u.jsx)("button",{type:"button",className:"btn btn-primary",onClick:j,children:"Get Protected Message"})]}),a&&Object(u.jsxs)("div",{className:"mt-5",children:[Object(u.jsx)("h6",{className:"muted",children:"Result"}),Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("code",{className:"col-12 text-light bg-dark p-4",children:a})})})]})]})};var Ie=function(){return k.b.isLoading?Object(u.jsx)(ke,{}):Object(u.jsx)(je.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(I.c,{children:[Object(u.jsx)(I.a,{exact:!0,path:"/",children:Object(u.jsx)(de,{})}),Object(u.jsx)(I.a,{exact:!0,path:"/signup",children:Object(u.jsx)(M,{})}),Object(u.jsx)(I.a,{exact:!0,path:"/login",children:Object(u.jsx)(ne,{})}),Object(u.jsx)(I.a,{exact:!0,path:"/external-api",children:Object(u.jsx)(Be,{})}),Object(u.jsx)(Ee,{path:["/profile","/profile/:id"],component:xe}),Object(u.jsx)(Ee,{exact:!0,path:"/map",component:Ce}),Object(u.jsx)(Ee,{exact:!0,path:"/questions",component:N}),Object(u.jsx)(I.a,{exact:!0,path:"/testmap",children:Object(u.jsx)(ae,{})})]})})})};a(142);a(35).config();var ze=function(e){var t=e.children,a=Object(I.f)();return Object(u.jsx)(k.a,{domain:"dev-dwofmg2f.us.auth0.com",clientId:"fdECDr7RmpKSZXd785S32XWhrJM42z7i",redirectUri:window.location.origin,onRedirectCallback:function(e){a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},audience:"https://dev-dwofmg2f.us.auth0.com/api/v2/",children:t})};a(35).config(),s.a.render(Object(u.jsx)(je.a,{children:Object(u.jsx)(ze,{children:Object(u.jsx)(Ie,{})})}),document.getElementById("root"))},45:function(e,t,a){},52:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[143,1,2]]]);
//# sourceMappingURL=main.ba14a47c.chunk.js.map