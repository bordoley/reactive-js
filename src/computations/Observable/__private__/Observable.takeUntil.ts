import { ObservableLike } from "../../../computations.js";
import { SideEffect, compose, partial, pipe } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as TakeUntilOperator from "../../__internal__/operators/TakeUntilOperator.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";

const addEventListener = (scheduler: ObserverLike, effect: SideEffect) =>
  compose(Observable_forEach(effect), Observable_subscribe({ scheduler }));

const Observable_takeUntil: Observable.Signature["takeUntil"] = (<T>(
  notifier: ObservableLike,
) =>
  pipe(
    TakeUntilOperator.create<ObserverLike, T, ObservableLike>,
    partial(notifier, addEventListener),
    Observable_lift(),
  )) as Observable.Signature["takeUntil"];

export default Observable_takeUntil;
