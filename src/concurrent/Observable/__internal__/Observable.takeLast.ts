import { clampPositiveInteger } from "../../../__internal__/math.js";
import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createTakeLastObserver from "../../Observer/__internal__/Observer.createTakeLastObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_takeLast: Observable.Signature["takeLast"] = (
  options: { readonly count?: number } = {},
) =>
  pipe(
    Observer_createTakeLastObserver,
    partial(clampPositiveInteger(options.count ?? 1)),
    Observable_liftPure,
  );

export default Observable_takeLast;
