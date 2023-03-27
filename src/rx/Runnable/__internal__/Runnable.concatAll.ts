import { ConcatAll } from "../../../containers.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_concatAll: ConcatAll<
  RunnableLike,
  {
    maxBufferSize?: number;
  }
>["concatAll"] = (options: { readonly maxBufferSize?: number } = {}) => {
  const { maxBufferSize } = options;
  return Runnable_mergeAll({ maxBufferSize, maxConcurrency: 1 });
};

export default Runnable_concatAll;
