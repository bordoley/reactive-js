/// <reference types="./Observable.onSubscribe.d.ts" />
import Observable$create from './Observable.create.mjs';
import EnumerableObservable$create from '../EnumerableObservable/EnumerableObservable.create.mjs';
import Observable$isEnumerable from './Observable.isEnumerable.mjs';
import Observable$isRunnable from './Observable.isRunnable.mjs';
import ReactiveContainer$onSink from '../ReactiveContainer/ReactiveContainer.onSink.mjs';
import RunnableObservable$create from '../RunnableObservable/RunnableObservable.create.mjs';

const Observable$onSubscribe = (f) => (obs) => {
    return ReactiveContainer$onSink(onSink => Observable$isEnumerable(obs)
        ? EnumerableObservable$create(onSink)
        : Observable$isRunnable(obs)
            ? RunnableObservable$create(onSink)
            : Observable$create(onSink), obs, f);
};

export { Observable$onSubscribe as default };
