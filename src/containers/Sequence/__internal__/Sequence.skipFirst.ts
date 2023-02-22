import { SequenceLike, SkipFirst } from "../../../containers.js";

import Sequence_seek from "./Sequence.seek.js";

const Sequence_skipFirst: SkipFirst<SequenceLike>["skipFirst"] =
  <T>(options: { readonly count?: number } = {}) =>
  (seq: SequenceLike<T>) =>
  () => {
    const { count = 1 } = options;
    return Sequence_seek<T>(count)(seq)();
  };

export default Sequence_skipFirst;
