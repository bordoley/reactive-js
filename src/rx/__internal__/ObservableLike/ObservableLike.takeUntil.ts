import { Function1, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import DisposableLike__bindTo from "../../../util/__internal__/DisposableLike/DisposableLike.bindTo";
import ObserverLike__createWithDelegate from "../ObserverLike/ObserverLike.createWithDelegate";
import ObserverLike__getScheduler from "../ObserverLike/ObserverLike.getScheduler";
import ObservableLike__isEnumerable from "./ObservableLike.isEnumerable";
import ObservableLike__isRunnable from "./ObservableLike.isRunnable";
import ObservableLike__lift from "./ObservableLike.lift";
import ObservableLike__subscribe from "./ObservableLike.subscribe";
import ObservableLike__takeFirst from "./ObservableLike.takeFirst";

const ObservableLike__takeUntil = <T>(
  notifier: ObservableLike,
): Function1<ObservableLike<T>, ObservableLike<T>> => {
  const operator = (delegate: ObserverLike<T>) =>
    pipe(
      ObserverLike__createWithDelegate(delegate),
      DisposableLike__bindTo(delegate),
      DisposableLike__bindTo(
        pipe(
          notifier,
          ObservableLike__takeFirst<T>(),
          ObservableLike__subscribe(ObserverLike__getScheduler(delegate)),
        ),
      ),
    );
  return pipe(
    operator,
    ObservableLike__lift(
      ObservableLike__isEnumerable(notifier),
      ObservableLike__isRunnable(notifier),
    ),
  );
};

export default ObservableLike__takeUntil;
