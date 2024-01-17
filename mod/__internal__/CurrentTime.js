/// <reference types="./CurrentTime.d.ts" />

import { bindMethod, isFunction, isSome } from "../functions.js";
import { Global_process, globalObject } from "./constants.js";
export const now = /*@__PURE__*/ (() => {
    const Clock_now = "now";
    const { performance } = globalObject;
    const { hrtime } = globalObject[Global_process] ?? {};
    return isSome(performance)
        ? bindMethod(performance, Clock_now)
        : isFunction(hrtime)
            ? () => {
                const hr = hrtime();
                return hr[0] * 1000 + hr[1] / 1e6;
            }
            : bindMethod(Date, Clock_now);
})();
