(function(){"use strict";var e={851:function(e,t,r){var o=r(9242),a=r(3396);function s(e,t){const r=(0,a.up)("router-link"),o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",null,[(0,a.Wm)(r,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(r,{to:"/simulation"},{default:(0,a.w5)((()=>[(0,a.Uk)("Simulation")])),_:1})]),(0,a.Wm)(o)],64)}var n=r(89);const i={},c=(0,n.Z)(i,[["render",s]]);var l=c,d=r(678);const p={class:"flex-box"},g=(0,a._)("div",{id:"snackbar"},"Some text some message..",-1),h={class:"rem-space"},u={class:"row-1"},k=(0,a._)("div",{class:"step-title"},null,-1),f=(0,a._)("div",{class:"instructions"},[(0,a._)("p",null," A TCP SYN Flood attack involves flooding the network with connection requests, and making the servers wait for confirmation messages. "),(0,a._)("br"),(0,a._)("br"),(0,a._)("p",null," To begin, choose a free port and send a SYN message. Do not accept the acknowledgement, which will close the connection. "),(0,a._)("br"),(0,a._)("p",null," To complete the experiment, overwhelm atleast one server by occupying all its available ports, hence making it unavailable for other users. "),(0,a._)("br"),(0,a._)("p",null,"Hover over the port to be able to see the port number. To accept the acknowledgement, click on the appropriate color and port number from the 'Respond' section in the server.")],-1),v={class:"input-field"},m=(0,a._)("h4",null," Enter server hostname: ",-1),P=(0,a._)("h4",null," Choose Port: ",-1),b={class:"button-row"},y={class:"row-2"};function w(e,t,r,s,n,i){const c=(0,a.up)("StyledButton"),l=(0,a.up)("ServerComponent"),d=(0,a.up)("EndSystemComponent"),w=(0,a.up)("NetworkInteractionComponent");return(0,a.wg)(),(0,a.iD)("div",p,[g,(0,a._)("div",h,[(0,a._)("div",u,[k,f,(0,a._)("div",v,[m,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.inputIpAddress=e)},null,512),[[o.nr,n.inputIpAddress]]),P,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.inputPort=e)},null,512),[[o.nr,n.inputPort]])]),(0,a._)("div",b,[(0,a.Wm)(c,{text:"Send","click-function":i.send,disabled:n.disableAllButtons},null,8,["click-function","disabled"]),(0,a.Wm)(c,{text:"Verify","click-function":i.verify,disabled:n.disableAllButtons},null,8,["click-function","disabled"]),(0,a.Wm)(c,{text:"Restart","click-function":i.restart,disabled:n.disableAllButtons},null,8,["click-function","disabled"]),(0,a.Wm)(c,{text:"Next",invisible:!n.complete,"click-function":i.nextPage},null,8,["invisible","click-function"])])]),(0,a._)("div",y,[(0,a.Wm)(w,{ref:"childComponentRef"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"box",id:"box1",top:"10%",left:"10%","package-info":n.serverZeroPackages},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{port1:n.serverOnePorts[0],port2:n.serverOnePorts[1],port3:n.serverOnePorts[2],port4:n.serverOnePorts[3],"background-color":n.serverZeroPackages[0].packageBackgroundColor,"ip-address":n.ipAddress[0],"port-labels":n.portMap[n.ipAddress[0]]},null,8,["port1","port2","port3","port4","background-color","ip-address","port-labels"])])),_:1},8,["package-info"]),(0,a.Wm)(d,{class:"box",id:"box2",top:"10%",left:"31.5%","package-info":n.serverOnePackages},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{port1:n.serverTwoPorts[0],port2:n.serverTwoPorts[1],port3:n.serverTwoPorts[2],port4:n.serverTwoPorts[3],"background-color":n.serverOnePackages[0].packageBackgroundColor,"ip-address":n.ipAddress[1],"port-labels":n.portMap[n.ipAddress[1]]},null,8,["port1","port2","port3","port4","background-color","ip-address","port-labels"])])),_:1},8,["package-info"]),(0,a.Wm)(d,{class:"box",id:"box3",top:"10%",left:"53%","package-info":n.serverTwoPackages},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{port1:n.serverThreePorts[0],port2:n.serverThreePorts[1],port3:n.serverThreePorts[2],port4:n.serverThreePorts[3],"background-color":n.serverTwoPackages[0].packageBackgroundColor,"ip-address":n.ipAddress[2],"port-labels":n.portMap[n.ipAddress[2]]},null,8,["port1","port2","port3","port4","background-color","ip-address","port-labels"])])),_:1},8,["package-info"]),(0,a.Wm)(d,{class:"box",id:"box4",top:"10%",left:"75%","package-info":n.serverThreePackages},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{port1:n.serverFourPorts[0],port2:n.serverFourPorts[1],port3:n.serverFourPorts[2],port4:n.serverFourPorts[3],"background-color":n.serverThreePackages[0].packageBackgroundColor,"ip-address":n.ipAddress[3],"port-labels":n.portMap[n.ipAddress[3]]},null,8,["port1","port2","port3","port4","background-color","ip-address","port-labels"])])),_:1},8,["package-info"]),(0,a.Wm)(d,{class:"box",id:"clientBox",top:"70%",left:"42%"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{"display-extra-options":!0,onRespond:i.respond,responseData:n.receivedPackages,port1:n.clientPorts[0],port2:n.clientPorts[1],port3:n.clientPorts[2],port4:n.clientPorts[3],"ip-address":n.clientIpAddress,"port-labels":n.portMap[n.ipAddress[0]]},null,8,["onRespond","responseData","port1","port2","port3","port4","ip-address","port-labels"])])),_:1})])),_:1},512)])])])}r(7658);var C=r(7139);const x=e=>((0,a.dD)("data-v-a42d58b6"),e=e(),(0,a.Cn)(),e),I={id:"top-bar"},T=x((()=>(0,a._)("div",{class:"side-space"},null,-1))),B={class:"title"},_=x((()=>(0,a._)("div",{class:"side-space"},[(0,a._)("button",{class:"submit-report"},"Report a Bug")],-1)));function S(e,t,r,o,s,n){return(0,a.wg)(),(0,a.iD)("div",I,[T,(0,a._)("div",B,(0,C.zw)(r.title),1),_])}var F={name:"TopBar",props:{title:{type:String,default:"Packet Simulator"}}};const A=(0,n.Z)(F,[["render",S],["__scopeId","data-v-a42d58b6"]]);var M=A;const O=e=>((0,a.dD)("data-v-78934941"),e=e(),(0,a.Cn)(),e),D={id:"margin-container"},E={id:"root"},L=O((()=>(0,a._)("svg",{id:"lineCanvas"},null,-1))),W={id:"overlay"};function N(e,t,r,o,s,n){return(0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",E,[L,(0,a._)("div",W,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])])])}var Z={name:"NetworkInteractionComponent",props:{onPackageAnimationEnd:{type:Function},onPackageReachDestination:{type:Function}},mounted(){let e=document.getElementById("margin-container").getBoundingClientRect(),t=e.width-50+"px",r=e.height-50+"px";document.getElementById("root").style.width=t,document.getElementById("root").style.height=r,document.getElementById("lineCanvas").style.width=t,document.getElementById("lineCanvas").style.height=r,document.getElementById("overlay").style.width=t,document.getElementById("overlay").style.height=r},methods:{drawSVGLine(e,t,r,o){let a=document.getElementById("lineCanvas"),s=document.createElementNS("http://www.w3.org/2000/svg","line");s.setAttribute("x1",e),s.setAttribute("y1",t),s.setAttribute("x2",r),s.setAttribute("y2",o),s.setAttribute("style","stroke:rgb(0,0,0);stroke-width:1"),a.appendChild(s)},animatePackage(e,t,r,o){let a=document.getElementById(t),s=document.getElementById(e),n=document.getElementById(r),i=document.getElementById("overlay");if(!a||!s||!n||!i)return;let c=40,l=a.offsetHeight/2,d=n.offsetLeft+n.offsetWidth,p=n.offsetTop+n.offsetHeight;a.remove(),i.appendChild(a),a.style.left=d+"px",a.style.top=p+"px";let g=n.offsetLeft+n.offsetWidth/2-c,h=n.offsetTop+n.offsetHeight/2-l;a.style.left=g+"px",a.style.top=h+"px";let u=async()=>{if(g=Math.round(g),h=Math.round(h),a.offsetLeft===g&&a.offsetTop===h){let e=s.offsetLeft+s.offsetWidth/2-c,r=s.offsetTop+s.offsetHeight/2-l;a.style.left=e+"px",a.style.top=r+"px";let n=async()=>{if(e=Math.round(e),r=Math.round(r),a.offsetLeft===e&&a.offsetTop===r){let e=s.offsetLeft+s.offsetWidth,r=s.offsetTop+s.offsetHeight;a.style.left=e+"px",a.style.top=r+"px";let n=()=>{a.offsetLeft===e&&a.offsetTop===r?(this.onPackageAnimationEnd&&this.onPackageAnimationEnd(t),o&&o()):setTimeout((()=>{n()}),100)};n()}else setTimeout((()=>{n()}),100)};n().then((()=>{this.onPackageReachDestination&&this.onPackageReachDestination(t)}))}else setTimeout((()=>{u()}),500)};u()},arrangePackages(e,t){if(!e)return;let r=document.getElementById(e),o=document.getElementById("overlay"),a=r.offsetLeft+r.offsetWidth,s=r.offsetTop+r.offsetHeight;console.log(t);for(let n=0;n<t.length;n++){console.log(t[n],"error");let e=document.getElementById(t[n]);o.appendChild(e),e.style.left=a+"px",e.style.top=s+"px";let r=a+15*n,i=s+15*n;e.style.left=r+"px",e.style.top=i+"px"}},drawLine(e,t){let r=document.getElementById(e),o=document.getElementById(t);if(!r||!o)return;let a=r.offsetLeft+r.offsetWidth/2,s=r.offsetTop+r.offsetHeight/2,n=o.offsetLeft+o.offsetWidth/2,i=o.offsetTop+o.offsetHeight/2;this.drawSVGLine(a,s,n,i)}}};const R=(0,n.Z)(Z,[["render",N],["__scopeId","data-v-78934941"]]);var j=R;const H=["id"],Y={id:"endSystemVector"},$=["id"];function K(e,t,r,o,s,n){const i=(0,a.up)("PackageComponent");return(0,a.wg)(),(0,a.iD)("div",{class:(0,C.C_)([r.Class,"rootElementEndSystem"]),id:r.Id,style:(0,C.j5)({top:r.top,left:r.left})},[(0,a._)("div",Y,[(0,a.WI)(e.$slots,"default",{},void 0,!0)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.packageInfo,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[e.packageId?((0,a.wg)(),(0,a.iD)("div",{key:0,style:(0,C.j5)([{position:"absolute",right:"-80px"},{transition:"ease-in-out "+(e.animationSeconds??1)+"s",visibility:e.displayPackage?"visible":"hidden"}]),id:e.packageId,class:"package"},[(0,a.Wm)(i,{data:e.data,"background-color":e.packageBackgroundColor},null,8,["data","background-color"])],12,$)):(0,a.kq)("",!0)])))),128))],14,H)}const z={class:"packageText"},V={key:0,class:"dash"};function U(e,t,r,o,s,n){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",{id:"packageBox",style:(0,C.j5)({backgroundColor:r.backgroundColor})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.data,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("div",z,(0,C.zw)(e),1),n.addDash(t)?((0,a.wg)(),(0,a.iD)("div",V)):(0,a.kq)("",!0)])))),128))],4)])}var q={name:"PackageComponent",methods:{addDash(e){return this.data.length!==e+1}},props:{data:{type:Array},backgroundColor:{type:String,default:"#ABFF8E"}}};const G=(0,n.Z)(q,[["render",U],["__scopeId","data-v-73732476"]]);var J=G,Q={name:"EndSystemComponent",components:{PackageComponent:J},props:{Class:{type:String},Id:{type:String},top:{type:String},left:{type:String},packageInfo:{type:[Object]}},computed:{packagePosition(){return"-50px"}}};const X=(0,n.Z)(Q,[["render",K],["__scopeId","data-v-b58404e6"]]);var ee=X;const te=e=>((0,a.dD)("data-v-acc70c2c"),e=e(),(0,a.Cn)(),e),re={class:"root-col"},oe={class:"col"},ae={class:"id-address"},se={class:"col"},ne={class:"circle-div-text"},ie={class:"circle-div-text"},ce={class:"circle-div-text"},le={class:"circle-div-text"},de=te((()=>(0,a._)("div",{class:"title"}," Respond ",-1))),pe={class:"respond-buttons"},ge=["onClick"];function he(e,t,r,o,s,n){return(0,a.wg)(),(0,a.iD)("div",re,[(0,a._)("div",{class:"root",style:(0,C.j5)({backgroundColor:r.backgroundColor??"#AA9A8B",border:r.displayExtraOptions?"none":"1px solid black"})},[(0,a._)("div",oe,[(0,a._)("span",ae,(0,C.zw)(r.ipAddress),1)]),(0,a._)("div",se,[(0,a._)("div",{class:"circle-div",style:(0,C.j5)({backgroundColor:n.port0Color})},[(0,a._)("span",ne,(0,C.zw)(n.portLabel(0)),1)],4),(0,a._)("div",{class:"circle-div",style:(0,C.j5)({backgroundColor:n.port1Color})},[(0,a._)("span",ie,(0,C.zw)(n.portLabel(1)),1)],4),(0,a._)("div",{class:"circle-div",style:(0,C.j5)({backgroundColor:n.port2Color})},[(0,a._)("span",ce,(0,C.zw)(n.portLabel(2)),1)],4),(0,a._)("div",{class:"circle-div",style:(0,C.j5)({backgroundColor:n.port3Color})},[(0,a._)("span",le,(0,C.zw)(n.portLabel(3)),1)],4)])],4),r.displayExtraOptions?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"extra-options",style:(0,C.j5)({visibility:0!==r.responseData.length?"visible":"hidden"})},[de,(0,a._)("div",pe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.responseData,((e,t)=>((0,a.wg)(),(0,a.iD)("button",{key:t,style:(0,C.j5)({backgroundColor:e.backgroundColour}),onClick:t=>this.$emit("respond",e)}," Port: "+(0,C.zw)(e.serverPortLabel),13,ge)))),128))])],4)):(0,a.kq)("",!0)])}var ue={name:"ServerComponent",props:{port1:Number,port2:Number,port3:Number,port4:Number,portLabels:[],ipAddress:String,displayExtraOptions:Boolean,responseData:[],backgroundColor:String},computed:{port0Color(){return 0===this.port1?"#FF0000":1===this.port1?"#33FF00":2===this.port1?"#FFD600":"#FF0000"},port1Color(){return 0===this.port2?"#FF0000":1===this.port2?"#33FF00":2===this.port2?"#FFD600":"#FF0000"},port2Color(){return 0===this.port3?"#FF0000":1===this.port3?"#33FF00":2===this.port3?"#FFD600":"#FF0000"},port3Color(){return 0===this.port4?"#FF0000":1===this.port4?"#33FF00":2===this.port4?"#FFD600":"#FF0000"}},methods:{portLabel(e){return this.portLabels&&this.portLabels.length>e?this.portLabels[e]:e+1}}};const ke=(0,n.Z)(ue,[["render",he],["__scopeId","data-v-acc70c2c"]]);var fe=ke;const ve=["disabled"];function me(e,t,r,o,s,n){return(0,a.wg)(),(0,a.iD)("button",{style:(0,C.j5)(n.buttonStyle),onClick:t[0]||(t[0]=(...e)=>r.clickFunction&&r.clickFunction(...e)),disabled:r.disable},(0,C.zw)(r.text),13,ve)}var Pe={name:"StyledButton",props:{backgroundColor:{type:String,default:"#288EC8"},textColor:{type:String,default:"white"},text:{type:String,default:"Button"},clickFunction:{type:Function,default:()=>{}},disable:{type:Boolean,default:!1}},computed:{buttonStyle(){return{backgroundColor:this.backgroundColor,color:this.textColor}}}};const be=(0,n.Z)(Pe,[["render",me],["__scopeId","data-v-777106be"]]);var ye=be,we={name:"App",components:{ServerComponent:fe,NetworkInteractionComponent:j,TopBar:M,EndSystemComponent:ee,StyledButton:ye},mounted(){let e=Math.floor(20*Math.random())+10,t=Math.floor(255*Math.random())+1;for(let a=0;a<4;a++)this.ipAddress.push("172.17."+e+"."+t),t++;let r=Math.floor(3*Math.random());for(let a=0;a<r;a++){let e=Math.floor(4*Math.random());this.serverOnePorts[e]=0}r=Math.floor(3*Math.random());for(let a=0;a<r;a++){let e=Math.floor(4*Math.random());this.serverTwoPorts[e]=0}r=Math.floor(3*Math.random());for(let a=0;a<r;a++){let e=Math.floor(4*Math.random());this.serverThreePorts[e]=0}r=Math.floor(3*Math.random());for(let a=0;a<r;a++){let e=Math.floor(4*Math.random());this.serverFourPorts[e]=0}e=Math.floor(20*Math.random())+10,t=Math.floor(255*Math.random())+1,this.clientIpAddress="10.15."+e+"."+t,this.$refs.childComponentRef.drawLine("box1","clientBox"),this.$refs.childComponentRef.drawLine("box2","clientBox"),this.$refs.childComponentRef.drawLine("box3","clientBox"),this.$refs.childComponentRef.drawLine("box4","clientBox");for(let a=0;a<this.ipAddress.length;a++){let e=this.ipAddress[a],t=[];for(let r=0;r<4;r++){let e=Math.floor(8e3*Math.random())+1e3;t.push(e)}this.portMap[e]=t}let o=[];for(let a=0;a<4;a++){let e=Math.floor(8e3*Math.random())+1e3;o.push(e)}this.portMap[this.clientIpAddress]=o},data(){return{complete:!1,disableAllButtons:!1,ipAddress:[],serverOnePorts:[1,1,1,1],serverTwoPorts:[1,1,1,1],serverThreePorts:[1,1,1,1],serverFourPorts:[1,1,1,1],clientPorts:[1,1,1,1],portMap:{},clientIpAddress:"",inputIpAddress:"",inputPort:"",serverZeroPackages:[{packageId:"package01",data:[],displayPackage:!1,packageBackgroundColor:"#9efd85",animationSeconds:1},{packageId:"package02",data:[],displayPackage:!1,packageBackgroundColor:"#9efd85",animationSeconds:1},{packageId:"package03",data:[],displayPackage:!1,packageBackgroundColor:"#9efd85",animationSeconds:1},{packageId:"package04",data:[],displayPackage:!1,packageBackgroundColor:"#9efd85",animationSeconds:1}],serverOnePackages:[{packageId:"package11",data:[],displayPackage:!1,packageBackgroundColor:"#85fdef",animationSeconds:1},{packageId:"package12",data:[],displayPackage:!1,packageBackgroundColor:"#85fdef",animationSeconds:1},{packageId:"package13",data:[],displayPackage:!1,packageBackgroundColor:"#85fdef",animationSeconds:1},{packageId:"package14",data:[],displayPackage:!1,packageBackgroundColor:"#85fdef",animationSeconds:1}],serverTwoPackages:[{packageId:"package21",data:[],displayPackage:!1,packageBackgroundColor:"#8985fd",animationSeconds:1},{packageId:"package22",data:[],displayPackage:!1,packageBackgroundColor:"#8985fd",animationSeconds:1},{packageId:"package23",data:[],displayPackage:!1,packageBackgroundColor:"#8985fd",animationSeconds:1},{packageId:"package24",data:[],displayPackage:!1,packageBackgroundColor:"#8985fd",animationSeconds:1}],serverThreePackages:[{packageId:"package31",data:[],displayPackage:!1,packageBackgroundColor:"#fd85a5",animationSeconds:1},{packageId:"package32",data:[],displayPackage:!1,packageBackgroundColor:"#fd85a5",animationSeconds:1},{packageId:"package33",data:[],displayPackage:!1,packageBackgroundColor:"#fd85a5",animationSeconds:1},{packageId:"package34",data:[],displayPackage:!1,packageBackgroundColor:"#fd85a5",animationSeconds:1}],receivedPackages:[]}},computed:{},methods:{restart(){this.disableAllButtons=!1;for(let e=0;e<this.serverZeroPackages.length;e++)this.serverZeroPackages[e].displayPackage=!1,this.serverZeroPackages[e].data=[];for(let e=0;e<this.serverOnePackages.length;e++)this.serverOnePackages[e].displayPackage=!1,this.serverOnePackages[e].data=[];for(let e=0;e<this.serverTwoPackages.length;e++)this.serverTwoPackages[e].displayPackage=!1,this.serverTwoPackages[e].data=[];for(let e=0;e<this.serverThreePackages.length;e++)this.serverThreePackages[e].displayPackage=!1,this.serverThreePackages[e].data=[];for(let e=0;e<this.clientPorts.length;e++)this.clientPorts[e]=1;for(let e=0;e<this.serverOnePorts.length;e++)2===this.serverOnePorts[e]&&(this.serverOnePorts[e]=1);for(let e=0;e<this.serverTwoPorts.length;e++)2===this.serverTwoPorts[e]&&(this.serverTwoPorts[e]=1);for(let e=0;e<this.serverThreePorts.length;e++)2===this.serverThreePorts[e]&&(this.serverThreePorts[e]=1);for(let e=0;e<this.serverFourPorts.length;e++)2===this.serverFourPorts[e]&&(this.serverFourPorts[e]=1);this.receivedPackages=[]},correct1(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="green",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},incorrect(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="red",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),7e3)},nextPage(){this.$router.push({name:"simulation-view"})},send(){let e="",t=-1,r=this.inputIpAddress,o=-1,a=this.inputPort;for(let s=0;s<this.ipAddress.length;s++)if(r===this.ipAddress[s]){e="box"+(s+1),t=s;let n=this.portMap[r];for(let e=0;e<n.length;e++)if(a==n[e]){o=e,console.log("port",o,"match");break}break}if(-1===t)this.incorrect("Invalid IP address");else{if(-1===o)return console.log("port",o),void this.incorrect("Invalid port");if(0===t){if(1!==this.serverOnePorts[o])return void this.incorrect("Port is occupied");this.serverOnePorts[o]=2}else if(1===t){if(1!==this.serverTwoPorts[o])return void this.incorrect("Port is occupied");this.serverTwoPorts[o]=2}else if(2===t){if(1!==this.serverThreePorts[o])return void this.incorrect("Port is occupied");this.serverThreePorts[o]=2}else if(3===t){if(1!==this.serverFourPorts[o])return void this.incorrect("Port is occupied");this.serverFourPorts[o]=2}let r=-1;for(let e=0;e<this.clientPorts.length;e++)if(1===this.clientPorts[e]){r=e;break}if(-1===r)this.incorrect("No available ports on client. To continue, free up atleast a port on the client by responding to a server. Click on the corresponding button under the 'Respond to server' option.");else{this.clientPorts[r]=2;let s="",n="";0===t?(this.serverZeroPackages[o].displayPackage=!0,n=this.serverZeroPackages[o].packageBackgroundColor,this.serverZeroPackages[o].data=[],this.serverZeroPackages[o].data.push("Port: "+(parseInt(o)+1)),this.serverZeroPackages[o].data.push("SYN"),s=this.serverZeroPackages[o].packageId):1===t?(this.serverOnePackages[o].displayPackage=!0,n=this.serverOnePackages[o].packageBackgroundColor,this.serverOnePackages[o].data=[],this.serverOnePackages[o].data.push("Port: "+(parseInt(o)+1)),this.serverOnePackages[o].data.push("SYN"),s=this.serverOnePackages[o].packageId):2===t?(this.serverTwoPackages[o].displayPackage=!0,n=this.serverTwoPackages[o].packageBackgroundColor,this.serverTwoPackages[o].data=[],this.serverTwoPackages[o].data.push("Port: "+(parseInt(o)+1)),this.serverTwoPackages[o].data.push("SYN"),s=this.serverTwoPackages[o].packageId):3===t&&(this.serverThreePackages[o].displayPackage=!0,n=this.serverThreePackages[o].packageBackgroundColor,this.serverThreePackages[o].data=[],this.serverThreePackages[o].data.push("Port: "+(parseInt(o)+1)),this.serverThreePackages[o].data.push("SYN"),s=this.serverThreePackages[o].packageId),console.log(s,e),this.disableAllButtons=!0,this.$refs.childComponentRef.animatePackage(e,s,"clientBox",(()=>{0===t?this.serverZeroPackages[o].data[1]="SYN/ACK":1===t?this.serverOnePackages[o].data[1]="SYN/ACK":2===t?this.serverTwoPackages[o].data[1]="SYN/ACK":3===t&&(this.serverThreePackages[o].data[1]="SYN/ACK"),this.$refs.childComponentRef.animatePackage("clientBox",s,e,(()=>{this.disableAllButtons=!1,this.receivedPackages.push({packageId:s,serverPort:o,serverPortLabel:a,serverIndex:t,serverId:e,backgroundColour:n,clientPort:r});let i=this.receivedPackages.map((e=>e.packageId));this.$refs.childComponentRef.arrangePackages("clientBox",i)}))}))}}},respond(e){let t=this.receivedPackages.findIndex((t=>t.packageId===e.packageId));-1!==t&&this.receivedPackages.splice(t,1),0===e.serverIndex?this.serverZeroPackages[e.serverPort].data[1]="ACK":1===e.serverIndex?this.serverOnePackages[e.serverPort].data[1]="ACK":2===e.serverIndex?this.serverTwoPackages[e.serverPort].data[1]="ACK":3===e.serverIndex&&(this.serverThreePackages[e.serverPort].data[1]="ACK"),this.$refs.childComponentRef.animatePackage(e.serverId,e.packageId,"clientBox",(()=>{this.clientPorts[e.clientPort]=1,0===e.serverIndex?(this.serverZeroPackages[e.serverPort].displayPackage=!1,this.serverOnePorts[e.serverPort]=1):1===e.serverIndex?(this.serverOnePackages[e.serverPort].displayPackage=!1,this.serverTwoPorts[e.serverPort]=1):2===e.serverIndex?(this.serverTwoPackages[e.serverPort].displayPackage=!1,this.serverThreePorts[e.serverPort]=1):3===e.serverIndex&&(this.serverThreePackages[e.serverPort].displayPackage=!1,this.serverFourPorts[e.serverPort]=1),this.$refs.childComponentRef.arrangePackages("clientBox",this.receivedPackages.map((e=>e.packageId)))}))},verify(){let e=!0;for(let t=0;t<this.serverOnePorts.length;t++)if(1===this.serverOnePorts[t]){e=!1;break}if(e)this.experimentCompleted();else{e=!0;for(let t=0;t<this.serverTwoPorts.length;t++)if(1===this.serverTwoPorts[t]){e=!1;break}if(e)this.experimentCompleted();else{e=!0;for(let t=0;t<this.serverThreePorts.length;t++)if(1===this.serverThreePorts[t]){e=!1;break}if(e)this.experimentCompleted();else{e=!0;for(let t=0;t<this.serverFourPorts.length;t++)if(1===this.serverFourPorts[t]){e=!1;break}e?this.experimentCompleted():this.incorrect("Please establish connection in such a way that three-way handshake is incomplete for at least one server with all ports occupied")}}}},experimentCompleted(){this.correct1("Experiment completed successfully"),this.complete=!0}}};const Ce=(0,n.Z)(we,[["render",w]]);var xe=Ce;const Ie={src:"/graph.html",id:"frame",ref:"myiframe"};function Te(e,t){return(0,a.wg)(),(0,a.iD)("iframe",Ie,"\r\n  ",512)}const Be={},_e=(0,n.Z)(Be,[["render",Te],["__scopeId","data-v-8cf6dc16"]]);var Se=_e;const Fe=(0,d.p7)({history:(0,d.PP)("/"),routes:[{path:"/",name:"experiment-view",component:()=>xe},{path:"/simulation",name:"simulation-view",component:()=>Se}]});var Ae=Fe;(0,o.ri)(l).use(Ae).mount("#app")}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,o,a,s){if(!o){var n=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],s=e[d][2];for(var i=!0,c=0;c<o.length;c++)(!1&s||n>=s)&&Object.keys(r.O).every((function(e){return r.O[e](o[c])}))?o.splice(c--,1):(i=!1,s<n&&(n=s));if(i){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,a,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,s,n=o[0],i=o[1],c=o[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var d=c(r)}for(t&&t(o);l<n.length;l++)s=n[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},o=self["webpackChunkexp_2"]=self["webpackChunkexp_2"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(851)}));o=r.O(o)})();
//# sourceMappingURL=app.533a57bc.js.map