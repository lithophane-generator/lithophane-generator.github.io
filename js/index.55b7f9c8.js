(function(){"use strict";var e={4050:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var i=n(9242),r=n(3396);const s=e=>((0,r.dD)("data-v-55f3e3ac"),e=e(),(0,r.Cn)(),e),o=s((()=>(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",{href:"/"},[(0,r._)("img",{class:"logo",src:"/Logo-64.png",alt:"Logo"})])])],-1))),a={class:"nav-links"};function l(e,t){const n=(0,r.up)("router-link"),i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r._)("nav",null,[o,(0,r._)("ul",a,[(0,r._)("li",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(n,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})])])])]),(0,r._)("main",null,[(0,r.Wm)(i,null,{default:(0,r.w5)((({Component:e})=>[((0,r.wg)(),(0,r.j4)(r.Ob,null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))],1024))])),_:1})])],64)}var u=n(89);const p={},d=(0,u.Z)(p,[["render",l],["__scopeId","data-v-55f3e3ac"]]);var c=d,h=(n(3948),n(2483));const f={class:"generator"},m={class:"settings"};function g(e,t,n,i,s,o){const a=(0,r.up)("GeneratorSettings"),l=(0,r.up)("StlViewer");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("div",m,[(0,r._)("label",null,[(0,r.Uk)(" Image "),(0,r._)("input",{type:"file",onChange:t[0]||(t[0]=(...t)=>e.loadFile&&e.loadFile(...t)),accept:".jpeg,.jpg,.png,.gif"},null,32)]),(0,r.Wm)(a,{xExpression:e.xExpression,"onUpdate:xExpression":t[1]||(t[1]=t=>e.xExpression=t),yExpression:e.yExpression,"onUpdate:yExpression":t[2]||(t[2]=t=>e.yExpression=t),zExpression:e.zExpression,"onUpdate:zExpression":t[3]||(t[3]=t=>e.zExpression=t),onUpdatePreview:t[4]||(t[4]=t=>e.generatePreview(100)),imageWidth:e.imageWidth,imageHeight:e.imageHeight},null,8,["xExpression","yExpression","zExpression","imageWidth","imageHeight"]),(0,r._)("button",{type:"button",onClick:t[5]||(t[5]=(...t)=>e.generateLithophane&&e.generateLithophane(...t))},"Generate Lithophane")]),(0,r.Wm)(l,{class:"model-viewer",stl:e.stlModel,color:e.stlColor,doubleSided:e.stlDoubleSided},null,8,["stl","color","doubleSided"])])}n(8264),n(9575),n(2472),n(8675),n(3105),n(3408),n(2958),n(3462),n(3824),n(2974),n(3767),n(8585),n(8696);const y={class:"config-preset-container"},v={class:"config-presets"},x={class:"config-preset-settings"},b=["value","disabled"],w=["value","disabled"],_=["value","disabled"];function E(e,t,n,i,s,o){const a=(0,r.up)("VerticalSlideTransition");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",y,[(0,r._)("div",v,[(0,r._)("button",{type:"button",onClick:t[0]||(t[0]=t=>e.settingsType="RectangleSettings")},"Rectangle"),(0,r._)("button",{type:"button",onClick:t[1]||(t[1]=t=>e.settingsType="CylinderCurveSettings")},"Cylinder Curve"),(0,r._)("button",{type:"button",onClick:t[2]||(t[2]=t=>e.settingsType=null)},"Custom")]),((0,r.wg)(),(0,r.j4)(r.Ob,null,[(0,r.Wm)(a,{showIf:null!==e.settingsType,hide:!0},{default:(0,r.w5)((()=>[(0,r._)("div",x,[((0,r.wg)(),(0,r.j4)(r.Ob,null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(e.settingsType),{imageWidth:e.imageWidth,imageHeight:e.imageHeight,"onUpdate:xExpression":t[3]||(t[3]=t=>e.$emit("update:xExpression",t)),"onUpdate:yExpression":t[4]||(t[4]=t=>e.$emit("update:yExpression",t)),"onUpdate:zExpression":t[5]||(t[5]=t=>e.$emit("update:zExpression",t)),onUpdatePreview:t[6]||(t[6]=t=>e.$emit("updatePreview"))},null,40,["imageWidth","imageHeight"]))],1024))])])),_:1},8,["showIf"])],1024))]),(0,r._)("label",null,[(0,r.Uk)(" X Expression: "),(0,r._)("input",{value:e.xExpression,disabled:null!==e.settingsType,onInput:t[7]||(t[7]=t=>e.$emit("update:xExpression",t.target.value)),onFocusout:t[8]||(t[8]=t=>e.$emit("updatePreview"))},null,40,b)]),(0,r._)("label",null,[(0,r.Uk)(" Y Expression: "),(0,r._)("input",{value:e.yExpression,disabled:null!==e.settingsType,onInput:t[9]||(t[9]=t=>e.$emit("update:yExpression",t.target.value)),onFocusout:t[10]||(t[10]=t=>e.$emit("updatePreview"))},null,40,w)]),(0,r._)("label",null,[(0,r.Uk)(" Z Expression: "),(0,r._)("input",{value:e.zExpression,disabled:null!==e.settingsType,onInput:t[11]||(t[11]=t=>e.$emit("update:zExpression",t.target.value)),onFocusout:t[12]||(t[12]=t=>e.$emit("updatePreview"))},null,40,_)])],64)}var z=n(1801);const k={class:"horizontal-fieldset"},S=(0,r._)("legend",null,"Plane:",-1),W=["value"],U=["value"];function P(e,t,n,s,o,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("fieldset",k,[S,(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"radio",value:"xy","onUpdate:modelValue":t[0]||(t[0]=t=>e.plane=t),onInput:t[1]||(t[1]=(...t)=>e.recalculate&&e.recalculate(...t)),onFocusout:t[2]||(t[2]=t=>e.$emit("updatePreview"))},null,544),[[i.G2,e.plane]]),(0,r.Uk)(" XY ")]),(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"radio",value:"xz","onUpdate:modelValue":t[3]||(t[3]=t=>e.plane=t),onInput:t[4]||(t[4]=(...t)=>e.recalculate&&e.recalculate(...t)),onFocusout:t[5]||(t[5]=t=>e.$emit("updatePreview"))},null,544),[[i.G2,e.plane]]),(0,r.Uk)(" XZ ")]),(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"radio",value:"yz","onUpdate:modelValue":t[6]||(t[6]=t=>e.plane=t),onInput:t[7]||(t[7]=(...t)=>e.recalculate&&e.recalculate(...t)),onFocusout:t[8]||(t[8]=t=>e.$emit("updatePreview"))},null,544),[[i.G2,e.plane]]),(0,r.Uk)(" YZ ")])]),(0,r._)("label",null,[(0,r.Uk)(" Horizontal Resolution (mm/px): "),(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":t[9]||(t[9]=t=>e.hRes=t),onInput:t[10]||(t[10]=(...t)=>e.recalculate&&e.recalculate(...t))},null,544),[[i.nr,e.hRes]])]),(0,r._)("label",null,[(0,r.Uk)(" Vertical Resolution (mm/px): "),(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":t[11]||(t[11]=t=>e.vRes=t),onInput:t[12]||(t[12]=(...t)=>e.recalculate&&e.recalculate(...t))},null,544),[[i.nr,e.vRes]])]),(0,r._)("label",null,[(0,r.Uk)(" Width (mm): "),(0,r._)("input",{type:"number",disabled:"",value:e.width},null,8,W)]),(0,r._)("label",null,[(0,r.Uk)(" Height (mm): "),(0,r._)("input",{type:"number",disabled:"",value:e.height},null,8,U)])],64)}n(1703);function R(e){if(!e)throw new Error("Assertion failed")}function $(e,t){var n;return t=null!==(n=t)&&void 0!==n?n:0,Math.round((e+Number.EPSILON)*10**t)/10**t}var O=(0,r.aZ)({props:{imageWidth:{type:Number},imageHeight:{type:Number}},data(){return{plane:"yz",hRes:.1,vRes:.1}},activated(){this.recalculate()},computed:{imgXAxis(){return{xy:"x",xz:"x",yz:"y"}[this.plane]},imgYAxis(){return{xy:"y",xz:"z",yz:"z"}[this.plane]},imgDepthAxis(){return{xy:"z",xz:"y",yz:"x"}[this.plane]},width(){return this.imageWidth?$((this.imageWidth-1)*this.hRes,4):null},height(){return this.imageHeight?$((this.imageHeight-1)*this.vRes,4):null}},methods:{recalculate(){const e={x:"",y:"",z:""};e[this.imgDepthAxis]="0",e[this.imgXAxis]="x/"+1/this.hRes,e[this.imgYAxis]="(h-y-1)/"+1/this.vRes,this.$emit("update:xExpression",e.x),this.$emit("update:yExpression",e.y),this.$emit("update:zExpression",e.z)}},emits:["update:xExpression","update:yExpression","update:zExpression","updatePreview"]});const H=(0,u.Z)(O,[["render",P]]);var A=H,I=n(7139);const j={class:"horizontal-fieldset"},C=(0,r._)("legend",null,"Axis of Rotation:",-1),L=["value"],T=["value"],D=["value"],Z=["value"],F=["value"];function M(e,t,n,s,o,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("fieldset",j,[C,(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"radio",value:"x","onUpdate:modelValue":t[0]||(t[0]=t=>e.axisOfRotation=t),onChange:t[1]||(t[1]=(...t)=>e.recalculate&&e.recalculate(...t)),onFocusout:t[2]||(t[2]=t=>e.$emit("updatePreview"))},null,544),[[i.G2,e.axisOfRotation]]),(0,r.Uk)(" X ")]),(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"radio",value:"y","onUpdate:modelValue":t[3]||(t[3]=t=>e.axisOfRotation=t),onChange:t[4]||(t[4]=(...t)=>e.recalculate&&e.recalculate(...t)),onFocusout:t[5]||(t[5]=t=>e.$emit("updatePreview"))},null,544),[[i.G2,e.axisOfRotation]]),(0,r.Uk)(" Y ")]),(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"radio",value:"z","onUpdate:modelValue":t[6]||(t[6]=t=>e.axisOfRotation=t),onChange:t[7]||(t[7]=(...t)=>e.recalculate&&e.recalculate(...t)),onFocusout:t[8]||(t[8]=t=>e.$emit("updatePreview"))},null,544),[[i.G2,e.axisOfRotation]]),(0,r.Uk)(" Z ")])]),(0,r._)("label",null,[(0,r.Uk)(" Horizontal Resolution (mm/px): "),(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":t[9]||(t[9]=t=>e.hRes=t),onInput:t[10]||(t[10]=(...t)=>e.recalculate&&e.recalculate(...t)),onFocusout:t[11]||(t[11]=t=>e.$emit("updatePreview"))},null,544),[[i.nr,e.hRes]])]),(0,r._)("label",null,[(0,r.Uk)(" Vertical Resolution (mm/px): "),(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":t[12]||(t[12]=t=>e.vRes=t),onInput:t[13]||(t[13]=(...t)=>e.recalculate&&e.recalculate(...t)),onFocusout:t[14]||(t[14]=t=>e.$emit("updatePreview"))},null,544),[[i.nr,e.vRes]])]),(0,r._)("label",null,[(0,r.Uk)(" Arc (degrees): "+(0,I.zw)(e.arc)+" ",1),(0,r.wy)((0,r._)("input",{type:"range",min:"1",max:"360","onUpdate:modelValue":t[15]||(t[15]=t=>e.arc=t),onInput:t[16]||(t[16]=(...t)=>e.recalculate&&e.recalculate(...t)),onFocusout:t[17]||(t[17]=t=>e.$emit("updatePreview"))},null,544),[[i.nr,e.arc]])]),(0,r._)("label",null,[(0,r.Uk)(" Inner Radius (mm): "),(0,r._)("input",{type:"number",disabled:"",value:e.round(e.radius,4)},null,8,L)]),(0,r._)("label",null,[(0,r.Uk)(" Inner Arc Length (mm): "),(0,r._)("input",{type:"number",disabled:"",value:e.round(e.arcLength,4)},null,8,T)]),(0,r._)("label",null,[(0,r.Uk)(" Inner Width (mm): "),(0,r._)("input",{type:"number",disabled:"",value:e.round(e.width,4)},null,8,D)]),(0,r._)("label",null,[(0,r.Uk)(" Inner Depth (mm): "),(0,r._)("input",{type:"number",disabled:"",value:e.round(e.depth,4)},null,8,Z)]),(0,r._)("label",null,[(0,r.Uk)(" Height (mm): "),(0,r._)("input",{type:"number",disabled:"",value:e.round(e.height,4)},null,8,F)])],64)}var V=(0,r.aZ)({props:{imageWidth:{type:Number},imageHeight:{type:Number}},data(){return{axisOfRotation:"z",hRes:.1,vRes:.1,arc:120,recalculations:0}},activated(){this.recalculate()},computed:{firstAxis(){return{x:"y",y:"z",z:"x"}[this.axisOfRotation]},secondAxis(){return{x:"z",y:"x",z:"y"}[this.axisOfRotation]},radius(){return this.imageWidth?180*(this.imageWidth-1)/this.arc/Math.PI*this.hRes:null},arcLength(){return this.imageWidth?(this.imageWidth-1)*this.hRes:null},width(){return this.imageWidth&&null!==this.radius?this.arc<=180?2*this.radius*Math.sin(this.arc/2/180*Math.PI):2*this.radius:null},depth(){return this.imageWidth&&null!==this.radius?this.radius*(1-Math.cos(this.arc/2/180*Math.PI)):null},height(){return this.imageHeight?(this.imageHeight-1)*this.vRes:null}},methods:{recalculate(){const e={x:"",y:"",z:""},t=`pi*(x/(w-1)*${this.arc} + ${(180-this.arc)/2})/180`,n=`(w-1)*180/${this.arc}/pi/${1/this.hRes}`;this.arc<180?e[this.firstAxis]=`(sin(${t}) - sin(pi*${(180-this.arc)/2}/180))*${n}`:e[this.firstAxis]=`sin(${t})*${n}`,e[this.secondAxis]=`-cos(${t})*${n}`,e[this.axisOfRotation]="(h-y-1)/"+1/this.vRes,this.$emit("update:xExpression",e.x),this.$emit("update:yExpression",e.y),this.$emit("update:zExpression",e.z)},round:$},emits:["update:xExpression","update:yExpression","update:zExpression","updatePreview"]});const B=(0,u.Z)(V,[["render",M]]);var N=B;const Y={key:0,ref:"el",class:"slide-container"};function G(e,t,n,s,o,a){return(0,r.wg)(),(0,r.j4)(i.uT,{name:"slide-transition"},{default:(0,r.w5)((()=>[e.showIf||e.hide?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",Y,[(0,r.WI)(e.$slots,"default",{},void 0,!0)],512)),[[i.F8,e.showIf||!e.hide]]):(0,r.kq)("",!0)])),_:3})}const q=(0,r.aZ)({props:{showIf:{type:Boolean,required:!0},hide:{type:Boolean,default:!1}},watch:{async showIf(e){e&&await(0,r.Y3)();const t=this.$refs.el;R(t instanceof HTMLDivElement),t.style.setProperty("--transition-height",`${t.scrollHeight}px`)}}});var X=q;const K=(0,u.Z)(X,[["render",G],["__scopeId","data-v-7a9e58ec"]]);var J=K;const Q={RectangleSettings:A,CylinderCurveSettings:N};var ee=(0,r.aZ)({components:(0,z.Z)((0,z.Z)({},Q),{},{VerticalSlideTransition:J}),props:{xExpression:{type:String,default:""},yExpression:{type:String,default:""},zExpression:{type:String,default:""},imageWidth:{type:Number},imageHeight:{type:Number}},data(){return{settingsType:"RectangleSettings"}},emits:["update:xExpression","update:yExpression","update:zExpression","updatePreview"],watch:{async settingsType(){await(0,r.Y3)(),this.$emit("updatePreview")}}});const te=(0,u.Z)(ee,[["render",E],["__scopeId","data-v-57525334"]]);var ne=te;const ie={class:"stl-viewer"};function re(e,t,n,i,s,o){const a=(0,r.up)("Camera"),l=(0,r.up)("PointLight"),u=(0,r.up)("AmbientLight"),p=(0,r.up)("StlMesh"),d=(0,r.up)("AxesHelper"),c=(0,r.up)("Scene"),h=(0,r.up)("Renderer");return(0,r.wg)(),(0,r.iD)("div",ie,[(0,r.Wm)(h,{orbitCtrl:"",resize:""},{default:(0,r.w5)((()=>[(0,r.Wm)(a,{position:{x:100,y:100,z:100}}),(0,r.Wm)(c,{background:"#000000"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{color:"#ffffff",position:{x:5e5,y:5e5,z:5e5},intensity:.25}),(0,r.Wm)(l,{color:"#ffffff",position:{x:5e5,y:-5e5,z:5e5},intensity:.25}),(0,r.Wm)(l,{color:"#ffffff",position:{x:-5e5,y:5e5,z:5e5},intensity:.25}),(0,r.Wm)(l,{color:"#ffffff",position:{x:-5e5,y:-5e5,z:5e5},intensity:.25}),(0,r.Wm)(u,{color:"#202020"}),null!==e.stlBuffer?((0,r.wg)(),(0,r.j4)(p,{key:[e.stlBuffer,e.color,e.doubleSided],model:e.stlBuffer,color:e.color,doubleSided:e.doubleSided},null,8,["model","color","doubleSided"])):(0,r.kq)("",!0),(0,r.Wm)(d,{size:1e6})])),_:1})])),_:1})])}var se=n(2904),oe=n(1114),ae=(0,r.aZ)({extends:se.Tm,props:{size:{type:Number}},mounted(){const e=new oe.y8_(this.size);this.initObject3D(e)}}),le=n(8281),ue=(0,r.aZ)({extends:se.Kj,props:{model:{type:ArrayBuffer,required:!0},color:{type:String,default:"#ffffff"},doubleSided:{type:Boolean,default:!1}},setup(e){const t=new le.j,n=t.parse(e.model);return{geometry:n,material:new oe.Wid({color:e.color,side:e.doubleSided?oe.ehD:oe.Wl3})}}}),pe=(0,r.aZ)({components:{Renderer:se.Th,Camera:se.V1,Scene:se.xs,AmbientLight:se.Mi,PointLight:se.ce,StlMesh:ue,AxesHelper:ae},props:{stl:{type:Object},color:{type:String,default:"#ffffff"},doubleSided:{type:Boolean,default:!1}},computed:{stlBuffer(){return"undefined"===typeof this.stl||null===this.stl?null:this.stl.buffer.slice(this.stl.byteOffset,this.stl.byteLength+this.stl.byteOffset)}}});const de=(0,u.Z)(pe,[["render",re]]);var ce=de,he=(0,r.aZ)({components:{GeneratorSettings:ne,StlViewer:ce},data(){return{file:null,xExpression:"0",yExpression:"x/10",zExpression:"(h-y-1)/10",imageWidth:void 0,imageHeight:void 0,imageData:void 0,wasm:null,lithophane:null,generated_expressions:null,preview:null}},computed:{previewWidth(){return"undefined"!==typeof this.imageWidth?this.imageWidth:500},previewHeight(){return"undefined"!==typeof this.imageHeight?this.imageHeight:500},expressionsChanged(){return null===this.generated_expressions||this.xExpression!==this.generated_expressions[0]||this.yExpression!==this.generated_expressions[1]||this.zExpression!==this.generated_expressions[2]},showLithophane(){return null!==this.lithophane&&!this.expressionsChanged},stlModel(){return this.showLithophane?this.lithophane:this.preview},stlColor(){return this.showLithophane?"#ffffff":"#0000ff"},stlDoubleSided(){return!this.showLithophane}},methods:{loadFile(e){var t,n;if(e.target instanceof HTMLInputElement)if(1===(null===(t=e.target)||void 0===t||null===(n=t.files)||void 0===n?void 0:n.length)){this.file=e.target.files[0];const t=new FileReader;t.onerror=e=>{alert(`Error reading file: ${e}`),this.file=null},t.onload=e=>{R(null!==e.target&&e.target.result instanceof ArrayBuffer),R(null!==this.wasm),this.imageData=new Uint8Array(e.target.result);const t=this.wasm.get_image_dimensions(this.imageData);this.imageWidth=t.width,this.imageHeight=t.height,t.free(),this.generatePreview(100)},t.readAsArrayBuffer(this.file)}else this.imageWidth=void 0,this.imageHeight=void 0},generateLithophane(){if(null!==this.file)if(this.imageData){R(null!==this.wasm);try{const e=this.wasm.generate_lithophane(this.xExpression,this.yExpression,this.zExpression,this.imageData,.5,3);this.lithophane=e,this.generated_expressions=[this.xExpression,this.yExpression,this.zExpression]}catch(e){console.error(e)}}else alert("file not read");else alert("select a file")},generatePreview(e){if(this.preview=null,null===this.wasm)return;const t=Math.ceil(Math.max(this.previewWidth,this.previewHeight)/e);try{this.preview=this.wasm.generate_preview(this.xExpression,this.yExpression,this.zExpression,this.previewWidth,this.previewHeight,t)}catch(n){console.error(n)}}},watch:{xExpression(){this.generatePreview(20)},yExpression(){this.generatePreview(20)},zExpression(){this.generatePreview(20)}},mounted(){n.e(694).then(n.bind(n,8694)).then((e=>{e.init(),this.wasm=e,this.generatePreview(100)})).catch(console.error)}});const fe=(0,u.Z)(he,[["render",g],["__scopeId","data-v-1ab8b212"]]);var me=fe;const ge=[{path:"/",name:"home",component:me},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,1676))}],ye=(0,h.p7)({history:(0,h.r5)(),routes:ge});var ve=ye;oe.Tme.DEFAULT_UP=new oe.Pa4(0,0,1),(0,i.ri)(c).use(ve).mount("body")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={id:i,loaded:!1,exports:{}};return e[i](s,s.exports,n),s.loaded=!0,s.exports}n.m=e,function(){var e="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",i="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=function(e){e&&!e.d&&(e.d=1,e.forEach((function(e){e.r--})),e.forEach((function(e){e.r--?e.r++:e()})))},s=function(n){return n.map((function(n){if(null!==n&&"object"===typeof n){if(n[e])return n;if(n.then){var s=[];s.d=0,n.then((function(e){o[t]=e,r(s)}),(function(e){o[i]=e,r(s)}));var o={};return o[e]=function(e){e(s)},o}}var a={};return a[e]=function(){},a[t]=n,a}))};n.a=function(n,o,a){var l;a&&((l=[]).d=1);var u,p,d,c=new Set,h=n.exports,f=new Promise((function(e,t){d=t,p=e}));f[t]=h,f[e]=function(e){l&&e(l),c.forEach(e),f["catch"]((function(){}))},n.exports=f,o((function(n){var r;u=s(n);var o=function(){return u.map((function(e){if(e[i])throw e[i];return e[t]}))},a=new Promise((function(t){r=function(){t(o)},r.r=0;var n=function(e){e!==l&&!c.has(e)&&(c.add(e),e&&!e.d&&(r.r++,e.push(r)))};u.map((function(t){t[e](n)}))}));return r.r?a:o()}),(function(e){e?d(f[i]=e):p(h),r(l)})),l&&(l.d=0)}}(),function(){var e=[];n.O=function(t,i,r,s){if(!i){var o=1/0;for(p=0;p<e.length;p++){i=e[p][0],r=e[p][1],s=e[p][2];for(var a=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(a=!1,s<o&&(o=s));if(a){e.splice(p--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[i,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{443:"9101f104",694:"df442e7d"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="lithophane-generator-vue:";n.l=function(i,r,s,o){if(e[i])e[i].push(r);else{var a,l;if(void 0!==s)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var d=u[p];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+s){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+s),a.src=i),e[i]=[r];var c=function(t,n){a.onerror=a.onload=null,clearTimeout(h);var r=e[i];if(delete e[i],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.v=function(e,t,i,r){var s=fetch(n.p+""+i+".module.wasm");return"function"===typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(s,r).then((function(t){return Object.assign(e,t.instance.exports)})):s.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,r)})).then((function(t){return Object.assign(e,t.instance.exports)}))}}(),function(){n.p="/"}(),function(){var e={826:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var s=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=s);var o=n.p+n.u(t),a=new Error,l=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,r[1](a)}};n.l(o,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,s,o=i[0],a=i[1],l=i[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var p=l(n)}for(t&&t(i);u<o.length;u++)s=o[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(p)},i=self["webpackChunklithophane_generator_vue"]=self["webpackChunklithophane_generator_vue"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4050)}));i=n.O(i)})();
//# sourceMappingURL=index.55b7f9c8.js.map