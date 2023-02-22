/// <reference types="./Streamable.test.d.ts" />

import { describe, expectArrayEquals, test, testModule, } from "../../__tests__/testing.js";
import { pipe, returns } from "../../functions.js";
import * as Observable from "../../rx/Observable.js";
import * as Continuation from "../../scheduling/Continuation.js";
import * as Dispatcher from "../../scheduling/Dispatcher.js";
import * as VirtualTimeScheduler from "../../scheduling/VirtualTimeScheduler.js";
import * as Disposable from "../../util/Disposable.js";
import * as Streamable from "../Streamable.js";
testModule("Streamable", describe("stateStore", test("createStateStore", () => {
    const scheduler = VirtualTimeScheduler.create();
    const stateStream = pipe(Streamable.createStateStore(returns(1)), Streamable.stream(scheduler));
    pipe(stateStream, Dispatcher.dispatch(returns(2)), Dispatcher.dispatch(returns(3)), Disposable.dispose());
    let result = [];
    pipe(stateStream, Observable.forEach(x => {
        result.push(x);
    }), Observable.subscribe(scheduler));
    Continuation.run(scheduler);
    pipe(result, expectArrayEquals([1, 2, 3]));
})));
