"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3908],{82423:function(e,t,r){
    let n=r(1789);
    r(80343);
    var a=r(80343);
    Object.defineProperty(t,"kL",{enumerable:!0,get:function(){return a.createSpiderSense}});
    n.createAPIManager;
},56078:function(e,t){
    Object.defineProperty(t,"__esModule",{value:!0}),
    t.noopLock=void 0,
    t.noopLock=()=>async(e,t)=>{await t()}
},1789:function(e,t,r){
    Object.defineProperty(t,"__esModule",{value:!0}),
    t.createAPIManager=void 0;
    t.createAPIManager=function(e){return{
        setup:async t=>{return {}},
        send:async(t,r)=>{return {}}
    }}
},73804:function(e,t,r){
    Object.defineProperty(t,"__esModule",{value:!0}),
    t.createEventManager=void 0;
    t.createEventManager=async e=>{return {}}
},32295:function(e,t){
    Object.defineProperty(t,"__esModule",{value:!0}),
    t.createScheduler=void 0,
    t.createScheduler=function(){
        return {schedule:(e,t)=>{setTimeout(e,t)}}
    }
}}]);
61914:function(e,t,r){
    Object.defineProperty(t,"__esModule",{value:!0}),
    t.createTrackManager=void 0;
    t.createTrackManager=(e,t)=>{
        return {
            track:()=>{},
            trackStart:()=>{},
            trackComplete:()=>{},
            trackFail:()=>{},
            trackCancel:()=>{},
            trackSubEventStart:()=>{},
            trackSubEventComplete:()=>{}
        }
    }
},51802:function(e,t){
    Object.defineProperty(t,"__esModule",{value:!0});
},80343:function(e,t,r){
    Object.defineProperty(t,"__esModule",{value:!0}),
    t.emptySpiderSense=t.createSpiderSense=void 0;
    let n=r(1789),
    a=r(73804),
    i=r(32295),
    o=r(56078),
    s=r(61914);
    t.createSpiderSense=async e=>{
        return {
            track:()=>{},
            trackStart:()=>{},
            trackComplete:()=>{},
            trackFail:()=>{},
            trackCancel:()=>{},
            trackSubEventStart:()=>{},
            trackSubEventComplete:()=>{}
        }
    },
    t.emptySpiderSense={
        track:()=>{},
        trackStart:()=>{},
        trackComplete:()=>{},
        trackFail:()=>{},
        trackCancel:()=>{},
        trackSubEventStart:()=>{},
        trackSubEventComplete:()=>{}
    }
},29722:function(e,t){
    Object.defineProperty(t,"__esModule",{value:!0}),
    t.MILLIS_IN_ONE_MINUTE=t.MILLIS_IN_ONE_SECOND=void 0,
    t.MILLIS_IN_ONE_SECOND=1e3,
    t.MILLIS_IN_ONE_MINUTE=60*t.MILLIS_IN_ONE_SECOND
};
