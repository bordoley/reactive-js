/// <reference types="./Observable.mergeAll.d.ts" />
import HigherOrderObservable$mergeAll from '../HigherOrderObservable/HigherOrderObservable.mergeAll.mjs';
import Observable$lift from './Observable.lift.mjs';

const Observable$mergeAll = /*@__PURE__*/ HigherOrderObservable$mergeAll(Observable$lift());

export { Observable$mergeAll as default };
