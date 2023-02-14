/// <reference types="./Observable.throttle.d.ts" />
import HigherOrderObservable_throttle from '../../__internal__/HigherOrderObservable/HigherOrderObservable.throttle.mjs';
import Observable_fromReadonlyArray from './Observable.fromReadonlyArray.mjs';
import Observable_lift from './Observable.lift.mjs';

const Observable_throttle = /*@__PURE__*/ (() => HigherOrderObservable_throttle(Observable_fromReadonlyArray, Observable_lift(false, false)))();

export { Observable_throttle as default };
