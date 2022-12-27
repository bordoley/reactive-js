import {
  ReadonlyArrayLike,
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
  ToSequence,
} from "../../../containers";
import { Option, none } from "../../../functions";

import ReadonlyArrayLike__toContainer from "./ReadonlyArrayLike.toContainer";

const toSequence: ToSequence<ReadonlyArrayLike>["toSequence"] = /*@__PURE__*/ (<
  T,
>() => {
  const _arraySequence = (
    arr: readonly T[],
    index: number,
    count: number,
  ): Option<{
    readonly [SequenceLike_data]: T;
    readonly [SequenceLike_next]: SequenceLike<T>;
  }> =>
    count !== 0 && index >= 0
      ? {
          [SequenceLike_data]: arr[index],
          [SequenceLike_next]: () =>
            _arraySequence(
              arr,
              count > 0 ? index + 1 : index - 1,
              count > 0 ? count - 1 : count + 1,
            ),
        }
      : none;

  return ReadonlyArrayLike__toContainer<SequenceLike<T>, T>(
    (values: readonly T[], startIndex: number, count: number) => () =>
      _arraySequence(values, startIndex, count),
  );
})();

export default toSequence;
