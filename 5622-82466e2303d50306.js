"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5622],{  

    22244:function(e,l,t){  
        t.d(l,{Z:function(){return d}});  
        var s=t(57437), a=t(18199), i=t(37151), n=t(2265), c=t(42586), o=t(33588);  

        function r(e){  
            let l=(0,c.useTranslations)();  
            return(0,s.jsxs)("div",{className:"mx-auto flex w-full max-w-415 flex-col items-center ".concat(e.className),  
                children:[  
                    (0,s.jsx)("div",{className:"mb-1 flex h-[15px] flex-col items-center",children:(0,s.jsx)(o.Z,{})}),  
                    (0,s.jsxs)("div",{className:"relative flex h-fit justify-between gap-3 px-5",  
                        children:[  
                            (0,s.jsxs)("div",{className:"flex h-fit w-full flex-1 flex-col items-center gap-3",  
                                children:[  
                                    (0,s.jsx)("img",{alt:"user pic",className:"h-full w-full rounded-[25px] object-contain",src:e.beforeSrc}),  
                                    (0,s.jsx)("div",{className:"text text-xs font-bold text-white",  
                                        children:(0,s.jsx)("div",{className:"h-fit w-fit rounded-full bg-white bg-opacity-10 px-3 py-2",  
                                            children:l("Onboarding.image_upload_before")})  
                                    })  
                                ]  
                            }),  
                            (0,s.jsxs)("div",{className:"flex flex-1 flex-col items-center gap-3",  
                                children:[  
                                    (0,s.jsxs)("div",{className:"relative h-fit w-full flex-1",  
                                        children:[  
                                            (0,s.jsx)("img",{alt:"generated output",className:"h-full w-full rounded-[25px] object-contain",src:e.afterSrc})  
                                        ]  
                                    }),  
                                    (0,s.jsx)("div",{className:"text text-xs font-bold text-white",  
                                        children:(0,s.jsx)("div",{className:"h-fit w-fit rounded-full bg-white bg-opacity-10 px-3 py-2",  
                                            children:l("Onboarding.image_upload_after")})  
                                    })  
                                ]  
                            })  
                        ]  
                    })  
                ]  
            })  
        }  
        function d(e){  
            let { currentlyUploadedImages:t, onUploadRequested:o, onUploadedImagesChange:d, uploadEnabled:u } = e,  
                p = (0,n.useRef)(null),  
                f = (0,c.useTranslations)("Onboarding"),  
                h = t ? t[0] : void 0;  

            return(0,s.jsxs)("div",{className:"relative flex flex-col items-center justify-center",  
                children:[  
                    (0,s.jsx)("div",{className:"absolute h-full w-full bg-black/60 transition-all duration-300 ".concat(u ? "z-0 opacity-0" : "z-40 opacity-100")}),  
                    (0,s.jsxs)("div",{className:"z-30 flex h-full w-full flex-col items-center",  
                        children:[  
                            h ?  
                            (0,s.jsxs)("div",{className:"relative flex justify-center gap-3 px-5",  
                                children:[  
                                    (0,s.jsx)("div",{className:"flex h-full flex-col items-center gap-3",  
                                        children:(0,s.jsxs)("label",{htmlFor:"upload-photo",className:"relative h-full",  
                                            children:[  
                                                (0,s.jsx)("img",{alt:"user pic",className:"h-[220px] rounded-[25px] object-contain",src:URL.createObjectURL(h)}),  
                                            ]  
                                        })  
                                    }),  
                                    (0,s.jsx)("input",{type:"file",id:"upload-photo",ref:p,onChange:e=>{d(e,0)},accept:"image/*",className:"hidden"})  
                                ]  
                            })  
                            :  
                            (0,s.jsx)("div",{  
                                children:(0,s.jsxs)("label",{htmlFor:"upload-photo",className:"relative flex aspect-square h-[220px] w-full flex-col items-center justify-center gap-[10px]",  
                                    children:[  
                                        (0,s.jsx)("img",{alt:"upload",width:"220px",height:"220px",src:"/images/onboarding/upload-photo-box.webp",className:"absolute z-0 hover:rounded-[20px] hover:bg-white hover:bg-opacity-10"}),  
                                        (0,s.jsx)("span",{className:"px-5 text-xs font-bold text-white underline",children:f("upload_photo_label")})  
                                    ]  
                                })  
                            }),  
                            (0,s.jsx)("input",{type:"file",id:"upload-photo",ref:p,onChange:e=>{d(e,0)},accept:"image/*",className:"hidden"})  
                        ]  
                    })  
                ]  
            })  
        }  
    }  
}]);  
