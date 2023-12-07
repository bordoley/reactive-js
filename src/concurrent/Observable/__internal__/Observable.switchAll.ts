import type * as Observable from "../../Observable.js";
import Observer_createSwitchAllObserver from "../../Observer/__internal__/Observer.createSwitchAllObserver.js";
import Observable_flatten from "./Observable.flatten.js";

const Observable_switchAll: Observable.Signature["switchAll"] =
  /*@__PURE__*/ Observable_flatten(
    Observer_createSwitchAllObserver,
  ) as Observable.Signature["switchAll"];

export default Observable_switchAll;
