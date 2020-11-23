'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
require('./option.js');
var disposable = require('./disposable.js');
require('./readonlyArray.js');
require('./enumerable.js');
require('./runnable.js');
require('./queues.js');
require('./scheduler.js');
var observable = require('./observable.js');
require('./env.js');
var dispatcher = require('./dispatcher.js');
var streamable = require('./streamable.js');

const isNotify = (ev) => ev.type === 1 /* Notify */;
class IOSinkAccumulatorImpl extends disposable.AbstractDisposable {
    constructor(reducer, initialValue, options) {
        super();
        this.isSynchronous = false;
        const subject = observable.createSubject(options);
        disposable.addDisposableDisposeParentOnChildError(this, subject);
        const op = (events) => observable.using(scheduler => functions.pipe(events, observable.takeWhile(isNotify), observable.keepType(isNotify), observable.map(ev => ev.data), observable.reduce(reducer, initialValue), observable.onNotify(dispatcher.dispatchTo(subject)), observable.subscribe(scheduler)), eventsSubscription => observable.createObservable(dispatcher => {
            dispatcher.dispatch(2 /* Pause */);
            dispatcher.dispatch(1 /* Resume */);
            disposable.addDisposable(eventsSubscription, dispatcher);
        }));
        this.streamable = streamable.createStreamable(op);
        this.subject = subject;
    }
    get observerCount() {
        return this.subject.observerCount;
    }
    observe(observer) {
        this.subject.observe(observer);
    }
    stream(scheduler, options) {
        const result = functions.pipe(this.streamable, streamable.stream(scheduler, options));
        disposable.addDisposableDisposeParentOnChildError(this, result);
        return result;
    }
}
/** @experimental */
const createIOSinkAccumulator = (reducer, initialValue, options) => new IOSinkAccumulatorImpl(reducer, initialValue, options);

exports.createIOSinkAccumulator = createIOSinkAccumulator;
