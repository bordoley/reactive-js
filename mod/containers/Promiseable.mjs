/// <reference types="./Promiseable.d.ts" />
import Observable_toPromise from '../rx/Observable/__internal__/Observable.toPromise.mjs';
import Promiseable_toObservable from './Promiseable/__internal__/Promiseable.toObservable.mjs';

const fromObservable = Observable_toPromise;
const toObservable = Promiseable_toObservable;
/** @ignore */
const Promiseable = {
    fromObservable,
    toObservable,
};

export { Promiseable as default, fromObservable, toObservable };
