import { ContainerOperator } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import {
  EnumerableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  RunnableLike,
} from "../../../rx.js";

import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithDispatcherConfig from "./Observable.subscribeWithDispatcherConfig.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

interface ObservableTakeUntil {
  <T>(notifier: EnumerableLike): ContainerOperator<EnumerableLike, T, T>;
  <T>(notifier: RunnableLike): ContainerOperator<RunnableLike, T, T>;
  <T>(notifier: ObservableLike): ContainerOperator<ObservableLike, T, T>;
}
const Observable_takeUntil: ObservableTakeUntil = (<T>(
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
          Observable_subscribeWithDispatcherConfig(delegate),
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
}) as ObservableTakeUntil;

export default Observable_takeUntil;
