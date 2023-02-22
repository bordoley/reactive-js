/// <reference types="./Streamable.test.d.ts" />

import { pipe, returns } from "../../functions.js";
import Observable from "../../rx/Observable.js";
import Continuation from "../../scheduling/Continuation.js";
import Dispatcher from "../../scheduling/Dispatcher.js";
import VirtualTimeScheduler from "../../scheduling/VirtualTimeScheduler.js";
import Streamable from "../../streaming/Streamable.js";
import Disposable from "../../util/Disposable.js";
import { describe, expectArrayEquals, test, testModule } from "../testing.js";
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
