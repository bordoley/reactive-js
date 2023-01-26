/// <reference types="./RunnableObservable.switchAll.d.ts" />
import HigherOrderObservable$switchAll from '../HigherOrderObservable/HigherOrderObservable.switchAll.mjs';
import RunnableObservable$lift from './RunnableObservable.lift.mjs';

const RunnableObservable$switchAll = 
/*@__PURE__*/ HigherOrderObservable$switchAll(RunnableObservable$lift);

export { RunnableObservable$switchAll as default };
