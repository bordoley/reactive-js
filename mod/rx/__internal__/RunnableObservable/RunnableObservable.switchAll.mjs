/// <reference types="./RunnableObservable.switchAll.d.ts" />
import HigherOrderObservable_switchAll from '../HigherOrderObservable/HigherOrderObservable.switchAll.mjs';
import RunnableObservable_lift from './RunnableObservable.lift.mjs';

const RunnableObservable_switchAll = 
/*@__PURE__*/ HigherOrderObservable_switchAll(RunnableObservable_lift);

export { RunnableObservable_switchAll as default };
