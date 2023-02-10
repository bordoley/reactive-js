/// <reference types="./Observable.mergeAll.d.ts" />
import HigherOrderObservable_mergeAll from '../../__internal__/HigherOrderObservable/HigherOrderObservable.mergeAll.mjs';
import Observable_lift from './Observable.lift.mjs';

const Observable_mergeAll = /*@__PURE__*/ HigherOrderObservable_mergeAll(Observable_lift());

export { Observable_mergeAll as default };
