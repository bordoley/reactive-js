import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers.js";
import { Function1, isSome, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  RunnableLike,
} from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
} from "../../../scheduling.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";

interface SequenceToObservable {
  <T>(): Function1<SequenceLike<T>, EnumerableLike<T>>;
  <T>(options: unknown): Function1<SequenceLike<T>, RunnableLike<T>>;
  <T>(options: { delay: number; delayStart?: boolean }): Function1<
    SequenceLike<T>,
    RunnableLike<T>
  >;
}
const Sequence_toObservable: SequenceToObservable = ((options?: {
    delay?: number;
    delayStart?: boolean;
  }) =>
  <T>(seq: SequenceLike<T>) => {
    const { delay = 0, delayStart = false } = options ?? {};

    const onSubscribe = (observer: ObserverLike<T>) => {
      let next = seq();

      const continuation = (ctx: ContinuationContextLike) => {
        while (!observer[DisposableLike_isDisposed] && isSome(next)) {
          observer[ObserverLike_notify](next[SequenceLike_data]);
          next = next[SequenceLike_next]();
          ctx[ContinuationContextLike_yield](delay);
        }
        observer[DisposableLike_dispose]();
      };

      pipe(
        observer,
        Observer_schedule(continuation, delayStart ? options : none),
      );
    };

    const retval: ObservableLike<T> =
      delay > 0 ? Runnable_create(onSubscribe) : Enumerable_create(onSubscribe);

    return retval;
  }) as SequenceToObservable;

export default Sequence_toObservable;
