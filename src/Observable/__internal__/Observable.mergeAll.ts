import type * as Observable from "../../Observable.js";
import Observer_createMergeAllObserverOperator from "../../Observer/__internal__/Observer.createMergeAllObserverOperator.js";
import { compose } from "../../functions.js";
import Observable_liftDeferredObservableBoundedObservableOperatorWithSideEffects from "./Observable.liftDeferredObservableBoundedObservableOperatorWithSideEffects.js";

const Observable_mergeAll: Observable.Signature["mergeAll"] =
  /*@__PURE__*/ compose(
    Observer_createMergeAllObserverOperator,
    Observable_liftDeferredObservableBoundedObservableOperatorWithSideEffects,
  );

export default Observable_mergeAll;
