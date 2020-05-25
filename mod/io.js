import { fromObservable as fromObservableFlowable, } from "./flowable.js";
import { compose, pipe, returns, composeWith } from "./functions.js";
import { endWith } from "./internal/observable/endWith.js";
import { map as mapObs, withLatestFrom as withLatestFromObs, compute, concatMap, fromIterator, fromArray as fromArrayObs, } from "./observable.js";
import { map as mapStream, lift, withLatestFrom, } from "./streamable.js";
export const notify = (data) => ({
    type: 1,
    data,
});
const _done = { type: 2 };
export const done = () => _done;
export const decodeWithCharset = (charset = "utf-8", options) => pipe(withLatestFromObs(compute()(() => new TextDecoder(charset, options)), function* (ev, decoder) {
    switch (ev.type) {
        case 1: {
            const data = decoder.decode(ev.data, { stream: true });
            if (data.length > 0) {
                yield notify(data);
            }
            break;
        }
        case 2: {
            const data = decoder.decode();
            if (data.length > 0) {
                yield notify(data);
            }
            yield done();
            break;
        }
    }
}), composeWith(mapObs(returns)), composeWith(concatMap(fromIterator())), lift);
const _encodeUtf8 = withLatestFrom(compute()(() => new TextEncoder()), (ev, textEncoder) => {
    switch (ev.type) {
        case 1: {
            const data = textEncoder.encode(ev.data);
            return notify(data);
        }
        case 2: {
            return ev;
        }
    }
});
export const encodeUtf8 = _encodeUtf8;
export const map = (mapper) => mapStream((ev) => ev.type === 1 ? pipe(ev.data, mapper, notify) : ev);
const _fromObservable = compose(mapObs(notify), endWith(done()), fromObservableFlowable());
export const fromObservable = () => _fromObservable;
export const fromArray = (options = { startIndex: 0 }) => compose(fromArrayObs(options), fromObservable());
const _fromValue = (v) => pipe([v], fromArray());
export const fromValue = () => _fromValue;
const _empty = fromArray()([]);
export const empty = () => _empty;
