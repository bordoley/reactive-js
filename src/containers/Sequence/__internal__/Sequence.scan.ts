import {
  Scan,
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers.js";
import { Factory, Reducer, isSome, none } from "../../../functions.js";

const Sequence_scan: Scan<SequenceLike>["scan"] = /*@__PURE__*/ (() => {
  const _scan =
    <T, TAcc>(
      reducer: Reducer<T, TAcc>,
      acc: TAcc,
      seq: SequenceLike<T>,
    ): SequenceLike<TAcc> =>
    () => {
      const result = seq();
      if (isSome(result)) {
        const nextAcc = reducer(acc, result[SequenceLike_data]);
        return {
          [SequenceLike_data]: nextAcc,
          [SequenceLike_next]: _scan(
            reducer,
            nextAcc,
            result[SequenceLike_next],
          ),
        };
      } else {
        return none;
      }
    };

  return <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    (seq: SequenceLike<T>) =>
    () =>
      _scan(reducer, initialValue(), seq)();
})();

export default Sequence_scan;
