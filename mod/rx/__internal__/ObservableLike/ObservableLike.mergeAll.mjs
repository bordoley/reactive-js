/// <reference types="./ObservableLike.mergeAll.d.ts" />
import HigherOrderObservableLike__mergeAll from '../HigherOrderObservableLike/HigherOrderObservableLike.mergeAll.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';

const ObservableLike__mergeAll = 
/*@__PURE__*/ HigherOrderObservableLike__mergeAll(ObservableLike__lift());

export { ObservableLike__mergeAll as default };
