import * as AsyncIterable from "../AsyncIterable.js";
import * as Disposable from "../Disposable.js";
import * as Observable from "../Observable.js";
import * as Scheduler from "../Scheduler.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrowAsync,
  testAsync,
  testModule,
} from "../__internal__/testing.js";
import { error, pipe, pipeLazy } from "../functions.js";
import { PauseableLike_resume, SchedulerLike } from "../types.js";

testModule(
  "AsyncIterable",
  describe(
    "flow",
    testAsync(
      "infinite immediately resolving iterable",
      Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(
        async (scheduler: SchedulerLike) => {
          const stream = pipe(
            (async function* foo() {
              let i = 0;
              while (true) {
                yield i++;
              }
            })(),
            AsyncIterable.flow(scheduler, { capacity: 1 }),
          );
          stream[PauseableLike_resume]();

          const result = await pipe(
            stream,
            Observable.takeFirst({ count: 10 }),
            Observable.buffer(),
            Observable.lastAsync<readonly number[]>(scheduler),
          );
          pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
        },
      ),
    ),
    testAsync(
      "iterable that completes",
      Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(
        async (scheduler: SchedulerLike) => {
          const stream = pipe(
            (async function* foo() {
              yield 1;
              yield 2;
              yield 3;
            })(),
            AsyncIterable.flow<number>(scheduler),
          );
          stream[PauseableLike_resume]();

          const result = await pipe(
            stream,
            Observable.buffer<number>(),
            Observable.lastAsync(scheduler),
          );

          pipe(result ?? [], expectArrayEquals([1, 2, 3]));
        },
      ),
    ),
    testAsync(
      "iterable that throws",
      pipeLazy(
        Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(
          async (scheduler: SchedulerLike) => {
            const e = error();

            const stream = pipe(
              (async function* foo() {
                throw e;
              })(),
              AsyncIterable.flow(scheduler),
            );
            stream[PauseableLike_resume]();

            await pipe(stream, Observable.lastAsync(scheduler));
          },
        ),
        expectToThrowAsync,
      ),
    ),
  ),
  describe(
    "toObservable",
    testAsync(
      "infinite immediately resolving iterable",
      Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(
        async (scheduler: SchedulerLike) => {
          const result = await pipe(
            (async function* foo() {
              let i = 0;
              while (true) {
                yield i++;
              }
            })(),
            AsyncIterable.toObservable(),
            Observable.takeFirst({ count: 10 }),
            Observable.buffer<number>(),
            Observable.lastAsync(scheduler, { capacity: 5 }),
          );

          pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
        },
      ),
    ),
    testAsync(
      "iterable that completes",
      Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(
        async (scheduler: SchedulerLike) => {
          const result = await pipe(
            (async function* foo() {
              yield 1;
              yield 2;
              yield 3;
            })(),
            AsyncIterable.toObservable(),
            Observable.buffer<number>(),
            Observable.lastAsync(scheduler, { capacity: 1 }),
          );

          pipe(result ?? [], expectArrayEquals([1, 2, 3]));
        },
      ),
    ),

    testAsync(
      "iterable that throws",
      pipeLazy(
        Disposable.usingAsyncLazy(Scheduler.createHostScheduler)(
          async (scheduler: SchedulerLike) => {
            const e = error();

            const result = await pipe(
              (async function* foo() {
                throw e;
              })(),
              AsyncIterable.toObservable(),
              Observable.lastAsync(scheduler, { capacity: 1 }),
            );

            pipe(result, expectEquals(e as unknown));
          },
        ),
        expectToThrowAsync,
      ),
    ),
  ),
);

((_: AsyncIterable.Signature) => {})(AsyncIterable);
