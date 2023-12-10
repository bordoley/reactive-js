import { clampPositiveInteger } from "../../../__internal__/math.js";
import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createSkipFirstObserver from "../../Observer/__private__/Observer.createSkipFirstObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_skipFirst: Observable.Signature["skipFirst"] = (
  options: { readonly count?: number } = {},
) =>
  pipe(
    Observer_createSkipFirstObserver,
    partial(clampPositiveInteger(options.count ?? 1)),
    Observable_liftPure,
  );
export default Observable_skipFirst;
