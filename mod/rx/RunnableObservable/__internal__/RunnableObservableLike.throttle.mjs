/// <reference types="./RunnableObservableLike.throttle.d.ts" />
import Observable_fromReadonlyArray from '../../Observable/__internal__/Observable.fromReadonlyArray.mjs';
import HigherOrderObservable_throttle from '../../__internal__/HigherOrderObservable/HigherOrderObservable.throttle.mjs';
import RunnableObservable_lift from './RunnableObservable.lift.mjs';

const RunnableObservable_throttle = 
/*@__PURE__*/ (() => HigherOrderObservable_throttle(Observable_fromReadonlyArray, RunnableObservable_lift))();

export { RunnableObservable_throttle as default };
