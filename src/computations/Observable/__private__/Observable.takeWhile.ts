import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as TakeWhileMixin from "../../__internal__/operators/TakeWhile.js";
import Observable_lift from "./Observable.lift.js";

const Observable_takeWhile: Observable.Signature["takeWhile"] = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    TakeWhileMixin.createObserver,
    partial(predicate, options),
    Observable_lift<T, T>(),
  );

export default Observable_takeWhile;
