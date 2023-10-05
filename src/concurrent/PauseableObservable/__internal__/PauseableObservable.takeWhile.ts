import { Predicate, partial, pipe } from "../../../functions.js";
import Observer_createTakeWhileObserver from "../../Observer/__internal__/Observer.createTakeWhileObserver.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_takeWhile: PauseableObservable.Signature["takeWhile"] =
  <T>(
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ) => {
    const { inclusive = false } = options;
    return pipe(
      Observer_createTakeWhileObserver,
      partial(predicate, inclusive),
      PauseableObservable_lift<T, T>,
    );
  };

export default PauseableObservable_takeWhile;
