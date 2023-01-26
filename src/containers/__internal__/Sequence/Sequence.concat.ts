import { SequenceLike } from "../../../containers";
import { pipe } from "../../../functions";
import ReadonlyArray$toSequence from "../ReadonlyArray/ReadonlyArray.toSequence";
import ReadonlyArray$concatAll from "./Sequence.concatAll";

const Sequence$concat = <T>(
  ...sequences: readonly SequenceLike<T>[]
): SequenceLike<T> =>
  pipe(sequences, ReadonlyArray$toSequence(), ReadonlyArray$concatAll());

export default Sequence$concat;
