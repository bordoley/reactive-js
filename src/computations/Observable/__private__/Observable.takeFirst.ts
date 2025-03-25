import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as TakeFirstOperator from "../../__internal__/operators/TakeFirstOperator.js";
import Observable_lift from "./Observable.lift.js";

const Observable_takeFirst: Observable.Signature["takeFirst"] = (<T>(options?: {
  count?: number;
}) =>
  pipe(
    TakeFirstOperator.create<T>,
    partial(options?.count),
    Observable_lift(),
  )) as Observable.Signature["takeFirst"];

export default Observable_takeFirst;
