'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
require('./option.js');
var disposable = require('./disposable.js');
require('./readonlyArray.js');
require('./enumerable.js');
require('./runnable.js');
require('./queues.js');
var scheduler = require('./scheduler.js');
var observable = require('./observable.js');
require('./env.js');
require('./dispatcher.js');
var streamable = require('./streamable.js');

const fromObservable = ({ scheduler: scheduler$1, } = {}) => observable$1 => {
    const createScheduler = (modeObs) => (modeScheduler) => {
        const pausableScheduler = scheduler.toPausableScheduler(scheduler$1 !== null && scheduler$1 !== void 0 ? scheduler$1 : modeScheduler);
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
        const modeSubscription = functions.pipe(modeObs, observable.onNotify(onModeChange), observable.subscribe(modeScheduler));
        disposable.bindDisposables(modeSubscription, pausableScheduler);
        return pausableScheduler;
    };
    const op = (modeObs) => observable.using(createScheduler(modeObs), pausableScheduler => functions.pipe(observable$1, observable.subscribeOn(pausableScheduler), functions.pipe(pausableScheduler, observable.fromDisposable, observable.takeUntil)));
    return streamable.createStreamable(op);
};
const fromArray = (options) => functions.compose(observable.fromArray(options), fromObservable());
const fromValue = (options) => v => fromArray(options)([v]);
const _empty = fromArray()([]);
const empty = () => _empty;

exports.empty = empty;
exports.fromArray = fromArray;
exports.fromObservable = fromObservable;
exports.fromValue = fromValue;
