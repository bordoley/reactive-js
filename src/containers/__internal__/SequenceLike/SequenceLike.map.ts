import {
  Map,
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers";
import { Function1, isSome, none } from "../../../functions";

const SequenceLike__map: Map<SequenceLike>["map"] = /*@__PURE__*/ (() => {
  const _map =
    <TA, TB>(
      mapper: Function1<TA, TB>,
      seq: SequenceLike<TA>,
    ): SequenceLike<TB> =>
    () => {
      const result = seq();

      return isSome(result)
        ? {
            [SequenceLike_data]: mapper(result[SequenceLike_data]),
            [SequenceLike_next]: _map(mapper, result[SequenceLike_next]),
          }
        : none;
    };

  return <TA, TB>(mapper: Function1<TA, TB>) =>
    (seq: SequenceLike<TA>) =>
      _map(mapper, seq);
})();

export default SequenceLike__map;
