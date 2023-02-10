import { pipe } from "../../../functions";
import { ObservableLike, ObserverLike, TakeUntil } from "../../../rx";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler";
import Observable_isEnumerable from "./Observable.isEnumerable";
import Observable_isRunnable from "./Observable.isRunnable";
import Observable_lift from "./Observable.lift";
import Observable_subscribe from "./Observable.subscribe";
import Observable_takeFirst from "./Observable.takeFirst";

const Observable_takeUntil: TakeUntil<ObservableLike>["takeUntil"] = <T>(
  notifier: ObservableLike,
) => {
  const operator = (delegate: ObserverLike<T>) =>
    pipe(
      Observer_createWithDelegate(delegate),
      Disposable_bindTo(delegate),
      Disposable_bindTo(
        pipe(
          notifier,
          Observable_takeFirst<T>(),
          Observable_subscribe(Observer_getScheduler(delegate)),
        ),
      ),
    );
  return pipe(
    operator,
    Observable_lift(
      Observable_isEnumerable(notifier),
      Observable_isRunnable(notifier),
    ),
  );
};

export default Observable_takeUntil;
