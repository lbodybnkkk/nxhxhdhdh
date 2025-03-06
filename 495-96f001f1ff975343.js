"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1193],{75832:function(t,e,a){
    a.d(e,{h:function(){return n}});
    let n=a(64906).Z.create()},
65113:function(t,e,a){
    a.d(e,{h:function(){return n.h}});
    var n=a(75832)},
27161:function(t,e,a){
    a.d(e,{BY:function(){return o},Cl:function(){return d},IL:function(){return c},Ix:function(){return p},
    Ml:function(){return h},N5:function(){return i},SW:function(){return x},U9:function(){return m},
    Wv:function(){return v},_X:function(){return y},d$:function(){return b},ex:function(){return g},
    kW:function(){return k},pB:function(){return u},qJ:function(){return f}});

    var n,r,o,i,s=a(65113);
    let l="https://api.remini.ai/v1/web-onboarding",
    c={config:{jobType:"retake_training",learningRate:"1.5e-6",batchSize:2},gpuType:"t4"},
    u={generation:{config:{jobType:"ip_adapter",numberOfImagesToGenerate:1,numberOfBestImagesToSave:1,seed:1},
    gpuType:"t4",handlerType:"ipadapter"},promptsPerTask:2,nPrompts:3};

    async function d(t,e,a){
        return s.h.post("".concat(l,"/photo-tasks/models"),e).catch(t=>{
            throw a.logEvent({event:"processing_request_failed"}),t})}

    async function p(t,e,a,n){
        return fetch(t,{method:"PUT",headers:e,body:a}).catch(t=>{
            throw n.logEvent({event:"processing_request_failed"}),t})}

    async function h(t,e,a,n){
        return s.h.post("".concat(l,"/photo-tasks/models/").concat(t),a).catch(t=>{
            throw n.logEvent({event:"processing_request_failed"}),t})}

    async function m(t,e,a){
        return s.h.post("".concat(l,"/photo-tasks/pack-photo"),e).catch(t=>{
            throw a.logEvent({event:"processing_request_failed"}),t})}

    async function k(t,e,a){
        return s.h.get("".concat(l,"/photo-tasks/pack-photo/").concat(t)).catch(t=>{
            throw a.logEvent({event:"processing_request_failed"}),t})}

    async function f(t,e,a){
        return s.h.post("".concat(l,"/tasks"),{...e,aiFeature:{...e.aiFeature}}).catch(t=>{
            throw a.logEvent({event:"processing_request_failed"}),t})}

    async function v(t,e,a,n){
        return s.h.post("".concat(l,"/tasks/").concat(t,"/process"),{useTokens:n}).catch(t=>{
            throw a.logEvent({event:"processing_request_failed"}),t})}

    async function y(t,e,a){
        return s.h.get("".concat(l,"/tasks/").concat(t)).catch(t=>{
            throw a.logEvent({event:"processing_request_failed"}),t})}

    async function g(t,e,a){
        return s.h.post("".concat(l,"/bulk-upload"),e).catch(t=>{
            throw a.logEvent({event:"processing_request_failed"}),t})}

    async function x(t,e){
        return s.h.put("".concat(l,"/otp/").concat(t))}

    async function b(t,e,a){
        return s.h.post("".concat(l,"/otp/").concat(t,"/send-email"),a)}
}}]);
81060:function(t,e,a){
    a.d(e,{L:function(){return r},Z:function(){return v}});
    var n,r,o=a(2265),i=a(99376),s=a(68989),l=a(27161),c=a(37927),
    u=a(17461),d=a(78132),p=a(83405),h=a(15720),m=a(53959),k=a(50605),
    f=a(96434).Buffer;

    (n=r||(r={}))[n.TaskNotFound=0]="TaskNotFound",
    n[n.GenerationFailed=1]="GenerationFailed";

    var v=()=>{
        let t=(0,i.useSearchParams)(),
        e=(0,u.m)(),
        a=(0,o.useRef)(),
        n=(0,d.r)(),
        r=(0,h.l)(),
        {gender:v}=(0,m.L)(),
        y=(0,o.useCallback)(()=>{a.current=void 0},[]),
        g=(0,o.useCallback)(()=>{a.current&&clearInterval(a.current)},[]),
        x=(0,o.useMemo)(()=>{let e=t.get("access_token");return{authorization:{token:null!=e?e:""}}},[t]);

        async function b(t,e,a,n,o){
            try {
                var i,s,c,u;
                let d;
                switch((d="transformation"===t?await (0,l._X)(e,x,r):await (0,l.kW)(e,x,r)).data.status){
                    case l.N5.Failed:
                        r.logEvent({event:"processing_failed",taskId:e,taskType:t}),n(1);
                        break;
                    case l.N5.Exported:
                    case l.N5.Completed:
                        (r.logEvent({event:"processing_completed",taskId:e,taskType:t}),u=d.data,"photoTaskId"in u)?
                        d.data.results&&a(d.data.results.map(t=>t.uri)):(null===(i=d.data.result)||void 0===i?void 0:i.outputs)&&
                        (null===(s=d.data.result)||void 0===s?void 0:s.outputs[0])&&a(d.data.result.outputs.map(t=>t.url),d.data.result.inputUrl);
                        break;
                    case l.N5.Processing:
                    case l.N5.Submitted:
                        o("estimatedTimeRemaining"in d.data&&null!==(c=d.data.estimatedTimeRemaining)&&void 0!==c?c:0)}
            } catch (t) {n(0)}
        }

        let w=(0,o.useCallback)((t,e,n,r,o)=>{
            a.current||(a.current=setInterval(()=>{
                b(t,e,(t,e)=>{g(),n(t,e)},t=>{g(),r(t)},t=>{o(t)})},1e3))
        },[b,g]);

        return {startPolling:w, stopPolling:g, getGeneratedImage:b}
    }
}}]);
