import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../../__tests__/testing.js";
import { pipe, returns } from "../../functions.js";
import * as Observable from "../../rx/Observable.js";
import * as Continuation from "../../scheduling/Continuation.js";
import * as VirtualTimeScheduler from "../../scheduling/VirtualTimeScheduler.js";
import * as Disposable from "../../util/Disposable.js";
import * as Queueable from "../../util/Queueable.js";
import * as Streamable from "../Streamable.js";

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
        Queueable.push(returns(2)),
        Queueable.push(returns(3)),
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
