"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4906],{  

    12345:function(e,t,r){  
        let n=r(67890);  
        r(54321);  
        var a=r(54321);  
        Object.defineProperty(t,"kL",{enumerable:!0,get:function(){return a.createFeature}});  
    },  

    67890:function(e,t){  
        Object.defineProperty(t,"__esModule",{value:!0}),  
        t.noopFunction=void 0,  
        t.noopFunction=()=>async(e,t)=>{await t()}  
    },  

    54321:function(e,t,r){  
        Object.defineProperty(t,"__esModule",{value:!0}),  
        t.createFeature=void 0;  
        t.createFeature=function(e){  
            return {  
                setup:async t=>{return {}},  
                process:async(t,r)=>{return {}}  
            }  
        }  
    },  

    98765:function(e,t,r){  
        Object.defineProperty(t,"__esModule",{value:!0}),  
        t.createEventManager=void 0;  
        t.createEventManager=async e=>{return {}}  
    },  

    11223:function(e,t){  
        Object.defineProperty(t,"__esModule",{value:!0}),  
        t.createScheduler=void 0,  
        t.createScheduler=function(){  
            return {schedule:(e,t)=>{setTimeout(e,t)}}  
        }  
    }  

}]);  
    33445:function(e,t,r){  
        Object.defineProperty(t,"__esModule",{value:!0}),  
        t.createFeatureManager=void 0;  
        t.createFeatureManager=(e,t)=>{  
            return {  
                initialize:()=>{},  
                execute:()=>{},  
                finalize:()=>{}  
            }  
        }  
    },  

    55678:function(e,t){  
        Object.defineProperty(t,"__esModule",{value:!0}),  
        t.createHandler=void 0;  
        t.createHandler=function(){  
            return {  
                handleRequest:()=>{},  
                handleResponse:()=>{}  
            }  
        }  
    },  

    99887:function(e,t,r){  
        Object.defineProperty(t,"__esModule",{value:!0}),  
        t.emptyFeature=t.createFeature=void 0;  
        let n=r(54321),  
        a=r(98765),  
        i=r(11223),  
        o=r(67890),  
        s=r(33445);  
        t.createFeature=async e=>{  
            return {  
                execute:()=>{},  
                finalize:()=>{},  
                cleanup:()=>{}  
            }  
        },  
        t.emptyFeature={  
            execute:()=>{},  
            finalize:()=>{},  
            cleanup:()=>{}  
        }  
    },  

    76543:function(e,t){  
        Object.defineProperty(t,"__esModule",{value:!0}),  
        t.CONSTANT_ONE=t.CONSTANT_TWO=void 0,  
        t.CONSTANT_ONE=1000,  
        t.CONSTANT_TWO=60000  
    }  

}]);  
