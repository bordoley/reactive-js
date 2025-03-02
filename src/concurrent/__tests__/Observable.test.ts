import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectIsNone,
  expectIsSome,
  expectPromiseToThrow,
  expectToHaveBeenCalledTimes,
  expectToThrow,
  expectToThrowAsync,
  expectToThrowError,
  expectTrue,
  mockFn,
  test,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import * as Computation from "../../computations/Computation.js";
import PureStatelesssComputationModuleTests from "../../computations/__tests__/fixtures/ComputationModuleTests.js";
import ComputationWithSideEffectsModuleTests from "../../computations/__tests__/fixtures/ComputationWithSideEffectsModuleTests.js";
import DeferredComputationModuleTests from "../../computations/__tests__/fixtures/DeferredComputationModuleTests.js";
import DeferredReactiveComputationModuleTests from "../../computations/__tests__/fixtures/DeferredReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "../../computations/__tests__/fixtures/SynchronousComputationModuleTests.js";
import {
  ComputationModule,
  ComputationWithSideEffectsModule,
  DeferredComputationModule,
  DeferredComputationWithSideEffectsType,
  DeferredReactiveComputationModule,
  PureDeferredComputationType,
  PureSynchronousComputationType,
  SynchronousComputationModule,
  SynchronousComputationWithSideEffectsType,
} from "../../computations.js";
import {
  DeferredObservableLike,
  DeferredObservableWithSideEffectsLike,
  DispatcherLike,
  DispatcherLikeEvent_completed,
  DispatcherLike_complete,
  MulticastObservableLike,
  ObservableLike,
  PureDeferredObservableLike,
  PureSynchronousObservableLike,
  SchedulerLike_now,
  StreamableLike_stream,
  SynchronousObservableLike,
  SynchronousObservableWithSideEffectsLike,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
import * as EventSource from "../../events/EventSource.js";
import * as WritableStore from "../../events/WritableStore.js";
import { EventListenerLike_notify, StoreLike_value } from "../../events.js";
import {
  Function1,
  Optional,
  Tuple2,
  alwaysTrue,
  arrayEquality,
  bindMethod,
  compose,
  error,
  ignore,
  increment,
  incrementBy,
  isSome,
  lessThan,
  newInstance,
  none,
  pipe,
  pipeAsync,
  pipeLazy,
  pipeLazyAsync,
  raise,
  returns,
  scale,
  tuple,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as Queue from "../../utils/Queue.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DropLatestBackpressureStrategy,
  DropOldestBackpressureStrategy,
  OverflowBackpressureStrategy,
  QueueableLike_enqueue,
  ThrowBackpressureStrategy,
} from "../../utils.js";
import * as HostScheduler from "../HostScheduler.js";
import {
  __await,
  __bindMethod,
  __constant,
  __do,
  __memo,
  __observe,
  __state,
  __stream,
} from "../Observable/effects.js";
import * as Observable from "../Observable.js";
import { ObservableComputationFor, ObservableOperator } from "../Observable.js";
import * as Streamable from "../Streamable.js";
import * as Subject from "../Subject.js";
import * as SynchronousObservable from "../SynchronousObservable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

const expectIsPureSynchronousObservable = compose(
  Computation.isPureSynchronous<ObservableLike>,
  expectTrue,
);

const expectIsSynchronousObservableWithSideEffects = compose(
  Computation.isSynchronousWithSideEffects<ObservableLike>,
  expectTrue,
);

const expectIsPureDeferredObservable = compose(
  Computation.isPureDeferred<ObservableLike>,
  expectTrue,
);

const expectIsDeferredObservableWithSideEffects = compose(
  Computation.isDeferredWithSideEffects<ObservableLike>,
  expectTrue,
);

const expectIsMulticastObservable = compose(
  Computation.isMulticasted<ObservableLike>,
  expectTrue,
);

const testIsPureSynchronousObservable = (obs: PureSynchronousObservableLike) =>
  test(
    "is PureSynchronousObservableLike",
    pipeLazy(obs, expectIsPureSynchronousObservable),
  );

const testIsSynchronousObservableWithSideEffects = (
  obs: SynchronousObservableWithSideEffectsLike,
) =>
  test(
    "is PureSynchronousObservableLike",
    pipeLazy(obs, expectIsSynchronousObservableWithSideEffects),
  );

const testIsDeferredObservableWithSideEffects = (
  obs: DeferredObservableWithSideEffectsLike,
) =>
  test(
    "is DeferredObservableWithSideEffectsLike",
    pipeLazy(obs, expectIsDeferredObservableWithSideEffects),
  );

const testIsPureDeferredObservable = (obs: PureDeferredObservableLike) =>
  test(
    "is PureDeferredObservableLike",
    pipeLazy(obs, expectIsPureDeferredObservable),
  );

const testIsMulticastObservable = (obs: MulticastObservableLike) =>
  test(
    "is MulticastObservableLike",
    pipeLazy(obs, expectIsMulticastObservable),
  );

const ObservableOperatorTests = (
  op: Observable.ObservableOperator<unknown, unknown>,
) =>
  describe(
    "ObservableOperator",
    test(
      "with PureSynchronousObservableLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        op,
        expectIsPureSynchronousObservable,
      ),
    ),
    test(
      "with SynchronousObservableWithSideEffectsLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        Observable.forEach(ignore),
        op,
        expectIsSynchronousObservableWithSideEffects,
      ),
    ),
    test("with PureDeferredObservableLike", () => {
      using vts = VirtualTimeScheduler.create();

      pipe(
        Observable.empty({ delay: 1 }),
        Observable.subscribeOn(vts),
        op,
        expectIsPureDeferredObservable,
      );
    }),
    test(
      "with DeferredObservableWithSideEffectsLike",
      pipeLazy(
        async () => {
          throw new Error();
        },
        Observable.fromAsyncFactory(),
        op,
        expectIsDeferredObservableWithSideEffects,
      ),
    ),
    test(
      "with MulticastObservableLike",
      pipeLazy(
        new Promise(ignore),
        Observable.fromPromise(),
        op,
        expectIsMulticastObservable,
      ),
    ),
  );

const DeferredReactiveObservableOperator = (
  op: Observable.DeferredReactiveObservableOperator<unknown, unknown>,
) =>
  describe(
    "DeferredReactiveObservableOperator",
    test(
      "with PureSynchronousObservableLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        op,
        expectIsPureSynchronousObservable,
      ),
    ),
    test(
      "with SynchronousObservableWithSideEffectsLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        Observable.forEach(ignore),
        op,
        expectIsSynchronousObservableWithSideEffects,
      ),
    ),
    test("with PureDeferredObservableLike", () => {
      using vts = VirtualTimeScheduler.create();
      pipe(
        Observable.empty({ delay: 1 }),
        Observable.subscribeOn(vts),
        op,
        expectIsPureDeferredObservable,
      );
    }),
    test(
      "with DeferredObservableWithSideEffectsLike",
      pipeLazy(
        async () => {
          throw new Error();
        },
        Observable.fromAsyncFactory(),
        op,
        expectIsDeferredObservableWithSideEffects,
      ),
    ),
    test(
      "with MulticastObservableLike",
      pipeLazy(
        new Promise(ignore),
        Observable.fromPromise(),
        op,
        expectIsPureDeferredObservable,
      ),
    ),
  );

const DeferredObservableOperatorWithDeferredObservableBaseTests = (
  op: ObservableOperator<unknown, unknown, DeferredObservableLike>,
) =>
  describe(
    "ObservableOperatorWithDeferredObservableBaseTests",
    test(
      "with PureSynchronousObservableLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        op,
        expectIsPureSynchronousObservable,
      ),
    ),
    test(
      "with SynchronousObservableWithSideEffectsLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        Observable.forEach(ignore),
        op,
        expectIsSynchronousObservableWithSideEffects,
      ),
    ),
    test("with PureDeferredObservableLike", () => {
      using vts = VirtualTimeScheduler.create();
      pipe(
        Observable.empty({ delay: 1 }),
        Observable.subscribeOn(vts),
        op,
        expectIsPureDeferredObservable,
      );
    }),
    test(
      "with DeferredObservableWithSideEffectsLike",
      pipeLazy(
        async () => {
          throw new Error();
        },
        Observable.fromAsyncFactory(),
        op,
        expectIsDeferredObservableWithSideEffects,
      ),
    ),
  );

