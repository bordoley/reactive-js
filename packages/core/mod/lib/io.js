import { fromObservable } from "./flowable.js";
import { compose, pipe, returns, isEqualTo } from "./functions.js";
import { map as mapObs, mapTo, genMap, takeFirst, takeWhile, keep, withLatestFrom, compute, concatMap, fromIterator, fromArray as fromArrayObs, } from "./observable.js";
import { createStreamable, map as mapStream, lift, } from "./streamable.js";
import { endWith } from "./internal/observable/endWith.js";
export const next = (data) => ({
    type: 1,
    data,
});
const _complete = { type: 2 };
export const complete = () => _complete;
const _empty = createStreamable(compose(keep(isEqualTo(1)), takeWhile(isEqualTo(2), { inclusive: true }), mapTo(complete())));
export const empty = () => _empty;
const _fromValue = (data) => createStreamable(compose(keep(isEqualTo(1)), takeFirst(), genMap(function* (mode) {
    switch (mode) {
        case 1:
            yield next(data);
            yield complete();
    }
})));
export const fromValue = () => _fromValue;
export const map = (mapper) => mapStream((ev) => ev.type === 1 ? pipe(ev.data, mapper, next) : ev);
export const decodeWithCharset = (charset = "utf-8", options) => lift(compose(withLatestFrom(compute()(() => new TextDecoder(charset, options)), function* (ev, decoder) {
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
}), concatMap(compose(returns, fromIterator()))));
export const encodeUtf8 = lift(withLatestFrom(compute()(() => new TextEncoder()), (ev, textEncoder) => {
    switch (ev.type) {
        case 1: {
            const data = textEncoder.encode(ev.data);
            return next(data);
        }
        case 2: {
            return ev;
        }
    }
}));
export const fromArray = () => (arr) => pipe(arr, fromArrayObs(), mapObs(next), endWith(complete()), fromObservable());
