import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers";
import { Function1, isSome } from "../../../functions";
import { RunnableLike, SinkLike_notify } from "../../../rx";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create";

const Sequence_toRunnable =
  <T>(): Function1<SequenceLike<T>, RunnableLike<T>> =>
  (seq: SequenceLike<T>) =>
    Runnable_create(sink => {
      let result = seq();
      while (isSome(result)) {
        sink[SinkLike_notify](result[SequenceLike_data]);
        result = result[SequenceLike_next]();
      }
    });

export default Sequence_toRunnable;
