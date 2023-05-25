import type * as Observable from "../../Observable.js";
import { ObservableLike } from "../../types.js";
import Observable_latest from "./Observable.latest.js";

const Observable_zipLatest: Observable.Signature["zipLatest"] = ((
  ...observables: readonly ObservableLike<any>[]
) => Observable_latest(observables, 2)) as Observable.Signature["zipLatest"];

export default Observable_zipLatest;
