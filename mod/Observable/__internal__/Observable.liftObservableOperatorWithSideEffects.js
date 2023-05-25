/// <reference types="./Observable.liftObservableOperatorWithSideEffects.d.ts" />

import Observable_liftObservableOperator from "./Observable.liftObservableOperator.js";
const Observable_liftObservableOperatorWithSideEffects = (enumeratorOperator, observerOperator) => Observable_liftObservableOperator(enumeratorOperator, observerOperator, false);
export default Observable_liftObservableOperatorWithSideEffects;
