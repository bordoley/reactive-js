import {
  ContainerOperator,
  SequenceLike,
  SequenceLike_next,
  SkipFirst,
} from "../../../containers.js";
import { isSome } from "../../../functions.js";

const Sequence_seek =
  <T>(count: number): ContainerOperator<SequenceLike, T, T> =>
  (seq: SequenceLike<T>) => {
    if (count <= 0) {
      return seq;
    } else {
      let retval = seq;

      for (let i = 0; i < count; i++) {
        const result = retval();

        if (isSome(result)) {
          retval = result[SequenceLike_next];
        }
      }
      return retval;
    }
  };

const Sequence_skipFirst: SkipFirst<SequenceLike>["skipFirst"] =
  <T>(options: { readonly count?: number } = {}) =>
  (seq: SequenceLike<T>) =>
  () => {
    const { count = 1 } = options;
    return Sequence_seek<T>(count)(seq)();
  };

export default Sequence_skipFirst;
