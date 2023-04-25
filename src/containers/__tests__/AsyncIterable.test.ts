import {
  describe,
  expectArrayEquals,
  expectEquals,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import { error, pipe } from "../../functions.js";
import * as Observable from "../../rx/Observable.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import { FlowableStreamLike_resume } from "../../streaming.js";
import { DisposableLike_dispose } from "../../util.js";
import * as AsyncIterable from "../AsyncIterable.js";

testModule(
  "AsyncIterable",
  describe(
    "flow",
    testAsync("infinite immediately resolving iterable", async () => {
      const scheduler = Scheduler.createHostScheduler();

      try {
        const stream = pipe(
          (async function* foo() {
            let i = 0;
            while (true) {
              yield i++;
            }
          })(),
          AsyncIterable.flow(scheduler, { capacity: 1 }),
        );
        stream[FlowableStreamLike_resume]();

        const result = await pipe(
          stream,
          Observable.takeFirst({ count: 10 }),
          Observable.buffer(),
          Observable.lastAsync({ scheduler }),
        );
        scheduler[DisposableLike_dispose]();

        pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
      } finally {
        scheduler[DisposableLike_dispose]();
      }
    }),
    testAsync("iterable that completes", async () => {
      const scheduler = Scheduler.createHostScheduler();

      try {
        const stream = pipe(
          (async function* foo() {
            yield 1;
            yield 2;
            yield 3;
          })(),
          AsyncIterable.flow(scheduler),
        );
        stream[FlowableStreamLike_resume]();

        const result = await pipe(
          stream,
          Observable.buffer(),
          Observable.lastAsync({ scheduler }),
        );

        pipe(result ?? [], expectArrayEquals([1, 2, 3]));
      } finally {
        scheduler[DisposableLike_dispose]();
      }
    }),

    testAsync("iterable that throws", async () => {
      const scheduler = Scheduler.createHostScheduler();
      try {
        const e = error();

        const stream = pipe(
          (async function* foo() {
            throw e;
          })(),
          AsyncIterable.flow(scheduler),
        );
        stream[FlowableStreamLike_resume]();

        const result = await pipe(
          stream,
          Observable.catchError(e => pipe([e], Observable.fromReadonlyArray())),
          Observable.lastAsync({ scheduler }),
        );

        pipe(result, expectEquals(e as unknown));
      } finally {
        scheduler[DisposableLike_dispose]();
      }
    }),
  ),
  describe(
    "toObservable",
    testAsync("infinite immediately resolving iterable", async () => {
      const result = await pipe(
        (async function* foo() {
          let i = 0;
          while (true) {
            yield i++;
          }
        })(),
        AsyncIterable.toObservable(),
        Observable.takeFirst({ count: 10 }),
        Observable.buffer(),
        Observable.lastAsync({ capacity: 5 }),
      );

      pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }),
    testAsync("iterable that completes", async () => {
      const result = await pipe(
        (async function* foo() {
          yield 1;
          yield 2;
          yield 3;
        })(),
        AsyncIterable.toObservable(),
        Observable.buffer(),
        Observable.lastAsync({ capacity: 1 }),
      );

      pipe(result ?? [], expectArrayEquals([1, 2, 3]));
    }),

    testAsync("iterable that throws", async () => {
      const e = error();

      const result = await pipe(
        (async function* foo() {
          throw e;
        })(),
        AsyncIterable.toObservable(),
        Observable.catchError(e => pipe([e], Observable.fromReadonlyArray())),
        Observable.lastAsync({ capacity: 1 }),
      );

      pipe(result, expectEquals(e as unknown));
    }),
  ),
);
