import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as TakeFirstMixin from "../../__internal__/operators/TakeFirst.js";
import Observable_lift from "./Observable.lift.js";

const Observable_takeFirst: Observable.Signature["takeFirst"] = <T>(options?: {
  count?: number;
}) =>
  pipe(
    TakeFirstMixin.createObserver,
    partial(options?.count),
    Observable_lift<T, T>(),
  );

export default Observable_takeFirst;
