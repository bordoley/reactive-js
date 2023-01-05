import { SequenceLike } from "../../../containers";
import { pipe } from "../../../functions";
import ReadonlyArrayLike__toSequence from "../ReadonlyArrayLike/ReadonlyArrayLike.toSequence";
import ReadonlyArrayLike__concatAll from "./SequenceLike.concatAll";

const SequenceLike__concat = <T>(
  ...sequences: readonly SequenceLike<T>[]
): SequenceLike<T> =>
  pipe(
    sequences,
    ReadonlyArrayLike__toSequence(),
    ReadonlyArrayLike__concatAll(),
  );

export default SequenceLike__concat;
