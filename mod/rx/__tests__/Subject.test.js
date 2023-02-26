/// <reference types="./Subject.test.d.ts" />

import { expectArrayEquals, expectEquals, test, testModule, } from "../../__tests__/testing.js";
import * as ReadonlyArray from "../../containers/ReadonlyArray.js";
import { pipe } from "../../functions.js";
import * as VirtualTimeScheduler from "../../scheduling/VirtualTimeScheduler.js";
import * as Disposable from "../../util/Disposable.js";
import * as MulticastObservable from "../MulticastObservable.js";
import * as Observable from "../Observable.js";
import * as Runnable from "../Runnable.js";
import * as Subject from "../Subject.js";
testModule("Subject", test("with replay", () => {
    const scheduler = VirtualTimeScheduler.create();
    const subject = Subject.create({ replay: 2 });
    pipe([1, 2, 3, 4], ReadonlyArray.toRunnable(), Runnable.forEach(Subject.publishTo(subject)), Runnable.run());
    pipe(subject, Disposable.dispose());
    const result = [];
    pipe(subject, Observable.forEach(x => {
        result.push(x);
    }), Observable.subscribe(scheduler));
    VirtualTimeScheduler.run(scheduler);
    pipe(result, expectArrayEquals([3, 4]));
}), test("with multiple observers", () => {
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
