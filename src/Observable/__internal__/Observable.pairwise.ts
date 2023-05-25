import Enumerator_pairwise from "../../Enumerator/__internal__/Enumerator.pairwise.js";
import type * as Observable from "../../Observable.js";
import Observer_createPairwiseObserver from "../../Observer/__internal__/Observer.createPairwiseObserver.js";
import Observable_liftPureObservableOperator from "./Observable.liftPureObservableOperator.js";

const Observable_pairwise: Observable.Signature["pairwise"] = <T>() =>
  Observable_liftPureObservableOperator<T, readonly T[]>(
    Enumerator_pairwise<T>(),
    Observer_createPairwiseObserver<T>,
  );

export default Observable_pairwise;
