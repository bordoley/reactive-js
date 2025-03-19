import { partial, pipe } from "../../../functions.js";

import * as Observable from "../../Observable.js";
import * as TakeLast from "../../__internal__/operators/TakeLast.js";
import Observable_lift from "./Observable.lift.js";

const Observable_takeLast: Observable.Signature["takeLast"] = <T>(options?: {
  count?: number;
}) =>
  pipe(
    TakeLast.createObserver,
    partial(options?.count),
    Observable_lift<T, T>(),
  );

export default Observable_takeLast;
