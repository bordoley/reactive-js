import { ContainerOperator } from "../../../containers";
import { partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import { Exception } from "../../../util";
import {
  addToIgnoringChildErrors,
  dispose,
  onDisposed,
} from "../../../util/DisposableLike";
import { getScheduler } from "../../ObserverLike";
import { notifySink } from "../../SinkLike";
import ObserverLike__createWithDelegate from "../ObserverLike/ObserverLike.createWithDelegate";
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
        pipe(delegate, dispose(e));
      } else {
        count++;

        pipe(
          observable,
          ObservableLike__forEach(notifySink(delegate)),
          ObservableLike__subscribe(getScheduler(delegate)),
          addToIgnoringChildErrors(delegate),
          onDisposed(doOnDispose),
        );
      }
    };

    return pipe(
      ObserverLike__createWithDelegate(delegate),
      addToIgnoringChildErrors(delegate),
      onDisposed(doOnDispose),
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
