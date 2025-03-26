import { Predicate, partial, pipe } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as KeepSink from "../../__internal__/sinks/KeepSink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_keep: Observable.Signature["keep"] = (<T>(
  predicate: Predicate<T>,
) =>
  pipe(
    KeepSink.create<ObserverLike, T>,
    partial(predicate),
    Observable_lift<T, T>(),
  )) as Observable.Signature["keep"];

export default Observable_keep;
