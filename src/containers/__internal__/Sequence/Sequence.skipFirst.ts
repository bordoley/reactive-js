import { SequenceLike, SkipFirst } from "../../../containers";

import Sequence$seek from "./Sequence.seek";

const Sequence$skipFirst: SkipFirst<SequenceLike>["skipFirst"] =
  <T>(options: { readonly count?: number } = {}) =>
  (seq: SequenceLike<T>) =>
  () => {
    const { count = 1 } = options;
    return Sequence$seek<T>(count)(seq)();
  };

export default Sequence$skipFirst;
