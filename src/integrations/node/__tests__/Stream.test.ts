import { Readable, Writable, pipeline } from "node:stream";
import zlib from "node:zlib";
import {
  describe,
  expectEquals,
  expectFalse,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../../../__internal__/testing.js";
import {
  FlowableLike_flow,
  PauseableLike_resume,
  SchedulerLike,
} from "../../../concurrent.js";
import * as Flowable from "../../../concurrent/Flowable.js";
import * as HostScheduler from "../../../concurrent/HostScheduler.js";
import * as Observable from "../../../concurrent/Observable.js";
import {
  Optional,
  bindMethod,
  invoke,
  newInstance,
  pipe,
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
      Disposable.usingAsyncLazy(HostScheduler.create)(
        async (scheduler: SchedulerLike & DisposableLike) => {
          const encoder = newInstance(TextEncoder);
          let data = "";
          const writable = newInstance(Writable, {
            autoDestroy: false,
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
            Flowable.fromRunnable(),
            NodeStream.sinkInto(writable),
            Observable.lastAsync(scheduler),
          );

          expectFalse(writable.destroyed);
          pipe(data, expectEquals("abcdefg"));
          writable.destroy();
        },
      ),
    ),
    testAsync(
      "sinking to writable factory",
      Disposable.usingAsyncLazy(HostScheduler.create)(
        async (scheduler: SchedulerLike & DisposableLike) => {
          const encoder = newInstance(TextEncoder);
          let data = "";

          const writable = newInstance(Writable, {
            autoDestroy: false,
            highWaterMark: 4,

            write(chunk, _encoding, callback) {
              data += chunk;
              callback();
            },
          });

          const factory = returns(writable);

          await pipe(
            ["abc", "defg", "xyz"],
            Observable.fromReadonlyArray(),
            Observable.keep(x => x !== "xyz"),
            Observable.map(bindMethod(encoder, "encode")),
            Flowable.fromRunnable(),
            NodeStream.sinkInto(factory),
            Observable.lastAsync(scheduler),
          );

          pipe(writable.destroyed, expectEquals(true));
          pipe(data, expectEquals("abcdefg"));
        },
      ),
    ),
    testAsync(
      "sinking to writable that throws",
      Disposable.usingAsyncLazy(HostScheduler.create)(
        async (scheduler: SchedulerLike & DisposableLike) => {
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
            Flowable.fromRunnable(),
            NodeStream.sinkInto(writable),
            Observable.lastAsync(scheduler),
          );

          await expectPromiseToThrow(promise);
          pipe(writable.destroyed, expectEquals(true));
        },
      ),
    ),
    testAsync(
      "sinking to writable with pipeline",
      Disposable.usingAsyncLazy(HostScheduler.create)(
        async (scheduler: SchedulerLike & DisposableLike) => {
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
            Flowable.fromRunnable(),
            NodeStream.sinkInto(compressionPipeline),
            Observable.lastAsync(scheduler),
          );

          pipe(writable.destroyed, expectEquals(true));
          pipe(data, expectEquals("abcdefg"));
        },
      ),
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

      await Disposable.usingAsync(HostScheduler.create)(async scheduler => {
        const readable = Readable.from(generate(), {
          autoDestroy: false,
        });

        const flowable = pipe(
          readable,
          NodeStream.flow(),
          invoke(FlowableLike_flow, scheduler),
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

        expectFalse(readable.destroyed);
        readable.destroy();
      });
    }),
    testAsync("reading from readable factory", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }

      const textDecoder = newInstance(TextDecoder);

      await Disposable.usingAsync(HostScheduler.create)(async scheduler => {
        const flowable = pipe(
          () => Readable.from(generate()),
          NodeStream.flow(),
          invoke(FlowableLike_flow, scheduler),
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
      });
    }),
    testAsync("reading from readable that throws", async () => {
      const err = newInstance(Error);

      function* generate() {
        yield Buffer.from("abc", "utf8");
        throw err;
      }

      const textDecoder = newInstance(TextDecoder);

      await Disposable.usingAsync(HostScheduler.create)(async scheduler => {
        const flowable = pipe(
          () => Readable.from(generate()),
          NodeStream.flow(),
          invoke(FlowableLike_flow, scheduler),
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
      });
    }),
  ),
);
