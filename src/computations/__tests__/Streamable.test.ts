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
import * as Streamable from "../../computations/Streamable.js";
import * as SynchronousObservable from "../../computations/SynchronousObservable.js";
import { StreamableLike_stream } from "../../computations.js";
import {
  Updater,
  bindMethod,
  identity,
  invoke,
  none,
  pipe,
  pipeSome,
  returns,
} from "../../functions.js";
import { increment } from "../../math.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import {
  DropLatestBackpressureStrategy,
  EventListenerLike_notify,
  PauseableLike_resume,
  SinkLike_complete,
  SinkLike_isCompleted,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";
import * as Broadcaster from "../Broadcaster.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
import * as Observable from "../Observable.js";

const ObservableModule =
  Computation.makeModule<Observable.Signature>(Observable);

testModule(
  "Streamable",
  describe(
    "animation",
    test("integration", () => {
      using vts = VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 });
      const stream = Streamable.animation<number>(
        SynchronousObservable.keyFrame(500),
      )[StreamableLike_stream](vts);

      let result = 0;

      pipeSome(
        stream,
        Broadcaster.addEventHandler(ev => {
          result = ev;
        }),
      );

      stream[EventListenerLike_notify](none);
      stream[PauseableLike_resume]();

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectEquals(1));
    }),
  ),
  /*
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
  ),*/
  describe(
    "stateStore",
    test("stateStore", () => {
      using vts = VirtualTimeScheduler.create();
      const streamable = Streamable.stateStore(returns(1));
      const stateStream = streamable[StreamableLike_stream](vts, {
        capacity: 20,
        backpressureStrategy: DropLatestBackpressureStrategy,
      });

      stateStream[EventListenerLike_notify](returns(2));
      stateStream[EventListenerLike_notify](returns(3));
      stateStream[SinkLike_complete]();

      let result: number[] = [];

      pipe(
        stateStream,
        Broadcaster.addEventHandler(bindMethod(result, Array_push)),
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
      using vts = VirtualTimeScheduler.create();

      const stream = pipe(
        Streamable.stateStore(returns(-1)),
        Streamable.syncState(
          _ =>
            pipe(
              [9, 10, 50, 60, 70],
              Computation.fromReadonlyArray(ObservableModule, {
                delay: 1,
                delayStart: true,
              }),
              Observable.map((x: number) => (_: number) => x),
              Observable.takeFirst({ count: 2 }),
            ),
          (_oldState, _newState) =>
            Computation.empty(ObservableModule, identity<number>),
        ),
        invoke(StreamableLike_stream, vts),
      );

      pipe(
        [(x: number) => x + 2],
        Computation.fromReadonlyArray(ObservableModule, {
          delay: 5,
          delayStart: true,
        }),
        EventSource.subscribe(bindMethod(stream, EventListenerLike_notify), {
          scheduler: vts,
        }),
      );

      const result: number[] = [];
      pipe(stream, Broadcaster.addEventHandler(bindMethod(result, Array_push)));

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([-1, 9, 10, 12]));
    }),
    test("with throttling", () => {
      using vts = VirtualTimeScheduler.create();

      let updateCnt = 0;

      const stream = pipe(
        Streamable.stateStore(returns(0)),
        Streamable.syncState(
          state =>
            pipe(
              [(_: number) => state],
              Computation.fromReadonlyArray(ObservableModule),
            ),
          (_oldState, _newState) => {
            updateCnt++;
            return SynchronousObservable.delay<Updater<number>>(1);
          },
          { throttleDuration: 20 },
        ),
        invoke(StreamableLike_stream, vts),
      );

      pipe(
        [increment],
        Computation.fromReadonlyArray(ObservableModule, {
          // Note: due to how vts works its gonna be 2 in practice
          delay: 1,
          delayStart: true,
        }),
        Observable.repeat(24),
        EventSource.subscribe(bindMethod(stream, EventListenerLike_notify), {
          scheduler: vts,
        }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(updateCnt, expectEquals(3));
    }),
  ),
)();

//((_: Streamable.Signature) => {})(Streamable);
