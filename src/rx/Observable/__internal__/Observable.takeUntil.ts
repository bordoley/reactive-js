import { pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_scheduler,
  TakeUntil,
} from "../../../rx.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
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
          Observable_subscribe(delegate[ObserverLike_scheduler]),
        ),
      ),
    );
  return pipe(
    operator,
    Observable_lift(
      notifier[ObservableLike_isEnumerable],
      notifier[ObservableLike_isRunnable],
    ),
  );
};

export default Observable_takeUntil;
