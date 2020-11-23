'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var disposable = require('./disposable.js');
var observable = require('./observable.js');
var streamable = require('./streamable.js');
var svelte = require('svelte');
var store = require('svelte/store');

class ObservableSvelteStore {
    constructor(observable, scheduler) {
        this.observable = observable;
        this.scheduler = scheduler;
    }
    subscribe(callback) {
        callback(option.none);
        const subscription = functions.pipe(this.observable, streamable.onNotify(callback), observable.subscribe(this.scheduler));
        return functions.defer(subscription, disposable.dispose);
    }
}
const subscribe = (scheduler) => obs => new ObservableSvelteStore(obs, scheduler);
const stream = (scheduler, options = {}) => streamable$1 => {
    const store$1 = store.writable(option.none);
    const liftedStreamable = functions.pipe(streamable$1, streamable.onNotify(v => store$1.set(v)));
    let stream = option.none;
    svelte.onMount(() => {
        stream = functions.pipe(liftedStreamable, streamable.stream(scheduler, options));
    });
    svelte.onDestroy(() => {
        if (option.isSome(stream)) {
            functions.pipe(stream, disposable.dispose());
        }
    });
    const dispatch = (req) => {
        if (option.isSome(stream)) {
            stream.dispatch(req);
        }
    };
    return [store$1, dispatch];
};

exports.stream = stream;
exports.subscribe = subscribe;
