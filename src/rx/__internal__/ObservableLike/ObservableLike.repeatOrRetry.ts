import { ContainerOperator } from "../../../containers";
import { error, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import DisposableLike__addToIgnoringChildErrors from "../../../util/__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__onDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.onDisposed";
import ObserverLike__createWithDelegate from "../ObserverLike/ObserverLike.createWithDelegate";
import ObserverLike__getScheduler from "../ObserverLike/ObserverLike.getScheduler";
import SinkLike__notifySink from "../SinkLike/SinkLike.notifySink";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__lift from "./ObservableLike.lift";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const ObservableLike__repeatOrRetry: <T>(
  shouldRepeat: (count: number, error?: Error) => boolean,
) => ContainerOperator<ObservableLike, T, T> = /*@__PURE__*/ (() => {
  const createRepeatObserver = <T>(
    delegate: ObserverLike<T>,
    observable: ObservableLike<T>,
    shouldRepeat: (count: number, error?: Error) => boolean,
  ) => {
    let count = 1;

    const doOnDispose = (err?: Error) => {
      let shouldComplete = false;
      try {
        shouldComplete = !shouldRepeat(count, err);
      } catch (e) {
        shouldComplete = true;
        err = error([e, err]);
      }

      if (shouldComplete) {
        pipe(delegate, DisposableLike__dispose(err));
      } else {
        count++;

        pipe(
          observable,
          ObservableLike__forEach(SinkLike__notifySink(delegate)),
          ObservableLike__subscribe(ObserverLike__getScheduler(delegate)),
          DisposableLike__addToIgnoringChildErrors(delegate),
          DisposableLike__onDisposed(doOnDispose),
        );
      }
    };

    return pipe(
      ObserverLike__createWithDelegate(delegate),
      DisposableLike__addToIgnoringChildErrors(delegate),
      DisposableLike__onDisposed(doOnDispose),
    );
  };

  return <T>(shouldRepeat: (count: number, error?: Error) => boolean) =>
    (observable: ObservableLike<T>) => {
      const operator = pipe(
        createRepeatObserver,
        partial(observable, shouldRepeat),
      );
      return pipe(observable, ObservableLike__lift(true, true)(operator));
    };
})();

export default ObservableLike__repeatOrRetry;
