import { bindMethod, isFunction, isSome } from "../functions.js";
import { Global_process, globalObject } from "./constants.js";

export const now = /*@__PURE__*/ (() => {
  const Clock_now = "now";
  const { performance } = globalObject;
  const { hrtime } = globalObject[Global_process] ?? {};

  if (isSome(performance)) {
    return bindMethod(performance, Clock_now);
  } else if (isFunction(hrtime)) {
    return () => {
      const hr = hrtime();
      return hr[0] * 1000 + hr[1] / 1e6;
    };
  } else {
    return bindMethod(Date, Clock_now);
  }
})();
