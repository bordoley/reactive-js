import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers";
import { Function1, isSome } from "../../../functions";
import { RunnableLike, SinkLike_notify } from "../../../rx";
import Runnable$create from "../../../rx/__internal__/Runnable/Runnable.create";

const Sequence$toRunnable =
  <T>(): Function1<SequenceLike<T>, RunnableLike<T>> =>
  (seq: SequenceLike<T>) =>
    Runnable$create(sink => {
      let result = seq();
      while (isSome(result)) {
        sink[SinkLike_notify](result[SequenceLike_data]);
        result = result[SequenceLike_next]();
      }
    });

export default Sequence$toRunnable;
