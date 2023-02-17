import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers";
import { Optional, none } from "../../../functions";

import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer";

const _arraySequence = <T>(
  arr: readonly T[],
  index: number,
  count: number,
): Optional<{
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

const ReadonlyArray_toSequence =
  /*@__PURE__*/ ReadonlyArray_toContainer<SequenceLike>(
    <T>(values: readonly T[], startIndex: number, count: number) =>
      () =>
        _arraySequence(values, startIndex, count),
  );

export default ReadonlyArray_toSequence;
