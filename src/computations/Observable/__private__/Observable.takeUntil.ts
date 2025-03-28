import { ObservableLike } from "../../../computations.js";
import { SideEffect, compose, partial, pipe } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import * as TakeUntilSink from "../../__internal__/sinks/TakeUntilSink.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_toProducer from "./Observable.toProducer.js";

const m = {
  toProducer: Observable_toProducer,
};

const addEventListener = (scheduler: ObserverLike, effect: SideEffect) =>
  compose(Observable_forEach(effect), Computation.subscribe(m)({ scheduler }));

const Observable_takeUntil: Observable.Signature["takeUntil"] = (<T>(
  notifier: ObservableLike,
) =>
  pipe(
    TakeUntilSink.create<ObserverLike, T, ObservableLike>,
    partial(notifier, addEventListener),
    Observable_lift(),
  )) as Observable.Signature["takeUntil"];

export default Observable_takeUntil;
