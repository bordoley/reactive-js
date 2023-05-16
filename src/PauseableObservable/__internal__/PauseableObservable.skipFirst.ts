import Observer_createSkipFirstObserver from "../../Observer/__internal__/Observer.createSkipFirstObserver.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import { PauseableObservableLike } from "../../types.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_skipFirst: PauseableObservable.Signature["skipFirst"] =
  <T>(options: { readonly count?: number } = {}) => {
    const count = clampPositiveInteger(options?.count ?? 1);
    const op = pipe(
      Observer_createSkipFirstObserver<T>,
      partial(count),
      PauseableObservable_lift,
    );
    return (obs: PauseableObservableLike<T>) => (count > 0 ? op(obs) : obs);
  };

export default PauseableObservable_skipFirst;
