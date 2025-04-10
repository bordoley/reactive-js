import {
  describe,
  expectEquals,
  expectTrue,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import { Optional, error, pipe, pipeLazyAsync } from "../../functions.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import { DisposableLike_dispose } from "../../utils.js";
import * as AsyncIterable from "../AsyncIterable.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
import * as SynchronousObservable from "../SynchronousObservable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import InteractiveComputationModuleTests from "./fixtures/InteractiveComputationModuleTests.js";

const m = Computation.makeModule<AsyncIterable.Signature>(AsyncIterable);

testModule(
  "AsyncIterable",
  ComputationModuleTests(AsyncIterable),
  DeferredComputationModuleTests(m),
  InteractiveComputationModuleTests(m),
  describe(
    "fromAsyncFactory",
    testAsync("when disposed by an error", async () => {
      // Note, we use the Observable scheduler to jump to the macrotask
      // queue to avoid starving the microtask queue through rescheduling.
      let exited = false;
      const factory = async (options?: { signal?: AbortSignal }) => {
        while (!(options?.signal?.aborted ?? true)) {
          await pipe(SynchronousObservable.delay(0), EventSource.lastAsync());
        }
        exited = true;
      };

      const subscription = pipe(
        factory,
        AsyncIterable.fromAsyncFactory(),
        AsyncIterable.toObservable(),
        EventSource.subscribe(),
      );

      await Promise.resolve();

      subscription[DisposableLike_dispose](error("something went wrong"));

      await pipe(SynchronousObservable.delay(0), EventSource.lastAsync());

      expectTrue("expect the factory to have exited")(exited);
    }),
    testAsync(
      "disposing cancels a promise that has not yet resolve",
      async () => {
        // Note, we use the Observable scheduler to jump to the macrotask
        // queue to avoid starving the microtask queue through rescheduling.
        let exited = false;
        const factory = async (options?: { signal?: AbortSignal }) => {
          while (!(options?.signal?.aborted ?? true)) {
            await pipe(SynchronousObservable.delay(0), EventSource.lastAsync());
          }
          exited = true;
        };

        const subscription = pipe(
          factory,
          AsyncIterable.fromAsyncFactory(),
          AsyncIterable.toObservable(),
          EventSource.subscribe(),
        );

        await Promise.resolve();

        subscription[DisposableLike_dispose]();

        await pipe(SynchronousObservable.delay(0), EventSource.lastAsync());

        expectTrue("expect the factory to have exited")(exited);
      },
    ),
    testAsync(
      "Produces a value ",
      pipeLazyAsync(
        async (): Promise<number> => {
          await Promise.resolve();
          return 10;
        },
        AsyncIterable.fromAsyncFactory(),
        AsyncIterable.toObservable(),
        EventSource.lastAsync<number>(),
        expectEquals<Optional<number>>(10),
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

((_: AsyncIterable.Signature) => {})(AsyncIterable);
