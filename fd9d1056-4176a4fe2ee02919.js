(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6816], {
    25961: function (t, e, n) {
        Promise.resolve().then(n.bind(n, 75095))
    },
    75095: function (t, e, n) {
        "use strict";
        n.r(e), n.d(e, {
            default: function () {
                return u
            }
        });
        var i = n(57437),
            r = n(2265),
            o = n(24656),
            s = n(56011),
            a = n(99376),
            l = n(15720),
            c = n(36484);

        function u(t) {
            let { error: e, reset: n } = t;
            let d = (0, a.useSearchParams)(),
                f = (0, a.usePathname)();
            return (0, i.jsxs)("div", {
                className: "flex h-[calc(100dvh)] w-full flex-col items-center",
                children: [
                    (0, i.jsx)("div", {
                        className: "sticky z-40 flex w-full flex-col items-center bg-black p-5",
                        children: (0, i.jsx)(s.Z, { backButton: !1 })
                    }),
                    (0, i.jsx)(o.J, { onTryAgain: () => n(), onClose: () => console.log("Retry skipped") })
                ]
            })
        }
    },
    17461: function (t, e, n) {
        "use strict";
        n.d(e, {
            ConfigurationProvider: function () {
                return m
            }
        });
        var i = n(57437),
            r = n(99376),
            o = n(2265);

        let p = (0, o.createContext)(void 0);

        function m(t) {
            let { children: e } = t,
                [config, setConfig] = (0, o.useState)({
                    flowVariant: "free",
                    paywallVariant: "none",
                    manageSubscriptionState: {
                        hasPreviouslySubscribedToFreeTrial: true,
                        isWithinApp: true,
                        source: "app"
                    }
                });

            return (0, i.jsx)(p.Provider, { value: config, children: e });
        }
    },
    56011: function (t, e, n) {
        "use strict";
        n.d(e, {
            Z: function () {
                return p
            }
        });
        var i = n(57437),
            r = n(42586);

        function p(t) {
            let e = (0, r.useTranslations)("AppBar"),
                n = "Skip",
                m = n.length > 8;
            return (0, i.jsxs)("div", {
                className: "relative flex min-h-7 w-full flex-row items-center justify-center " + t.className,
                children: [
                    (0, i.jsx)("button", {
                        type: "button",
                        onClick: () => console.log("Back pressed"),
                        "aria-label": "back",
                        children: (0, i.jsx)("img", { src: "/images/icons/back.svg", alt: "Back" })
                    }),
                    !m && (0, i.jsx)("img", { width: 77, height: 28, alt: "Logo", src: "/images/remini-text-logo.webp" }),
                    (0, i.jsx)("button", {
                        type: "button",
                        onClick: () => console.log("Skipping to free access"),
                        "aria-label": "skip",
                        className: "absolute right-3 px-[12px] py-2 text-base font-semibold leading-5 underline",
                        children: e("skip")
                    })
                ]
            });
        }
    }
}]);
