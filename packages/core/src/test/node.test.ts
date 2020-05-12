import { Readable, Writable } from "stream";
import { createGzip, createGunzip } from "zlib";
import { pipe, bind, returns } from "../lib/functions";
import {
  createReadableFlowable,
  createWritableFlowableSink,
  transform,
  createDisposableNodeStream,
} from "../lib/node";
import { fromArray, toPromise } from "../lib/observable";
import { createHostScheduler } from "../lib/scheduler";
import { sink } from "../lib/streamable";
import {
  describe,
  testAsync,
  expectEquals,
  expectPromiseToThrow,
} from "../lib/internal/testing";
import { fromObservable, createFlowableSinkAccumulator } from "../lib/flowable";

const scheduler = createHostScheduler();

export const tests = describe(
  "node",
  describe(
    "createWritableFlowableSink",
    testAsync("sinking to writable", async () => {
      const encoder = new TextEncoder();
      const decoder = new TextDecoder();

      let data = "";
      const writable = new Writable({
        autoDestroy: true,
        highWaterMark: 4,

        write(chunk, encoding, callback) {
          if (encoding === "buffer") {
            chunk = decoder.decode(chunk);
          }
          data += chunk;
          callback();
        },
      });

      const dest = createWritableFlowableSink(
        bind(createDisposableNodeStream, writable),
      );

      const lib = pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        fromArray(),
        fromObservable,
      );

      await pipe(sink(lib, dest), toPromise(scheduler));
      pipe(data, expectEquals("abcdefg"));
    }),

    testAsync("sinking to writable that throws", async () => {
      const encoder = new TextEncoder();

      const cause = new Error();
      const writable = new Writable({
        autoDestroy: true,
        highWaterMark: 4,

        write(_chunk, _encoding, callback) {
          callback(cause);
        },
      });

      const dest = createWritableFlowableSink(
        bind(createDisposableNodeStream, writable),
      );

      const lib = pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        fromArray(),
        fromObservable,
      );

      const promise = pipe(sink(lib, dest), toPromise(scheduler));
      await expectPromiseToThrow(promise);
    }),
  ),

  describe(
    "createReadablFlowable",
    testAsync("reading from readable", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }
      const lib = createReadableFlowable(() =>
        pipe(generate(), Readable.from, createDisposableNodeStream),
      );

      const textDecoder = new TextDecoder();
      const dest = createFlowableSinkAccumulator(
        (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
        returns(""),
      );

      await pipe(sink(lib, dest), toPromise(scheduler));
      pipe(dest.acc, expectEquals("abcdefg"));
    }),
    testAsync("reading from readable that throws", async () => {
      const cause = new Error();

      function* generate() {
        yield Buffer.from("abc", "utf8");
        throw cause;
      }
      const lib = createReadableFlowable(() =>
        pipe(generate(), Readable.from, createDisposableNodeStream),
      );

      const textDecoder = new TextDecoder();
      const dest = createFlowableSinkAccumulator(
        (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
        returns(""),
      );

      await pipe(sink(lib, dest), toPromise(scheduler), expectPromiseToThrow);
    }),
  ),
  testAsync("transform", async () => {
    const encoder = new TextEncoder();
    const lib = pipe(
      [encoder.encode("abc"), encoder.encode("defg")],
      fromArray(),
      fromObservable,
      transform(() => createDisposableNodeStream(createGzip())),
      transform(() => createDisposableNodeStream(createGunzip())),
    );

    const textDecoder = new TextDecoder();
    const dest = createFlowableSinkAccumulator(
      (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
      returns(""),
    );

    await pipe(sink(lib, dest), toPromise(scheduler));
    pipe(dest.acc, expectEquals("abcdefg"));
  }),
);
