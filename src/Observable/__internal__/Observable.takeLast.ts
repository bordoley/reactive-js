import Enumerator_takeLast from "../../Enumerator/__internal__/Enumerator.takeLast.js";
import type * as Observable from "../../Observable.js";
import Observer_createTakeLastObserver from "../../Observer/__internal__/Observer.createTakeLastObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_takeLast: Observable.Signature["takeLast"] = (
  options: { readonly count?: number } = {},
) => {
  const count = clampPositiveInteger(options.count ?? 1);
  const op = pipe(Observer_createTakeLastObserver, partial(count));

  return Observable_liftPure(Enumerator_takeLast(count), op);
};

export default Observable_takeLast;
