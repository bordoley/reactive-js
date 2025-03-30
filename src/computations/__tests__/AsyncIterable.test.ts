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
import * as Observable from "../Observable.js";
import * as Source from "../Source.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import InteractiveComputationModuleTests from "./fixtures/InteractiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";

const m = Computation.makeModule<AsyncIterable.Computation>()(AsyncIterable);

testModule(
  "AsyncIterable",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
  InteractiveComputationModuleTests(m),
  describe(
    "fromAsyncFactory",
    testAsync("when disposed by an error", async () => {
      // Note, we use the Observable scheduler to jump to the macrotask
      // queue to avoid starving the microtask queue through rescheduling.
      let exited = false;
      const factory = async (options?: { signal?: AbortSignal }) => {
        while (!(options?.signal?.aborted ?? true)) {
          await pipe(Observable.delay(0), Source.lastAsync());
        }
        exited = true;
      };

      const subscription = pipe(
        factory,
        AsyncIterable.fromAsyncFactory(),
        AsyncIterable.toObservable(),
        Source.subscribe(),
      );

      await Promise.resolve();

      subscription[DisposableLike_dispose](error("something went wrong"));

      await pipe(Observable.delay(0), Source.lastAsync());

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
            await pipe(Observable.delay(0), Source.lastAsync());
          }
          exited = true;
        };

        const subscription = pipe(
          factory,
          AsyncIterable.fromAsyncFactory(),
          AsyncIterable.toObservable(),
          Source.subscribe(),
        );

        await Promise.resolve();

        subscription[DisposableLike_dispose]();

        await pipe(Observable.delay(0), Source.lastAsync());

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
        Source.lastAsync<number>(),
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
