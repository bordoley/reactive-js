/// <reference types="./Subject.test.d.ts" />
import { toRunnable } from '../../containers/ReadonlyArray.mjs';
import { pipe } from '../../functions.mjs';
import { getObserverCount } from '../../rx/MulticastObservable.mjs';
import { forEach as forEach$1, subscribe } from '../../rx/Observable.mjs';
import { forEach, run } from '../../rx/Runnable.mjs';
import { create as create$1, publishTo } from '../../rx/Subject.mjs';
import { run as run$1 } from '../../scheduling/Continuation.mjs';
import { create } from '../../scheduling/VirtualTimeScheduler.mjs';
import { dispose } from '../../util/Disposable.mjs';
import { testModule, test as createTest, expectArrayEquals, expectEquals } from '../testing.mjs';

testModule("Subject", createTest("with replay", () => {
    const scheduler = create();
    const subject = create$1({ replay: 2 });
    pipe([1, 2, 3, 4], toRunnable(), forEach(publishTo(subject)), run());
    pipe(subject, dispose());
    const result = [];
    pipe(subject, forEach$1(x => {
        result.push(x);
    }), subscribe(scheduler));
    run$1(scheduler);
    pipe(result, expectArrayEquals([3, 4]));
}), createTest("with multiple observers", () => {
    const scheduler = create();
    const subject = create$1();
    pipe(subject, getObserverCount, expectEquals(0));
    const sub1 = pipe(subject, subscribe(scheduler));
    pipe(subject, getObserverCount, expectEquals(1));
    const sub2 = pipe(subject, subscribe(scheduler));
    pipe(subject, getObserverCount, expectEquals(2));
    pipe(sub1, dispose());
    pipe(subject, getObserverCount, expectEquals(1));
    pipe(sub2, dispose());
    pipe(subject, getObserverCount, expectEquals(0));
}));
