/// <reference types="./Observable.liftPure.d.ts" />

import Observable_lift from "./Observable.lift.js";
const Observable_liftPure = (enumeratorOperator, observerOperator) => Observable_lift(enumeratorOperator, observerOperator, true);
export default Observable_liftPure;
