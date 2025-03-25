import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as ForEachOperator from "../../__internal__/operators/ForEachOperator.js";
import Observable_lift from "./Observable.lift.js";

const Observable_forEach: Observable.Signature["forEach"] = (<T>(
  predicate: Predicate<T>,
) =>
  pipe(
    ForEachOperator.create<T>,
    partial(predicate),
    Observable_lift<T, T>(),
  )) as Observable.Signature["forEach"];

export default Observable_forEach;
