import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
  ToReadonlyArray,
} from "../../../containers";
import { isSome } from "../../../functions";

const Sequence_toReadonlyArray: ToReadonlyArray<SequenceLike>["toReadonlyArray"] =

    <T>() =>
    (seq: SequenceLike<T>) => {
      const result: T[] = [];

      let next = seq();
      while (isSome(next)) {
        result.push(next[SequenceLike_data]);
        next = next[SequenceLike_next]();
      }

      return result;
    };

export default Sequence_toReadonlyArray;
