import { pipe, defer } from './functions.mjs';
import { none, isSome } from './option.mjs';
import { dispose } from './disposable.mjs';
import { subscribe as subscribe$1 } from './observable.mjs';
import { onNotify, stream as stream$1 } from './streamable.mjs';
import { onMount, onDestroy } from 'svelte';
import { writable } from 'svelte/store';

class ObservableSvelteStore {
    constructor(observable, scheduler) {
        this.observable = observable;
        this.scheduler = scheduler;
    }
    subscribe(callback) {
        callback(none);
        const subscription = pipe(this.observable, onNotify(callback), subscribe$1(this.scheduler));
        return defer(subscription, dispose);
    }
}
const subscribe = (scheduler) => obs => new ObservableSvelteStore(obs, scheduler);
const stream = (scheduler, options = {}) => streamable => {
    const store = writable(none);
    const liftedStreamable = pipe(streamable, onNotify(v => store.set(v)));
    let stream = none;
    onMount(() => {
        stream = pipe(liftedStreamable, stream$1(scheduler, options));
    });
    onDestroy(() => {
        if (isSome(stream)) {
            pipe(stream, dispose());
        }
    });
    const dispatch = (req) => {
        if (isSome(stream)) {
            stream.dispatch(req);
        }
    };
    return [store, dispatch];
};

export { stream, subscribe };
