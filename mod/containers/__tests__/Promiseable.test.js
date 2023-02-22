/// <reference types="./Promiseable.test.d.ts" />

import { describe, expectEquals, expectPromiseToThrow, testAsync, testModule, } from "../../__tests__/testing.js";
import { newInstance, pipe } from "../../functions.js";
import Observable from "../../rx/Observable.js";
import Scheduler from "../../scheduling/Scheduler.js";
import Disposable from "../../util/Disposable.js";
import Promiseable from "../Promiseable.js";
testModule("Promiseable", describe("toObservable", testAsync("when the promise resolves", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const promise = Promise.resolve(1);
    try {
        const result = await pipe(promise, Promiseable.toObservable(), Observable.toPromise(scheduler));
        pipe(result, expectEquals(1));
    }
    finally {
        pipe(scheduler, Disposable.dispose());
    }
}), testAsync("when the promise reject", async () => {
    const scheduler = Scheduler.createHostScheduler();
    const error = newInstance(Error);
    const promise = Promise.reject(error);
    try {
        await pipe(pipe(promise, Promiseable.toObservable(), Observable.toPromise(scheduler)), expectPromiseToThrow);
    }
    finally {
        pipe(scheduler, Disposable.dispose());
    }
})));
