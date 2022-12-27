import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
  TakeLast,
} from "../../../containers";
import { callWith, getLength, isSome, pipe } from "../../../functions";

import ReadonlyArrayLike__toSequence from "../ReadonlyArrayLike/ReadonlyArrayLike.toSequence";

const takeLast: TakeLast<SequenceLike>["takeLast"] = /*@__PURE__*/ (() => {
  const _takeLast =
    <T>(maxCount: number, seq: SequenceLike<T>): SequenceLike<T> =>
    () => {
      const last: T[] = [];
      let result = seq();
      while (true) {
        if (isSome(result)) {
          last.push(result[SequenceLike_data]);
          if (getLength(last) > maxCount) {
            last.shift();
          }
          result = result[SequenceLike_next]();
        } else {
          break;
        }
      }
      return pipe(last, ReadonlyArrayLike__toSequence(), callWith());
    };

  return <T>(options: { readonly count?: number } = {}) =>
    (seq: SequenceLike<T>) => {
      const { count = 1 } = options;
      return _takeLast(count, seq);
    };
})();

export default takeLast;
