/// <reference types="./RunnableObservableLike.switchAll.d.ts" />
import HigherOrderObservableLike__switchAll from '../HigherOrderObservableLike/HigherOrderObservableLike.switchAll.mjs';
import RunnableObservableLike__lift from './RunnableObservableLike.lift.mjs';

const RunnableObservableLike__switchAll = 
/*@__PURE__*/ HigherOrderObservableLike__switchAll(RunnableObservableLike__lift);

export { RunnableObservableLike__switchAll as default };
