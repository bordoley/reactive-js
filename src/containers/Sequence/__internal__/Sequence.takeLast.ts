import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
  TakeLast,
} from "../../../containers.js";
import { callWith, getLength, isSome, pipe } from "../../../functions.js";
import ReadonlyArray_toSequence from "../../ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";

const Sequence_takeLast: TakeLast<SequenceLike>["takeLast"] =
  /*@__PURE__*/ (() => {
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
        return pipe(last, ReadonlyArray_toSequence(), callWith());
      };

    return <T>(options: { readonly count?: number } = {}) =>
      (seq: SequenceLike<T>) => {
        const { count = 1 } = options;
        return _takeLast(count, seq);
      };
  })();

export default Sequence_takeLast;
