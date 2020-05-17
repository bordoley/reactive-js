import { Readable, Writable } from "stream";
import { pipe, bind, returns } from "../lib/functions";
import { createIOSinkAccumulator } from "../lib/internal/ioSinkAccumulatorForTests";
import {
  describe,
  testAsync,
  expectEquals,
  expectPromiseToThrow,
} from "../lib/internal/testing";
import { fromArray } from "../lib/io";
import {
  createReadableIOSource,
  createWritableIOSink,
  gzip,
  gunzip,
  createDisposableNodeStream,
} from "../lib/node";
import { toPromise } from "../lib/observable";
import { createHostScheduler } from "../lib/scheduler";
import { sink } from "../lib/streamable";

const scheduler = createHostScheduler();

export const tests = describe(
  "node",
  describe(
    "createWritableIOSink",
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

      const dest = createWritableIOSink(
        bind(createDisposableNodeStream, writable),
      );

      const lib = pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        fromArray(),
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

      const dest = createWritableIOSink(
        bind(createDisposableNodeStream, writable),
      );

      const lib = pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        fromArray(),
      );

      const promise = pipe(sink(lib, dest), toPromise(scheduler));
      await expectPromiseToThrow(promise);
    }),
  ),

  describe(
    "createReadableIOSource",
    testAsync("reading from readable", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }
      const lib = createReadableIOSource(() =>
        pipe(generate(), Readable.from, createDisposableNodeStream),
      );

      const textDecoder = new TextDecoder();
      const dest = createIOSinkAccumulator(
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
      const lib = createReadableIOSource(() =>
        pipe(generate(), Readable.from, createDisposableNodeStream),
      );

      const textDecoder = new TextDecoder();
      const dest = createIOSinkAccumulator(
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
      fromArray<Uint8Array>(),
      gzip(),
      gunzip(),
    );

    const textDecoder = new TextDecoder();
    const dest = createIOSinkAccumulator(
      (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
      returns(""),
    );

    await pipe(sink(lib, dest), toPromise(scheduler));
    pipe(dest.acc, expectEquals("abcdefg"));
  }),
);
