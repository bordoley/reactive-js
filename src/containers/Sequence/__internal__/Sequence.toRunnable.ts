import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers.js";
import { isSome, none, pipe } from "../../../functions.js";
import { ObserverLike, ObserverLike_notify, ToRunnable } from "../../../rx.js";
import EnumerableObservable_create from "../../../rx/EnumerableObservable/__internal__/EnumerableObservable.create.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";

const Sequence_toRunnable: ToRunnable<
  SequenceLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnable"] =
  options =>
  <T>(seq: SequenceLike<T>) => {
    const { delay = 0, delayStart = false } = options ?? {};

    const onSink = (observer: ObserverLike<T>) => {
      let next = seq();

      const continuation = () => {
        while (!observer[DisposableLike_isDisposed] && isSome(next)) {
          observer[ObserverLike_notify](next[SequenceLike_data]);
          next = next[SequenceLike_next]();

          if (isSome(next)) {
            Continuation__yield(delay);
          }
        }

        pipe(observer, Disposable_dispose());
      };

      pipe(
        observer,
        Observer_schedule(continuation, delayStart ? options : none),
      );
    };

    return hasDelay(options)
      ? Runnable_create(onSink)
      : EnumerableObservable_create(onSink);
  };

export default Sequence_toRunnable;
