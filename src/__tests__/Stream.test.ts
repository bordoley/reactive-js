import * as Observable from "../Observable.js";
import * as Scheduler from "../Scheduler.js";
import * as Stream from "../Stream.js";
import * as Streamable from "../Streamable.js";
import {
  expectArrayEquals,
  test,
  testModule,
} from "../__internal__/testing.js";
import { bind, pipe, returns } from "../functions.js";
import {
  QueueableLike_enqueue,
  SchedulerLike_schedule,
  StreamableLike_stream,
  VirtualTimeSchedulerLike_run,
} from "../types.js";

testModule(
  "Stream",
  test("syncState", () => {
    const vts = Scheduler.createVirtualTimeScheduler();

    const stream = Streamable.createStateStore(returns(-1))[
      StreamableLike_stream
    ](vts);

    pipe(
      stream,
      Stream.syncState(
        state =>
          pipe(
            Observable.range(state + 10),
            Observable.delay(10),
            Observable.map(x => (_: number) => x),
            Observable.takeFirst({ count: 2 }),
          ),
        (oldState, newState) =>
          newState !== oldState ? Observable.empty() : Observable.empty(),
      ),
    );

    vts[SchedulerLike_schedule](
      () => {
        stream[QueueableLike_enqueue](x => x + 2);
      },
      { delay: 5 },
    );

    const result: number[] = [];
    pipe(
      stream,
      Observable.forEach(bind(Array.prototype.push, result)),
      Observable.subscribe(vts),
    );

    vts[VirtualTimeSchedulerLike_run]();

    pipe(result, expectArrayEquals([-1, 9, 11, 10]));
  }),
);

((_: Stream.Signature) => {})(Stream);
