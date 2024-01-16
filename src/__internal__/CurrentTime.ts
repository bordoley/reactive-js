import { bindMethod, isFunction } from "../functions.js";
import { Global_process, globalObject } from "./constants.js";

export const now = /*@__PURE__*/ (() => {
  const Clock_now = "now";
  const Process_hrtime = "hrtime";
  const Global_performance = "performance";

  const performance = globalObject[Global_performance];
  const process = globalObject[Global_process];

  const supportsPerformanceNow = isFunction(performance?.[Clock_now]);

  const supportsProcessHRTime = isFunction(process?.[Process_hrtime]);

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
