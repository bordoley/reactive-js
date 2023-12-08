import { Readable, Writable, pipeline } from "node:stream";
import zlib from "node:zlib";
import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../../../__internal__/testing.js";
import { PauseableLike_resume, SchedulerLike } from "../../../concurrent.js";
import * as Observable from "../../../concurrent/Observable.js";
import * as Scheduler from "../../../concurrent/Scheduler.js";
import {
  Optional,
  bindMethod,
  newInstance,
  pipe,
  pipeLazy,
  returns,
} from "../../../functions.js";

import { DisposableLike } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as NodeStream from "../Stream.js";

testModule(
  "node/Stream",
  describe(
    "sinkInto",
    testAsync(
      "sinking to writable",
      pipeLazy(async (scheduler: SchedulerLike & DisposableLike) => {
        const encoder = newInstance(TextEncoder);
        let data = "";
        const writable = newInstance(Writable, {
          autoDestroy: true,
          highWaterMark: 4,

          write(chunk, _encoding, callback) {
            data += chunk;
            callback();
          },
        });

        await pipe(
          ["abc", "defg", "xyz"],
          Observable.fromReadonlyArray(),
          Observable.keep(x => x !== "xyz"),
          Observable.map(bindMethod(encoder, "encode")),
          Observable.flow(scheduler),
          Disposable.addTo(scheduler),
          NodeStream.sinkInto(writable),
          Observable.lastAsync(scheduler),
        );

        pipe(writable.destroyed, expectEquals(true));
        pipe(data, expectEquals("abcdefg"));
      }, Disposable.usingAsync(Scheduler.createHostScheduler)),
    ),
    testAsync(
      "sinking to writable that throws",
      pipeLazy(async (scheduler: SchedulerLike & DisposableLike) => {
        const encoder = newInstance(TextEncoder);

        const err = newInstance(Error);
        const writable = newInstance(Writable, {
          autoDestroy: true,
          highWaterMark: 4,

          write(_chunk, _encoding, callback) {
            callback(err);
          },
        });

        const promise = pipe(
          [encoder.encode("abc"), encoder.encode("defg")],
          Observable.fromReadonlyArray(),
          Observable.flow(scheduler),
          Disposable.addTo(scheduler),
          NodeStream.sinkInto(writable),
          Observable.lastAsync(scheduler),
        );

        await expectPromiseToThrow(promise);
        pipe(writable.destroyed, expectEquals(true));
      }, Disposable.usingAsync(Scheduler.createHostScheduler)),
    ),
    testAsync(
      "sinking to writable with pipeline",
      pipeLazy(async (scheduler: SchedulerLike & DisposableLike) => {
        const encoder = newInstance(TextEncoder);
        let data = "";
        const writable = newInstance(Writable, {
          autoDestroy: true,
          highWaterMark: 4,

          write(chunk, _encoding, callback) {
            data += chunk;
            callback();
          },
        });

        const compressionPipeline = pipeline(
          zlib.createGzip(),
          zlib.createGunzip(),
          writable,
          Disposable.toErrorHandler(scheduler),
        );

        await pipe(
          [encoder.encode("abc"), encoder.encode("defg")],
          Observable.fromReadonlyArray(),
          Observable.flow(scheduler),
          Disposable.addTo(scheduler),
          NodeStream.sinkInto(compressionPipeline),
          Observable.lastAsync(scheduler),
        );

        pipe(writable.destroyed, expectEquals(true));
        pipe(data, expectEquals("abcdefg"));
      }, Disposable.usingAsync(Scheduler.createHostScheduler)),
    ),
  ),

  describe(
    "flow",
    testAsync("reading from readable", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }

      const textDecoder = newInstance(TextDecoder);

      await Disposable.usingAsync(Scheduler.createHostScheduler)(
        async scheduler => {
          const flowable = pipe(
            () => Readable.from(generate()),
            NodeStream.flow(scheduler),
            Disposable.addTo(scheduler),
          );

          flowable[PauseableLike_resume]();

          const acc = await pipe(
            flowable,
            Observable.scan<Uint8Array, string>(
              (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
              returns(""),
            ),
            Observable.lastAsync<string>(scheduler),
          );
          pipe(acc, expectEquals<Optional<string>>("abcdefg"));
        },
      );
    }),
    testAsync("reading from readable that throws", async () => {
      const err = newInstance(Error);

      function* generate() {
        yield Buffer.from("abc", "utf8");
        throw err;
      }

      const textDecoder = newInstance(TextDecoder);

      await Disposable.usingAsync(Scheduler.createHostScheduler)(
        async scheduler => {
          const flowable = pipe(
            () => Readable.from(generate()),
            NodeStream.flow(scheduler),
            Disposable.addTo(scheduler),
          );

          flowable[PauseableLike_resume]();

          await pipe(
            flowable,
            Observable.scan<Uint8Array, string>(
              (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
              returns(""),
            ),
            Observable.lastAsync(scheduler),
            expectPromiseToThrow,
          );
        },
      );
    }),
  ),
);
