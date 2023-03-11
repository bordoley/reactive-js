import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { pipe, returns } from "../../functions.js";
import * as Observable from "../../rx/Observable.js";
import { VirtualTimeSchedulerLike_run } from "../../scheduling.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import { StreamableLike_stream } from "../../streaming.js";
import { DisposableLike_dispose, QueueLike_push } from "../../util.js";
import * as Streamable from "../Streamable.js";

testModule(
  "Streamable",
  describe(
    "stateStore",
    test("createStateStore", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();
      const streamable = Streamable.createStateStore(returns(1));
      const stateStream = streamable[StreamableLike_stream](scheduler);

      stateStream[QueueLike_push](returns(2));
      stateStream[QueueLike_push](returns(3));
      stateStream[DisposableLike_dispose]();

      let result: number[] = [];

      pipe(
        stateStream,
        Observable.forEach<number>(x => {
          result.push(x);
        }),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([1, 2, 3]));
    }),
  ),
);
