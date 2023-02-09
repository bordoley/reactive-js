/// <reference types="./Subject.test.d.ts" />
import ReadonlyArray from '../../containers/ReadonlyArray.mjs';
import { pipe } from '../../functions.mjs';
import MulticastObservable from '../../rx/MulticastObservable.mjs';
import Observable from '../../rx/Observable.mjs';
import Runnable, { run } from '../../rx/Runnable.mjs';
import Subject from '../../rx/Subject.mjs';
import Continuation from '../../scheduling/Continuation.mjs';
import VirtualTimeScheduler from '../../scheduling/VirtualTimeScheduler.mjs';
import Disposable from '../../util/Disposable.mjs';
import { testModule, test as createTest, expectArrayEquals, expectEquals } from '../testing.mjs';

testModule("Subject", createTest("with replay", () => {
    const scheduler = VirtualTimeScheduler.create();
    const subject = Subject.create({ replay: 2 });
    pipe([1, 2, 3, 4], ReadonlyArray.toRunnable(), Runnable.forEach(Subject.publishTo(subject)), run());
    pipe(subject, Disposable.dispose());
    const result = [];
    pipe(subject, Observable.forEach(x => {
        result.push(x);
    }), Observable.subscribe(scheduler));
    Continuation.run(scheduler);
    pipe(result, expectArrayEquals([3, 4]));
}), createTest("with multiple observers", () => {
    const scheduler = VirtualTimeScheduler.create();
    const subject = Subject.create();
    pipe(subject, MulticastObservable.getObserverCount, expectEquals(0));
    const sub1 = pipe(subject, Observable.subscribe(scheduler));
    pipe(subject, MulticastObservable.getObserverCount, expectEquals(1));
    const sub2 = pipe(subject, Observable.subscribe(scheduler));
    pipe(subject, MulticastObservable.getObserverCount, expectEquals(2));
    pipe(sub1, Disposable.dispose());
    pipe(subject, MulticastObservable.getObserverCount, expectEquals(1));
    pipe(sub2, Disposable.dispose());
    pipe(subject, MulticastObservable.getObserverCount, expectEquals(0));
}));
