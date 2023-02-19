import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers";
import { isSome, none, pipe } from "../../../functions";
import {
  ObserverLike,
  SinkLike_notify,
  ToRunnableObservable,
} from "../../../rx";
import EnumerableObservable_create from "../../../rx/EnumerableObservable/__internal__/EnumerableObservable.create";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule";
import RunnableObservable_create from "../../../rx/RunnableObservable/__internal__/RunnableObservable.create";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options";
import { DisposableLike_isDisposed } from "../../../util";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";

const Sequence_toRunnableObservable: ToRunnableObservable<
  SequenceLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnableObservable"] =
  options =>
  <T>(seq: SequenceLike<T>) => {
    const { delay = 0, delayStart = false } = options ?? {};

    const onSink = (observer: ObserverLike<T>) => {
      let next = seq();

      const continuation = () => {
        while (!observer[DisposableLike_isDisposed] && isSome(next)) {
          observer[SinkLike_notify](next[SequenceLike_data]);
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
      ? RunnableObservable_create(onSink)
      : EnumerableObservable_create(onSink);
  };

export default Sequence_toRunnableObservable;
