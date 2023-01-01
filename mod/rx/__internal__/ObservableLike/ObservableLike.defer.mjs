/// <reference types="./ObservableLike.defer.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';

const ObservableLike__defer = (factory, isEnumerable = false, isRunnable = false) => ObservableLike__create(observer => {
    factory()[ReactiveContainerLike_sinkInto](observer);
}, isEnumerable, isRunnable);

export { ObservableLike__defer as default };
