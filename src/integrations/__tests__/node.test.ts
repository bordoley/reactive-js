import { Readable, Writable, pipeline } from "node:stream";
import zlib from "node:zlib";
import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import { Optional, newInstance, pipe, returns } from "../../functions.js";
import * as ReadonlyArray from "../../keyed-containers/ReadonlyArray.js";
import * as Observable from "../../rx/Observable.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import { DisposableLike_dispose, PauseableLike_resume } from "../../util.js";
import * as Disposable from "../../util/Disposable.js";
import * as NodeStream from "../node/Stream.js";

testModule(
  "node",
  describe(
    "sinkInto",
    testAsync("sinking to writable", async () => {
      const scheduler = Scheduler.createHostScheduler();

      try {
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
          [encoder.encode("abc"), encoder.encode("defg")],
          ReadonlyArray.flow(scheduler),
          Disposable.addTo(scheduler),
          NodeStream.sinkInto(writable),
          Observable.lastAsync({ scheduler }),
        );

        pipe(writable.destroyed, expectEquals(true));
        pipe(data, expectEquals("abcdefg"));
      } finally {
        scheduler[DisposableLike_dispose]();
      }
    }),
    testAsync("sinking to writable that throws", async () => {
      const scheduler = Scheduler.createHostScheduler();

      try {
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
          ReadonlyArray.flow(scheduler),
          Disposable.addTo(scheduler),
          NodeStream.sinkInto(writable),
          Observable.lastAsync({ scheduler }),
        );

        await expectPromiseToThrow(promise);
        pipe(writable.destroyed, expectEquals(true));
      } finally {
        scheduler[DisposableLike_dispose]();
      }
    }),
    testAsync("sinking to writable with pipeline", async () => {
      const scheduler = Scheduler.createHostScheduler();

      try {
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
          ReadonlyArray.flow(scheduler),
          Disposable.addTo(scheduler),
          NodeStream.sinkInto(compressionPipeline),
          Observable.lastAsync({ scheduler }),
        );

        pipe(writable.destroyed, expectEquals(true));
        pipe(data, expectEquals("abcdefg"));
      } finally {
        scheduler[DisposableLike_dispose]();
      }
    }),
  ),

  describe(
    "flow",
    testAsync("reading from readable", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }

      const textDecoder = newInstance(TextDecoder);
      const scheduler = Scheduler.createHostScheduler();
      try {
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
          Observable.lastAsync({ scheduler }),
        );
        pipe(acc, expectEquals<Optional<string>>("abcdefg"));
      } finally {
        scheduler[DisposableLike_dispose]();
      }
    }),
    testAsync("reading from readable that throws", async () => {
      const err = newInstance(Error);

      function* generate() {
        yield Buffer.from("abc", "utf8");
        throw err;
      }

      const textDecoder = newInstance(TextDecoder);
      const scheduler = Scheduler.createHostScheduler();
      try {
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
          Observable.lastAsync({ scheduler }),
          expectPromiseToThrow,
        );
      } finally {
        scheduler[DisposableLike_dispose]();
      }
    }),
  ),
);
