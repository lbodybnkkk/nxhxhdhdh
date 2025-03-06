(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6816], {
    25961: function (t, e, n) {
        Promise.resolve().then(n.bind(n, 75095));
    },
    75095: function (t, e, n) {
        "use strict";
        n.r(e);
        n.d(e, { default: function () { return u } });
        var i = n(57437),
            r = n(2265),
            o = n(24656),
            s = n(56011),
            a = n(99376),
            l = n(15720),
            c = n(36484);

        function u(t) {
            let { error: e, reset: n } = t,
                u = (0, l.l)(),
                d = (0, c.T)(),
                f = (0, a.useSearchParams)(),
                p = (0, a.usePathname)();
            
            return (0, r.useEffect)(() => {
                console.error("Error occurred:", e.message);
            }, [e]),

            (0, i.jsxs)("div", {
                className: "flex h-[calc(100dvh)] w-full flex-col items-center",
                children: [
                    (0, i.jsx)("div", {
                        className: "sticky z-40 flex w-full flex-col items-center bg-black p-5",
                        children: (0, i.jsx)(s.Z, { backButton: !1 })
                    }),
                    (0, i.jsx)(o.J, { onTryAgain: () => n(), onClose: () => d.push("/?" + f) })
                ]
            });
        }
    }
}]);
