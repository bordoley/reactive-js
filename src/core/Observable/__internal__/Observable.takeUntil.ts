import {
  Containers,
  EnumerableContainer,
  EnumerableLike,
  ObservableContainer,
  ObservableLike,
  ObserverLike,
  RunnableContainer,
  RunnableLike,
} from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../core/Disposable/__internal__/Disposable.bindTo.js";
import { pipe } from "../../../functions.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

interface ObservableTakeUntil {
  takeUntil<T>(
    notifier: EnumerableLike,
  ): Containers.Operator<EnumerableContainer, T, T>;
  takeUntil<T>(
    notifier: RunnableLike,
  ): Containers.Operator<RunnableContainer, T, T>;
  takeUntil<T>(
    notifier: ObservableLike,
  ): Containers.Operator<ObservableContainer, T, T>;
}
const Observable_takeUntil: ObservableTakeUntil["takeUntil"] = (<T>(
  notifier: ObservableLike,
) => {
  const operator = (delegate: ObserverLike<T>) =>
    pipe(
      Observer_createWithDelegate(delegate),
      Disposable_bindTo(delegate),
      Disposable_bindTo(
        pipe(
          notifier,
          Observable_takeFirst<ObservableContainer, T>(),
          Observable_subscribeWithConfig(delegate, delegate),
          Disposable_addTo(delegate),
        ),
      ),
    );
  return pipe(operator, Observable_lift(notifier));
}) as ObservableTakeUntil["takeUntil"];

export default Observable_takeUntil;
