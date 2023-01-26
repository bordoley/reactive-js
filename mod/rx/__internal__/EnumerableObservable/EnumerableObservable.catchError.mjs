/// <reference types="./EnumerableObservable.catchError.d.ts" />
import HigherOrderObservable$catchError from '../HigherOrderObservable/HigherOrderObservable.catchError.mjs';
import EnumerableObservable$lift from './EnumerableObservable.lift.mjs';

const EnumerableObservable$catchError = 
/*@__PURE__*/ HigherOrderObservable$catchError(EnumerableObservable$lift);

export { EnumerableObservable$catchError as default };
