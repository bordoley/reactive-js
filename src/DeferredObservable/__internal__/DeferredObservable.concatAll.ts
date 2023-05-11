import type * as DeferredObservable from "../../DeferredObservable.js";
import DeferredObservable_mergeAll from "./DeferredObservable.mergeAll.js";

const DeferredObservable_concatAll: DeferredObservable.Signature["concatAll"] =
  () => DeferredObservable_mergeAll({ concurrency: 1 });

export default DeferredObservable_concatAll;
