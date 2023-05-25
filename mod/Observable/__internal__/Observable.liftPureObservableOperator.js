/// <reference types="./Observable.liftPureObservableOperator.d.ts" />

import Observable_liftObservableOperator from "./Observable.liftObservableOperator.js";
const Observable_liftPureObservableOperator = (enumeratorOperator, observerOperator) => Observable_liftObservableOperator(enumeratorOperator, observerOperator, true);
export default Observable_liftPureObservableOperator;
