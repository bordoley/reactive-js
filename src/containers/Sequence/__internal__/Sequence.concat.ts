import { SequenceLike } from "../../../containers";
import { pipe } from "../../../functions";
import ReadonlyArray_toSequence from "../../ReadonlyArray/__internal__/ReadonlyArray.toSequence";
import ReadonlyArray_concatAll from "./Sequence.concatAll";

const Sequence_concat = <T>(
  ...sequences: readonly SequenceLike<T>[]
): SequenceLike<T> =>
  pipe(sequences, ReadonlyArray_toSequence(), ReadonlyArray_concatAll());

export default Sequence_concat;
