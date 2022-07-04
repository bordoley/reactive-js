import { Readable, Writable } from "stream";
import { endWith, ignoreElements } from "../container";
import { fromObservable, toObservable } from "../flowable";
import { newInstance, pipe, returns } from "../functions";
import {
  createReadableSource,
  createWritableSink,
  gunzip,
  gzip,
} from "../node";
import {
  ObservableLike,
  concatT,
  fromArray,
  fromArrayT,
  keepT,
  reduce,
  takeFirst,
  toPromise,
} from "../observable";
import { createHostScheduler } from "../scheduler";
import { sourceFrom, stream } from "../streamable";
import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  testAsync,
} from "../testing";

const scheduler = createHostScheduler();

export const tests = describe(
  "node",
  describe(
    "createWritableIOSink",
    testAsync("sinking to writable", async () => {
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
        fromArray(),
        fromObservable(),
      );

      const dest = pipe(
        createWritableSink(returns(writable)),
        stream(scheduler),
        sourceFrom(src),
      );

      await pipe(
        dest,
        endWith({ ...fromArrayT, ...concatT }, 0),
        toPromise(scheduler),
      );

      pipe(writable.destroyed, expectEquals(true));
      pipe(data, expectEquals("abcdefg"));
    }),

    testAsync("sinking to writable that throws", async () => {
      const encoder = newInstance(TextEncoder);

      const cause = newInstance(Error);
      const writable = newInstance(Writable, {
        autoDestroy: true,
        highWaterMark: 4,

        write(_chunk, _encoding, callback) {
          callback(cause);
        },
      });

      const src = pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        fromArray(),
        fromObservable(),
      );

      const dest = pipe(
        createWritableSink(returns(writable)),
        stream(scheduler),
        sourceFrom(src),
      );

      const promise = pipe(
        dest,
        ignoreElements(keepT),
        endWith<ObservableLike<number>, number>(
          { ...fromArrayT, ...concatT },
          0,
        ),
        toPromise(scheduler),
      );

      await expectPromiseToThrow(promise);
      pipe(writable.destroyed, expectEquals(true));
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
        toObservable(),
        reduce(
          (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
          returns(""),
        ),
        takeFirst({ count: 1 }),
        toPromise(scheduler),
      );

      pipe(acc, expectEquals("abcdefg"));
    }),
    testAsync("reading from readable that throws", async () => {
      const cause = newInstance(Error);

      function* generate() {
        yield Buffer.from("abc", "utf8");
        throw cause;
      }

      const textDecoder = newInstance(TextDecoder);

      await pipe(
        createReadableSource(() => pipe(generate(), Readable.from)),
        toObservable(),
        reduce(
          (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
          returns(""),
        ),
        endWith({ ...fromArrayT, ...concatT }, 0),
        toPromise(scheduler),
        expectPromiseToThrow,
      );
    }),
  ),
  testAsync("transform", async () => {
    const encoder = newInstance(TextEncoder);

    const textDecoder = newInstance(TextDecoder);
    const acc = await pipe(
      [encoder.encode("abc"), encoder.encode("defg")],
      fromArray<Uint8Array>(),
      fromObservable(),
      gzip(),
      gunzip(),
      toObservable(),
      reduce(
        (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
        returns(""),
      ),
      takeFirst({ count: 1 }),
      toPromise(scheduler),
    );

    pipe(acc, expectEquals("abcdefg"));
  }),
);
