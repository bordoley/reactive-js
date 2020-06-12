import { bindDisposables } from "./disposable.js";
import { compose, pipe } from "./functions.js";
import { fromArray as fromArrayObs, fromDisposable, onNotify, subscribe, subscribeOn, takeUntil, using, } from "./observable.js";
import { toPausableScheduler } from "./scheduler.js";
import { createStreamable } from "./streamable.js";
export const fromObservable = ({ scheduler, } = {}) => observable => {
    const createScheduler = (modeObs) => (modeScheduler) => {
        const pausableScheduler = toPausableScheduler(scheduler !== null && scheduler !== void 0 ? scheduler : modeScheduler);
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
        const modeSubscription = pipe(modeObs, onNotify(onModeChange), subscribe(modeScheduler));
        bindDisposables(modeSubscription, pausableScheduler);
        return pausableScheduler;
    };
    const op = (modeObs) => using(createScheduler(modeObs), pausableScheduler => pipe(observable, subscribeOn(pausableScheduler), pipe(pausableScheduler, fromDisposable, takeUntil)));
    return createStreamable(op);
};
export const fromArray = (options) => compose(fromArrayObs(options), fromObservable());
export const fromValue = (options) => v => fromArray(options)([v]);
const _empty = fromArray()([]);
export const empty = () => _empty;
