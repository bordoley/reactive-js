import { Function1, none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import {
  ObserverLike,
  RunnableObservableLike,
  SinkLike_notify,
  ToRunnableObservable,
} from "../../../rx";
import EnumerableObservable_create from "../../../rx/__internal__/EnumerableObservable/EnumerableObservable.create";
import Observer_schedule from "../../../rx/__internal__/Observer/Observer.schedule";
import RunnableObservable_create from "../../../rx/__internal__/RunnableObservable/RunnableObservable.create";
import Continuation_yield_ from "../../../scheduling/__internal__/Continuation/Continuation.yield";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options";
import { DisposableLike_isDisposed } from "../../../util";
import Disposable_bindTo from "../../../util/__internal__/Disposable/Disposable.bindTo";
import enumerate from "./Enumerable.enumerate";

const Enumerable_toRunnableObservable: ToRunnableObservable<
  EnumerableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] =
  <T>(options?: {
    delay?: number;
    delayStart?: boolean;
  }): Function1<EnumerableLike<T>, RunnableObservableLike<T>> =>
  enumerable => {
    const { delayStart = false } = options ?? {};

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
              Continuation_yield_(options);
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
