/// <reference types="./CurrentTime.d.ts" />

import { bindMethod, isFunction } from "../functions.js";
export const now = /*@__PURE__*/ (() => {
    const supportsPerformanceNow = typeof performance === "object" && isFunction(performance.now);
    const supportsProcessHRTime = typeof process === "object" && isFunction(process.hrtime);
    if (supportsPerformanceNow) {
        return bindMethod(performance, "now");
    }
    else if (supportsProcessHRTime) {
        return () => {
            const hr = process.hrtime();
            return hr[0] * 1000 + hr[1] / 1e6;
        };
    }
    else {
        return bindMethod(Date, "now");
    }
})();
