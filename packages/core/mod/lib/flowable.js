import { add, addDisposableOrTeardown } from "./disposable.js";
import { compose, pipe, isEqualTo } from "./functions.js";
import { ignoreElements, genMap, onNotify, subscribe, subscribeOn, takeFirst, takeWhile, using, keep, } from "./observable.js";
import { toPausableScheduler } from "./scheduler.js";
import { createStreamable, } from "./streamable.js";
const _empty = createStreamable(compose(keep(isEqualTo(1)), takeWhile(isEqualTo(2)), ignoreElements()));
export const empty = () => _empty;
const _fromValue = (data) => createStreamable(compose(keep(isEqualTo(1)), takeFirst(), genMap(function* (mode) {
    switch (mode) {
        case 1:
            yield data;
    }
})));
export const fromValue = () => _fromValue;
const _fromObservable = (observable) => {
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
        const modeSubscription = pipe(modeObs, onNotify(onModeChange), subscribe(scheduler), addDisposableOrTeardown(pausableScheduler));
        return add(pausableScheduler, modeSubscription);
    };
    const op = (modeObs) => using(createScheduler(modeObs), pausableScheduler => pipe(observable, subscribeOn(pausableScheduler)));
    return createStreamable(op);
};
export const fromObservable = () => _fromObservable;
