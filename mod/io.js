'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
require('./option.js');
require('./disposable.js');
require('./readonlyArray.js');
require('./enumerable.js');
require('./runnable.js');
require('./queues.js');
require('./scheduler.js');
var observable = require('./observable.js');
require('./env.js');
require('./dispatcher.js');
var streamable = require('./streamable.js');
var flowable = require('./flowable.js');

const notify = (data) => ({
    type: 1 /* Notify */,
    data,
});
const _done = { type: 2 /* Done */ };
const done = () => _done;
const decodeWithCharset = (charset = "utf-8", options) => functions.pipe(observable.withLatestFrom(observable.compute()(() => new TextDecoder(charset, options)), function* (ev, decoder) {
    switch (ev.type) {
        case 1 /* Notify */: {
            const data = decoder.decode(ev.data, { stream: true });
            if (data.length > 0) {
                yield notify(data);
            }
            break;
        }
        case 2 /* Done */: {
            const data = decoder.decode();
            if (data.length > 0) {
                yield notify(data);
            }
            yield done();
            break;
        }
    }
}), functions.composeWith(observable.map(functions.returns)), functions.composeWith(observable.concatMap(observable.fromIterator())), streamable.lift);
const _encodeUtf8 = streamable.withLatestFrom(observable.compute()(() => new TextEncoder()), (ev, textEncoder) => {
    switch (ev.type) {
        case 1 /* Notify */: {
            const data = textEncoder.encode(ev.data);
            return notify(data);
        }
        case 2 /* Done */: {
            return ev;
        }
    }
});
const encodeUtf8 = _encodeUtf8;
const map = (mapper) => streamable.map((ev) => ev.type === 1 /* Notify */ ? functions.pipe(ev.data, mapper, notify) : ev);
const _fromObservable = functions.compose(observable.map(notify), observable.endWith(done()), flowable.fromObservable());
const fromObservable = () => _fromObservable;
const fromArray = (options) => functions.compose(observable.fromArray(options), fromObservable());
const fromValue = (options) => v => fromArray(options)([v]);
const _empty = fromArray()([]);
const empty = () => _empty;

exports.decodeWithCharset = decodeWithCharset;
exports.done = done;
exports.empty = empty;
exports.encodeUtf8 = encodeUtf8;
exports.fromArray = fromArray;
exports.fromObservable = fromObservable;
exports.fromValue = fromValue;
exports.map = map;
exports.notify = notify;
