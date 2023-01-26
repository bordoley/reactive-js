import { pipe, returns } from "../../functions";
import { forEach, subscribe } from "../../rx/Observable";
import { run } from "../../scheduling/Continuation";
import { dispatch } from "../../scheduling/Dispatcher";
import { create as createVirtualTimeScheduler } from "../../scheduling/VirtualTimeScheduler";
import { createStateStore, stream } from "../../streaming/Streamable";
import { dispose } from "../../util/Disposable";
import { describe, expectArrayEquals, test, testModule } from "../testing";

testModule(
  "Streamable",
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
