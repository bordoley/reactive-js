import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as SkipFirst from "../../__internal__/operators/SkipFirst.js";
import Observable_lift from "./Observable.lift.js";

const Observable_skipFirst: Observable.Signature["skipFirst"] = <T>(options?: {
  count?: number;
}) =>
  pipe(
    SkipFirst.createObserver,
    partial(options?.count),
    Observable_lift<T, T>(),
  );

export default Observable_skipFirst;
