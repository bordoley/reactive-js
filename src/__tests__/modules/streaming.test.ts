import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/__internal__testing";
import { pipe, returns } from "../../functions";
import { forEach, subscribe } from "../../rx/ObservableLike";
import { createVirtualTimeScheduler } from "../../scheduling";
import { dispatch } from "../../scheduling/DispatcherLike";
import { createStateStore } from "../../streaming";
import { stream } from "../../streaming/StreamableLike";
import { run } from "../../util/ContinuationLike";
import { dispose } from "../../util/DisposableLike";

testModule(
  "StreamableLike",
  describe(
    "stateStore",
    test("createStateStore", () => {
      const scheduler = createVirtualTimeScheduler();
      const stateStream = pipe(createStateStore(returns(1)), stream(scheduler));

      pipe(stateStream, dispatch(returns(2)), dispatch(returns(3)), dispose());

      let result: number[] = [];

      pipe(
        stateStream,
        forEach<number>(x => {
          result.push(x);
        }),
        subscribe(scheduler),
      );

      run(scheduler);

      pipe(result, expectArrayEquals([1, 2, 3]));
    }),
  ),
);
