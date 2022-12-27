import {
  Repeat,
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers";
import { Predicate, isSome, none } from "../../../functions";
import ContainerLike__repeat from "../ContainerLike/ContainerLike.repeat";

const repeat: Repeat<SequenceLike>["repeat"] = /*@__PURE__*/ (<T>() => {
  const _repeat =
    (
      src: SequenceLike<T>,
      predicate: Predicate<number>,
      count: number,
      seq: SequenceLike<T>,
    ): SequenceLike<T> =>
    () => {
      const result = seq();
      if (isSome(result)) {
        return {
          [SequenceLike_data]: result[SequenceLike_data],
          [SequenceLike_next]: _repeat(
            src,
            predicate,
            count,
            result[SequenceLike_next],
          ),
        };
      } else if (predicate(count)) {
        return _repeat(src, predicate, count + 1, src)();
      } else {
        return none;
      }
    };
  return ContainerLike__repeat<SequenceLike, T>((seq, predicate) =>
    _repeat(seq, predicate, 1, seq),
  );
})();

export default repeat;
