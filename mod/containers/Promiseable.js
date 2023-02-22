/// <reference types="./Promiseable.d.ts" />

import Observable_toPromise from "../rx/Observable/__internal__/Observable.toPromise.js";
import Promiseable_toObservable from "./Promiseable/__internal__/Promiseable.toObservable.js";
/**
 * @category Constructor
 */
export const fromObservable = Observable_toPromise;
export const toObservable = Promiseable_toObservable;
/** @ignore */
const Promiseable = {
    fromObservable,
    toObservable,
};
export default Promiseable;
