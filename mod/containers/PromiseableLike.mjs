/// <reference types="./PromiseableLike.d.ts" />
import ObservableLike__toPromise from '../rx/__internal__/ObservableLike/ObservableLike.toPromise.mjs';
import PromiseableLike__toObservable from './__internal__/PromiseableLike/PromiseableLike.toObservable.mjs';

const fromObservable = ObservableLike__toPromise;
const toObservable = PromiseableLike__toObservable;

export { fromObservable, toObservable };
