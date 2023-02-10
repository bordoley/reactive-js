/// <reference types="./EnumerableObservable.switchAll.d.ts" />
import HigherOrderObservable_switchAll from '../../__internal__/HigherOrderObservable/HigherOrderObservable.switchAll.mjs';
import EnumerableObservable_lift from './EnumerableObservable.lift.mjs';

const EnumerableObservable_switchAll = 
/*@__PURE__*/ HigherOrderObservable_switchAll(EnumerableObservable_lift);

export { EnumerableObservable_switchAll as default };
