/// <reference types="./Observable.liftWithSideEffects.d.ts" />

import Observable_lift from "./Observable.lift.js";
const Observable_liftWithSideEffects = (enumeratorOperator, observerOperator) => Observable_lift(enumeratorOperator, observerOperator, false);
export default Observable_liftWithSideEffects;
