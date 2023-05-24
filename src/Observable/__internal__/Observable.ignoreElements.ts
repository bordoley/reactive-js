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
import { EnumeratorLike } from "../../types.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";

const Observable_ignoreElements: Observable.Signature["ignoreElements"] =
  /*@__PURE__*/ (<T>() => {
    const enumeratorOp = Enumerator_keep(alwaysFalse) as Function1<
      EnumeratorLike<unknown>,
      EnumeratorLike<T>
    >;

    const op = pipe(Observer_createKeepObserver<T>, partial(alwaysFalse));

    return returns(Observable_liftWithSideEffects(enumeratorOp, op));
  })();

export default Observable_ignoreElements;
