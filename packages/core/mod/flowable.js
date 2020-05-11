import { compose, pipe, returns } from "./functions.js";
import { endWith, map as mapObs, mapTo, genMap, onNotify, subscribe, subscribeOn, takeFirst, takeWhile, using, keep, withLatestFrom, compute, concatMap, fromIterator, } from "./observable.js";
import { toPausableScheduler } from "./scheduler.js";
import { createStreamable, map as mapStream, lift, } from "./streamable.js";
export const next = (data) => ({
    type: 1,
    data,
});
const _complete = { type: 2 };
export const complete = () => _complete;
const _empty = createStreamable(compose(keep(mode => mode === 1), takeWhile(mode => mode !== 1, { inclusive: true }), mapTo(complete())));
export const empty = () => _empty;
export const fromValue = (data) => createStreamable(compose(keep(mode => mode === 1), takeFirst(), genMap(function* (mode) {
    switch (mode) {
        case 1:
            yield next(data);
            yield complete();
    }
})));
export const map = (mapper) => mapStream((ev) => ev.type === 1 ? pipe(ev.data, mapper, next) : ev);
export const fromObservable = (observable) => {
    const createScheduler = (modeObs) => (scheduler) => {
        const pausableScheduler = toPausableScheduler(scheduler);
        const onModeChange = (mode) => {
            switch (mode) {
                case 2:
                    pausableScheduler.pause();
                    break;
                case 1:
                    pausableScheduler.resume();
                    break;
            }
        };
        const modeSubscription = pipe(modeObs, onNotify(onModeChange), subscribe(scheduler)).add(pausableScheduler);
        return pausableScheduler.add(modeSubscription);
    };
    const op = (modeObs) => using(createScheduler(modeObs), pausableScheduler => pipe(observable, subscribeOn(pausableScheduler), mapObs(next), endWith(complete())));
    return createStreamable(op);
};
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
