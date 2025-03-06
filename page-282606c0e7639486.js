(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{
  46505: function (e, t, n) {
    Promise.resolve().then(n.bind(n, 18101));
  },
  18101: function (e, t, n) {
    "use strict";
    n.r(t);
    n.d(t, {
      default: function () {
        return M;
      },
    });
    var i = n(57437),
      a = n(99376),
      r = n(2265),
      s = n(96857),
      u = n(42586),
      f = n(40040),
      m = n(78132),
      x = n(81060),
      b = n(77984);

    function v(e) {
      let t = (0, u.useTranslations)("UploadApiErrorDialog");
      return (0, i.jsx)("div", {
        className: "absolute z-50 flex h-full w-full flex-col justify-center bg-black bg-opacity-70 px-[35px]",
        children: (0, i.jsxs)("div", {
          className: "relative mx-auto flex h-fit w-fit min-w-[250px] max-w-[335px] flex-col items-center gap-[25px] rounded-[25px] bg-white px-5 pb-5 pt-[35px] shadow-sm",
          children: [
            (0, i.jsx)("img", {
              alt: "upload error",
              src: "/images/upload-error.webp",
              className: "w-[200px] rounded-[25px]",
            }),
            (0, i.jsx)("button", {
              type: "button",
              className: "absolute left-4 top-4",
              onClick: e.onCancelClicked,
              children: (0, i.jsx)(b.Z, {}),
            }),
            (0, i.jsxs)("div", {
              className: "flex flex-col gap-[10px]",
              children: [
                (0, i.jsx)("span", {
                  className: "text-center text-xl font-semibold leading-[25px] text-black",
                  children: t("title"),
                }),
                (0, i.jsx)("span", {
                  className: "text-center text-base leading-5 text-black",
                  children: t("subtitle"),
                }),
              ],
            }),
          ],
        }),
      });
    }

    function M() {
      let t = (0, u.useTranslations)("Onboarding"),
        n = (0, a.useSearchParams)(),
        o = (0, f.m)(),
        b = (0, m.r)(),
        x = (0, r.useState)(!1),
        [y, C] = x,
        [B, q] = (0, r.useState)(!1),
        [X, Q] = (0, r.useState)(!0);

      let eq = (0, r.useCallback)((e) => {
        e.length && b.setUserUploadedPhoto(e[0]);
      }, [b]);

      let { currentlyUploadedImages: eV, onUploadedImagesChange: eZ } = (0, x.Z)({
        numberPhotosUpload: 1,
        onPhotosUploaded: eq,
      });

      return (0, i.jsx)("div", {
        className: "flex h-full w-full flex-grow flex-col items-center pt-2",
        children: (0, i.jsx)("div", {
          className: "relative mx-auto h-fit w-fit min-w-[250px] max-w-[335px] rounded-[25px] bg-white px-5 pb-5 pt-[35px] shadow-sm",
          children: (0, i.jsxs)("div", {
            className: "flex flex-col gap-[10px]",
            children: [
              (0, i.jsx)("span", {
                className: "text-center text-xl font-semibold leading-[25px] text-black",
                children: t("Upload Photo"),
              }),
              (0, i.jsx)("input", {
                type: "file",
                accept: "image/*",
                className: "hidden",
                multiple: !0,
                onChange: eZ,
              }),
            ],
          }),
        }),
      });
    }
  },
}]);
