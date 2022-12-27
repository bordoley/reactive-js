import {
  ContainerOperator,
  SequenceLike,
  SequenceLike_next,
} from "../../../containers";
import { isSome } from "../../../functions";

const seek =
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

export default seek;
