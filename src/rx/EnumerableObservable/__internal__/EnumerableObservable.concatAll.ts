import { MAX_SAFE_INTEGER } from "../../../constants.js";
import { ConcatAll } from "../../../containers.js";
import { EnumerableObservableLike } from "../../../rx.js";
import EnumerableObservable_mergeAll from "./EnumerableObservable.mergeAll.js";

const EnumerableObservable_concatAll: ConcatAll<
  EnumerableObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return EnumerableObservable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export default EnumerableObservable_concatAll;
