import { ConcatAll } from "../../../containers.js";
import { EnumerableLike } from "../../../rx.js";
import Enumerable_mergeAll from "./Enumerable.mergeAll.js";

const Enumerable_concatAll: ConcatAll<
  EnumerableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize } = options;
  return Enumerable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export default Enumerable_concatAll;
