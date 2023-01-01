/// <reference types="./ObservableLike.onSubscribe.d.ts" />
import ObservableLike__create from './ObservableLike.create.mjs';
import EnumerableObservableLike__create from '../EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import ObservableLike__isEnumerable from './ObservableLike.isEnumerable.mjs';
import ObservableLike__isRunnable from './ObservableLike.isRunnable.mjs';
import ReactiveContainerLike__onSink from '../ReactiveContainerLike/ReactiveContainerLike.onSink.mjs';
import RunnableObservableLike__create from '../RunnableObservableLike/RunnableObservableLike.create.mjs';

const ObservableLike__onSubscribe = (f) => (obs) => {
    return ReactiveContainerLike__onSink(onSink => ObservableLike__isEnumerable(obs)
        ? EnumerableObservableLike__create(onSink)
        : ObservableLike__isRunnable(obs)
            ? RunnableObservableLike__create(onSink)
            : ObservableLike__create(onSink), obs, f);
};

export { ObservableLike__onSubscribe as default };
