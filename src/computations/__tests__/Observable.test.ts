import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
  testModule,
} from "../../__internal__/testing.js";
import {
  arrayEquality,
  newInstance,
  pipe,
  pipeLazy,
  returns,
  tuple,
} from "../../functions.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as Disposable from "../../utils/Disposable.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import { VirtualTimeSchedulerLike_run } from "../../utils.js";
import * as Computation from "../Computation.js";
import * as Observable from "../Observable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

const m = Computation.makeModule<Observable.Computation>()(Observable);

testModule(
  "Observable",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
  SequentialReactiveComputationModuleTests(m),
  SynchronousComputationModuleTests(m),
  ConcurrentReactiveComputationModuleTests(m),
  describe(
    "takeUntil",
    // Ideally these tests would be part of SequentialReactiveComputationModuleTests
    // but writing dependable tests that use real time is slow at best and ripe for
    // flakiness. The implementation is shared so only test using Observable.
    test(
      "takes until the notifier notifies its first notification",
      pipeLazy(
        [10, 20, 30, 40, 50],
        Computation.fromReadonlyArray(m)({ delay: 2 }),
        Observable.takeUntil<number>(
          pipe(
            [1],
            Computation.fromReadonlyArray(m)({ delay: 3, delayStart: true }),
          ),
        ),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals([10, 20]),
      ),
    ),
  ),

  describe(
    "withLatestFrom",
    // Ideally these tests would be part of SequentialReactiveComputationModuleTests
    // but writing dependable tests that use real time is slow at best and ripe for
    // flakiness. The implementation is shared so only test using Observable.
    test(
      "when source and latest are interlaced",
      pipeLazy(
        [0, 1, 2, 3],
        Computation.fromReadonlyArray(m)({ delay: 1 }),
        Observable.withLatestFrom<number, number>(
          pipe([0, 1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 2 })),
        ),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals(
          [tuple(0, 0), tuple(1, 0), tuple(2, 1), tuple(3, 1)],
          {
            valuesEquality: arrayEquality(),
          },
        ),
      ),
    ),
    test(
      "when latest produces no values",
      pipeLazy(
        [0],
        Computation.fromReadonlyArray(m)({ delay: 1 }),
        Observable.withLatestFrom(
          Computation.empty(m)(),

          returns(1),
        ),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals([] as number[]),
      ),
    ),
    test("when latest throws", () => {
      using vts = VirtualTimeScheduler.create();
      const error = newInstance(Error);

      const result = pipe(
        [0],
        Computation.fromReadonlyArray(m)({ delay: 1 }),
        Observable.withLatestFrom(
          Computation.raise(m)<number>({
            raise: returns(error),
          }),
          returns(1),
        ),
        Computation.subscribe(m)({ scheduler: vts }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(
        pipeLazy(result, Disposable.raiseIfDisposedWithError),
        expectToThrowError(error),
      );
    }),
    test(
      "with selector",
      pipeLazy(
        [0, 1, 2, 3],
        Computation.fromReadonlyArray(m)({ delay: 1 }),
        Observable.withLatestFrom<number, number, number>(
          pipe([0, 1, 2, 3], Computation.fromReadonlyArray(m)({ delay: 2 })),
          (x, y) => x + y,
        ),
        Computation.toReadonlyArray(m)(),
        expectArrayEquals([0, 1, 3, 4]),
      ),
    ),
  ),
)({
  beforeEach() {
    const scheduler = HostScheduler.create();
    DefaultScheduler.set(scheduler);
  },
  afterEach() {
    DefaultScheduler.dispose();
  },
});
