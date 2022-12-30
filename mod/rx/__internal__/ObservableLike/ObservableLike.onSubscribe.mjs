/// <reference types="./ObservableLike.onSubscribe.d.ts" />
import create$2 from './ObservableLike.create.mjs';
import create from '../EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import isEnumerable from './ObservableLike.isEnumerable.mjs';
import isRunnable from './ObservableLike.isRunnable.mjs';
import onSink from '../ReactiveContainerLike/ReactiveContainerLike.onSink.mjs';
import create$1 from '../RunnableObservableLike/RunnableObservableLike.create.mjs';

const onSubscribe = (f) => (obs) => {
    return onSink(onSink => isEnumerable(obs)
        ? create(onSink)
        : isRunnable(obs)
            ? create$1(onSink)
            : create$2(onSink), obs, f);
};

export { onSubscribe as default };
