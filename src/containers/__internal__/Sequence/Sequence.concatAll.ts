import {
  ConcatAll,
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers";
import { Optional, isSome, none } from "../../../functions";

const Sequence_concatAll: ConcatAll<SequenceLike>["concatAll"] =
  <T>() =>
  (seq: SequenceLike<SequenceLike<T>>) => {
    const continueWith = (
      result: Optional<{
        readonly [SequenceLike_data]: T;
        readonly [SequenceLike_next]: SequenceLike<T>;
      }>,
      continuation: SequenceLike<SequenceLike<T>>,
    ): Optional<{
      readonly [SequenceLike_data]: T;
      readonly [SequenceLike_next]: SequenceLike<T>;
    }> => {
      if (isSome(result)) {
        return {
          [SequenceLike_data]: result[SequenceLike_data],
          [SequenceLike_next]: () =>
            continueWith(result[SequenceLike_next](), continuation),
        };
      } else {
        return flattenIter(continuation());
      }
    };

    const flattenIter = (
      result: Optional<{
        readonly [SequenceLike_data]: SequenceLike<T>;
        readonly [SequenceLike_next]: SequenceLike<SequenceLike<T>>;
      }>,
    ): Optional<{
      readonly [SequenceLike_data]: T;
      readonly [SequenceLike_next]: SequenceLike<T>;
    }> => {
      if (isSome(result)) {
        return continueWith(
          result[SequenceLike_data](),
          result[SequenceLike_next],
        );
      } else {
        return none;
      }
    };

    return () => flattenIter(seq());
  };

export default Sequence_concatAll;
