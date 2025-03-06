"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5720], {  

    57201:function(e, t, s){  
        s.d(t, {Z:function(){return d}});  
        var n = s(57437), a = s(2265), i = s(42586);  

        function d(e){  
            let { uploadEnabled: u, currentlyUploadedImages: t, onUploadRequested: o, onUploadedImagesChange: d } = e,  
                p = (0,a.useRef)(null),  
                f = (0,i.useTranslations)("Onboarding"),  
                h = t ? t[0] : void 0;  

            return (0,n.jsxs)("div", {  
                className: "relative flex flex-col items-center justify-center",  
                children: [  
                    (0,n.jsx)("div", { className: "absolute h-full w-full bg-black/60 transition-all duration-300 ".concat(u ? "z-0 opacity-0" : "z-40 opacity-100") }),  
                    (0,n.jsxs)("div", { className: "z-30 flex h-full w-full flex-col items-center",  
                        children: [  
                            h ?  
                            (0,n.jsxs)("div", { className: "relative flex justify-center gap-3 px-5",  
                                children: [  
                                    (0,n.jsx)("div", { className: "flex h-full flex-col items-center gap-3",  
                                        children: (0,n.jsxs)("label", { htmlFor: "upload-photo", className: "relative h-full",  
                                            children: [  
                                                (0,n.jsx)("img", { alt: "user pic", className: "h-[220px] rounded-[25px] object-contain", src: URL.createObjectURL(h) })  
                                            ]  
                                        })  
                                    }),  
                                    (0,n.jsx)("input", { type: "file", id: "upload-photo", ref: p, onChange: e => { d(e, 0) }, accept: "image/*", className: "hidden" })  
                                ]  
                            })  
                            :  
                            (0,n.jsx)("div", {  
                                children: (0,n.jsxs)("label", { htmlFor: "upload-photo", className: "relative flex aspect-square h-[220px] w-full flex-col items-center justify-center gap-[10px]",  
                                    children: [  
                                        (0,n.jsx)("img", { alt: "upload", width: "220px", height: "220px", src: "/images/onboarding/upload-photo-box.webp", className: "absolute z-0 hover:rounded-[20px] hover:bg-white hover:bg-opacity-10" }),  
                                        (0,n.jsx)("span", { className: "px-5 text-xs font-bold text-white underline", children: f("upload_photo_label") })  
                                    ]  
                                })  
                            }),  
                            (0,n.jsx)("input", { type: "file", id: "upload-photo", ref: p, onChange: e => { d(e, 0) }, accept: "image/*", className: "hidden" })  
                        ]  
                    })  
                ]  
            })  
        }  
    }  
}]);  
    57202:function(e, t, s){  
        s.d(t, {Z:function(){return u}});  
        var n = s(57437), a = s(2265), i = s(42586);  

        function u(e){  
            let { numberPhotosUpload: r, currentlyUploadedImages: t, onUploadedImagesChange: d } = e,  
                p = (0,a.useRef)(null),  
                f = (0,i.useTranslations)("Onboarding");  

            return (0,n.jsxs)("div", {  
                className: "relative flex w-full flex-col items-center justify-center",  
                children: [  
                    (0,n.jsxs)("div", { className: "relative flex h-fit w-full flex-col",  
                        children: [  
                            (0,n.jsx)("div", { className: "z-20 grid min-h-[200px] w-full grid-cols-3 items-center gap-[5px] overflow-y-scroll px-5 pb-5",  
                                children: [...Array(r)].map((e, l) => {  
                                    let t = t[l];  
                                    return t ?  
                                        (0,n.jsxs)("div", { children: [  
                                            (0,n.jsx)("div", { className: "relative flex aspect-square flex-1 justify-center",  
                                                children: (0,n.jsx)("div", { className: "flex h-full w-full flex-col items-center",  
                                                    children: (0,n.jsxs)("label", { htmlFor: "".concat(l), className: "relative h-full w-full",  
                                                        children: [  
                                                            (0,n.jsx)("img", { alt: "user pic", className: "h-full w-full rounded-[10px] object-cover", src: URL.createObjectURL(t) })  
                                                        ]  
                                                    })  
                                                })  
                                            }),  
                                            (0,n.jsx)("input", { type: "file", id: "".concat(l), ref: p, onChange: e => { d(e, Number(e.target.id)) }, accept: "image/*", className: "hidden", multiple: !1 })  
                                        ] }, t.name + t.type + l)  
                                    :  
                                        (0,n.jsxs)("div", { children: [  
                                            (0,n.jsxs)("label", { htmlFor: "".concat(l), className: "relative flex aspect-square flex-1 flex-col items-center justify-center bg-gray-500",  
                                                children: [  
                                                    (0,n.jsx)("img", { alt: "not found", src: "/images/onboarding/upload-photo-box.webp", className: "absolute z-0 object-cover" })  
                                                ]  
                                            }),  
                                            (0,n.jsx)("input", { type: "file", id: "".concat(l), ref: p, onChange: d, accept: "image/*", className: "hidden", multiple: !0 })  
                                        ] }, l)  
                                })  
                            })  
                        ]  
                    })  
                ]  
            })  
        }  
    }  
