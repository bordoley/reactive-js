/// <reference types="./Iterable.toFlowable.d.ts" />
import { compose } from '../../../functions.mjs';
import RunnableObservable_toFlowable from '../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable.mjs';
import Iterable_toRunnableObservable from './Iterable.toRunnableObservable.mjs';

const Iterable_toFlowable = options => compose(Iterable_toRunnableObservable(options), RunnableObservable_toFlowable());

export { Iterable_toFlowable as default };
