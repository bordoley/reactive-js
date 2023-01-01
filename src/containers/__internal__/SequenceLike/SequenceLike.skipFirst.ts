import { SequenceLike, SkipFirst } from "../../../containers";

import SequenceLike__seek from "./SequenceLike.seek";

const SequenceLike__skipFirst: SkipFirst<SequenceLike>["skipFirst"] =
  <T>(options: { readonly count?: number } = {}) =>
  (seq: SequenceLike<T>) =>
  () => {
    const { count = 1 } = options;
    return SequenceLike__seek<T>(count)(seq)();
  };

export default SequenceLike__skipFirst;
