import { SequenceLike, SkipFirst } from "../../../containers";

import Sequence_seek from "./Sequence.seek";

const Sequence_skipFirst: SkipFirst<SequenceLike>["skipFirst"] =
  <T>(options: { readonly count?: number } = {}) =>
  (seq: SequenceLike<T>) =>
  () => {
    const { count = 1 } = options;
    return Sequence_seek<T>(count)(seq)();
  };

export default Sequence_skipFirst;
