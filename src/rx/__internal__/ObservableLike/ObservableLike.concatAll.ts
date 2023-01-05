import { MAX_SAFE_INTEGER } from "../../../__internal__/constants";
import { ConcatAll } from "../../../containers";
import { ObservableLike } from "../../../rx";
import ObservableLike__mergeAll from "./ObservableLike.mergeAll";

const ObservableLike__concatAll: ConcatAll<
  ObservableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return ObservableLike__mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export default ObservableLike__concatAll;
