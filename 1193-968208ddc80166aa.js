"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1193],{75832:function(t,e,a){a.d(e,{h:function(){return n}});let n=a(64906).Z.create()},65113:function(t,e,a){a.d(e,{h:function(){return n.h}});var n=a(75832)},27161:function(t,e,a){a.d(e,{BY:function(){return o},Cl:function(){return d},IL:function(){return c},Ix:function(){return p},Ml:function(){return h},N5:function(){return i},SW:function(){return x},U9:function(){return m},Wv:function(){return v},_X:function(){return y},d$:function(){return b},ex:function(){return g},kW:function(){return k},pB:function(){return u},qJ:function(){return f}});var n,r,o,i,s=a(65113);let l="https://api.remini.ai/v1/web-onboarding",c={config:{jobType:"retake_training",learningRate:"1.5e-6",batchSize:2},gpuType:"t4"},u={generation:{config:{jobType:"ip_adapter",numberOfImagesToGenerate:1,numberOfBestImagesToSave:1,seed:1},gpuType:"t4",handlerType:"ipadapter"},promptsPerTask:2,nPrompts:3};async function d(t,e,a){return s.h.post("".concat(l,"/photo-tasks/models"),e,{headers:{Authorization:"Bearer ".concat(t.authorization.token)}}).catch(t=>{throw a.logEvent({event:"processing_request_failed"}),t})}async function p(t,e,a,n){return fetch(t,{method:"PUT",headers:e,body:a}).catch(t=>{throw n.logEvent({event:"processing_request_failed"}),t})}async function h(t,e,a,n){return s.h.post("".concat(l,"/photo-tasks/models/").concat(t),a,{headers:{Authorization:"Bearer ".concat(e.authorization.token)}}).catch(t=>{throw n.logEvent({event:"processing_request_failed"}),t})}async function m(t,e,a){return s.h.post("".concat(l,"/photo-tasks/pack-photo"),e,{headers:{Authorization:"Bearer ".concat(t.authorization.token)}}).catch(t=>{throw a.logEvent({event:"processing_request_failed"}),t})}async function k(t,e,a){return s.h.get("".concat(l,"/photo-tasks/pack-photo/").concat(t),{headers:{Authorization:"Bearer ".concat(e.authorization.token)}}).catch(t=>{throw a.logEvent({event:"processing_request_failed"}),t})}async function f(t,e,a){return s.h.post("".concat(l,"/tasks"),{...e,aiFeature:{...e.aiFeature}},{headers:{Authorization:"Bearer ".concat(t.authorization.token)}}).catch(t=>{throw a.logEvent({event:"processing_request_failed"}),t})}async function v(t,e,a,n){return s.h.post("".concat(l,"/tasks/").concat(t,"/process"),{useTokens:n},{headers:{Authorization:"Bearer ".concat(e.authorization.token)}}).catch(t=>{throw a.logEvent({event:"processing_request_failed"}),t})}async function y(t,e,a){return s.h.get("".concat(l,"/tasks/").concat(t),{headers:{Authorization:"Bearer ".concat(e.authorization.token)}}).catch(t=>{throw a.logEvent({event:"processing_request_failed"}),t})}async function g(t,e,a){return s.h.post("".concat(l,"/bulk-upload"),e,{headers:{Authorization:"Bearer ".concat(t.authorization.token)}}).catch(t=>{throw a.logEvent({event:"processing_request_failed"}),t})}async function x(t,e){return s.h.put("".concat(l,"/otp/").concat(t),void 0,{headers:{Authorization:"Bearer ".concat(e.authorization.token)}})}async function b(t,e,a){return s.h.post("".concat(l,"/otp/").concat(t,"/send-email"),a,{headers:{Authorization:"Bearer ".concat(e.authorization.token)}})}(n=o||(o={})).Standard="standard",n.Trainingless="trainingless",(r=i||(i={})).Processing="processing",r.Submitted="submitted",r.Completed="completed",r.Exported="exported",r.Failed="failed"},81060:function(t,e,a){a.d(e,{L:function(){return r},Z:function(){return v}});var n,r,o=a(2265),i=a(99376),s=a(68989),l=a(27161),c=a(37927),u=a(17461),d=a(78132),p=a(83405),h=a(15720),m=a(53959),k=a(50605),f=a(96434).Buffer;(n=r||(r={}))[n.TaskNotFound=0]="TaskNotFound",n[n.GenerationFailed=1]="GenerationFailed";var v=()=>{let t=(0,i.useSearchParams)(),e=(0,u.m)(),a=(0,o.useRef)(),n=(0,d.r)(),r=(0,h.l)(),{gender:v}=(0,m.L)(),y=(0,o.useCallback)(()=>{a.current=void 0},[]),g=(0,o.useCallback)(()=>{a.current&&clearInterval(a.current)},[]),x=(0,o.useMemo)(()=>{let e=t.get("access_token");return{authorization:{token:null!=e?e:""}}},[t]),b=(0,o.useCallback)(async(t,e,a,n,o)=>{try{var i,s,c,u;let d;switch((d="transformation"===t?await (0,l._X)(e,x,r):await (0,l.kW)(e,x,r)).data.status){case l.N5.Failed:r.logEvent({event:"processing_failed",taskId:e,taskType:t}),n(1);break;case l.N5.Exported:case l.N5.Completed:(r.logEvent({event:"processing_completed",taskId:e,taskType:t}),u=d.data,"photoTaskId"in u)?d.data.results&&a(d.data.results.map(t=>t.uri)):(null===(i=d.data.result)||void 0===i?void 0:i.outputs)&&(null===(s=d.data.result)||void 0===s?void 0:s.outputs[0])&&a(d.data.result.outputs.map(t=>t.url),d.data.result.inputUrl);break;case l.N5.Processing:case l.N5.Submitted:o("estimatedTimeRemaining"in d.data&&null!==(c=d.data.estimatedTimeRemaining)&&void 0!==c?c:0)}}catch(t){n(0)}},[x,r]),w=(0,o.useCallback)((t,e,n,r,o)=>{a.current||(a.current=setInterval(()=>{b(t,e,(t,e)=>{g(),n(t,e)},t=>{g(),r(t)},t=>{o(t)})},1e3))},[b,g]),_=(0,o.useCallback)(async t=>{let e=[],a=new Map,n=Object.values(t).map(async t=>{let n=(0,s.createHash)("md5"),r=await t.arrayBuffer(),o=f.from(r);n.update(o);let i=n.digest("base64");e.push({md5:i,contentType:t.type}),a.set(i,t)});return await Promise.all(n),{inputImageInfos:e,md5ToImage:a}},[]),E=(0,o.useCallback)(async(t,e)=>{let a=[];for(let o of t){var n;let t=e.get(null!==(n=o.uploadHeaders["Content-MD5"])&&void 0!==n?n:"");t&&a.push((0,l.Ix)(o.uploadUri,o.uploadHeaders,t,r))}await Promise.all(a)},[r]),T=(0,o.useCallback)(async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.BY.Trainingless;r.logEvent({event:"processing_requested",taskType:"generation"});try{let{inputImageInfos:a,md5ToImage:n}=await _(t),o=await (0,l.Cl)(x,{images:a,modelType:e},r);return await E(o.data.images,n),o.data.photoModelId}catch(t){return}},[_,x,E,r]),I=(0,o.useCallback)(async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k.Y0.Other,o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0;try{let d;let h=1,m=null==e?void 0:e.flowVariant;if(m&&(m===p.RJ.AIHair||m===p.RJ.Headshot)){let{presetsArray:e,outputImagesNumber:s}=(0,c.K_)(n,m,r),l=e[null!=a?a:k.Y0.Other];d=(Array.isArray(l)?l:i&&void 0!==l[i]?l[i]:o&&void 0!==l[o]?l[o]:l.default).map(e=>({presetId:e,photoModelId:t})),h=s}else{var u;d=[{presetId:null!==(u=(0,c.wJ)(n,e))&&void 0!==u?u:"webonb_old",photoModelId:t}]}let f={aiGenerationConfig:l.pB,presets:d,nOutputImages:s||h},v=await (0,l.U9)(x,f,r);return r.logEvent({event:"processing_started",taskId:v.data.photoTaskId,taskType:"generation"}),v.data.photoTaskId}catch(t){return}},[e,x,n,r]),B=(0,o.useCallback)(async t=>{try{let e={aiTrainingConfig:l.IL};await (0,l.Ml)(t,x,e,r)}catch(t){return}},[x,r]);return{startImageGenerationProcess:(0,o.useCallback)(async(t,e,a,n)=>{if(t)try{let o=await T(t);if(!o)return;await B(o);let i=await I(o,v,e,a,n);if(!i)return;if((await (0,l.kW)(i,x,r)).data.status===l.N5.Failed){r.logEvent({event:"processing_failed",taskId:i,taskType:"generation"});return}return i}catch(t){return}},[T,B,I,r,v,x]),startImageTransformationProcess:(0,o.useCallback)(async(t,a,n)=>{if(t){r.logEvent({event:"processing_requested",taskType:"transformation"});try{var o,i;let{inputImageInfos:s,md5ToImage:c}=await _([t]),u=null===(o=s[0])||void 0===o?void 0:o.contentType,d=null===(i=s[0])||void 0===i?void 0:i.md5;if(!u||!d){r.logAssertionFailure("Failed to compute user image info");return}let h="multi-tool"===a.tool?{type:a.tool,pipelines:[a.multiToolPipeline]}:{type:a.tool,id:a.filterId,multiOptions:a.stylizationOptions},m={imageContentType:u,imageMd5:d,aiFeature:h};if((null==e?void 0:e.flowVariant)===p.RJ.ReminiWeb){let t=(await (0,l.ex)(x,m,r)).data;return await E([{uploadUri:t.uploadUrl,uploadHeaders:t.uploadHeaders}],c),{taskId:t.taskId,bulkUploadId:t.bulkUploadId}}let k=(await (0,l.qJ)(x,m,r)).data;return await E([{uploadUri:k.uploadUrl,uploadHeaders:k.uploadHeaders}],c),await (0,l.Wv)(k.taskId,x,r,n),r.logEvent({event:"processing_started",taskId:k.taskId,taskType:"transformation"}),{taskId:k.taskId}}catch(t){return}}},[null==e?void 0:e.flowVariant,r,_,x,E]),startPolling:w,stopPolling:g,getGeneratedImage:b,submitAndUploadImages:T,processUploadedImages:B,generateImages:I,refreshPolling:y}}},53959:function(t,e,a){a.d(e,{L:function(){return i}});var n=a(97094),r=a(89134),o=a(50605);let i=(0,n.Ue)()((0,r.tJ)(t=>({isStoreLoaded:!1,accessToken:void 0,me:void 0,gender:o.Y0.Other,email:"",name:"",password:"",emailReminderEnabled:!1,hasSelectedPeriodicity:!1,lastPaymentMethod:"",invoiceRequested:!1,setStoreLoaded:e=>t(()=>({isStoreLoaded:e})),setAccessToken:e=>t(()=>({accessToken:e})),setMe:e=>t(()=>({me:e})),setGender:e=>t(()=>({gender:e})),setEmail:e=>t(()=>({email:e.toLowerCase()})),setName:e=>t(()=>({name:e})),setPassword:e=>t(()=>({password:e})),setEmailReminderEnabled:e=>t(()=>({emailReminderEnabled:e})),setHasSelectedPeriodicity:e=>t(()=>({hasSelectedPeriodicity:e})),setLastPaymentMethod:e=>t(()=>({lastPaymentMethod:e})),setInvoiceRequested:e=>t(()=>({invoiceRequested:e}))}),{name:"user-store",onRehydrateStorage:()=>t=>{(null==t?void 0:t.setStoreLoaded)&&(null==t||t.setStoreLoaded(!0))}}))},97327:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(57437),r=a(7882),o=a.n(r),i=JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.21","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":65,"w":16,"h":16,"nm":"Loader_loop_white_16x16","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":2,"ty":4,"nm":"red","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.492],"y":[0.847]},"o":{"x":[0.515],"y":[0.155]},"t":0,"s":[0]},{"t":65,"s":[720]}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\');"},"p":{"a":0,"k":[7.875,8,0],"ix":2},"a":{"a":0,"k":[-0.125,-2.125,0],"ix":1},"s":{"a":0,"k":[1.7,1.7,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[672.751,672.751],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.815],"y":[1]},"o":{"x":[0.707],"y":[0]},"t":0,"s":[13]},{"i":{"x":[0.399],"y":[1]},"o":{"x":[0.199],"y":[0]},"t":33,"s":[69]},{"t":65,"s":[13]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\');"},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":193,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.125,-2.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":66,"st":0,"bm":0}],"markers":[]}'),s=JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.21","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":65,"w":16,"h":16,"nm":"Loader_loop_black_16x16","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"red","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.492],"y":[0.847]},"o":{"x":[0.515],"y":[0.155]},"t":0,"s":[0]},{"t":65,"s":[720]}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\');"},"p":{"a":0,"k":[7.875,8,0],"ix":2},"a":{"a":0,"k":[-0.125,-2.125,0],"ix":1},"s":{"a":0,"k":[1.7,1.7,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[672.751,672.751],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.815],"y":[1]},"o":{"x":[0.707],"y":[0]},"t":0,"s":[13]},{"i":{"x":[0.399],"y":[1]},"o":{"x":[0.199],"y":[0]},"t":33,"s":[69]},{"t":65,"s":[13]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'cycle\');"},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":193,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.125,-2.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":66,"st":0,"bm":0}],"markers":[]}');function l(t){let{blackLoading:e,className:a}=t;return(0,n.jsx)("div",{className:"".concat(a),children:(0,n.jsx)(o(),{animationData:e?s:i,loop:!0})})}},19438:function(t,e,a){a.d(e,{f:function(){return o}});var n=a(57437),r=a(97327);function o(t){let{isLoading:e,bgOpacity:a=70,className:o}=t;return e?(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black ".concat(o),style:{opacity:a/100},children:(0,n.jsx)(r.Z,{className:"h-8 w-8"})}):null}},93486:function(t,e,a){a.d(e,{Z:function(){return r}});var n=a(57437);function r(t){let{className:e}=t;return(0,n.jsx)("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"#9BEBC3",xmlns:"http://www.w3.org/2000/svg",className:e,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5ZM7.27268 15.2273L8.33334 16.2879L9.394 15.2273L16.4416 8.17967L14.3203 6.05834L8.33334 12.0453L5.87019 9.58216L3.74887 11.7035L7.27268 15.2273Z"})})}}}]);