/// <reference types="./ObservableLike.defer.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import create from './ObservableLike.create.mjs';

const defer = (factory, isEnumerable = false, isRunnable = false) => create(observer => {
    factory()[ReactiveContainerLike_sinkInto](observer);
}, isEnumerable, isRunnable);

export { defer as default };
