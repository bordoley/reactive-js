import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as Enumerable from "../../collections/Enumerable.js";
import {
  StreamableLike_stream,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
import { bind, pipe, returns } from "../../functions.js";
import * as Observable from "../Observable.js";
import * as Stream from "../Stream.js";
import * as Streamable from "../Streamable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

testModule(
  "Stream",
  describe(
    "syncState",
    test("without throttling", () => {
      const vts = VirtualTimeScheduler.create();

      const stream = Streamable.createStateStore(returns(-1))[
        StreamableLike_stream
      ](vts);

      pipe(
        stream,
        Stream.syncState(
          state =>
            pipe(
              Enumerable.range(state + 10),
              Observable.fromEnumerable({ delay: 10 }),
              Observable.map(x => (_: number) => x),
              Observable.takeFirst({ count: 2 }),
            ),
          (oldState, newState) =>
            newState !== oldState ? Observable.empty() : Observable.empty(),
        ),
        Observable.subscribe(vts),
      );

      pipe(
        (x: number) => x + 2,
        Observable.fromValue({ delay: 5 }),
        Observable.enqueue(stream),
        Observable.subscribe(vts),
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
    test("with throttling", () => {
      const vts = VirtualTimeScheduler.create();

      const stream = Streamable.createStateStore(returns(-1))[
        StreamableLike_stream
      ](vts);

      let updateCnt = 0;
      pipe(
        stream,
        Stream.syncState(
          _state => Observable.empty(),
          (oldState, newState) => {
            updateCnt++;
            return newState !== oldState
              ? Observable.empty()
              : Observable.empty();
          },
          { throttleDuration: 20 },
        ),
        Observable.subscribe(vts),
      );

      pipe(
        (x: number) => x + 2,
        Observable.fromValue({ delay: 1 }),
        Observable.repeat(19),
        Observable.enqueue(stream),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(updateCnt, expectEquals(2));
    }),
  ),
);

((_: Stream.Signature) => {})(Stream);
