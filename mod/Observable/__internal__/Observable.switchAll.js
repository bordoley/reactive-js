/// <reference types="./Observable.switchAll.d.ts" />

import Observer_createSwitchAllObserver from "../../Observer/__internal__/Observer.createSwitchAllObserver.js";
import { returns } from "../../functions.js";
import Observable_liftDeferredObservableBoundedObservableOperatorWithSideEffects from "./Observable.liftDeferredObservableBoundedObservableOperatorWithSideEffects.js";
const Observable_switchAll = 
/*@__PURE__*/ returns(Observable_liftDeferredObservableBoundedObservableOperatorWithSideEffects(Observer_createSwitchAllObserver));
export default Observable_switchAll;
