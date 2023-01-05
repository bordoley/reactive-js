/// <reference types="./ObservableLike.catchError.d.ts" />
import HigherOrderObservableLike__catchError from '../HigherOrderObservableLike/HigherOrderObservableLike.catchError.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';

const ObservableLike__catchError = 
/*@__PURE__*/ HigherOrderObservableLike__catchError(ObservableLike__lift());

export { ObservableLike__catchError as default };
