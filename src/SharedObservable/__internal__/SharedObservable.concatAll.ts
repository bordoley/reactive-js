import type * as SharedObservable from "../../SharedObservable.js";
import SharedObservable_mergeAll from "./SharedObservable.mergeAll.js";

const SharedObservable_concatAll: SharedObservable.Signature["concatAll"] =
  () => SharedObservable_mergeAll({ concurrency: 1 });

export default SharedObservable_concatAll;
