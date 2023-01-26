/// <reference types="./RunnableObservable.catchError.d.ts" />
import HigherOrderObservable_catchError from '../HigherOrderObservable/HigherOrderObservable.catchError.mjs';
import RunnableObservable_lift from './RunnableObservable.lift.mjs';

const RunnableObservable_catchError = 
/*@__PURE__*/ HigherOrderObservable_catchError(RunnableObservable_lift);

export { RunnableObservable_catchError as default };
