/// <reference types="./io.d.ts" />
import { pipe, composeWith, returns, compose } from './functions.mjs';
import { withLatestFrom, compute, map as map$1, concatMap, fromIterator, endWith, fromArray as fromArray$1, createSubject, using, takeWhile, keepType, reduce, subscribe, dispatchTo, createObservable } from './observable.mjs';
import { AbstractDisposable, addDisposableDisposeParentOnChildError, addDisposable } from './disposable.mjs';
import { lift, withLatestFrom as withLatestFrom$1, map as map$2, createStreamable, stream } from './streamable.mjs';
import { fromObservable as fromObservable$1 } from './flowable.mjs';

const notify = (data) => ({
    type: "notify",
    data,
});
const _done = { type: "done" };
const done = () => _done;
const decodeWithCharset = (charset = "utf-8", options) => pipe(withLatestFrom(compute()(() => new TextDecoder(charset, options)), function* (ev, decoder) {
    switch (ev.type) {
        case "notify": {
            const data = decoder.decode(ev.data, { stream: true });
            if (data.length > 0) {
                yield notify(data);
            }
            break;
        }
        case "done": {
            const data = decoder.decode();
            if (data.length > 0) {
                yield notify(data);
            }
            yield done();
            break;
        }
    }
}), composeWith(map$1(returns)), composeWith(concatMap(fromIterator())), lift);
const _encodeUtf8 = withLatestFrom$1(compute()(() => new TextEncoder()), (ev, textEncoder) => {
    switch (ev.type) {
        case "notify": {
            const data = textEncoder.encode(ev.data);
            return notify(data);
        }
        case "done": {
            return ev;
        }
    }
});
const encodeUtf8 = _encodeUtf8;
const map = (mapper) => map$2((ev) => ev.type === "notify" ? pipe(ev.data, mapper, notify) : ev);
const _fromObservable = compose(map$1(notify), endWith(done()), fromObservable$1());
const fromObservable = () => _fromObservable;
const fromArray = (options) => compose(fromArray$1(options), fromObservable());
const fromValue = (options) => v => fromArray(options)([v]);
const _empty = fromArray()([]);
const empty = () => _empty;
const isNotify = (ev) => ev.type === "notify";
class IOSinkAccumulatorImpl extends AbstractDisposable {
    constructor(reducer, initialValue, options) {
        super();
        this.isSynchronous = false;
        const subject = createSubject(options);
        addDisposableDisposeParentOnChildError(this, subject);
        const op = (events) => using(scheduler => pipe(events, takeWhile(isNotify), keepType(isNotify), map$1(ev => ev.data), reduce(reducer, initialValue), subscribe(scheduler, dispatchTo(subject))), eventsSubscription => createObservable(dispatcher => {
            dispatcher.dispatch("pause");
            dispatcher.dispatch("resume");
            addDisposable(eventsSubscription, dispatcher);
        }));
        this.streamable = createStreamable(op);
        this.subject = subject;
    }
    get observerCount() {
        return this.subject.observerCount;
    }
    observe(observer) {
        this.subject.observe(observer);
    }
    stream(scheduler, options) {
        const result = pipe(this.streamable, stream(scheduler, options));
        addDisposableDisposeParentOnChildError(this, result);
        return result;
    }
}
/** @experimental */
const createIOSinkAccumulator = (reducer, initialValue, options) => new IOSinkAccumulatorImpl(reducer, initialValue, options);

export { createIOSinkAccumulator, decodeWithCharset, done, empty, encodeUtf8, fromArray, fromObservable, fromValue, map, notify };
