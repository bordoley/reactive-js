import { partial, pipe } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as TakeFirstSink from "../../__internal__/sinks/TakeFirstSink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_takeFirst: Observable.Signature["takeFirst"] = (<T>(options?: {
  count?: number;
}) =>
  pipe(
    TakeFirstSink.create<ObserverLike, T>,
    partial(options?.count),
    Observable_lift(),
  )) as Observable.Signature["takeFirst"];

export default Observable_takeFirst;
