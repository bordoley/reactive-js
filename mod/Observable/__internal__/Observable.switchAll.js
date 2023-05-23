/// <reference types="./Observable.switchAll.d.ts" />

import Observer_createSwitchAllObserver from "../../Observer/__internal__/Observer.createSwitchAllObserver.js";
import { returns } from "../../functions.js";
import Observable_liftDeferredObservableUpperBounded from "./Observable.liftDeferredObservableUpperBounded.js";
const Observable_switchAll = 
/*@__PURE__*/ returns(Observable_liftDeferredObservableUpperBounded(Observer_createSwitchAllObserver));
export default Observable_switchAll;
