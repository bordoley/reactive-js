import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import {
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";

class FromReadonlyArrayDeferable<T> implements DeferableLike<T> {
  constructor(
    private readonly arr: readonly T[],
    private readonly count: number,
    private readonly start: number,
  ) {}

  [DeferableLike_eval](sink: SinkLike<T>): void {
    let { arr, start, count } = this;
    while (count !== 0 && !sink[SinkLike_isComplete]) {
      const next = arr[start];
      sink[SinkLike_next](next);

      count > 0 ? (start++, count--) : (start--, count++);
    }
    sink[SinkLike_complete]();
  }
}

const Deferable_fromReadonlyArray: Deferable.Signature["fromReadonlyArray"] =
  <T>(options?: { count?: number; start?: number }) =>
  (arr: readonly T[]) => {
    let [start, count] = parseArrayBounds(arr, options);

    return newInstance(FromReadonlyArrayDeferable, arr, count, start);
  };

export default Deferable_fromReadonlyArray;