const DeferringObservableOperatorTests = (
  op: Observable.DeferringObservableOperator<unknown, unknown>,
) =>
  describe(
    "DeferringObservableOperatorTests",
    test(
      "with PureSynchronousObservableLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        op,
        expectIsPureDeferredObservable,
      ),
    ),
    test(
      "with SynchronousObservableWithSideEffectsLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        Observable.forEach(ignore),
        op,
        expectIsDeferredObservableWithSideEffects,
      ),
    ),
    test("with PureDeferredObservableLike", () => {
      using vts = VirtualTimeScheduler.create();
      pipe(
        Observable.empty({ delay: 1 }),
        Observable.subscribeOn(vts),
        op,
        expectIsPureDeferredObservable,
      );
    }),
    test(
      "with DeferredObservableWithSideEffectsLike",
      pipeLazy(
        async () => {
          throw new Error();
        },
        Observable.fromAsyncFactory(),
        op,
        expectIsDeferredObservableWithSideEffects,
      ),
    ),
  );

const ObservableOperatorWithSideEffectsTests = (
  op: Observable.ObservableOperatorWithSideEffects<unknown, unknown>,
) =>
  describe(
    "ObservableOperatorWithSideEffects",
    test(
      "with PureSynchronousObservableLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        op,
        expectIsSynchronousObservableWithSideEffects,
      ),
    ),
    test(
      "with SynchronousObservableWithSideEffectsLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        Observable.forEach(ignore),
        op,
        expectIsSynchronousObservableWithSideEffects,
      ),
    ),
    test("with PureDeferredObservableLike", () => {
      using vts = VirtualTimeScheduler.create();
      pipe(
        Observable.empty({ delay: 1 }),
        Observable.subscribeOn(vts),
        op,
        expectIsDeferredObservableWithSideEffects,
      );
    }),
    test(
      "with DeferredObservableWithSideEffectsLike",
      pipeLazy(
        async () => {
          throw new Error();
        },
        Observable.fromAsyncFactory(),
        op,
        expectIsDeferredObservableWithSideEffects,
      ),
    ),
    test(
      "with MulticastObservableLike",
      pipeLazy(
        new Promise(ignore),
        Observable.fromPromise(),
        op,
        expectIsDeferredObservableWithSideEffects,
      ),
    ),
  );

const AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests = (
  op: Function1<ObservableLike<any>, DeferredObservableWithSideEffectsLike>,
) =>
  describe(
    "AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests",
    test(
      "with PureSynchronousObservableLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        op,
        expectIsDeferredObservableWithSideEffects,
      ),
    ),
    test(
      "with SynchronousObservableWithSideEffectsLike",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        Observable.forEach(ignore),
        op,
        expectIsDeferredObservableWithSideEffects,
      ),
    ),
    test("with PureDeferredObservableLike", () => {
      using vts = VirtualTimeScheduler.create();
      pipe(
        Observable.empty({ delay: 1 }),
        Observable.subscribeOn(vts),
        op,
        expectIsDeferredObservableWithSideEffects,
      );
    }),
    test(
      "with DeferredObservableWithSideEffectsLike",
      pipeLazy(
        async () => {
          throw new Error();
        },
        Observable.fromAsyncFactory(),
        op,
        expectIsDeferredObservableWithSideEffects,
      ),
    ),
    test(
      "with MulticastObservableLike",
      pipeLazy(
        new Promise(ignore),
        Observable.fromPromise(),
        op,
        expectIsDeferredObservableWithSideEffects,
      ),
    ),
  );

