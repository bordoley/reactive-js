import { Function1, none, pipe } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import {
  ObserverLike,
  RunnableObservableLike,
  ToRunnableObservable,
} from "../../../rx";
import EnumerableObservable_create from "../../../rx/__internal__/EnumerableObservable/EnumerableObservable.create";
import Observer_schedule from "../../../rx/__internal__/Observer/Observer.schedule";
import RunnableObservable_create from "../../../rx/__internal__/RunnableObservable/RunnableObservable.create";
import Sink_notifySink from "../../../rx/__internal__/Sink/Sink.notifySink";
import Continuation_yield_ from "../../../scheduling/__internal__/Continuation/Continuation.yield";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options";
import Disposable_bindTo from "../../../util/__internal__/Disposable/Disposable.bindTo";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import getCurrent from "../Enumerator/Enumerator.getCurrent";
import move from "../Source/Source.move";
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
            while (!Disposable_isDisposed(observer) && move(enumerator)) {
              pipe(enumerator, getCurrent, Sink_notifySink(observer));
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
