/// <reference types="./Observable.onSubscribe.d.ts" />
import Observable_create from './Observable.create.mjs';
import ReactiveContainer_onSink from '../../ReactiveContainer/__internal__/ReactiveContainer.onSink.mjs';

const Observable_onSubscribe = (f) => (obs) => {
    return ReactiveContainer_onSink(Observable_create, obs, f);
};

export { Observable_onSubscribe as default };
