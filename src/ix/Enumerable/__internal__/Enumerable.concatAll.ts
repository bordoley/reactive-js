import { MAX_SAFE_INTEGER } from "../../../constants.js";
import { ConcatAll } from "../../../containers.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_mergeAll from "./Enumerable.mergeAll.js";

const Enumerable_concatAll: ConcatAll<
  EnumerableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize = MAX_SAFE_INTEGER } = options;
  return Enumerable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export default Enumerable_concatAll;
