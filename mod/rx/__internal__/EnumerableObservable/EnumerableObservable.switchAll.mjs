/// <reference types="./EnumerableObservable.switchAll.d.ts" />
import HigherOrderObservable$switchAll from '../HigherOrderObservable/HigherOrderObservable.switchAll.mjs';
import EnumerableObservable$lift from './EnumerableObservable.lift.mjs';

const EnumerableObservable$switchAll = 
/*@__PURE__*/ HigherOrderObservable$switchAll(EnumerableObservable$lift);

export { EnumerableObservable$switchAll as default };
