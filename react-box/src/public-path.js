/* eslint-disable no-undef */

//在 src 目录新增 public-path.js：
if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
