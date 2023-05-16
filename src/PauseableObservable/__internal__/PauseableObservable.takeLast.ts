import Observer_createTakeLastObserver from "../../Observer/__internal__/Observer.createTakeLastObserver.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_takeLast: PauseableObservable.Signature["takeLast"] =
  <T>(options: { readonly count?: number } = {}) => {
    const count = clampPositiveInteger(options.count ?? 1);
    return pipe(
      Observer_createTakeLastObserver,
      partial(count),
      PauseableObservable_lift<T, T>,
    );
  };

export default PauseableObservable_takeLast;
