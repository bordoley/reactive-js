/// <reference types="./EnumerableObservableLike.mergeAll.d.ts" />
import HigherOrderObservableLike__mergeAll from '../HigherOrderObservableLike/HigherOrderObservableLike.mergeAll.mjs';
import EnumerableObservableLike__lift from './EnumerableObservableLike.lift.mjs';

const EnumerableObservableLike__mergeAll = 
/*@__PURE__*/ HigherOrderObservableLike__mergeAll(EnumerableObservableLike__lift);

export { EnumerableObservableLike__mergeAll as default };
