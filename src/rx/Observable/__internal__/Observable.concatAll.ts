import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { ConcatAll } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_concatAll: ConcatAll<
  ObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return Observable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export default Observable_concatAll;
