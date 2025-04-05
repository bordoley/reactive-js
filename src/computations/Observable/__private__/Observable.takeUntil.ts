import { ObservableLike } from "../../../computations.js";
import { partial, pipe } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import * as EventSource from "../../EventSource.js";
import type * as Observable from "../../Observable.js";
import * as TakeUntilSink from "../../__internal__/sinks/TakeUntilSink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_takeUntil: Observable.Signature["takeUntil"] = (<T>(
  notifier: ObservableLike,
) =>
  pipe(
    TakeUntilSink.create<ObserverLike, T, ObservableLike>,
    partial(notifier, EventSource.subscribe),
    Observable_lift(),
  )) as Observable.Signature["takeUntil"];

export default Observable_takeUntil;
