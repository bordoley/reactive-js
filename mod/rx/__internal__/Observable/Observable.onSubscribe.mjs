/// <reference types="./Observable.onSubscribe.d.ts" />
import Observable_create from './Observable.create.mjs';
import EnumerableObservable_create from '../EnumerableObservable/EnumerableObservable.create.mjs';
import Observable_isEnumerable from './Observable.isEnumerable.mjs';
import Observable_isRunnable from './Observable.isRunnable.mjs';
import ReactiveContainer_onSink from '../ReactiveContainer/ReactiveContainer.onSink.mjs';
import RunnableObservable_create from '../RunnableObservable/RunnableObservable.create.mjs';

const Observable_onSubscribe = (f) => (obs) => {
    return ReactiveContainer_onSink(onSink => Observable_isEnumerable(obs)
        ? EnumerableObservable_create(onSink)
        : Observable_isRunnable(obs)
            ? RunnableObservable_create(onSink)
            : Observable_create(onSink), obs, f);
};

export { Observable_onSubscribe as default };
