/// <reference types="./flowable.d.ts" />
import { ignoreElements, startWith } from './container.mjs';
import { dispatchTo } from './dispatcher.mjs';
import { add, bindTo, addTo } from './disposable.mjs';
import { pipe, compose } from './functions.mjs';
import { createObservable, subscribeOn, fromDisposable, takeUntil, onNotify, subscribe, keepT, concatT, fromArrayT, onSubscribe } from './observable.mjs';
import { scheduler } from './observer.mjs';
import { createPausableScheduler } from './scheduler.mjs';
import { sourceFrom } from './source.mjs';
import { createStream } from './stream.mjs';
import { createLiftedStreamable, sourceFrom as sourceFrom$1 } from './streamable.mjs';

const flow = () => observable => createLiftedStreamable((modeObs) => createObservable(observer => {
    const pausableScheduler = createPausableScheduler(scheduler(observer));
    pipe(observer, sourceFrom(pipe(observable, subscribeOn(pausableScheduler), pipe(pausableScheduler, fromDisposable, takeUntil))), add(pipe(modeObs, onNotify((mode) => {
        switch (mode) {
            case "pause":
                pausableScheduler.pause();
                break;
            case "resume":
                pausableScheduler.resume();
                break;
        }
    }), subscribe(scheduler(observer)), bindTo(pausableScheduler))), add(pausableScheduler));
}));
const toObservable = () => src => createObservable(observer => {
    const { dispatcher, scheduler } = observer;
    const op = compose(onNotify(dispatchTo(dispatcher)), ignoreElements(keepT), startWith({ ...concatT, ...fromArrayT }, "pause", "resume"), onSubscribe(() => dispatcher));
    pipe(createStream(op, scheduler), sourceFrom$1(src), addTo(observer));
});

export { flow, toObservable };
