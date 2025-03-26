import { Predicate, partial, pipe } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as ForEachSink from "../../__internal__/sinks/ForEachSink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_forEach: Observable.Signature["forEach"] = (<T>(
  predicate: Predicate<T>,
) =>
  pipe(
    ForEachSink.create<ObserverLike, T>,
    partial(predicate),
    Observable_lift<T, T>(),
  )) as Observable.Signature["forEach"];

export default Observable_forEach;
