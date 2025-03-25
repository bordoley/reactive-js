import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as KeepOperator from "../../__internal__/operators/KeepOperator.js";
import Observable_lift from "./Observable.lift.js";

const Observable_keep: Observable.Signature["keep"] = (<T>(
  predicate: Predicate<T>,
) =>
  pipe(
    KeepOperator.create<T>,
    partial(predicate),
    Observable_lift<T, T>(),
  )) as Observable.Signature["keep"];

export default Observable_keep;
