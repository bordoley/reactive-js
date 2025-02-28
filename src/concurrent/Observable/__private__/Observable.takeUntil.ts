import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObserverLike,
} from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";
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
  return pipe(
    operator,
    Observable_lift({
      [ObservableLift_isStateless]: false,
      [ObservableLike_isDeferred]: true,
      [ComputationLike_isPure]: notifier[ComputationLike_isPure] ?? true,
      [ComputationLike_isSynchronous]:
        notifier[ComputationLike_isSynchronous] ?? true,
    }),
  );
}) as Observable.Signature["takeUntil"];

export default Observable_takeUntil;
