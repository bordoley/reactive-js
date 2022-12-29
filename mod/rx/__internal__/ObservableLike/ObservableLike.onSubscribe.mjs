/// <reference types="./ObservableLike.onSubscribe.d.ts" />
import { createEnumerableObservable, createRunnableObservable, createObservable } from '../../../__internal__/rx/ObservableLike.create.mjs';
import isEnumerable from './ObservableLike.isEnumerable.mjs';
import isRunnable from './ObservableLike.isRunnable.mjs';
import onSink from '../ReactiveContainerLike/ReactiveContainerLike.onSink.mjs';

const onSubscribe = (f) => (obs) => {
    return onSink(onSink => isEnumerable(obs)
        ? createEnumerableObservable(onSink)
        : isRunnable(obs)
            ? createRunnableObservable(onSink)
            : createObservable(onSink), obs, f);
};

export { onSubscribe as default };
