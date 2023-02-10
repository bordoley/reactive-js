import { MAX_SAFE_INTEGER } from "../../../constants";
import { ConcatAll } from "../../../containers";
import { ObservableLike } from "../../../rx";
import Observable_mergeAll from "./Observable.mergeAll";

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
