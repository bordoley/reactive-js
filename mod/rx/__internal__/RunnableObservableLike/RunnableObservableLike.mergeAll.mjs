/// <reference types="./RunnableObservableLike.mergeAll.d.ts" />
import HigherOrderObservableLike__mergeAll from '../HigherOrderObservableLike/HigherOrderObservableLike.mergeAll.mjs';
import RunnableObservableLike__lift from './RunnableObservableLike.lift.mjs';

const RunnableObservableLike__mergeAll = /*@__PURE__*/ HigherOrderObservableLike__mergeAll(RunnableObservableLike__lift);

export { RunnableObservableLike__mergeAll as default };
