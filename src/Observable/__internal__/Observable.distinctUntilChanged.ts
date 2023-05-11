import type * as Observable from "../../Observable.js";
import Observer_createDistinctUntilChangedObserver from "../../Observer/__internal__/Observer.createDistinctUntilChangedObserver.js";
import { Equality, partial, pipe, strictEquality } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";

const Observable_distinctUntilChanged: Observable.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) => {
    const { equality = strictEquality } = options ?? {};
    return pipe(
      Observer_createDistinctUntilChangedObserver,
      partial(equality),
      Observable_liftEnumerableUpperBounded,
    );
  };

export default Observable_distinctUntilChanged;
