/// <reference types="./ReadonlyArray.toFlowable.d.ts" />
import { compose } from '../../../functions.mjs';
import RunnableObservable_toFlowable from '../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable.mjs';
import ReadonlyArray_toRunnableObservable from './ReadonlyArray.toRunnableObservable.mjs';

const ReadonlyArray_toFlowable = options => compose(ReadonlyArray_toRunnableObservable(options), RunnableObservable_toFlowable());

export { ReadonlyArray_toFlowable as default };
