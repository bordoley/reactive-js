import { add, addDisposableOrTeardown } from "./disposable.js";
import { compose, pipe } from "./functions.js";
import { fromArray as fromArrayObs, onNotify, subscribe, subscribeOn, using, } from "./observable.js";
import { toPausableScheduler } from "./scheduler.js";
import { createStreamable, } from "./streamable.js";
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
const _fromArray = compose(fromArrayObs(), fromObservable());
export const fromArray = () => _fromArray;
const _fromValue = (v) => _fromArray([v]);
export const fromValue = () => _fromValue;
const _empty = _fromArray([]);
export const empty = () => _empty;
