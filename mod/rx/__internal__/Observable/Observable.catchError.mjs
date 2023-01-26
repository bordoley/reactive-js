/// <reference types="./Observable.catchError.d.ts" />
import HigherOrderObservable$catchError from '../HigherOrderObservable/HigherOrderObservable.catchError.mjs';
import Observable$lift from './Observable.lift.mjs';

const Observable$catchError = 
/*@__PURE__*/ HigherOrderObservable$catchError(Observable$lift());

export { Observable$catchError as default };
