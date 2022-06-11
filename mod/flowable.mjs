/// <reference types="./flowable.d.ts" />
import { bindDisposables } from './disposable.mjs';
import { pipe, compose } from './functions.mjs';
import { subscribe, using, subscribeOn, fromDisposable, takeUntil, fromArray as fromArray$1 } from './observable.mjs';
import { toPausableScheduler } from './scheduler.mjs';
import { createStreamable } from './streamable.mjs';

const fromObservable = ({ scheduler, } = {}) => observable => {
    const createScheduler = (modeObs) => (modeScheduler) => {
        const pausableScheduler = toPausableScheduler(scheduler !== null && scheduler !== void 0 ? scheduler : modeScheduler);
        const onModeChange = (mode) => {
            switch (mode) {
                case "pause":
                    pausableScheduler.pause();
                    break;
                case "resume":
                    pausableScheduler.resume();
                    break;
            }
        };
        const modeSubscription = pipe(modeObs, subscribe(modeScheduler, onModeChange));
        bindDisposables(modeSubscription, pausableScheduler);
        return pausableScheduler;
    };
    const op = (modeObs) => using(createScheduler(modeObs), pausableScheduler => pipe(observable, subscribeOn(pausableScheduler), pipe(pausableScheduler, fromDisposable, takeUntil)));
    return createStreamable(op);
};
const fromArray = (options) => compose(fromArray$1(options), fromObservable());
const fromValue = (options) => v => fromArray(options)([v]);
const _empty = fromArray()([]);
const empty = () => _empty;

export { empty, fromArray, fromObservable, fromValue };
