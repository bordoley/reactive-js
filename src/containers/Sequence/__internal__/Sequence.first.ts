import { First, SequenceLike, SequenceLike_data } from "../../../containers.js";

const Sequence_first: First<SequenceLike>["first"] =
  <T>() =>
  (seq: SequenceLike<T>) =>
    seq()?.[SequenceLike_data];

export default Sequence_first;
