import { fromObservable as fromObservableFlowable, } from "./flowable.js";
import { compose, pipe, returns, composeWith } from "./functions.js";
import { map as mapObs, withLatestFrom as withLatestFromObs, compute, concatMap, fromIterator, fromArray as fromArrayObs, } from "./observable.js";
import { map as mapStream, lift, withLatestFrom, } from "./streamable.js";
import { endWith } from "./internal/observable/endWith.js";
export const next = (data) => ({
    type: 1,
    data,
});
const _complete = { type: 2 };
export const complete = () => _complete;
export const decodeWithCharset = (charset = "utf-8", options) => pipe(withLatestFromObs(compute()(() => new TextDecoder(charset, options)), function* (ev, decoder) {
    switch (ev.type) {
        case 1: {
            const data = decoder.decode(ev.data, { stream: true });
            if (data.length > 0) {
                yield next(data);
            }
            break;
        }
        case 2: {
            const data = decoder.decode();
            if (data.length > 0) {
                yield next(data);
            }
            yield complete();
            break;
        }
    }
}), composeWith(mapObs(returns)), composeWith(concatMap(fromIterator())), lift);
const _encodeUtf8 = withLatestFrom(compute()(() => new TextEncoder()), (ev, textEncoder) => {
    switch (ev.type) {
        case 1: {
            const data = textEncoder.encode(ev.data);
            return next(data);
        }
        case 2: {
            return ev;
        }
    }
});
export const encodeUtf8 = _encodeUtf8;
export const map = (mapper) => mapStream((ev) => ev.type === 1 ? pipe(ev.data, mapper, next) : ev);
const _fromObservable = compose(mapObs(next), endWith(complete()), fromObservableFlowable());
export const fromObservable = () => _fromObservable;
const _fromArray = compose(fromArrayObs(), fromObservable());
export const fromArray = () => _fromArray;
const _fromValue = (v) => pipe([v], fromArray());
export const fromValue = () => _fromValue;
const _empty = _fromArray([]);
export const empty = () => _empty;
