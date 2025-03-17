import {
  ObservableLike,
  ProducerLike_consume,
  StatelessComputationOperator,
} from "../../../computations.js";
import {
  error,
  invoke,
  isSome,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as DelegatingObserver from "../../../utils/__internal__/DelegatingObserver.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPure from "./Observable.liftPure.js";
import Observable_toProducer from "./Observable.toProducer.js";

type ObservableRepeatOrRetry = <T>(
  shouldRepeat: (count: number, error?: Error) => boolean,
) => StatelessComputationOperator<Observable.Computation, T, T>;

const Observable_repeatOrRetry: ObservableRepeatOrRetry = /*@__PURE__*/ (<
  T,
>() => {
  const createRepeatObserver = (
    delegate: ObserverLike<T>,
    observable: ObservableLike<T>,
    shouldRepeat: (count: number, error?: Error) => boolean,
  ) => {
    let count = 1;

    const doOnDispose = (err?: Error) => {
      let shouldComplete = false;
      try {
        shouldComplete = !shouldRepeat(count, err);
        err = none;
      } catch (e) {
        shouldComplete = true;
        err = isSome(err) ? error([error(e), err]) : error(e);
      }

      if (isSome(err)) {
        delegate[DisposableLike_dispose](err);
      } else if (shouldComplete) {
        delegate[SinkLike_complete]();
      } else {
        count++;

        const newDelegate = pipe(
          DelegatingObserver.createNotifyOnlyNonCompletingNonDisposing(
            delegate,
          ),
          Disposable.addToContainer(delegate),
          DisposableContainer.onDisposed(doOnDispose),
        );

        pipe(
          observable,
          Observable_toProducer(delegate),
          invoke(ProducerLike_consume, newDelegate),
        );
      }
    };

    return pipe(
      DelegatingObserver.createNotifyOnlyNonCompletingNonDisposing(delegate),
      Disposable.addToContainer(delegate),
      DisposableContainer.onDisposed(doOnDispose),
    );
  };

  return ((shouldRepeat: (count: number, error?: Error) => boolean) =>
    (observable: ObservableLike<T>) =>
      Observable_liftPure(
        pipe(createRepeatObserver, partial(observable, shouldRepeat)),
      )(observable)) as ObservableRepeatOrRetry;
})();

export default Observable_repeatOrRetry;
