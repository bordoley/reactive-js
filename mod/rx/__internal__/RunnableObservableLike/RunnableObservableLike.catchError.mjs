/// <reference types="./RunnableObservableLike.catchError.d.ts" />
import HigherOrderObservableLike__catchError from '../HigherOrderObservableLike/HigherOrderObservableLike.catchError.mjs';
import RunnableObservableLike__lift from './RunnableObservableLike.lift.mjs';

const RunnableObservableLike__catchError = 
/*@__PURE__*/ HigherOrderObservableLike__catchError(RunnableObservableLike__lift);

export { RunnableObservableLike__catchError as default };
