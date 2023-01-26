/// <reference types="./Promiseable.d.ts" />
import Observable$toPromise from '../rx/__internal__/Observable/Observable.toPromise.mjs';
import Promiseable$toObservable from './__internal__/Promiseable/Promiseable.toObservable.mjs';

const fromObservable = Observable$toPromise;
const toObservable = Promiseable$toObservable;

export { fromObservable, toObservable };
