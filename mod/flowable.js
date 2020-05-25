import { bindDisposables } from "./disposable.js";
import { compose, pipe } from "./functions.js";
import { fromArray as fromArrayObs, fromDisposable, onNotify, subscribe, subscribeOn, takeUntil, using, } from "./observable.js";
import { toPausableScheduler } from "./scheduler.js";
import { createStreamable } from "./streamable.js";
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
        const modeSubscription = pipe(modeObs, onNotify(onModeChange), subscribe(scheduler));
        bindDisposables(modeSubscription, pausableScheduler);
        return pausableScheduler;
    };
    const op = (modeObs) => using(createScheduler(modeObs), pausableScheduler => pipe(observable, subscribeOn(pausableScheduler), pipe(pausableScheduler, fromDisposable, takeUntil)));
    return createStreamable(op);
};
export const fromObservable = () => _fromObservable;
export const fromArray = (options) => compose(fromArrayObs(options), fromObservable());
export const fromValue = (options) => v => fromArray(options)([v]);
const _empty = fromArray()([]);
export const empty = () => _empty;
