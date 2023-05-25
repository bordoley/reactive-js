import Enumerator_forEach from "../../Enumerator/__internal__/Enumerator.forEach.js";
import type * as Observable from "../../Observable.js";
import Observer_createForEachObserver from "../../Observer/__internal__/Observer.createForEachObserver.js";
import { SideEffect1, partial, pipe } from "../../functions.js";
import Observable_liftObservableOperatorWithSideEffects from "./Observable.liftObservableOperatorWithSideEffects.js";

const Observable_forEach: Observable.Signature["forEach"] = <T>(
  effect: SideEffect1<T>,
) => {
  const op = pipe(Observer_createForEachObserver<T>, partial(effect));

  return Observable_liftObservableOperatorWithSideEffects(
    Enumerator_forEach(effect),
    op,
  );
};

export default Observable_forEach;
