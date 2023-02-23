import { MAX_SAFE_INTEGER } from "../../../constants.js";
import { ConcatAll } from "../../../containers.js";
import { RunnableObservableLike } from "../../../rx.js";
import RunnableObservable_mergeAll from "./RunnableObservable.mergeAll.js";

const RunnableObservable_concatAll: ConcatAll<
  RunnableObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return RunnableObservable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export default RunnableObservable_concatAll;
