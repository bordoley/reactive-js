import { pipe } from "../../../functions.js";
import { ObservableLike, ObserverLike, TakeUntil } from "../../../rx.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

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
          Observable_takeFirst<ObservableLike, T>(),
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
