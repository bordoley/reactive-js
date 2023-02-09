/// <reference types="./Streamable.test.d.ts" />
import { pipe, returns } from '../../functions.mjs';
import Observable from '../../rx/Observable.mjs';
import Continuation from '../../scheduling/Continuation.mjs';
import Dispatcher from '../../scheduling/Dispatcher.mjs';
import VirtualTimeScheduler from '../../scheduling/VirtualTimeScheduler.mjs';
import Streamable from '../../streaming/Streamable.mjs';
import Disposable from '../../util/Disposable.mjs';
import { testModule, describe as createDescribe, test as createTest, expectArrayEquals } from '../testing.mjs';

testModule("Streamable", createDescribe("stateStore", createTest("createStateStore", () => {
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
