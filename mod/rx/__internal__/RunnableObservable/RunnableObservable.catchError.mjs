/// <reference types="./RunnableObservable.catchError.d.ts" />
import HigherOrderObservable$catchError from '../HigherOrderObservable/HigherOrderObservable.catchError.mjs';
import RunnableObservable$lift from './RunnableObservable.lift.mjs';

const RunnableObservable$catchError = 
/*@__PURE__*/ HigherOrderObservable$catchError(RunnableObservable$lift);

export { RunnableObservable$catchError as default };
