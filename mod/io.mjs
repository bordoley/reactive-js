import { pipe, composeWith, returns, compose } from './functions.mjs';
import './option.mjs';
import './disposable.mjs';
import './readonlyArray.mjs';
import './enumerable.mjs';
import './runnable.mjs';
import './queues.mjs';
import './scheduler.mjs';
import { withLatestFrom, compute, map as map$1, concatMap, fromIterator, endWith, fromArray as fromArray$1 } from './observable.mjs';
import './env.mjs';
import './dispatcher.mjs';
import { lift, withLatestFrom as withLatestFrom$1, map as map$2 } from './streamable.mjs';
import { fromObservable as fromObservable$1 } from './flowable.mjs';

const notify = (data) => ({
    type: 1 /* Notify */,
    data,
});
const _done = { type: 2 /* Done */ };
const done = () => _done;
const decodeWithCharset = (charset = "utf-8", options) => pipe(withLatestFrom(compute()(() => new TextDecoder(charset, options)), function* (ev, decoder) {
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
}), composeWith(map$1(returns)), composeWith(concatMap(fromIterator())), lift);
const _encodeUtf8 = withLatestFrom$1(compute()(() => new TextEncoder()), (ev, textEncoder) => {
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
const map = (mapper) => map$2((ev) => ev.type === 1 /* Notify */ ? pipe(ev.data, mapper, notify) : ev);
const _fromObservable = compose(map$1(notify), endWith(done()), fromObservable$1());
const fromObservable = () => _fromObservable;
const fromArray = (options) => compose(fromArray$1(options), fromObservable());
const fromValue = (options) => v => fromArray(options)([v]);
const _empty = fromArray()([]);
const empty = () => _empty;

export { decodeWithCharset, done, empty, encodeUtf8, fromArray, fromObservable, fromValue, map, notify };
