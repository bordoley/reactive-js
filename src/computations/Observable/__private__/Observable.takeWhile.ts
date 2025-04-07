import { Predicate, partial, pipe } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as TakeWhileSink from "../../__internal__/sinks/TakeWhileSink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_takeWhile: Observable.Signature["takeWhile"] = (<T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    TakeWhileSink.create<ObserverLike, T>,
    partial(predicate, options),
    Observable_lift<T, T>(),
  )) as Observable.Signature["takeWhile"];

export default Observable_takeWhile;
