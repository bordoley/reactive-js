import { SequenceLike } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import ReadonlyArray_toSequence from "../../ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
import ReadonlyArray_concatAll from "./Sequence.concatAll.js";

const Sequence_concat = <T>(
  ...sequences: readonly SequenceLike<T>[]
): SequenceLike<T> =>
  pipe(sequences, ReadonlyArray_toSequence(), ReadonlyArray_concatAll());

export default Sequence_concat;
