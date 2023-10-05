import { Equality, partial, pipe, strictEquality } from "../../../functions.js";
import Observer_createDistinctUntilChangedObserver from "../../Observer/__internal__/Observer.createDistinctUntilChangedObserver.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_distinctUntilChanged: PauseableObservable.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) => {
    const { equality = strictEquality } = options ?? {};
    return pipe(
      Observer_createDistinctUntilChangedObserver,
      partial(equality),
      PauseableObservable_lift<T, T>,
    );
  };

export default PauseableObservable_distinctUntilChanged;
