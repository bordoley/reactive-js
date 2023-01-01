import {
  Pairwise,
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers";
import { isSome, none } from "../../../functions";

const SequenceLike__pairwise: Pairwise<SequenceLike>["pairwise"] =
  /*@__PURE__*/ (() => {
    const _pairwise =
      <T>(prev: T, seq: SequenceLike<T>): SequenceLike<readonly [T, T]> =>
      () => {
        const result = seq();
        if (isSome(result)) {
          const { [SequenceLike_data]: data, [SequenceLike_next]: next } =
            result;
          const v: [T, T] = [prev, data];
          return {
            [SequenceLike_data]: v,
            [SequenceLike_next]: _pairwise(data, next),
          };
        } else {
          return none;
        }
      };

    return <T>() =>
      (seq: SequenceLike<T>) => {
        const first = seq();
        if (isSome(first)) {
          return _pairwise(first[SequenceLike_data], first[SequenceLike_next]);
        } else {
          return () => none;
        }
      };
  })();

export default SequenceLike__pairwise;
