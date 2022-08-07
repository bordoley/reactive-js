/// <reference types="./streaming.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals } from '../../__internal__/testing.mjs';
import { pipe, returns } from '../../functions.mjs';
import '../../rx/ObservableLike.mjs';
import { createVirtualTimeScheduler } from '../../scheduling.mjs';
import { dispatch } from '../../scheduling/DispatcherLike.mjs';
import { createStateStore } from '../../streaming.mjs';
import { stream } from '../../streaming/StreamableLike.mjs';
import { run } from '../../util/ContinuationLike.mjs';
import '../../util/DisposableLike.mjs';
import { dispose } from '../../__internal__/util/DisposableLikeInternal.mjs';
import { forEach, subscribe } from '../../__internal__/rx/ObservableLikeInternal.mjs';

var streamingTests = createDescribe("StreamableLike", createDescribe("stateStore", createTest("createStateStore", () => {
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

export { streamingTests as default };