testModule(
  "Observable",
  describe(
    "effects",
    test("calling an effect from outside a computation expression throws", () => {
      expectToThrow(() => __constant(0));
    }),
  ),
  DeferredComputationModuleTests<
    ObservableComputationFor<SynchronousObservableLike>
  >(
    Observable as DeferredComputationModule<
      ObservableComputationFor<SynchronousObservableLike>
    > &
      SynchronousComputationModule<
        ObservableComputationFor<SynchronousObservableLike>
      >,
  ),
  PureStatelesssComputationModuleTests(
    Observable as ComputationModule<
      ObservableComputationFor<SynchronousObservableLike>
    > &
      DeferredComputationModule<
        ObservableComputationFor<SynchronousObservableLike>
      > &
      SynchronousComputationModule<
        ObservableComputationFor<SynchronousObservableLike>
      >,
  ),
  DeferredReactiveComputationModuleTests(
    Observable as DeferredReactiveComputationModule<
      ObservableComputationFor<SynchronousObservableLike>
    > &
      DeferredComputationModule<
        ObservableComputationFor<SynchronousObservableLike>
      > &
      SynchronousComputationModule<
        ObservableComputationFor<SynchronousObservableLike>
      > &
      ComputationWithSideEffectsModule<
        ObservableComputationFor<SynchronousObservableLike>
      >,
  ),
  ComputationWithSideEffectsModuleTests(
    Observable as DeferredComputationModule<
      ObservableComputationFor<SynchronousObservableLike>
    > &
      ComputationWithSideEffectsModule<
        ObservableComputationFor<SynchronousObservableLike>
      > &
      SynchronousComputationModule<
        ObservableComputationFor<SynchronousObservableLike>
      >,
  ),
  SynchronousComputationModuleTests<
    ObservableComputationFor<SynchronousObservableLike>
  >(
    Observable as DeferredComputationModule<
      ObservableComputationFor<SynchronousObservableLike>
    > &
      SynchronousComputationModule<
        ObservableComputationFor<SynchronousObservableLike>
      >,
  ),
  describe(
    "backpressureStrategy",
    testAsync("with a throw backpressure strategy", async () => {
      using scheduler = HostScheduler.create();
      await expectToThrowAsync(
        pipeLazyAsync(
          Observable.create(observer => {
            for (let i = 0; i < 10; i++) {
              observer[QueueableLike_enqueue](i);
            }
          }),
          Observable.backpressureStrategy(1, ThrowBackpressureStrategy),
          Observable.toReadonlyArrayAsync<number>(scheduler),
        ),
      );
    }),
    testAsync("with a drop latest backpressure strategy", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.create(observer => {
          for (let i = 0; i < 10; i++) {
            observer[QueueableLike_enqueue](i);
          }
          observer[DispatcherLike_complete]();
        }),
        Observable.backpressureStrategy(1, DropLatestBackpressureStrategy),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([0]),
      );
    }),
    testAsync("with a drop-oldest latest backpressure strategy", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.create(observer => {
          for (let i = 0; i < 10; i++) {
            observer[QueueableLike_enqueue](i);
          }
          observer[DispatcherLike_complete]();
        }),
        Observable.backpressureStrategy(1, DropOldestBackpressureStrategy),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([9]),
      );
    }),
    test(
      "it passes through notifications",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.backpressureStrategy(1, DropLatestBackpressureStrategy),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    DeferredReactiveObservableOperator(
      Observable.backpressureStrategy(10, DropLatestBackpressureStrategy),
    ),
  ),
  describe("buffer", DeferredReactiveObservableOperator(Observable.buffer())),
  describe(
    "catchError",
    test("when the error handler throws an error from a delayed source", () => {
      const e1 = "e1";
      const e2 = "e2";

      let result: Optional<unknown> = none;

      pipe(
        Observable.empty({ delay: 1 }),
        Observable.concatWith(Observable.raise({ raise: () => e1 })),
        Observable.catchError(_ => {
          throw e2;
        }),
        Observable.catchError<number>(e => {
          result = e["cause"];
        }),
        Observable.toReadonlyArray(),
      );

      pipe(
        result as ReadonlyArray<Error>,
        ReadonlyArray.map(x => x.message),
        expectArrayEquals(["e2", "e1"]),
      );
    }),
    DeferredReactiveObservableOperator(Observable.catchError(ignore)),
  ),
  describe(
    "combineLatest",
    test(
      "combineLatest",
      pipeLazy(
        Observable.combineLatest<number, number>(
          pipe(
            Observable.generate(incrementBy(2), returns(1), { delay: 2 }),
            Observable.takeFirst({ count: 3 }),
          ),
          pipe(
            Observable.generate(incrementBy(2), returns(0), { delay: 3 }),
            Observable.takeFirst({ count: 2 }),
          ),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals(
          [tuple(3, 2), tuple(5, 2), tuple(5, 4), tuple(7, 4)],
          { valuesEquality: arrayEquality() },
        ),
      ),
    ),
    testIsPureSynchronousObservable(
      Observable.combineLatest(
        Observable.empty({ delay: 1 }),
        Observable.empty({ delay: 1 }),
      ),
    ),
    testIsPureDeferredObservable(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return Observable.combineLatest(
          pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)),
          Observable.empty({ delay: 1 }),
        );
      })(),
    ),
    testIsSynchronousObservableWithSideEffects(
      Observable.combineLatest(
        Observable.empty({ delay: 1 }),
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
      ),
    ),
    testIsPureDeferredObservable(
      Observable.combineLatest(
        Observable.empty({ delay: 1 }),
        Subject.create(),
      ),
    ),
    testIsDeferredObservableWithSideEffects(
      Observable.combineLatest(
        pipe(async () => {
          throw new Error();
        }, Observable.fromAsyncFactory()),
        Observable.empty({ delay: 1 }),
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
      ),
    ),
  ),
  describe(
    "computeDeferred",
    testAsync("__stream", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.computeDeferred(() => {
          const stream = __stream(Streamable.identity<number>());
          const push = __bindMethod(stream, QueueableLike_enqueue);

          const result = __observe(stream) ?? 0;
          __do(push, result + 1);

          return result;
        }),
        Observable.takeFirst<number>({ count: 10 }),
        Observable.buffer<number>(),
        Observable.lastAsync(scheduler),
        x => x ?? [],
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      );
    }),
    testAsync("__state", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.computeDeferred(() => {
          const initialState = __constant((): number => 0);
          const state = __state(initialState);
          const push = __bindMethod(state, QueueableLike_enqueue);
          const result = __observe(state) ?? -1;

          if (result > -1) {
            __do(push, () => result + 1);
          }

          return result;
        }),
        Observable.takeFirst({ count: 10 }),
        Observable.buffer(),
        Observable.lastAsync<readonly number[]>(scheduler),
        x => x ?? [],
        expectArrayEquals([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]),
      );
    }),
    testAsync("awaiting a Multicast Observable", async () => {
      using scheduler = HostScheduler.create();
      const subject = Subject.create<number>({ replay: 2 });
      subject[EventListenerLike_notify](1);

      await pipeAsync(
        Observable.computeDeferred(() => {
          const result = __await(subject);
          __do(bindMethod(subject, DisposableLike_dispose));

          return result;
        }),
        Observable.distinctUntilChanged<number>(),
        Observable.toReadonlyArrayAsync(scheduler),
        expectArrayEquals([1]),
      );
    }),
    testIsDeferredObservableWithSideEffects(
      Observable.computeDeferred(() => {}),
    ),
  ),
  describe(
    "computeSynchronousObservable",
    test("batch mode", () => {
      const result: number[] = [];
      pipe(
        Observable.computeSynchronousObservable(() => {
          const fromValueWithDelay = __constant(
            (delay: number, value: number): SynchronousObservableLike<number> =>
              pipe([value], Observable.fromReadonlyArray({ delay })),
          );
          const obs1 = __memo(fromValueWithDelay, 10, 5);
          const result1 = __await(obs1);
          const obs2 = __memo(fromValueWithDelay, 20, 10);
          const result2 = __await(obs2);
          const obs3 = __memo(fromValueWithDelay, 30, 7);
          const result3 = __await(obs3);

          return result1 + result2 + result3;
        }),
        Observable.takeLast<number>(),
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Observable.run(),
      );

      pipe(result, expectArrayEquals([22]));
    }),
    test("combined-latest mode", () => {
      const result: number[] = [];
      pipe(
        Observable.computeSynchronousObservable(
          () => {
            const oneTwoThreeDelayed = __constant(
              pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })),
            );
            const createOneTwoThree = __constant((_: unknown) =>
              pipe([1, 2, 3], Observable.fromReadonlyArray()),
            );

            const v = __await(oneTwoThreeDelayed);
            const next = __memo(createOneTwoThree, v);
            return __await(next);
          },
          { mode: "combine-latest" },
        ),
        Computation.keepType<
          ObservableComputationFor<SynchronousObservableLike>
        >(SynchronousObservable)(isSome),
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Observable.run(),
      );

      pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
    }),
    test("when compute function throws", () => {
      using vts = VirtualTimeScheduler.create();
      const error = newInstance(Error);

      const subscription = pipe(
        Observable.computeSynchronousObservable(() => {
          raise(error);
        }),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(
        subscription[DisposableLike_error],
        expectEquals<Optional<Error>>(error),
      );
    }),
    test(
      "conditional hooks",
      pipeLazy(
        Observable.computeSynchronousObservable(
          () => {
            const src = __constant(
              pipe(
                [0, 1, 2, 3, 4, 5],
                Observable.fromReadonlyArray({ delay: 5 }),
              ),
            );
            const src2 = __constant(
              Observable.generate(increment, returns(100), { delay: 2 }),
            );

            const v = __await(src);

            if (v % 2 === 0) {
              __memo(increment, 1);
              return __await(src2);
            }
            return v;
          },
          { mode: "batched" },
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]),
      ),
    ),
    test(
      "conditional await",
      pipeLazy(
        Observable.computeSynchronousObservable<number>(() => {
          const src = __constant(
            pipe(
              [0, 1, 2, 3, 4, 5],
              Observable.fromReadonlyArray({ delay: 5 }),
            ),
          );
          const src2 = __constant(
            Observable.generate(increment, returns(100), { delay: 2 }),
          );

          const src3 = __constant(
            pipe(1, Observable.fromValue({ delay: 1 }), Observable.repeat(40)),
          );

          const v = __await(src);

          if (v % 2 === 0) {
            __memo(increment, 1);
            return __await(src2);
          } else {
            __await(src3);
            return v;
          }
        }),
        Observable.distinctUntilChanged<number>(),
        Observable.toReadonlyArray(),
        expectArrayEquals([101, 102, 1, 101, 102, 3, 101, 102, 5]),
      ),
    ),
    testIsSynchronousObservableWithSideEffects(
      Observable.computeSynchronousObservable(() => {}),
    ),
  ),
  describe(
    "concat",
    test(
      "concats the input containers in order, when sources have delay",
      pipeLazy(
        Observable.concat(
          pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })),
          pipe([4, 5, 6], Observable.fromReadonlyArray({ delay: 1 })),
        ),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
  ),
  describe(
    "concatAll",
    DeferredReactiveObservableOperator(Observable.concatAll()),
    DeferringObservableOperatorTests(
      Observable.concatAll({
        innerType: PureDeferredComputationType,
      }),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.concatAll({
        innerType: SynchronousComputationWithSideEffectsType,
      }),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.concatAll({
        innerType: DeferredComputationWithSideEffectsType,
      }),
    ),
  ),
  describe(
    "concatMany",
    testIsPureSynchronousObservable(
      Observable.concatMany([
        Observable.empty({ delay: 1 }),
        Observable.empty({ delay: 1 }),
      ]),
    ),
    testIsPureDeferredObservable(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return Observable.concatMany([
          pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)),
          Observable.empty({ delay: 1 }),
        ]);
      })(),
    ),
    testIsSynchronousObservableWithSideEffects(
      Observable.concatMany([
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        Observable.empty({ delay: 1 }),
      ]),
    ),
    testIsDeferredObservableWithSideEffects(
      Observable.concatMany([
        Observable.create(ignore),
        Observable.empty({ delay: 1 }),
      ]),
    ),
    testIsPureDeferredObservable(
      Observable.concatMany([Subject.create(), Observable.empty({ delay: 1 })]),
    ),
    testIsDeferredObservableWithSideEffects(
      Observable.concatMany([
        Subject.create(),
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
      ]),
    ),
  ),
  describe(
    "concatMap",
    testAsync("maps each value to a container and flattens", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        [0, 1],
        Observable.fromReadonlyArray(),
        Observable.concatMap(
          pipeLazy([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })),
        ),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      );
    }),
    DeferredReactiveObservableOperator(
      Observable.concatMap(_ => Observable.empty({ delay: 1 })),
    ),
    DeferringObservableOperatorTests(
      Observable.concatMap(_ => Observable.empty({ delay: 1 }), {
        innerType: PureDeferredComputationType,
      }),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.concatMap(
        _ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        {
          innerType: SynchronousComputationWithSideEffectsType,
        },
      ),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.concatMap(
        _ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        {
          innerType: DeferredComputationWithSideEffectsType,
        },
      ),
    ),
  ),
  describe(
    "concatWith",
    DeferredReactiveObservableOperator(
      Observable.concatWith(
        Observable.empty({ delay: 1 }),
        Observable.empty({ delay: 1 }),
      ),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.concatWith(
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
      ),
    ),
    DeferringObservableOperatorTests(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return Observable.concatWith(
          pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)),
        );
      })(),
    ),
    describe(
      "concat with DeferredObservableWithSideEffectsLikes",
      test(
        "with PureSynchronousObservableLike",
        pipeLazy(
          Observable.empty({ delay: 1 }),
          Observable.concatWith(
            pipe(async () => {
              throw new Error();
            }, Observable.fromAsyncFactory()),
          ),
          expectIsDeferredObservableWithSideEffects,
        ),
      ),
      test(
        "with SynchronousObservableWithSideEffectsLike",
        pipeLazy(
          Observable.empty({ delay: 1 }),
          Observable.forEach(ignore),
          Observable.concatWith(
            pipe(async () => {
              throw new Error();
            }, Observable.fromAsyncFactory()),
          ),
          expectIsDeferredObservableWithSideEffects,
        ),
      ),
      test("with PureDeferredObservableLike", () => {
        using vts = VirtualTimeScheduler.create();
        pipe(
          Observable.empty({ delay: 1 }),
          Observable.subscribeOn(vts),
          Observable.concatWith(
            pipe(async () => {
              throw new Error();
            }, Observable.fromAsyncFactory()),
          ),
          expectIsDeferredObservableWithSideEffects,
        );
      }),
      test(
        "with DeferredObservableWithSideEffectsLike",

        pipeLazy(
          async () => {
            throw new Error();
          },
          Observable.fromAsyncFactory(),
          Observable.concatWith(
            pipe(async () => {
              throw new Error();
            }, Observable.fromAsyncFactory()),
          ),
          expectIsDeferredObservableWithSideEffects,
        ),
      ),
      test("with MulticastObservableLike", () => {
        using vts = VirtualTimeScheduler.create();
        pipe(
          new Promise(ignore),
          Observable.fromPromise(),
          Observable.concatWith(
            pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)),
          ),
          expectIsPureDeferredObservable,
        );
      }),
    ),
  ),
  describe(
    "create",
    testIsDeferredObservableWithSideEffects(Observable.create(ignore)),
  ),
  describe(
    "currentTime",
    test(
      "publish current time from VTS",
      pipeLazy(
        Observable.currentTime,
        Observable.takeFirst({ count: 5 }),
        Observable.toReadonlyArray<number>(),
        // Only delayed scheduled continuations increment the clock
        expectArrayEquals([0, 0, 0, 0, 0]),
      ),
    ),
    testIsPureSynchronousObservable(Observable.currentTime),
  ),
  describe("debug", ObservableOperatorWithSideEffectsTests(Observable.debug())),
  describe(
    "decodeWithCharset",
    DeferredReactiveObservableOperator(Observable.decodeWithCharset()),
  ),
  describe(
    "defer",
    testAsync("defering a promise converted to an Observable", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Observable.defer(() =>
          pipe(Promise.resolve(1), Observable.fromPromise()),
        ),
        Observable.toReadonlyArrayAsync(scheduler),
        expectArrayEquals([1]),
      );
    }),
    testIsPureDeferredObservable(Observable.defer(Subject.create)),
  ),
  describe(
    "dispatchTo",
    test("when backpressure exception is thrown", () => {
      using vts = VirtualTimeScheduler.create();
      const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: ThrowBackpressureStrategy,
        capacity: 1,
      });

      expectToThrow(
        pipeLazy(
          [1, 2, 2, 2, 2, 3, 3, 3, 4],
          Observable.fromReadonlyArray(),
          Observable.dispatchTo<number>(stream),
          Observable.run(),
        ),
      );
    }),
    test("when completed successfully", () => {
      using vts = VirtualTimeScheduler.create();
      const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: OverflowBackpressureStrategy,
        capacity: 1,
      });

      let completed = false;

      pipe(
        stream,
        EventSource.addEventHandler(ev => {
          if (ev === DispatcherLikeEvent_completed) {
            completed = true;
          }
        }),
      );

      pipe(
        [1, 2, 2, 2, 2, 3, 3, 3, 4],
        Observable.fromReadonlyArray(),
        Observable.dispatchTo<number>(stream),
        Observable.toReadonlyArray(),
      );

      expectTrue(completed);
    }),
    test("when completed successfully from delayed source", () => {
      using vts = VirtualTimeScheduler.create();
      const stream = Streamable.identity()[StreamableLike_stream](vts, {
        backpressureStrategy: OverflowBackpressureStrategy,
        capacity: 1,
      });

      let completed = false;

      pipe(
        stream,
        EventSource.addEventHandler(ev => {
          if (ev === DispatcherLikeEvent_completed) {
            completed = true;
          }
        }),
      );

      pipe(
        [1, 2, 2, 2, 2, 3, 3, 3, 4],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.dispatchTo<number>(stream),
        Observable.toReadonlyArray(),
      );

      expectTrue(completed);
    }),
    ObservableOperatorWithSideEffectsTests(
      Observable.dispatchTo({} as unknown as DispatcherLike),
    ),
  ),
  describe(
    "distinctUntilChanged",
    DeferredReactiveObservableOperator(Observable.distinctUntilChanged()),
  ),
  describe(
    "empty",
    test("with delay", () => {
      let disposedTime = -1;
      using vts = VirtualTimeScheduler.create();
      pipe(
        Observable.empty({ delay: 5 }),
        Observable.subscribe(vts),
        DisposableContainer.onComplete(() => {
          disposedTime = vts[SchedulerLike_now];
        }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(disposedTime, expectEquals(5));
    }),
    testIsPureSynchronousObservable(Observable.empty({ delay: 1 })),
  ),
  describe(
    "encodeUtf8",
    DeferredReactiveObservableOperator(Observable.encodeUtf8()),
  ),
  describe(
    "endWith",
    DeferredReactiveObservableOperator(Observable.endWith(1)),
  ),
  describe(
    "enqueue",
    ObservableOperatorWithSideEffectsTests(Observable.enqueue(Queue.create())),
  ),
  describe(
    "exhaust",
    test(
      "when the initial observable never disposes",
      pipeLazy(
        [
          pipe([1, 2, 3], Observable.fromReadonlyArray<number>({ delay: 1 })),
          pipe([4, 5, 6], Observable.fromReadonlyArray<number>()),
          pipe([7, 8, 9], Observable.fromReadonlyArray<number>()),
        ],
        Observable.fromReadonlyArray(),
        Observable.exhaust<number>({
          innerType: PureSynchronousComputationType,
        }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    DeferredReactiveObservableOperator(Observable.exhaust()),
    DeferringObservableOperatorTests(
      Observable.exhaust({
        innerType: PureDeferredComputationType,
      }),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.exhaust({
        innerType: SynchronousComputationWithSideEffectsType,
      }),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.exhaust({
        innerType: DeferredComputationWithSideEffectsType,
      }),
    ),
  ),
  describe(
    "exhaustMap",
    test(
      "when the initial observable never disposes",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.exhaustMap<number, number>(
          _ =>
            pipe([1, 2, 3], Observable.fromReadonlyArray<number>({ delay: 1 })),
          {
            innerType: PureSynchronousComputationType,
          },
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    DeferredReactiveObservableOperator(
      Observable.exhaustMap(_ => Observable.empty({ delay: 1 })),
    ),
    DeferringObservableOperatorTests(
      Observable.exhaustMap(_ => Observable.empty({ delay: 1 }), {
        innerType: PureDeferredComputationType,
      }),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.exhaustMap(
        _ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        {
          innerType: SynchronousComputationWithSideEffectsType,
        },
      ),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.exhaustMap(
        _ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        {
          innerType: DeferredComputationWithSideEffectsType,
        },
      ),
    ),
  ),
  describe(
    "firstAsync",
    testAsync("empty source", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        [],
        Observable.fromReadonlyArray(),
        Observable.firstAsync(scheduler),
        expectIsNone,
      );
    }),
    testAsync("it returns the first value", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.firstAsync(scheduler),
        expectEquals<Optional<number>>(1),
      );
    }),
  ),
  describe(
    "flatMapAsync",
    testAsync("mapping a number to a promise", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        1,
        Observable.fromValue(),
        Observable.flatMapAsync(async x => await Promise.resolve(x)),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([1]),
      );
    }),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.flatMapAsync(async x => await Promise.resolve(x)),
    ),
  ),
  describe(
    "flatMapIterable",
    test(
      "maps the incoming value with the inline generator function",
      pipeLazy(
        [none, none],
        Observable.fromReadonlyArray(),
        Observable.flatMapIterable(function* (_) {
          yield 1;
          yield 2;
          yield 3;
        }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "maps the incoming value with the inline generator function, with delayed source",
      pipeLazy(
        [none, none],
        Observable.fromReadonlyArray({ delay: 2 }),
        Observable.flatMapIterable(function* (_) {
          yield 1;
          yield 2;
          yield 3;
        }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.flatMapIterable(returns([])),
    ),
  ),
  describe(
    "forEach",
    ObservableOperatorWithSideEffectsTests(Observable.forEach(ignore)),
  ),
  describe(
    "forkMerge",
    testAsync(
      "with pure src and inner runnables with side-effects",
      async () => {
        using scheduler = HostScheduler.create();
        await pipeAsync(
          [1, 2, 3],
          Observable.fromReadonlyArray({ delay: 1 }),
          Observable.forkMerge(
            Observable.flatMapIterable(_ => [1, 2]),
            Observable.flatMapIterable(_ => [3, 4]),
          ),
          Observable.toReadonlyArrayAsync(scheduler),
          expectArrayEquals([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]),
        );
      },
    ),

    testAsync("src with side-effects is only subscribed to once", async () => {
      using scheduler = HostScheduler.create();
      const sideEffect = mockFn();
      const src = pipe(
        0,
        Observable.fromValue(),
        Observable.forEach(sideEffect),
      );

      await pipeAsync(
        src,
        Observable.forkMerge(
          Observable.flatMapIterable(_ => [1, 2, 3]),
          Observable.flatMapIterable(_ => [4, 5, 6]),
        ),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      );

      pipe(sideEffect, expectToHaveBeenCalledTimes(1));
    }),
  ),
  describe(
    "fromAsyncFactory",
    testAsync("when promise resolves", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        async () => {
          await Promise.resolve(1);
          return 2;
        },
        Observable.fromAsyncFactory(),
        Observable.lastAsync(scheduler),
        expectEquals<Optional<number>>(2),
      );
    }),
    testAsync("when promise fails with an exception", async () => {
      using scheduler = HostScheduler.create();
      await pipe(
        pipe(
          async () => {
            await Promise.resolve(1);
            raise();
          },
          Observable.fromAsyncFactory(),
          Observable.lastAsync(scheduler),
        ),
        expectPromiseToThrow,
      );
    }),
    testAsync("when factory throws an exception", async () => {
      using scheduler = HostScheduler.create();
      await pipe(
        pipe(
          async () => {
            raise();
          },
          Observable.fromAsyncFactory(),
          Observable.lastAsync(scheduler),
        ),
        expectPromiseToThrow,
      );
    }),
    testIsDeferredObservableWithSideEffects(
      pipe(async () => {
        raise();
      }, Observable.fromAsyncFactory()),
    ),
  ),
  describe(
    "fromAsyncIterable",
    testAsync("infinite immediately resolving iterable", async () => {
      using scheduler = HostScheduler.create();
      const result = await pipe(
        (async function* foo() {
          let i = 0;
          while (true) {
            yield i++;
          }
        })(),
        Observable.fromAsyncIterable(),
        Observable.takeFirst({ count: 10 }),
        Observable.buffer<number>(),
        Observable.lastAsync(scheduler, { capacity: 5 }),
      );

      pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }),
    testAsync("iterable that completes", async () => {
      using scheduler = HostScheduler.create();
      const result = await pipe(
        (async function* foo() {
          yield 1;
          yield 2;
          yield 3;
        })(),
        Observable.fromAsyncIterable(),
        Observable.buffer<number>(),
        Observable.lastAsync(scheduler, { capacity: 1 }),
      );

      pipe(result ?? [], expectArrayEquals([1, 2, 3]));
    }),
    testAsync(
      "iterable that throws",
      pipeLazy(async () => {
        using scheduler = HostScheduler.create();
        const e = error();

        const result = await pipe(
          (async function* foo() {
            throw e;
          })(),
          Observable.fromAsyncIterable(),
          Observable.lastAsync(scheduler, { capacity: 1 }),
        );

        pipe(result, expectEquals(e as unknown));
      }, expectToThrowAsync),
    ),
    testIsDeferredObservableWithSideEffects(
      pipe(
        (async function* foo() {
          let i = 0;
          while (true) {
            yield i++;
          }
        })(),
        Observable.fromAsyncIterable(),
      ),
    ),
  ),
  describe(
    "fromEventSource",
    testIsMulticastObservable(
      pipe(EventSource.create(ignore), Observable.fromEventSource()),
    ),
  ),
  describe(
    "fromIterable",
    test(
      "with delay",
      pipeLazy(
        [9, 9, 9, 9],
        Observable.fromIterable({ delay: 2 }),
        Observable.withCurrentTime(t => t),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 2, 4, 6]),
      ),
    ),
    test(
      "with delay and delayed start",
      pipeLazy(
        [9, 9, 9, 9],
        Observable.fromIterable({ delay: 2, delayStart: true }),
        Observable.withCurrentTime(t => t),
        Observable.toReadonlyArray(),
        expectArrayEquals([2, 4, 6, 8]),
      ),
    ),
    testIsSynchronousObservableWithSideEffects(
      pipe(
        (function* Generator() {
          throw newInstance(Error);
        })(),
        Observable.fromIterable(),
      ),
    ),
  ),
  describe(
    "fromPromise",
    testAsync("when the promise resolves", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        Promise.resolve(1),
        Observable.fromPromise(),
        Observable.lastAsync(scheduler),
        expectEquals<Optional<number>>(1),
      );
    }),
    testAsync("when the promise reject", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        pipeAsync(
          Promise.reject(newInstance(Error)),
          Observable.fromPromise(),
          Observable.lastAsync(scheduler),
        ),
        expectPromiseToThrow,
      );
    }),
    testIsMulticastObservable(
      pipe(Promise.resolve(true), Observable.fromPromise()),
    ),
  ),
  describe(
    "fromReadonlyArray",
    testIsPureSynchronousObservable(
      pipe([], Observable.fromReadonlyArray({ delay: 1 })),
    ),
  ),
  describe(
    "fromStore",
    test("it publishes the current value and all subsequent values", () => {
      const store = WritableStore.create<number>(-1);
      using vts = VirtualTimeScheduler.create();

      const result: number[] = [];

      pipe(
        store,
        Observable.fromStore(),
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      pipe(
        Observable.generate(increment, returns(-1), { delay: 3 }),
        Observable.takeFirst({ count: 3 }),
        Observable.forEach<number>(x => {
          store[StoreLike_value] = x;
        }),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([-1, 0, 1, 2]));
    }),
    testIsMulticastObservable(
      pipe(WritableStore.create<number>(-1), Observable.fromStore()),
    ),
  ),
  describe(
    "fromValue",
    testIsPureSynchronousObservable(
      pipe("a", Observable.fromValue({ delay: 1 })),
    ),
  ),
  describe(
    "ignoreElements",
    ObservableOperatorTests(Observable.ignoreElements()),
  ),
  describe("keep", ObservableOperatorTests(Observable.keep(alwaysTrue))),
  describe(
    "keyFrame",
    test(
      "keyframing from 0 to 10 over a duration of 10 clock clicks",
      pipeLazy(
        Observable.keyFrame(10),
        Observable.map(scale(0, 10)),
        Observable.toReadonlyArray({
          maxMicroTaskTicks: 1,
        }),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      ),
    ),
  ),
  describe(
    "lastAsync",
    testAsync("empty source", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        [],
        Observable.fromReadonlyArray(),
        Observable.lastAsync(scheduler),
        expectIsNone,
      );
    }),
    testAsync("it returns the last value", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.lastAsync(scheduler),
        expectEquals<Optional<number>>(3),
      );
    }),
  ),
  describe("log", ObservableOperatorWithSideEffectsTests(Observable.log())),
  describe("map", ObservableOperatorTests(Observable.map(returns(none)))),
  describe(
    "merge",
    test("validate output runtime type", () => {
      const pureSynchronousObservable = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 2 }),
      );
      const runnableWithSideEffects = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 2 }),
        Observable.forEach(ignore),
      );
      const deferred = pipe(
        () => Promise.resolve(1),
        Observable.fromAsyncFactory(),
      );
      const multicast = Subject.create();

      const merged1 = Observable.merge(
        pureSynchronousObservable,
        runnableWithSideEffects,
        deferred,
        multicast,
      );
      expectIsDeferredObservableWithSideEffects(merged1);

      const merged2 = Observable.merge(pureSynchronousObservable, multicast);
      expectIsPureDeferredObservable(merged2);

      const merged3 = Observable.merge(
        pureSynchronousObservable,
        runnableWithSideEffects,
        deferred,
        Observable.never(),
      );
      expectIsDeferredObservableWithSideEffects(merged3);

      const merged4 = Observable.merge(
        pureSynchronousObservable,
        runnableWithSideEffects,
      );
      expectIsSynchronousObservableWithSideEffects(merged4);

      const merged7 = Observable.merge(
        pureSynchronousObservable,
        pureSynchronousObservable,
      );
      expectIsPureSynchronousObservable(merged7);

      const merged8 = Observable.merge(Subject.create(), Subject.create());
      expectIsMulticastObservable(merged8);
    }),
    test(
      "two arrays",
      pipeLazy(
        Observable.merge(
          pipe(
            [0, 2, 3, 5, 6],
            Observable.fromReadonlyArray({ delay: 1, delayStart: true }),
          ),
          pipe(
            [1, 4, 7],
            Observable.fromReadonlyArray({ delay: 2, delayStart: true }),
          ),
        ),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]),
      ),
    ),
    test(
      "when one source throws",
      pipeLazy(
        pipeLazy(
          Observable.merge(
            pipe([1, 4, 7], Observable.fromReadonlyArray({ delay: 2 })),
            Observable.raise({ delay: 5 }),
          ),
          Observable.run(),
        ),
        expectToThrow,
      ),
    ),
    test(
      "merging merged observable",
      pipeLazy(
        Observable.merge(
          Observable.merge(
            pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })),
            Observable.concat(
              Observable.empty({ delay: 3 }),
              pipe([4, 5, 6], Observable.fromReadonlyArray({ delay: 1 })),
            ),
          ),
          Observable.merge(
            Observable.concat(
              Observable.empty({ delay: 6 }),
              pipe([7, 8, 9], Observable.fromReadonlyArray({ delay: 1 })),
            ),
            Observable.concat(
              Observable.empty({ delay: 9 }),
              pipe([10, 11, 12], Observable.fromReadonlyArray({ delay: 1 })),
            ),
          ),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      ),
    ),
  ),
  describe(
    "mergeAll",
    test(
      "with queueing",
      pipeLazy(
        [
          pipe([1, 3, 5], Observable.fromReadonlyArray({ delay: 3 })),
          pipe([2, 4, 6], Observable.fromReadonlyArray({ delay: 3 })),
          pipe([9, 10], Observable.fromReadonlyArray({ delay: 3 })),
        ],
        Observable.fromReadonlyArray(),
        Observable.mergeAll<number>({
          concurrency: 2,
          innerType: PureSynchronousComputationType,
        }),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6, 9, 10]),
      ),
    ),
    DeferredReactiveObservableOperator(Observable.mergeAll()),
    DeferringObservableOperatorTests(
      Observable.mergeAll({
        innerType: PureDeferredComputationType,
      }),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.mergeAll({
        innerType: SynchronousComputationWithSideEffectsType,
      }),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.mergeAll({
        innerType: DeferredComputationWithSideEffectsType,
      }),
    ),
  ),
  describe(
    "mergeMany",
    testIsPureSynchronousObservable(
      Observable.mergeMany([
        Observable.empty({ delay: 1 }),
        Observable.empty({ delay: 1 }),
      ]),
    ),
    testIsPureDeferredObservable(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return Observable.mergeMany([
          pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)),
          Observable.empty({ delay: 1 }),
        ]);
      })(),
    ),
    testIsSynchronousObservableWithSideEffects(
      Observable.mergeMany([
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        Observable.empty({ delay: 1 }),
      ]),
    ),
    testIsMulticastObservable(
      Observable.mergeMany([Subject.create(), Subject.create()]),
    ),
    testIsPureDeferredObservable(
      Observable.mergeMany([Subject.create(), Observable.empty({ delay: 1 })]),
    ),
    testIsDeferredObservableWithSideEffects(
      Observable.mergeMany([
        Observable.create(ignore),
        Subject.create(),
        Observable.empty({ delay: 1 }),
      ]),
    ),
  ),
  describe(
    "mergeMap",
    testAsync(
      "without delay, merge all observables as they are produced",
      async () => {
        using scheduler = HostScheduler.create();
        await pipeAsync(
          [1, 2, 3],
          Observable.fromReadonlyArray(),
          Observable.mergeMap<number, number>(x =>
            pipe([x, x, x], Observable.fromReadonlyArray<number>()),
          ),
          Observable.toReadonlyArrayAsync(scheduler),
          expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
        );
      },
    ),
    test(
      "without delay, merge all observables as they are produced",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.mergeMap<number, number>(
          x => pipe([x, x, x], Observable.fromReadonlyArray<number>()),
          {
            innerType: PureSynchronousComputationType,
          },
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
      ),
    ),
    DeferredReactiveObservableOperator(
      Observable.mergeMap(_ => Observable.empty({ delay: 1 })),
    ),
    DeferringObservableOperatorTests(
      Observable.mergeMap(_ => Observable.empty({ delay: 1 }), {
        innerType: PureDeferredComputationType,
      }),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.mergeMap(
        _ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        {
          innerType: SynchronousComputationWithSideEffectsType,
        },
      ),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.mergeMap(
        _ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        {
          innerType: DeferredComputationWithSideEffectsType,
        },
      ),
    ),
  ),
  describe(
    "mergeWith",
    DeferredReactiveObservableOperator(
      Observable.mergeWith(Observable.empty({ delay: 1 })),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.mergeWith(
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
      ),
    ),
    DeferringObservableOperatorTests(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return Observable.mergeWith(
          pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)),
        );
      })(),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.mergeWith(
        pipe(
          () => Promise.resolve(1),
          Observable.fromAsyncFactory(),
          Observable.forEach(ignore),
        ),
      ),
    ),
  ),
  describe(
    "multicast",
    testIsMulticastObservable(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return pipe(Observable.empty({ delay: 1 }), Observable.multicast(vts));
      })(),
    ),
    test("shared observable zipped with itself, auto disposing", () => {
      using vts = VirtualTimeScheduler.create();
      const shared = pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.forEach(ignore),
        Observable.multicast(vts, { replay: 1, autoDispose: true }),
      );

      expectIsMulticastObservable(shared);

      let result: number[] = [];
      pipe(
        Observable.zipLatest(shared, shared),
        Observable.map<Tuple2<number, number>, number>(([a, b]) => a + b),
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();
      pipe(result, expectArrayEquals([2, 4, 6]));
    }),
  ),
  describe("never", testIsMulticastObservable(Observable.never())),
  describe(
    "onSubscribe",
    test("when subscribe function returns a teardown function", () => {
      using vts = VirtualTimeScheduler.create();

      const disp = mockFn();
      const f = mockFn(disp);

      pipe(
        [1],
        Observable.fromReadonlyArray(),
        Observable.onSubscribe(f),
        Observable.subscribe(vts),
      );

      pipe(disp, expectToHaveBeenCalledTimes(0));
      pipe(f, expectToHaveBeenCalledTimes(1));

      vts[VirtualTimeSchedulerLike_run]();

      pipe(disp, expectToHaveBeenCalledTimes(1));
      pipe(f, expectToHaveBeenCalledTimes(1));
    }),
    test("when callback function throws", () => {
      using vts = VirtualTimeScheduler.create();
      const subscription = pipe(
        [1],
        Observable.fromReadonlyArray(),
        Observable.onSubscribe(raise),
        Observable.subscribe(vts),
      );

      pipe(subscription[DisposableLike_error], expectIsSome);
    }),
    test("when callback returns a disposable", () => {
      using vts = VirtualTimeScheduler.create();

      const disp = Disposable.create();
      const f = mockFn(disp);

      pipe(
        [1],
        Observable.fromReadonlyArray(),
        Observable.onSubscribe(f),
        Observable.subscribe(vts),
      );

      expectFalse(disp[DisposableLike_isDisposed]);
      pipe(f, expectToHaveBeenCalledTimes(1));

      vts[VirtualTimeSchedulerLike_run]();

      expectTrue(disp[DisposableLike_isDisposed]);
      expectIsNone(disp[DisposableLike_error]);
      pipe(f, expectToHaveBeenCalledTimes(1));
    }),
    test("when callback only performs sideeffects", () => {
      using vts = VirtualTimeScheduler.create();

      let called = false;

      pipe(
        [1],
        Observable.fromReadonlyArray(),
        Observable.onSubscribe(() => {
          called = true;
        }),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      expectTrue(called);
    }),
    ObservableOperatorWithSideEffectsTests(Observable.onSubscribe(ignore)),
  ),
  describe(
    "pairwise",
    DeferredReactiveObservableOperator(Observable.pairwise()),
  ),
  describe("raise", testIsPureSynchronousObservable(Observable.raise())),
  describe(
    "repeat",
    test(
      "when repeating a finite amount of times, with delayed source.",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.repeat<number>(3),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "when repeating with a predicate with delayed source",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 2 }),
        Observable.repeat<number>(lessThan(1)),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test("when the repeat function throws with delayed source", () => {
      const err = new Error();
      pipe(
        pipeLazy(
          [1, 1],
          Observable.fromReadonlyArray({ delay: 3 }),
          Observable.repeat(_ => {
            throw err;
          }),
          Observable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
    DeferredObservableOperatorWithDeferredObservableBaseTests(
      Observable.repeat(),
    ),
  ),
  describe(
    "retry",
    DeferredObservableOperatorWithDeferredObservableBaseTests(
      Observable.retry(raise),
    ),
  ),
  describe(
    "scan",
    DeferredReactiveObservableOperator(
      Observable.scan((acc, _) => acc, returns(none)),
    ),
  ),
  describe(
    "scanMany",
    test(
      "slow source, fast scan function",
      pipeLazy(
        Observable.generate(increment, returns(-1), {
          delay: 10,
          delayStart: true,
        }),
        Observable.takeFirst({ count: 10 }),
        Observable.scanMany(
          (_acc: number, next: number) =>
            pipe(next, Observable.fromValue({ delay: 2 })),
          returns(0),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      ),
    ),
    DeferredReactiveObservableOperator(
      Observable.scanMany(() => Observable.empty({ delay: 1 }), returns(none)),
    ),
    DeferringObservableOperatorTests(
      Observable.scanMany(() => Observable.empty({ delay: 1 }), returns(none), {
        innerType: PureDeferredComputationType,
      }),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.scanMany(() => Observable.empty({ delay: 1 }), returns(none), {
        innerType: SynchronousComputationWithSideEffectsType,
      }),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.scanMany(() => Observable.empty({ delay: 1 }), returns(none), {
        innerType: DeferredComputationWithSideEffectsType,
      }),
    ),
  ),
  describe(
    "skipFirst",
    DeferredReactiveObservableOperator(Observable.skipFirst()),
  ),
  describe(
    "spring",
    testAsync("test with spring", async () => {
      using scheduler = HostScheduler.create();

      await pipeAsync(
        Observable.spring(),
        Observable.lastAsync(scheduler),
        expectEquals<Optional<number>>(1),
      );
    }),
  ),
  describe(
    "startWith",
    DeferredReactiveObservableOperator(Observable.startWith(1, 2, 3)),
  ),
  describe(
    "subscribeOn",
    testIsPureDeferredObservable(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return pipe(
          Observable.empty({ delay: 1 }),
          Observable.subscribeOn(vts),
        );
      })(),
    ),
    testIsDeferredObservableWithSideEffects(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return pipe(
          Observable.empty({ delay: 1 }),
          Observable.forEach(ignore),
          Observable.subscribeOn(vts),
        );
      })(),
    ),
    testIsMulticastObservable(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return pipe(Subject.create(), Observable.subscribeOn(vts));
      })(),
    ),
  ),
  describe(
    "switchAll",
    test(
      "with empty source",
      pipeLazy(
        Observable.empty({ delay: 1 }),
        Observable.switchAll<number>({
          innerType: PureSynchronousComputationType,
        }),
        Observable.toReadonlyArray(),
        expectArrayEquals([] as readonly number[]),
      ),
    ),
    DeferredReactiveObservableOperator(Observable.switchAll()),
    DeferringObservableOperatorTests(
      Observable.switchAll({
        innerType: PureDeferredComputationType,
      }),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.switchAll({
        innerType: SynchronousComputationWithSideEffectsType,
      }),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.switchAll({
        innerType: DeferredComputationWithSideEffectsType,
      }),
    ),
  ),
  describe(
    "switchMap",
    test(
      "concating arrays",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.switchMap<number, number>(
          _ => pipe([1, 2, 3], Observable.fromReadonlyArray()),
          {
            innerType: PureSynchronousComputationType,
          },
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "only produce the last observable",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.switchMap<number, number>(
          x =>
            pipe(
              [x, x, x],
              Observable.fromReadonlyArray<number>({
                delay: 1,
                delayStart: true,
              }),
            ),
          {
            innerType: PureSynchronousComputationType,
          },
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([3, 3, 3]),
      ),
    ),
    test(
      "overlapping notification",
      pipeLazy(
        [none, none, none],
        Observable.fromReadonlyArray({ delay: 4 }),
        Observable.switchMap<void, number>(
          _ => pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })),
          {
            innerType: PureSynchronousComputationType,
          },
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 1, 2, 1, 2, 3]),
      ),
    ),
    test(
      "concating arrays",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 1 }),

        Observable.switchMap<number, number>(
          _ => pipe([1, 2, 3], Observable.fromReadonlyArray()),
          {
            innerType: PureSynchronousComputationType,
          },
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    DeferredReactiveObservableOperator(
      Observable.switchMap(_ => Observable.empty({ delay: 1 })),
    ),
    DeferringObservableOperatorTests(
      Observable.switchMap(_ => Observable.empty({ delay: 1 }), {
        innerType: PureDeferredComputationType,
      }),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.switchMap(
        _ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        {
          innerType: SynchronousComputationWithSideEffectsType,
        },
      ),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.switchMap(
        _ => pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        {
          innerType: DeferredComputationWithSideEffectsType,
        },
      ),
    ),
  ),
  describe(
    "takeFirst",
    DeferredReactiveObservableOperator(Observable.takeFirst()),
  ),
  describe(
    "takeLast",
    DeferredReactiveObservableOperator(Observable.takeLast()),
  ),
  describe(
    "takeUntil",
    test(
      "takes until the notifier notifies its first notification",
      pipeLazy(
        [1, 2, 3, 4, 5],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.takeUntil(
          pipe(
            [1],
            Observable.fromReadonlyArray({ delay: 3, delayStart: true }),
          ),
        ),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    DeferredReactiveObservableOperator(
      Observable.takeUntil(Observable.empty({ delay: 1 })),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.takeUntil(
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
      ),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.takeUntil(
        pipe(
          () => Promise.resolve(1),
          Observable.fromAsyncFactory(),
          Observable.forEach(ignore),
        ),
      ),
    ),
    DeferringObservableOperatorTests(Observable.takeUntil(Subject.create())),
  ),
  describe(
    "takeWhile",
    DeferredReactiveObservableOperator(Observable.takeWhile(alwaysTrue)),
  ),
  describe(
    "throttle",
    test(
      "first",
      pipeLazy(
        Observable.generate(increment, returns<number>(-1), {
          delay: 1,
          delayStart: true,
        }),
        Observable.takeFirst({ count: 100 }),
        Observable.throttle<number>(50, { mode: "first" }),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 49, 99]),
      ),
    ),
    test(
      "last",
      pipeLazy(
        Observable.generate(increment, returns<number>(-1), {
          delay: 1,
          delayStart: true,
        }),
        Observable.takeFirst({ count: 200 }),
        Observable.throttle<number>(50, { mode: "last" }),
        Observable.toReadonlyArray(),
        expectArrayEquals([49, 99, 149, 199]),
      ),
    ),
    test(
      "interval",
      pipeLazy(
        Observable.generate(increment, returns<number>(-1), {
          delay: 1,
          delayStart: true,
        }),
        Observable.takeFirst({ count: 200 }),
        Observable.throttle<number>(75, { mode: "interval" }),
        Observable.toReadonlyArray(),
        expectArrayEquals([0, 74, 149, 199]),
      ),
    ),
    DeferredReactiveObservableOperator(Observable.throttle(1)),
  ),
  describe(
    "throwIfEmpty",
    test("when source is empty and delayed", () => {
      const error = new Error();
      pipe(
        pipeLazy(
          [],
          Observable.fromReadonlyArray({ delay: 1 }),
          Observable.throwIfEmpty(() => error),
          Observable.run(),
        ),
        expectToThrowError(error),
      );
    }),

    test("when factory throws after a delay", () => {
      const error = new Error();
      pipe(
        pipeLazy(
          [],
          Observable.fromReadonlyArray({ delay: 1 }),
          Observable.throwIfEmpty(() => {
            throw error;
          }),
          Observable.run(),
        ),
        expectToThrowError(error),
      );
    }),
    test(
      "when source is not empty with delay",
      pipeLazy(
        [1],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.throwIfEmpty(returns(none)),
        Observable.toReadonlyArray<number>(),
        expectArrayEquals([1]),
      ),
    ),
    DeferredReactiveObservableOperator(
      Observable.throwIfEmpty(() => newInstance(Error)),
    ),
  ),
  describe(
    "toEventSource",
    test("when the source completes without error", () => {
      const result: number[] = [];
      using vts = VirtualTimeScheduler.create();
      pipe(
        [0, 1, 2],
        Observable.fromReadonlyArray(),
        Observable.toEventSource(vts),
        EventSource.addEventHandler(bindMethod(result, Array_push)),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([0, 1, 2]));
    }),
  ),
  describe(
    "toReadonlyArrayAsync",
    testAsync("with pure delayed source", async () => {
      using scheduler = HostScheduler.create();

      await pipeAsync(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 3 }),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals([1, 2, 3]),
      );
    }),
    testAsync("with empty non-runnable source", async () => {
      using scheduler = HostScheduler.create();
      await pipeAsync(
        EventSource.create<number>(l => l[DisposableLike_dispose]()),
        Observable.fromEventSource(),
        Observable.toReadonlyArrayAsync<number>(scheduler),
        expectArrayEquals<number>([]),
      );
    }),
  ),
  describe(
    "withCurrentTime",
    DeferredReactiveObservableOperator(Observable.withCurrentTime(returns)),
  ),
  describe(
    "withLatestFrom",
    test(
      "when source and latest are interlaced",
      pipeLazy(
        [0, 1, 2, 3],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.withLatestFrom(
          pipe([0, 1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })),
          tuple<number, number>,
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals(
          [tuple(0, 0), tuple(1, 0), tuple(2, 1), tuple(3, 1)],
          { valuesEquality: arrayEquality() },
        ),
      ),
    ),
    test(
      "when latest produces no values",
      pipeLazy(
        [0],
        Observable.fromReadonlyArray({ delay: 1 }),
        Observable.withLatestFrom(
          Observable.empty<number>({ delay: 0 }),
          returns(1),
        ),
        Observable.toReadonlyArray(),
        expectArrayEquals([] as number[]),
      ),
    ),
    test("when latest throws", () => {
      const error = newInstance(Error);

      pipe(
        pipeLazy(
          [0],
          Observable.fromReadonlyArray({ delay: 1 }),
          Observable.withLatestFrom(
            Observable.raise<number>({ raise: returns(error) }),
            returns(1),
          ),
          Observable.run(),
        ),
        expectToThrowError(error),
      );
    }),
    DeferredReactiveObservableOperator(
      Observable.withLatestFrom(Observable.empty({ delay: 1 }), returns),
    ),
    ObservableOperatorWithSideEffectsTests(
      Observable.withLatestFrom(
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
        returns,
      ),
    ),
    AlwaysReturnsDeferredObservableWithSideEffectsOperatorTests(
      Observable.withLatestFrom(
        pipe(
          () => Promise.resolve(1),
          Observable.fromAsyncFactory(),
          Observable.forEach(ignore),
        ),
        returns,
      ),
    ),
    DeferringObservableOperatorTests(
      Observable.withLatestFrom(Subject.create(), returns),
    ),
  ),
  describe(
    "zipLatest",
    test(
      "zip two delayed observable",
      pipeLazy(
        Observable.zipLatest(
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8],
            Observable.fromReadonlyArray({ delay: 1, delayStart: true }),
          ),
          pipe(
            [1, 2, 3, 4],
            Observable.fromReadonlyArray({ delay: 2, delayStart: true }),
          ),
        ),
        Observable.map<Tuple2<number, number>, number>(([a, b]) => a + b),
        Observable.toReadonlyArray(),
        expectArrayEquals([2, 5, 8, 11]),
      ),
    ),
    testIsPureSynchronousObservable(
      Observable.zipLatest(
        Observable.empty({ delay: 1 }),
        Observable.empty({ delay: 1 }),
      ),
    ),
    testIsPureDeferredObservable(
      (() => {
        using vts = VirtualTimeScheduler.create();
        return Observable.zipLatest(
          pipe(Observable.empty({ delay: 1 }), Observable.subscribeOn(vts)),
          Observable.empty({ delay: 1 }),
        );
      })(),
    ),
    testIsSynchronousObservableWithSideEffects(
      Observable.zipLatest(
        Observable.empty({ delay: 1 }),
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
      ),
    ),
    testIsPureDeferredObservable(
      Observable.zipLatest(Observable.empty({ delay: 1 }), Subject.create()),
    ),
    testIsDeferredObservableWithSideEffects(
      Observable.zipLatest(
        pipe(async () => {
          throw new Error();
        }, Observable.fromAsyncFactory()),
        Observable.empty({ delay: 1 }),
        pipe(Observable.empty({ delay: 1 }), Observable.forEach(ignore)),
      ),
    ),
  ),
);

((_: Observable.Signature) => {})(Observable);
