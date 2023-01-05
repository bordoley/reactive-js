import { hasDelay } from "../../../__internal__/scheduling/SchedulerLike.options";
import { Factory, Updater, none, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import ContinuationLike__yield_ from "../../../scheduling/__internal__/ContinuationLike/ContinuationLike.yield";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import { schedule } from "../../ObserverLike";
import EnumerableObservableLike__create from "../EnumerableObservableLike/EnumerableObservableLike.create";
import RunnableObservableLike__create from "../RunnableObservableLike/RunnableObservableLike.create";

const ObservableLike__generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: { readonly delay?: number; readonly delayStart?: boolean },
): ObservableLike<T> => {
  const { delayStart = false } = options ?? {};

  const onSink = (observer: ObserverLike<T>) => {
    let acc = initialValue();

    const continuation = () => {
      while (!DisposableLike__isDisposed(observer)) {
        acc = generator(acc);
        observer[SinkLike_notify](acc);
        ContinuationLike__yield_(options);
      }
    };

    pipe(observer, schedule(continuation, delayStart ? options : none));
  };

  return hasDelay(options)
    ? RunnableObservableLike__create(onSink)
    : EnumerableObservableLike__create(onSink);
};

export default ObservableLike__generate;
