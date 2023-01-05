/// <reference types="./ObservableLike.switchAll.d.ts" />
import HigherOrderObservableLike__switchAll from '../HigherOrderObservableLike/HigherOrderObservableLike.switchAll.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';

const ObservableLike__switchAll = 
/*@__PURE__*/ HigherOrderObservableLike__switchAll(ObservableLike__lift());

export { ObservableLike__switchAll as default };
