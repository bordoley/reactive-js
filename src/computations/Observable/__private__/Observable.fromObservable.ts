import { SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_subscribeOn from "./Observable.subscribeOn.js";

// Intentionally convoluted implementation to match the spec of the type signature.
const Observable_fromObservable: Observable.Signature["fromObservable"] = ((
    scheduler: SchedulerLike,
  ) =>
  obs =>
    Observable_subscribeOn(scheduler)(
      obs,
    )) as Observable.Signature["fromObservable"];

export default Observable_fromObservable;
