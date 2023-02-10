/// <reference types="./Observable.defer.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import Observable_create from './Observable.create.mjs';

const Observable_defer = (factory, isEnumerable = false, isRunnable = false) => Observable_create(observer => {
    factory()[ReactiveContainerLike_sinkInto](observer);
}, isEnumerable, isRunnable);

export { Observable_defer as default };
