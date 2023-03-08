import { Last, SequenceLike } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import Sequence_first from "./Sequence.first.js";
import Sequence_takeLast from "./Sequence.takeLast.js";

const Sequence_last: Last<SequenceLike>["last"] =
  <T>() =>
  (src: SequenceLike<T>) =>
    pipe(src, Sequence_takeLast(), Sequence_first());

export default Sequence_last;
