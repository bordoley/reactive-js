import { MAX_SAFE_INTEGER } from "../../../constants";
import { ConcatAll } from "../../../containers";
import { ObservableLike } from "../../../rx";
import Observable$mergeAll from "./Observable.mergeAll";

const Observable$concatAll: ConcatAll<
  ObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return Observable$mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export default Observable$concatAll;
