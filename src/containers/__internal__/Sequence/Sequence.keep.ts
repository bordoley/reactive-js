import {
  Keep,
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers";
import { Predicate, isSome } from "../../../functions";

const Sequence$keep: Keep<SequenceLike>["keep"] = /*@__PURE__*/ (() => {
  const _keep =
    <T>(predicate: Predicate<T>, seq: SequenceLike<T>): SequenceLike<T> =>
    () => {
      let result = seq();
      while (true) {
        if (isSome(result)) {
          if (predicate(result[SequenceLike_data])) {
            return {
              [SequenceLike_data]: result[SequenceLike_data],
              [SequenceLike_next]: _keep(predicate, result[SequenceLike_next]),
            };
          } else {
            result = result[SequenceLike_next]();
          }
        } else {
          return result;
        }
      }
    };

  return <T>(predicate: Predicate<T>) =>
    (seq: SequenceLike<T>) =>
      _keep(predicate, seq);
})();

export default Sequence$keep;
