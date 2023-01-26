import { Function1, none, pipe } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import {
  ObserverLike,
  RunnableObservableLike,
  ToRunnableObservable,
} from "../../../rx";
import EnumerableObservable$create from "../../../rx/__internal__/EnumerableObservable/EnumerableObservable.create";
import Observer$schedule from "../../../rx/__internal__/Observer/Observer.schedule";
import RunnableObservable$create from "../../../rx/__internal__/RunnableObservable/RunnableObservable.create";
import Sink$notifySink from "../../../rx/__internal__/Sink/Sink.notifySink";
import Continuation$yield_ from "../../../scheduling/__internal__/Continuation/Continuation.yield";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options";
import Disposable$bindTo from "../../../util/__internal__/Disposable/Disposable.bindTo";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import getCurrent from "../Enumerator/Enumerator.getCurrent";
import move from "../Source/Source.move";
import enumerate from "./Enumerable.enumerate";

const Enumerable$toRunnableObservable: ToRunnableObservable<
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
        Disposable$bindTo(observer),
      );

      pipe(
        observer,
        Observer$schedule(
          () => {
            while (!Disposable$isDisposed(observer) && move(enumerator)) {
              pipe(enumerator, getCurrent, Sink$notifySink(observer));
              Continuation$yield_(options);
            }
          },
          delayStart ? options : none,
        ),
      );
    };
    return hasDelay(options)
      ? RunnableObservable$create(onSink)
      : EnumerableObservable$create(onSink);
  };

export default Enumerable$toRunnableObservable;
