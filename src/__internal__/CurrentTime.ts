import { bindMethod, isFunction } from "../functions.js";

export const now = /*@__PURE__*/ (() => {
  const Clock_now = "now";
  const Process_hrtime = "hrtime";

  const supportsPerformanceNow =
    typeof performance === "object" && isFunction(performance[Clock_now]);

  const supportsProcessHRTime =
    typeof process === "object" && isFunction(process[Process_hrtime]);

  if (supportsPerformanceNow) {
    return bindMethod(performance, Clock_now);
  } else if (supportsProcessHRTime) {
    return () => {
      const hr = process[Process_hrtime]();
      return hr[0] * 1000 + hr[1] / 1e6;
    };
  } else {
    return bindMethod(Date, Clock_now);
  }
})();
