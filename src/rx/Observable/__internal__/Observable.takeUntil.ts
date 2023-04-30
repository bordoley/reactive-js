import { ContainerOperator } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import {
  EnumerableContainerLike,
  EnumerableLike,
  ObservableContainerLike,
  ObservableLike,
  ObserverLike,
  RunnableContainerLike,
  RunnableLike,
} from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

interface ObservableTakeUntil {
  takeUntil<T>(
    notifier: EnumerableLike,
  ): ContainerOperator<EnumerableContainerLike, T, T>;
  takeUntil<T>(
    notifier: RunnableLike,
  ): ContainerOperator<RunnableContainerLike, T, T>;
  takeUntil<T>(
    notifier: ObservableLike,
  ): ContainerOperator<ObservableContainerLike, T, T>;
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
          Observable_takeFirst<ObservableContainerLike, T>(),
          Observable_subscribeWithConfig(delegate, delegate),
          Disposable_addTo(delegate),
        ),
      ),
    );
  return pipe(operator, Observable_lift(notifier));
}) as ObservableTakeUntil["takeUntil"];

export default Observable_takeUntil;
