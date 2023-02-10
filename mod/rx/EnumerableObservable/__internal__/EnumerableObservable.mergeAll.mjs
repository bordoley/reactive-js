/// <reference types="./EnumerableObservable.mergeAll.d.ts" />
import HigherOrderObservable_mergeAll from '../../__internal__/HigherOrderObservable/HigherOrderObservable.mergeAll.mjs';
import EnumerableObservable_lift from './EnumerableObservable.lift.mjs';

const EnumerableObservable_mergeAll = 
/*@__PURE__*/ HigherOrderObservable_mergeAll(EnumerableObservable_lift);

export { EnumerableObservable_mergeAll as default };
