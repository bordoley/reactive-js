import Enumerator_keep from "../../Enumerator/__internal__/Enumerator.keep.js";
import type * as Observable from "../../Observable.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import {
  Function1,
  alwaysFalse,
  partial,
  pipe,
  returns,
} from "../../functions.js";
import { EnumeratorLike, ObservableLike } from "../../types.js";
import Observable_empty from "./Observable.empty.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isPure from "./Observable.isPure.js";
import Observable_liftPureObservableOperator from "./Observable.liftPureObservableOperator.js";

const Observable_ignoreElements: Observable.Signature["ignoreElements"] =
  /*@__PURE__*/ (<T>() => {
    const enumeratorOp = Enumerator_keep(alwaysFalse) as Function1<
      EnumeratorLike<unknown>,
      EnumeratorLike<T>
    >;

    const op = pipe(Observer_createKeepObserver<T>, partial(alwaysFalse));

    const pureLift = Observable_liftPureObservableOperator(enumeratorOp, op);

    return returns((obs: ObservableLike<T>) => {
      const isPure = Observable_isPure(obs);
      const isEnumerable = Observable_isEnumerable(obs);

      return isPure && isEnumerable ? Observable_empty() : pureLift(obs);
    });
  })() as Observable.Signature["ignoreElements"];

export default Observable_ignoreElements;
