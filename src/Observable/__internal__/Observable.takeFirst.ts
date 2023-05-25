import Enumerator_takeFirst from "../../Enumerator/__internal__/Enumerator.takeFirst.js";
import type * as Observable from "../../Observable.js";
import Observer_createTakeFirstObserver from "../../Observer/__internal__/Observer.createTakeFirstObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPureObservableOperator from "./Observable.liftPureObservableOperator.js";

const Observable_takeFirst: Observable.Signature["takeFirst"] = (
  options: { readonly count?: number } = {},
) => {
  const count = clampPositiveInteger(options.count ?? 1);
  const op = pipe(Observer_createTakeFirstObserver, partial(count));

  return Observable_liftPureObservableOperator(Enumerator_takeFirst(count), op);
};

export default Observable_takeFirst;
