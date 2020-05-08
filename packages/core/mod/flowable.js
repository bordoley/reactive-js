import { compose, pipe, returns } from "./functions.js";
import { endWith, generate as generateObs, map as mapObs, keepType, takeFirst, genMap, empty as emptyObs, onNotify, subscribe, subscribeOn, scanAsync, using, } from "./observable.js";
import { none, isSome } from "./option.js";
import { toPausableScheduler } from "./scheduler.js";
import { createStreamable, map as mapStream, } from "./streamable.js";
const _empty = createStreamable(compose(mapObs(mode => mode === 1 ? { type: 2 } : none), keepType(isSome), takeFirst()));
export const empty = () => _empty;
export const fromValue = (data) => pipe(genMap(function* (mode) {
    switch (mode) {
        case 1:
            yield { type: 1, data };
            yield { type: 2 };
    }
}), createStreamable);
export const generate = (generator, initialValue, delay = 0) => {
    const reducer = (acc, ev) => ev === 1
        ? generateObs(generator, returns(acc), delay)
        : emptyObs();
    const op = compose(scanAsync(reducer, initialValue, 1), mapObs(data => ({ type: 1, data })));
    return createStreamable(op);
};
export const map = (mapper) => mapStream((ev) => ev.type === 1
    ? {
        type: 1,
        data: mapper(ev.data),
    }
    : { type: 2 });
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
        const modeSubscription = pipe(modeObs, onNotify(onModeChange), subscribe(scheduler));
        return pausableScheduler.add(modeSubscription);
    };
    const op = (modeObs) => using(createScheduler(modeObs), pausableScheduler => pipe(observable, subscribeOn(pausableScheduler), mapObs(data => ({ type: 1, data })), endWith({ type: 2 })));
    return createStreamable(op);
};
