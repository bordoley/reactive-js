import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Enumerator_createWithDelegate from "../../Enumerator/__internal__/Enumerator.createWithDelegate.js";
import Enumerator_forEach from "../../Enumerator/__internal__/Enumerator.forEach.js";
import type * as Observable from "../../Observable.js";
import Observer_createThrowIfEmptyObserver from "../../Observer/__internal__/Observer.createThrowIfEmptyObserver.js";
import {
  Factory,
  Optional,
  error,
  none,
  partial,
  pipe,
} from "../../functions.js";
import { DisposableLike_dispose, EnumeratorLike } from "../../types.js";
import Observable_liftPureObservableOperator from "./Observable.liftPureObservableOperator.js";

const Observable_throwIfEmpty: Observable.Signature["throwIfEmpty"] = (<T>(
  factory: Factory<unknown>,
) => {
  const createThrowIfEmptyEnumerator = (enumerator: EnumeratorLike<T>) => {
    let hasValue = false;

    const throwIfEmptyEnumerator = pipe(
      enumerator,
      Enumerator_forEach(_ => {
        hasValue = true;
      }),
      Disposable_onComplete(() => {
        let err: Optional<Error> = none;

        if (!hasValue) {
          try {
            err = error(factory());
          } catch (e) {
            err = error(e);
          }
        }
        throwIfEmptyEnumerator[DisposableLike_dispose](err);
      }),
      Enumerator_createWithDelegate,
    );

    return throwIfEmptyEnumerator;
  };

  const op = pipe(Observer_createThrowIfEmptyObserver, partial(factory));

  return Observable_liftPureObservableOperator(
    createThrowIfEmptyEnumerator,
    op,
  );
}) as Observable.Signature["throwIfEmpty"];

export default Observable_throwIfEmpty;
