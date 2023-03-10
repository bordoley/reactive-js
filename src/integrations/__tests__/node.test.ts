import { Readable, Writable } from "stream";
import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../../__tests__/testing.js";
import * as ReadonlyArray from "../../containers/ReadonlyArray.js";
import { Optional, newInstance, pipe, returns } from "../../functions.js";
import * as Observable from "../../rx/Observable.js";
import * as Runnable from "../../rx/Runnable.js";
import { PauseableState_paused } from "../../scheduling.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import { StreamableLike_stream } from "../../streaming.js";
import * as Flowable from "../../streaming/Flowable.js";
import * as Stream from "../../streaming/Stream.js";
import { DisposableLike_dispose } from "../../util.js";
import {
  createReadableSource,
  createWritableSink,
  gunzip,
  gzip,
} from "../node.js";

testModule(
  "node",
  describe(
    "createWritableIOSink",
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

        const src = pipe(
          [encoder.encode("abc"), encoder.encode("defg")],
          ReadonlyArray.toRunnable(),
          Runnable.toFlowable(),
        );

        const dest = pipe(
          createWritableSink(returns(writable))[StreamableLike_stream](
            scheduler,
          ),
          Stream.sourceFrom(src),
        );

        await pipe(
          dest,
          Observable.endWith(returns(PauseableState_paused)),
          Observable.lastAsync(),
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

        const src = pipe(
          [encoder.encode("abc"), encoder.encode("defg")],
          ReadonlyArray.toRunnable(),
          Runnable.toFlowable(),
        );

        const dest = pipe(
          createWritableSink(returns(writable))[StreamableLike_stream](
            scheduler,
          ),
          Stream.sourceFrom(src),
        );

        const promise = pipe(
          dest,
          Observable.ignoreElements(),
          Observable.endWith(0),
          Observable.lastAsync({ scheduler }),
        );
        await expectPromiseToThrow(promise);
        pipe(writable.destroyed, expectEquals(true));
      } finally {
        scheduler[DisposableLike_dispose]();
      }
    }),
  ),

  describe(
    "createReadableIOSource",
    testAsync("reading from readable", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }

      const textDecoder = newInstance(TextDecoder);

      const acc = await pipe(
        createReadableSource(() => pipe(generate(), Readable.from)),
        Flowable.toObservable(),
        Observable.reduce<Uint8Array, string>(
          (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
          returns(""),
        ),
        Observable.takeFirst<string>({ count: 1 }),
        Observable.lastAsync(),
      );
      pipe(acc, expectEquals<Optional<string>>("abcdefg"));
    }),
    testAsync("reading from readable that throws", async () => {
      const err = newInstance(Error);

      function* generate() {
        yield Buffer.from("abc", "utf8");
        throw err;
      }

      const textDecoder = newInstance(TextDecoder);
      await pipe(
        createReadableSource(() => pipe(generate(), Readable.from)),
        Flowable.toObservable(),
        Observable.reduce<Uint8Array, string>(
          (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
          returns(""),
        ),
        Observable.endWith(""),
        Observable.lastAsync(),
        expectPromiseToThrow,
      );
    }),
  ),
  testAsync("transform", async () => {
    const encoder = newInstance(TextEncoder);
    const textDecoder = newInstance(TextDecoder);

    const acc = await pipe(
      [encoder.encode("abc"), encoder.encode("defg")],
      ReadonlyArray.toRunnable(),
      Runnable.toFlowable(),
      gzip(),
      gunzip(),
      Flowable.toObservable(),
      Observable.reduce<Uint8Array, string>(
        (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
        returns(""),
      ),
      Observable.takeFirst<string>({ count: 1 }),
      Observable.lastAsync(),
    );

    pipe(acc, expectEquals<Optional<string>>("abcdefg"));
  }),
);
