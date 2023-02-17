/// <reference types="./RunnableObservableLike.throttle.d.ts" />
import ReadonlyArray_toRunnableObservable from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.mjs';
import HigherOrderObservable_throttle from '../../__internal__/HigherOrderObservable/HigherOrderObservable.throttle.mjs';
import RunnableObservable_lift from './RunnableObservable.lift.mjs';

const RunnableObservable_throttle = 
/*@__PURE__*/ (() => HigherOrderObservable_throttle(ReadonlyArray_toRunnableObservable, RunnableObservable_lift))();

export { RunnableObservable_throttle as default };
