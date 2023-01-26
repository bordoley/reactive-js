import { Function1, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import Disposable$bindTo from "../../../util/__internal__/Disposable/Disposable.bindTo";
import Observer$createWithDelegate from "../Observer/Observer.createWithDelegate";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Observable$isEnumerable from "./Observable.isEnumerable";
import Observable$isRunnable from "./Observable.isRunnable";
import Observable$lift from "./Observable.lift";
import Observable$subscribe from "./Observable.subscribe";
import Observable$takeFirst from "./Observable.takeFirst";

const Observable$takeUntil = <T>(
  notifier: ObservableLike,
): Function1<ObservableLike<T>, ObservableLike<T>> => {
  const operator = (delegate: ObserverLike<T>) =>
    pipe(
      Observer$createWithDelegate(delegate),
      Disposable$bindTo(delegate),
      Disposable$bindTo(
        pipe(
          notifier,
          Observable$takeFirst<T>(),
          Observable$subscribe(Observer$getScheduler(delegate)),
        ),
      ),
    );
  return pipe(
    operator,
    Observable$lift(
      Observable$isEnumerable(notifier),
      Observable$isRunnable(notifier),
    ),
  );
};

export default Observable$takeUntil;
