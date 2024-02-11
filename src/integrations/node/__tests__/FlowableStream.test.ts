import { Readable, Writable, pipeline } from "node:stream";
import zlib from "node:zlib";
import {
  describe,
  expectEquals,
  expectFalse,
  expectPromiseToThrow,
  expectTrue,
  testAsync,
  testModule,
} from "../../../__internal__/testing.js";
import * as Flowable from "../../../concurrent/Flowable.js";
import * as HostScheduler from "../../../concurrent/HostScheduler.js";
import * as Observable from "../../../concurrent/Observable.js";
import {
  FlowableLike_flow,
  PauseableLike_resume,
  SchedulerLike,
} from "../../../concurrent.js";
import {
  Optional,
  invoke,
  newInstance,
  pipe,
  pipeAsync,
  returns,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike, DisposableLike_isDisposed } from "../../../utils.js";
import * as FlowableStream from "../FlowableStream.js";

testModule(
  "FlowableStream",
  describe(
    "create",
    testAsync("reading from readable", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }

      await Disposable.usingAsync(HostScheduler.create)(async scheduler => {
        const readable = Readable.from(generate(), {
          autoDestroy: false,
        });

        const flowed = pipe(
          readable,
          returns,
          FlowableStream.create,
          invoke(FlowableLike_flow, scheduler),
          Disposable.addTo(scheduler),
        );

        flowed[PauseableLike_resume]();

        await pipeAsync(
          flowed,
          Observable.decodeWithCharset(),
          Observable.scan(
            (acc: string, next: string) => acc + next,
            returns(""),
          ),
          Observable.lastAsync<string>(scheduler),
          expectEquals<Optional<string>>("abcdefg"),
        );

        expectTrue(readable.destroyed);
      });
    }),
    testAsync("reading from readable factory", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }

      await Disposable.usingAsync(HostScheduler.create)(async scheduler => {
        const flowed = pipe(
          FlowableStream.create(() => Readable.from(generate())),
          invoke(FlowableLike_flow, scheduler),
          Disposable.addTo(scheduler),
        );

        flowed[PauseableLike_resume]();

        const acc = await pipe(
          flowed,
          Observable.decodeWithCharset(),
          Observable.scan(
            (acc: string, next: string) => acc + next,
            returns(""),
          ),
          Observable.lastAsync<string>(scheduler),
        );
        pipe(acc, expectEquals<Optional<string>>("abcdefg"));
        expectTrue(flowed[DisposableLike_isDisposed]);
      });
    }),
    testAsync("reading from readable that throws", async () => {
      const err = newInstance(Error);

      function* generate() {
        yield Buffer.from("abc", "utf8");
        throw err;
      }

      await Disposable.usingAsync(HostScheduler.create)(async scheduler => {
        const flowed = pipe(
          FlowableStream.create(() => Readable.from(generate())),
          invoke(FlowableLike_flow, scheduler),
          Disposable.addTo(scheduler),
        );

        flowed[PauseableLike_resume]();

        await pipe(
          flowed,
          Observable.lastAsync(scheduler),
          expectPromiseToThrow,
        );
      });
    }),
  ),
  describe(
    "writeTo",
    testAsync(
      "writing to writable",
      Disposable.usingAsyncLazy(HostScheduler.create)(
        async (scheduler: SchedulerLike & DisposableLike) => {
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
            Observable.encodeUtf8(),
            Flowable.fromRunnable(),
            FlowableStream.writeTo(writable),
            Observable.lastAsync(scheduler),
          );

          expectFalse(writable.destroyed);
          pipe(data, expectEquals("abcdefg"));
          writable.destroy();
        },
      ),
    ),
    testAsync(
      "writing to writable that throws",
      Disposable.usingAsyncLazy(HostScheduler.create)(
        async (scheduler: SchedulerLike & DisposableLike) => {
          const err = newInstance(Error);
          const writable = newInstance(Writable, {
            autoDestroy: true,
            highWaterMark: 4,

            write(_chunk, _encoding, callback) {
              callback(err);
            },
          });

          await pipe(
            ["abc", "defg"],
            Observable.fromReadonlyArray(),
            Observable.encodeUtf8(),
            Flowable.fromRunnable(),
            FlowableStream.writeTo(writable),
            Observable.lastAsync(scheduler),
            expectPromiseToThrow,
          );

          pipe(writable.destroyed, expectEquals(true));
        },
      ),
    ),
    testAsync(
      "writing to writable with pipeline",
      Disposable.usingAsyncLazy(HostScheduler.create)(
        async (scheduler: SchedulerLike & DisposableLike) => {
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
            ["abc", "defg"],
            Observable.fromReadonlyArray(),
            Observable.encodeUtf8(),
            Flowable.fromRunnable(),
            FlowableStream.writeTo(compressionPipeline),
            Observable.lastAsync(scheduler),
          );

          pipe(writable.destroyed, expectEquals(true));
          pipe(data, expectEquals("abcdefg"));
        },
      ),
    ),
  ),
);
