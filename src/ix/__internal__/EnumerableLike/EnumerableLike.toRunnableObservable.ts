import { Function1, none, pipe } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import {
  ObserverLike,
  RunnableObservableLike,
  ToRunnableObservable,
} from "../../../rx";
import EnumerableObservableLike__create from "../../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.create";
import ObserverLike__schedule from "../../../rx/__internal__/ObserverLike/ObserverLike.schedule";
import RunnableObservableLike__create from "../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create";
import SinkLike__notifySink from "../../../rx/__internal__/SinkLike/SinkLike.notifySink";
import ContinuationLike__yield_ from "../../../scheduling/__internal__/ContinuationLike/ContinuationLike.yield";
import { hasDelay } from "../../../scheduling/__internal__/SchedulerLike.options";
import DisposableLike__bindTo from "../../../util/__internal__/DisposableLike/DisposableLike.bindTo";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import move from "../SourceLike/SourceLike.move";
import enumerate from "./EnumerableLike.enumerate";

const EnumerableLike__toRunnableObservable: ToRunnableObservable<
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
        DisposableLike__bindTo(observer),
      );

      pipe(
        observer,
        ObserverLike__schedule(
          () => {
            while (!DisposableLike__isDisposed(observer) && move(enumerator)) {
              pipe(enumerator, getCurrent, SinkLike__notifySink(observer));
              ContinuationLike__yield_(options);
            }
          },
          delayStart ? options : none,
        ),
      );
    };
    return hasDelay(options)
      ? RunnableObservableLike__create(onSink)
      : EnumerableObservableLike__create(onSink);
  };

export default EnumerableLike__toRunnableObservable;
