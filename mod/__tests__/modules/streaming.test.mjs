/// <reference types="./streaming.test.d.ts" />
import { testModule, describe as createDescribe, test as createTest, expectArrayEquals } from '../../__internal__/__internal__testing.mjs';
import { pipe, returns } from '../../functions.mjs';
import { forEach, subscribe } from '../../rx/ObservableLike.mjs';
import { dispatch } from '../../scheduling/DispatcherLike.mjs';
import { t as createVirtualTimeScheduler, f as dispose } from '../../DisposableLike-c856ff07.mjs';
import { createStateStore, stream } from '../../streaming/StreamableLike.mjs';
import { run } from '../../util/ContinuationLike.mjs';

testModule("StreamableLike", createDescribe("stateStore", createTest("createStateStore", () => {
    const scheduler = createVirtualTimeScheduler();
    const stateStream = pipe(createStateStore(returns(1)), stream(scheduler));
    pipe(stateStream, dispatch(returns(2)), dispatch(returns(3)), dispose());
    let result = [];
    pipe(stateStream, forEach(x => {
        result.push(x);
    }), subscribe(scheduler));
    run(scheduler);
    pipe(result, expectArrayEquals([1, 2, 3]));
})));
