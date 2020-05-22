import { Readable, Writable } from "stream";
import { pipe, defer, returns } from "../lib/functions";
import { createIOSinkAccumulator } from "../lib/internal/ioSinkAccumulator";
import {
  describe,
  testAsync,
  expectEquals,
  expectPromiseToThrow,
} from "../lib/experimental/testing";
import { fromArray } from "../lib/io";
import {
  createReadableIOSource,
  createWritableIOSink,
  gzip,
  gunzip,
  createDisposableNodeStream,
} from "../lib/node";
import { toPromise, takeFirst } from "../lib/observable";
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
        defer(writable, createDisposableNodeStream),
      );

      const src = pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        fromArray(),
      );

      await pipe(sink(src, dest), toPromise(scheduler));
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
        defer(writable, createDisposableNodeStream),
      );

      const src = pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        fromArray(),
      );

      const promise = pipe(sink(src, dest), toPromise(scheduler));
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
      const src = createReadableIOSource(() =>
        pipe(generate(), Readable.from, createDisposableNodeStream),
      );

      const textDecoder = new TextDecoder();
      const dest = createIOSinkAccumulator(
        (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
        returns(""),
        { replay: 1 },
      );

      await pipe(sink(src, dest), toPromise(scheduler));

      debugger;

      const acc = await pipe(dest, takeFirst(1), toPromise(scheduler));
      pipe(acc, expectEquals("abcdefg"));
    }),
    testAsync("reading from readable that throws", async () => {
      const cause = new Error();

      function* generate() {
        yield Buffer.from("abc", "utf8");
        throw cause;
      }
      const src = createReadableIOSource(() =>
        pipe(generate(), Readable.from, createDisposableNodeStream),
      );

      const textDecoder = new TextDecoder();
      const dest = createIOSinkAccumulator(
        (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
        returns(""),
        { replay: 1 },
      );

      await pipe(sink(src, dest), toPromise(scheduler), expectPromiseToThrow);
    }),
  ),
  testAsync("transform", async () => {
    const encoder = new TextEncoder();
    const src = pipe(
      [encoder.encode("abc"), encoder.encode("defg")],
      fromArray<Uint8Array>(),
      gzip(),
      gunzip(),
    );

    const textDecoder = new TextDecoder();
    const dest = createIOSinkAccumulator(
      (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
      returns(""),
      { replay: 1 },
    );

    await pipe(sink(src, dest), toPromise(scheduler));

    const acc = await pipe(dest, takeFirst(1), toPromise(scheduler));
    pipe(acc, expectEquals("abcdefg"));
  }),
);
