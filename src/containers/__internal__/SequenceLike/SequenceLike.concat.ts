import { SequenceLike } from "../../../containers";
import { pipe } from "../../../functions";
import { toSequence as ReadonlyArray__toSequence } from "../../ReadonlyArrayLike";
import ReadonlyArrayLike__concatAll from "./SequenceLike.concatAll";

const concat = <T>(...sequences: readonly SequenceLike<T>[]): SequenceLike<T> =>
  pipe(sequences, ReadonlyArray__toSequence(), ReadonlyArrayLike__concatAll());

export default concat;
