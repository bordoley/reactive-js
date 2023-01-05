/// <reference types="./EnumerableObservableLike.switchAll.d.ts" />
import HigherOrderObservableLike__switchAll from '../HigherOrderObservableLike/HigherOrderObservableLike.switchAll.mjs';
import EnumerableObservableLike__lift from './EnumerableObservableLike.lift.mjs';

const EnumerableObservableLike__switchAll = 
/*@__PURE__*/ HigherOrderObservableLike__switchAll(EnumerableObservableLike__lift);

export { EnumerableObservableLike__switchAll as default };
