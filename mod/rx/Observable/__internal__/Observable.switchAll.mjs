/// <reference types="./Observable.switchAll.d.ts" />
import HigherOrderObservable_switchAll from '../../__internal__/HigherOrderObservable/HigherOrderObservable.switchAll.mjs';
import Observable_lift from './Observable.lift.mjs';

const Observable_switchAll = 
/*@__PURE__*/ HigherOrderObservable_switchAll(Observable_lift());

export { Observable_switchAll as default };
