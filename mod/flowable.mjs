import { pipe, compose } from './functions.mjs';
import { onNotify, subscribe, using, subscribeOn, fromDisposable, takeUntil, fromArray as fromArray$1 } from './observable.mjs';
import { bindDisposables } from './disposable.mjs';
import { toPausableScheduler } from './scheduler.mjs';
import { createStreamable } from './streamable.mjs';

const fromObservable = ({ scheduler, } = {}) => observable => {
    const createScheduler = (modeObs) => (modeScheduler) => {
        const pausableScheduler = toPausableScheduler(scheduler !== null && scheduler !== void 0 ? scheduler : modeScheduler);
        const onModeChange = (mode) => {
            switch (mode) {
                case 2 /* Pause */:
                    pausableScheduler.pause();
                    break;
                case 1 /* Resume */:
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
const fromArray = (options) => compose(fromArray$1(options), fromObservable());
const fromValue = (options) => v => fromArray(options)([v]);
const _empty = fromArray()([]);
const empty = () => _empty;

export { empty, fromArray, fromObservable, fromValue };
