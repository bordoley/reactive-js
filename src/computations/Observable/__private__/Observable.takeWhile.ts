import { Predicate, partial, pipe } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as TakeWhileOperator from "../../__internal__/operators/TakeWhileOperator.js";
import Observable_lift from "./Observable.lift.js";

const Observable_takeWhile: Observable.Signature["takeWhile"] = (<T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    TakeWhileOperator.create<ObserverLike, T>,
    partial(predicate, options),
    Observable_lift(),
  )) as Observable.Signature["takeWhile"];

export default Observable_takeWhile;
