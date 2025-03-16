import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as Collection from "../../collections/Collection.js";
import * as Dictionary from "../../collections/Dictionary.js";
import { DictionaryCollection } from "../../collections/Dictionary.js";
import { DictionaryLike_get } from "../../collections.js";
import * as Observable from "../../computations/Observable.js";
import * as Streamable from "../../computations/Streamable.js";
import { StreamableLike_stream } from "../../computations.js";
import {
  bindMethod,
  invoke,
  none,
  pipe,
  pipeSome,
  returns,
} from "../../functions.js";
import { increment } from "../../math.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import {
  ConsumerLike_backpressureStrategy,
  ConsumerLike_capacity,
  DropLatestBackpressureStrategy,
  EventListenerLike_notify,
  SinkLike_complete,
  SinkLike_isCompleted,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";
import * as EventSource from "../EventSource.js";

testModule(
  "Streamable",
  describe(
    "animation",
    test("integration", () => {
      using vts = VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 });
      const stream = Streamable.animation<number>(Observable.keyFrame(500))[
        StreamableLike_stream
      ](vts);

      let result = 0;

      pipeSome(
        stream,
        EventSource.addEventHandler(ev => {
          result = ev;
        }),
      );

      stream[EventListenerLike_notify](none);

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectEquals(1));
    }),
  ),
  describe(
    "animationGroup",
    test("integration", () => {
      using vts = VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 });
      const stream = Streamable.animationGroup<number>({
        a: Observable.keyFrame(500),
      })[StreamableLike_stream](vts);

      pipe(
        stream,
        Collection.keySet<DictionaryCollection>(Dictionary.keys),
        invoke("has", "a"),
        expectTrue("expect collection tot contain the key 'a'"),
      );

      let result = 0;

      pipeSome(
        stream[DictionaryLike_get]("a"),
        EventSource.addEventHandler(ev => {
          result = ev;
        }),
      );

      stream[EventListenerLike_notify](none);

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectEquals(1));
    }),
  ),
  describe(
    "stateStore",
    test("stateStore", () => {
      using vts = VirtualTimeScheduler.create();
      const streamable = Streamable.stateStore(returns(1));
      const stateStream = streamable[StreamableLike_stream](vts, {
        capacity: 20,
        backpressureStrategy: DropLatestBackpressureStrategy,
      });

      pipe(stateStream[ConsumerLike_capacity], expectEquals(20));
      pipe(
        stateStream[ConsumerLike_backpressureStrategy],
        expectEquals(DropLatestBackpressureStrategy),
      );

      stateStream[EventListenerLike_notify](returns(2));
      stateStream[EventListenerLike_notify](returns(3));
      stateStream[SinkLike_complete]();

      let result: number[] = [];

      pipe(
        stateStream,
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([1, 2, 3]));
    }),
    test("completing the store", () => {
      using vts = VirtualTimeScheduler.create();
      const streamable = Streamable.stateStore(returns(1));
      const stateStream = streamable[StreamableLike_stream](vts, {
        capacity: 20,
        backpressureStrategy: DropLatestBackpressureStrategy,
      });

      pipe(
        stateStream[SinkLike_isCompleted],
        expectFalse("expected stream not to be completed"),
      );

      stateStream[SinkLike_complete]();

      pipe(
        stateStream[SinkLike_isCompleted],
        expectTrue("expected stream to be completed"),
      );
    }),
  ),
  describe(
    "syncState",
    test("without throttling", () => {
      using vts = VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 });

      const stream = pipe(
        Streamable.stateStore(returns(-1)),
        Streamable.syncState(
          _ =>
            pipe(
              [9, 10, 50, 60, 70],
              Observable.fromReadonlyArray({ delay: 1, delayStart: true }),
              Observable.map(x => (_: number) => x),
              Observable.takeFirst({ count: 2 }),
            ),
          (_oldState, _newState) => Observable.empty(),
        ),
        invoke(StreamableLike_stream, vts),
      );

      pipe(
        (x: number) => x + 2,
        Observable.fromValue({ delay: 5 }),
        Observable.forEach(bindMethod(stream, EventListenerLike_notify)),
        Observable.subscribe(vts),
      );

      const result: number[] = [];
      pipe(
        stream,
        Observable.forEach(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([-1, 9, 10, 12]));
    }),
    test("with throttling", () => {
      using vts = VirtualTimeScheduler.create();

      let updateCnt = 0;

      const stream = pipe(
        Streamable.stateStore(returns(0)),
        Streamable.syncState(
          state => pipe((_: number) => state, Observable.fromValue()),
          (_oldState, _newState) => {
            updateCnt++;
            return Observable.empty({ delay: 1 });
          },
          { throttleDuration: 20 },
        ),
        invoke(StreamableLike_stream, vts),
      );

      pipe(
        increment,
        Observable.fromValue({ delay: 1 }),
        Observable.repeat(24),
        Observable.forEach(bindMethod(stream, EventListenerLike_notify)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(updateCnt, expectEquals(2));
    }),
  ),
);

((_: Streamable.Signature) => {})(Streamable);
