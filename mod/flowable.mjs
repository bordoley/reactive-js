/// <reference types="./flowable.d.ts" />
import { createStream } from './__internal__.stream.mjs';
import { ignoreElements, startWith } from './container.mjs';
import { dispatchTo } from './dispatcher.mjs';
import { add, bindTo, addTo } from './disposable.mjs';
import { pipe, compose } from './functions.mjs';
import { createObservable, subscribeOn, fromDisposable, takeUntil, onNotify, subscribe, keepT, concatT, fromArrayT, onSubscribe } from './observable.mjs';
import { getScheduler } from './observer.mjs';
import { sourceFrom } from './reactiveContainer.mjs';
import { createPausableScheduler } from './scheduler.mjs';
import { createLiftedStreamable, sourceFrom as sourceFrom$1 } from './streamable.mjs';

function createLiftedFlowable(...ops) {
    return createLiftedStreamable(...ops);
}
const fromObservable = () => observable => createLiftedFlowable((modeObs) => createObservable(observer => {
    const pausableScheduler = pipe(observer, getScheduler, createPausableScheduler);
    pipe(observer, sourceFrom(pipe(observable, subscribeOn(pausableScheduler), pipe(pausableScheduler, fromDisposable, takeUntil))), add(pipe(modeObs, onNotify((mode) => {
        switch (mode) {
            case "pause":
                pausableScheduler.pause();
                break;
            case "resume":
                pausableScheduler.resume();
                break;
        }
    }), subscribe(getScheduler(observer)), bindTo(pausableScheduler))), add(pausableScheduler));
}));
const fromObservableT = {
    fromObservable,
};
const toObservable = () => src => createObservable(observer => {
    const { dispatcher, scheduler } = observer;
    const op = compose(onNotify(dispatchTo(dispatcher)), ignoreElements(keepT), startWith({ ...concatT, ...fromArrayT }, "pause", "resume"), onSubscribe(() => dispatcher));
    pipe(createStream(op, scheduler), sourceFrom$1(src), addTo(observer));
});
const toObservableT = {
    toObservable,
};
const TContainerOf = undefined;

export { TContainerOf, createLiftedFlowable, fromObservable, fromObservableT, toObservable, toObservableT };
