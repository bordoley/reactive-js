import { max } from "../../../__internal__/math.js";
import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
  TakeFirst,
} from "../../../containers.js";
import { isSome, none } from "../../../functions.js";

const Sequence_takeFirst: TakeFirst<SequenceLike>["takeFirst"] =
  /*@__PURE__*/ (() => {
    const _takeFirst =
      <T>(count: number, seq: SequenceLike<T>): SequenceLike<T> =>
      () => {
        if (count > 0) {
          const result = seq();
          return isSome(result)
            ? {
                [SequenceLike_data]: result[SequenceLike_data],
                [SequenceLike_next]: _takeFirst(
                  count - 1,
                  result[SequenceLike_next],
                ),
              }
            : none;
        } else {
          return none;
        }
      };

    return <T>(options: { readonly count?: number } = {}) =>
      (seq: SequenceLike<T>) => {
        const { count = 1 } = options;
        return _takeFirst(max(count, 0), seq);
      };
  })();

export default Sequence_takeFirst;
