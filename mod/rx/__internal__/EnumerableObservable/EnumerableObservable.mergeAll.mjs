/// <reference types="./EnumerableObservable.mergeAll.d.ts" />
import HigherOrderObservable$mergeAll from '../HigherOrderObservable/HigherOrderObservable.mergeAll.mjs';
import EnumerableObservable$lift from './EnumerableObservable.lift.mjs';

const EnumerableObservable$mergeAll = 
/*@__PURE__*/ HigherOrderObservable$mergeAll(EnumerableObservable$lift);

export { EnumerableObservable$mergeAll as default };
