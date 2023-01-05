/// <reference types="./EnumerableObservableLike.catchError.d.ts" />
import HigherOrderObservableLike__catchError from '../HigherOrderObservableLike/HigherOrderObservableLike.catchError.mjs';
import EnumerableObservableLike__lift from './EnumerableObservableLike.lift.mjs';

const EnumerableObservableLike__catchError = 
/*@__PURE__*/ HigherOrderObservableLike__catchError(EnumerableObservableLike__lift);

export { EnumerableObservableLike__catchError as default };
