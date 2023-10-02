import { ObservableLike, ObserverLike } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";

import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
import Observable_takeFirst from "./Observable.takeFirst.js";

const Observable_takeUntil: Observable.Signature["takeUntil"] = (<T>(
  notifier: ObservableLike,
) => {
  const operator = (delegate: ObserverLike<T>) =>
    pipe(
      Observer_createWithDelegate(delegate),
      Disposable.bindTo(delegate),
      Disposable.bindTo(
        pipe(
          notifier,
          Observable_takeFirst(),
          Observable_subscribeWithConfig(delegate, delegate),
          Disposable.addTo(delegate),
        ),
      ),
    );
  return pipe(operator, Observable_lift(notifier));
}) as Observable.Signature["takeUntil"];

export default Observable_takeUntil;
