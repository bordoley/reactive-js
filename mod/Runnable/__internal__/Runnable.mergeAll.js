/// <reference types="./Runnable.mergeAll.d.ts" />

import Observable_liftRunnableBoundedPureObservableOperator from "../../Observable/__internal__/Observable.liftRunnableBoundedPureObservableOperator.js";
import Observer_createMergeAllObserverOperator from "../../Observer/__internal__/Observer.createMergeAllObserverOperator.js";
import { compose } from "../../functions.js";
const Runnable_mergeAll = /*@__PURE__*/ compose(Observer_createMergeAllObserverOperator, Observable_liftRunnableBoundedPureObservableOperator);
export default Runnable_mergeAll;
