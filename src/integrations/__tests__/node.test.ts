import { Readable, Writable } from "stream";
import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import {
  Optional,
  invoke,
  newInstance,
  pipe,
  returns,
} from "../../functions.js";
import * as ReadonlyArray from "../../keyed-containers/ReadonlyArray.js";
import * as Observable from "../../rx/Observable.js";
import * as Runnable from "../../rx/Runnable.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import { StreamableLike_stream } from "../../streaming.js";
import * as Flowable from "../../streaming/Flowable.js";
import * as Streamable from "../../streaming/Streamable.js";
import { DisposableLike_dispose } from "../../util.js";
import * as Disposable from "../../util/Disposable.js";
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

        const stream = pipe(
          writable,
          returns,
          createWritableSink,
          invoke(StreamableLike_stream, scheduler),
        );

        pipe(src, Streamable.sinkInto(stream), Disposable.addTo(stream));
        await pipe(stream, Observable.lastAsync({ scheduler }));

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

        const stream = pipe(
          writable,
          returns,
          createWritableSink,
          invoke(StreamableLike_stream, scheduler),
        );

        pipe(src, Streamable.sinkInto(stream), Disposable.addTo(stream));
        const promise = pipe(stream, Observable.lastAsync({ scheduler }));

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
        Observable.scan<Uint8Array, string>(
          (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
          returns(""),
        ),
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
        Observable.scan<Uint8Array, string>(
          (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
          returns(""),
        ),
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
      Observable.scan<Uint8Array, string>(
        (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
        returns(""),
      ),
      Observable.takeFirst<string>({ count: 1 }),
      Observable.lastAsync(),
    );

    pipe(acc, expectEquals<Optional<string>>("abcdefg"));
  }),
);
