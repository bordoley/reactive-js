/// <reference types="./streaming.test.d.ts" />
import { pipe, returns } from '../../functions.mjs';
import { f as forEach, s as subscribe } from '../../ObservableLike-0a1b87fb.mjs';
import { run } from '../../scheduling/ContinuationLike.mjs';
import { dispatch } from '../../scheduling/DispatcherLike.mjs';
import { create } from '../../scheduling/VirtualTimeSchedulerLike.mjs';
import { createStateStore, stream } from '../../streaming/StreamableLike.mjs';
import { dispose } from '../../util/DisposableLike.mjs';
import { testModule, describe as createDescribe, test as createTest, expectArrayEquals } from '../testing.mjs';

testModule("StreamableLike", createDescribe("stateStore", createTest("createStateStore", () => {
    const scheduler = create();
    const stateStream = pipe(createStateStore(returns(1)), stream(scheduler));
    pipe(stateStream, dispatch(returns(2)), dispatch(returns(3)), dispose());
    let result = [];
    pipe(stateStream, forEach(x => {
        result.push(x);
    }), subscribe(scheduler));
    run(scheduler);
    pipe(result, expectArrayEquals([1, 2, 3]));
})));
