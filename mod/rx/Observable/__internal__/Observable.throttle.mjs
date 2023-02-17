/// <reference types="./Observable.throttle.d.ts" />
import ReadonlyArray_toRunnableObservable from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.mjs';
import HigherOrderObservable_throttle from '../../__internal__/HigherOrderObservable/HigherOrderObservable.throttle.mjs';
import Observable_lift from './Observable.lift.mjs';

const Observable_throttle = /*@__PURE__*/ (() => HigherOrderObservable_throttle(ReadonlyArray_toRunnableObservable, Observable_lift(false, false)))();

export { Observable_throttle as default };
