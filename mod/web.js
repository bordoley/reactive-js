'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var disposable = require('./disposable.js');
var readonlyArray = require('./readonlyArray.js');
require('./enumerable.js');
require('./runnable.js');
require('./queues.js');
require('./scheduler.js');
var observable = require('./observable.js');
require('./env.js');
require('./dispatcher.js');
var streamable = require('./streamable.js');
var relativeURI = require('./relativeURI.js');
var stateStore = require('./stateStore.js');

const fromEvent = (target, eventName, selector) => observable.createObservable(dispatcher => {
    const listener = (event) => {
        try {
            const result = selector(event);
            dispatcher.dispatch(result);
        }
        catch (cause) {
            functions.pipe(dispatcher, disposable.dispose({ cause }));
        }
    };
    target.addEventListener(eventName, listener, { passive: true });
    disposable.addTeardown(dispatcher, () => {
        target.removeEventListener(eventName, listener);
    });
});

const reservedEvents = ["error", "open"];
const createEventSource = (url, options = {}) => {
    const { events: eventsOption = ["message"] } = options;
    const events = functions.pipe(eventsOption, readonlyArray.keep(x => !reservedEvents.includes(x)));
    const requestURL = url instanceof URL ? url.toString() : url;
    return observable.createObservable(dispatcher => {
        const eventSource = new EventSource(requestURL, options);
        const listener = (ev) => {
            var _a, _b, _c;
            dispatcher.dispatch({
                id: (_a = ev.lastEventId) !== null && _a !== void 0 ? _a : "",
                type: (_b = ev.type) !== null && _b !== void 0 ? _b : "",
                data: (_c = ev.data) !== null && _c !== void 0 ? _c : "",
            });
        };
        disposable.addTeardown(dispatcher, _ => {
            for (const ev of events) {
                eventSource.removeEventListener(ev, listener);
            }
            eventSource.close();
        });
        for (const ev of events) {
            eventSource.addEventListener(ev, listener);
        }
    });
};

const getCurrentLocation = (_) => window.location.href;
const pushHistoryState = (newLocation) => {
    const currentLocation = getCurrentLocation();
    if (currentLocation !== newLocation) {
        window.history.pushState(option.none, "", newLocation);
    }
};
const historyFunction = functions.compose(observable.throttle(15), observable.onNotify(pushHistoryState), observable.mergeWith(functions.pipe(getCurrentLocation, observable.compute(), observable.concatWith(fromEvent(window, "popstate", getCurrentLocation)))));
const requestMapper = (stateUpdater) => (prevStateString) => {
    const prevStateURI = relativeURI.fromHref(prevStateString);
    const newStateURI = stateUpdater(prevStateURI);
    return newStateURI === prevStateURI
        ? prevStateString
        : relativeURI.toHref(newStateURI, prevStateString);
};
const _historyStateStore = functions.pipe(streamable.createStreamable(historyFunction), stateStore.toStateStore(), streamable.mapReq(requestMapper), streamable.map(relativeURI.fromHref));
const historyStateStore = _historyStateStore;

const globalFetch = self.fetch;
const fetch = (onResponse) => fetchRequest => observable.defer(() => async (observer) => {
    const abortController = new AbortController();
    disposable.addTeardown(observer, () => abortController.abort());
    let request = option.none;
    if (typeof fetchRequest === "string") {
        request = fetchRequest;
    }
    else {
        const { uri, ...requestInit } = fetchRequest;
        request = new Request(uri, requestInit);
    }
    // This try/catch is necessary because we await in the try block.
    try {
        const response = await globalFetch(request, {
            signal: abortController.signal,
        });
        const onResponseResult = onResponse(response);
        const resultObs = onResponseResult instanceof Promise
            ? observable.fromPromise(functions.returns(onResponseResult))
            : onResponseResult;
        functions.pipe(resultObs, observable.observe(observer));
    }
    catch (cause) {
        functions.pipe(observer, disposable.dispose({ cause }));
    }
});

exports.createEventSource = createEventSource;
exports.fetch = fetch;
exports.fromEvent = fromEvent;
exports.historyStateStore = historyStateStore;
