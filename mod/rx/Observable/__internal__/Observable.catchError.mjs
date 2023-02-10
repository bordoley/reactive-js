/// <reference types="./Observable.catchError.d.ts" />
import HigherOrderObservable_catchError from '../../__internal__/HigherOrderObservable/HigherOrderObservable.catchError.mjs';
import Observable_lift from './Observable.lift.mjs';

const Observable_catchError = 
/*@__PURE__*/ HigherOrderObservable_catchError(Observable_lift());

export { Observable_catchError as default };
