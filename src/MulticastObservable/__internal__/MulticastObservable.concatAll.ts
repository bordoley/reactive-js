import type * as MulticastObservable from "../../MulticastObservable.js";
import MulticastObservable_mergeAll from "./MulticastObservable.mergeAll.js";

const MulticastObservable_concatAll: MulticastObservable.Signature["concatAll"] =
  () => MulticastObservable_mergeAll({ concurrency: 1 });

export default MulticastObservable_concatAll;
