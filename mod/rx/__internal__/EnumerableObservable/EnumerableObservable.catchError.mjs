/// <reference types="./EnumerableObservable.catchError.d.ts" />
import HigherOrderObservable_catchError from '../HigherOrderObservable/HigherOrderObservable.catchError.mjs';
import EnumerableObservable_lift from './EnumerableObservable.lift.mjs';

const EnumerableObservable_catchError = 
/*@__PURE__*/ HigherOrderObservable_catchError(EnumerableObservable_lift);

export { EnumerableObservable_catchError as default };
