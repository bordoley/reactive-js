import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
  TakeWhile,
} from "../../../containers";
import { Predicate, isSome, none, returns } from "../../../functions";

const SequenceLike__takeWhile: TakeWhile<SequenceLike>["takeWhile"] =
  /*@__PURE__*/ (() => {
    const _takeWhile =
      <T>(
        predicate: Predicate<T>,
        inclusive: boolean,
        seq: SequenceLike<T>,
      ): SequenceLike<T> =>
      () => {
        const result = seq();

        return isSome(result) && predicate(result[SequenceLike_data])
          ? {
              [SequenceLike_data]: result[SequenceLike_data],
              [SequenceLike_next]: _takeWhile(
                predicate,
                inclusive,
                result[SequenceLike_next],
              ),
            }
          : isSome(result) && inclusive
          ? {
              [SequenceLike_data]: result[SequenceLike_data],
              [SequenceLike_next]: returns(none),
            }
          : none;
      };

    return <T>(
        predicate: Predicate<T>,
        options: { readonly inclusive?: boolean } = {},
      ) =>
      (seq: SequenceLike<T>) => {
        const { inclusive = false } = options;
        return _takeWhile(predicate, inclusive, seq);
      };
  })();

export default SequenceLike__takeWhile;
