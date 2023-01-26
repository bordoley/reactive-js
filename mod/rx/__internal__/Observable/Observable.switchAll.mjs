/// <reference types="./Observable.switchAll.d.ts" />
import HigherOrderObservable$switchAll from '../HigherOrderObservable/HigherOrderObservable.switchAll.mjs';
import Observable$lift from './Observable.lift.mjs';

const Observable$switchAll = 
/*@__PURE__*/ HigherOrderObservable$switchAll(Observable$lift());

export { Observable$switchAll as default };
