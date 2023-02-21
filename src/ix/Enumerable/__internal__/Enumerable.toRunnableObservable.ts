import { Function1, none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix.js";
import {
  ObserverLike,
  RunnableObservableLike,
  SinkLike_notify,
  ToRunnableObservable,
} from "../../../rx.js";
import EnumerableObservable_create from "../../../rx/EnumerableObservable/__internal__/EnumerableObservable.create.js";
import Observer_schedule from "../../../rx/Observer/__internal__/Observer.schedule.js";
import RunnableObservable_create from "../../../rx/RunnableObservable/__internal__/RunnableObservable.create.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import enumerate from "./Enumerable.enumerate.js";

const Enumerable_toRunnableObservable: ToRunnableObservable<
  EnumerableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnableObservable"] =
  <T>(options?: {
    delay?: number;
    delayStart?: boolean;
  }): Function1<EnumerableLike<T>, RunnableObservableLike<T>> =>
  enumerable => {
    const { delay = 0, delayStart = false } = options ?? {};

    const onSink = (observer: ObserverLike<T>) => {
      const enumerator = pipe(
        enumerable,
        enumerate(),
        Disposable_bindTo(observer),
      );

      pipe(
        observer,
        Observer_schedule(
          () => {
            while (
              !observer[DisposableLike_isDisposed] &&
              (enumerator[SourceLike_move](),
              enumerator[EnumeratorLike_hasCurrent])
            ) {
              observer[SinkLike_notify](enumerator[EnumeratorLike_current]);
              Continuation__yield(delay);
            }
          },
          delayStart ? options : none,
        ),
      );
    };
    return hasDelay(options)
      ? RunnableObservable_create(onSink)
      : EnumerableObservable_create(onSink);
  };

export default Enumerable_toRunnableObservable;
