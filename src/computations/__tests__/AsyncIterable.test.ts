import {
  describe,
  expectArrayEquals,
  expectToThrowAsync,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import {
  Computation_deferredWithSideEffectsOfT,
  Computation_pureDeferredOfT,
} from "../../computations.js";
import { error, pipe, pipeLazy, pipeLazyAsync } from "../../functions.js";
import { PauseableLike_resume } from "../../utils.js";
import * as AsyncIterable from "../AsyncIterable.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentDeferredComputationModuleTests from "./fixtures/ConcurrentDeferredComputationModuleTests.js";
import InteractiveComputationModuleTests from "./fixtures/InteractiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";

const AsyncIterableTypes = {
  [Computation_deferredWithSideEffectsOfT]: pipe(
    (async function* () {})(),
    AsyncIterable.of(),
  ),

  [Computation_pureDeferredOfT]: pipe([], AsyncIterable.fromReadonlyArray()),
};

testModule(
  "AsyncIterable",
  ComputationModuleTests(AsyncIterable, AsyncIterableTypes),
  SequentialComputationModuleTests(AsyncIterable, AsyncIterableTypes),
  InteractiveComputationModuleTests(AsyncIterable),
  ConcurrentDeferredComputationModuleTests(AsyncIterable),
  describe(
    "toEventSource",
    testAsync(
      "notifies all the values produced by the iterable",
      pipeLazyAsync(
        [1, 2, 3, 4],
        Computation.fromIterable<AsyncIterable.Computation, number>(
          AsyncIterable,
        ),
        AsyncIterable.toEventSource(),
        EventSource.toReadonlyArrayAsync<number>(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
    testAsync("iterable that completes", async () => {
      const flowed = pipe(
        (async function* foo() {
          yield 1;
          yield 2;
          yield 3;
        })(),
        AsyncIterable.of(),
        AsyncIterable.toEventSource(),
      );
      flowed[PauseableLike_resume]();

      const result = await pipe(flowed, EventSource.toReadonlyArrayAsync());

      pipe(result ?? [], expectArrayEquals([1, 2, 3]));
    }),
    testAsync(
      "iterable that throws",
      pipeLazy(async () => {
        const e = error();

        const flowed = pipe(
          (async function* foo() {
            throw e;
          })(),
          AsyncIterable.of(),
          AsyncIterable.toEventSource(),
        );
        flowed[PauseableLike_resume]();

        await pipe(flowed, EventSource.toReadonlyArrayAsync());
      }, expectToThrowAsync),
    ),
  ),
  /*
  describe(
    "toPauseableObservable",
    testAsync("infinite immediately resolving iterable", async () => {
      using scheduler = HostScheduler.create();

      let timeout: any = none;
      const obs = pipe(
        (async function* foo() {
          let i = 0;
          while (true) {
            await new Promise(resolve => {
              timeout = setTimeout(resolve, 25);
            });
            yield i++;
            timeout = none;
          }
        })(),
        AsyncIterable.of(),
        AsyncIterable.toPauseableObservable(scheduler),
        DisposableContainer.onDisposed(_ => {
          if (timeout !== none) {
            clearTimeout(timeout);
          }
        }),
      );
      obs[PauseableLike_resume]();

      scheduler[SchedulerLike_schedule](_ => obs[PauseableLike_pause](), {
        delay: 20,
      });

      scheduler[SchedulerLike_schedule](_ => obs[PauseableLike_resume](), {
        delay: 40,
      });

      const result = await pipe(
        obs,
        Observable.takeFirst({ count: 10 }),
        Observable.buffer(),
        Observable.lastAsync<readonly number[]>({ scheduler }),
      );
      pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }),
    testAsync("iterable that completes", async () => {
      using scheduler = HostScheduler.create();
      const stream = pipe(
        (async function* foo() {
          yield 1;
          yield 2;
          yield 3;
        })(),
        AsyncIterable.of(),
        AsyncIterable.toPauseableObservable(scheduler),
      );
      stream[PauseableLike_resume]();

      const result = await pipe(
        stream,
        Observable.buffer<number>(),
        Observable.lastAsync({ scheduler }),
      );

      pipe(result ?? [], expectArrayEquals([1, 2, 3]));
    }),
    testAsync(
      "iterable that throws",
      pipeLazy(async () => {
        using scheduler = HostScheduler.create();
        const e = error();

        const stream = pipe(
          (async function* foo() {
            throw e;
          })(),
          AsyncIterable.of(),
          AsyncIterable.toPauseableObservable(scheduler),
        );
        stream[PauseableLike_resume]();

        await pipe(stream, Observable.lastAsync({ scheduler }));
      }, expectToThrowAsync),
    ),
  ),*/
);

((_: AsyncIterable.Signature) => {})(AsyncIterable);
