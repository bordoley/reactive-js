/// <reference types="./Observable.defer.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import Observable$create from './Observable.create.mjs';

const Observable$defer = (factory, isEnumerable = false, isRunnable = false) => Observable$create(observer => {
    factory()[ReactiveContainerLike_sinkInto](observer);
}, isEnumerable, isRunnable);

export { Observable$defer as default };
