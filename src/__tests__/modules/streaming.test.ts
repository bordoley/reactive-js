import { pipe, returns } from "../../functions";
import Observable from "../../rx/Observable";
import Continuation from "../../scheduling/Continuation";
import Dispatcher from "../../scheduling/Dispatcher";
import VirtualTimeScheduler from "../../scheduling/VirtualTimeScheduler";
import Streamable from "../../streaming/Streamable";
import Disposable from "../../util/Disposable";
import { describe, expectArrayEquals, test, testModule } from "../testing";

testModule(
  "Streamable",
  describe(
    "stateStore",
    test("createStateStore", () => {
      const scheduler = VirtualTimeScheduler.create();
      const stateStream = pipe(
        Streamable.createStateStore(returns(1)),
        Streamable.stream(scheduler),
      );

      pipe(
        stateStream,
        Dispatcher.dispatch(returns(2)),
        Dispatcher.dispatch(returns(3)),
        Disposable.dispose(),
      );

      let result: number[] = [];

      pipe(
        stateStream,
        Observable.forEach<number>(x => {
          result.push(x);
        }),
        Observable.subscribe(scheduler),
      );

      Continuation.run(scheduler);

      pipe(result, expectArrayEquals([1, 2, 3]));
    }),
  ),
);
