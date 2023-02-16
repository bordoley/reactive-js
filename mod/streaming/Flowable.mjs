/// <reference types="./Flowable.d.ts" />
import ReadonlyArray_toRunnableObservable from '../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.mjs';
import { compose } from '../functions.mjs';
import RunnableObservable_toFlowable from '../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable.mjs';
import Flowable_toObservable from './Flowable/__internal__/Flowable.toObservable.mjs';

const fromReadonlyArray = o => compose(ReadonlyArray_toRunnableObservable(o), RunnableObservable_toFlowable());
const toObservable = Flowable_toObservable;
/** @ignore */
const Flowable = {
    fromReadonlyArray,
    toObservable,
};

export { Flowable as default, fromReadonlyArray, toObservable };
