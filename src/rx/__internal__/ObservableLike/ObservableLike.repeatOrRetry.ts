import { ContainerOperator } from "../../../containers";
import { partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import { Exception } from "../../../util";
import DisposableLike__addToIgnoringChildErrors from "../../../util/__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__onDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.onDisposed";
import { getScheduler } from "../../ObserverLike";
import ObserverLike__createWithDelegate from "../ObserverLike/ObserverLike.createWithDelegate";
import SinkLike__notifySink from "../SinkLike/SinkLike.notifySink";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__lift from "./ObservableLike.lift";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const ObservableLike__repeatOrRetry: <T>(
  shouldRepeat: (count: number, error?: Exception) => boolean,
) => ContainerOperator<ObservableLike, T, T> = /*@__PURE__*/ (() => {
  const createRepeatObserver = <T>(
    delegate: ObserverLike<T>,
    observable: ObservableLike<T>,
    shouldRepeat: (count: number, error?: Exception) => boolean,
  ) => {
    let count = 1;

    const doOnDispose = (e?: Exception) => {
      let shouldComplete = false;
      try {
        shouldComplete = !shouldRepeat(count, e);
      } catch (cause) {
        shouldComplete = true;
        e = { cause, parent: e } as Exception;
      }

      if (shouldComplete) {
        pipe(delegate, DisposableLike__dispose(e));
      } else {
        count++;

        pipe(
          observable,
          ObservableLike__forEach(SinkLike__notifySink(delegate)),
          ObservableLike__subscribe(getScheduler(delegate)),
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

  return <T>(shouldRepeat: (count: number, error?: Exception) => boolean) =>
    (observable: ObservableLike<T>) => {
      const operator = pipe(
        createRepeatObserver,
        partial(observable, shouldRepeat),
      );
      return pipe(observable, ObservableLike__lift(true, true)(operator));
    };
})();

export default ObservableLike__repeatOrRetry;
