import { hasDelay } from "../../../__internal__/scheduling/SchedulerLike.options";
import { Function1, none, pipe } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import {
  ObserverLike,
  RunnableObservableLike,
  ToRunnableObservable,
} from "../../../rx";
import { schedule } from "../../../rx/ObserverLike";
import { notifySink } from "../../../rx/SinkLike";
import EnumerableObservableLike__create from "../../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.create";
import RunnableObservableLike__create from "../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create";
import { yield_ } from "../../../scheduling/ContinuationLike";
import { bindTo, isDisposed } from "../../../util/DisposableLike";
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
      const enumerator = pipe(enumerable, enumerate(), bindTo(observer));

      pipe(
        observer,
        schedule(
          () => {
            while (!isDisposed(observer) && move(enumerator)) {
              pipe(enumerator, getCurrent, notifySink(observer));
              yield_(options);
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
