import type * as Observable from "../../Observable.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_concatAll: Observable.Signature["concatAll"] = () =>
  Observable_mergeAll({ concurrency: 1 });

export default Observable_concatAll;
