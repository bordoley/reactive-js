/// <reference types="./Promiseable.d.ts" />
import Observable_toPromise from '../rx/__internal__/Observable/Observable.toPromise.mjs';
import Promiseable_toObservable from './__internal__/Promiseable/Promiseable.toObservable.mjs';

const fromObservable = Observable_toPromise;
const toObservable = Promiseable_toObservable;
/** @ignore */
const Promiseable = {
    fromObservable,
    toObservable,
};

export { Promiseable as default, fromObservable, toObservable };
