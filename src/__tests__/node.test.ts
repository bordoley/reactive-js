import { Readable, Writable } from "stream";
import { endWith } from "../container";
import { pipe, pipeLazy, returns } from "../functions";
import {
  createDisposableNodeStream,
  createReadableIOSource,
  createWritableIOSink,
  gunzip,
  gzip,
} from "../node";
import {
  concatT,
  fromArray,
  fromArrayT,
  takeFirst,
  toPromise,
} from "../observable";
import { createHostScheduler } from "../scheduler";
import { createFlowableSinkAccumulator, flow, sinkInto } from "../streamable";
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
      const encoder = new TextEncoder();
      let data = "";
      const writable = new Writable({
        autoDestroy: true,
        highWaterMark: 4,

        write(chunk, _encoding, callback) {
          data += chunk;
          callback();
        },
      });

      const dest = createWritableIOSink(
        pipeLazy(writable, createDisposableNodeStream),
      );

      await pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        fromArray(),
        flow(),
        sinkInto(dest),
        endWith({ ...fromArrayT, ...concatT }, 0),
        toPromise(scheduler),
      );

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
        pipeLazy(writable, createDisposableNodeStream),
      );

      const promise = pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        fromArray(),
        flow(),
        sinkInto(dest),
        endWith({ ...fromArrayT, ...concatT }, 0),
        toPromise(scheduler),
      );

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

      const textDecoder = new TextDecoder();
      const dest = createFlowableSinkAccumulator(
        (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
        returns(""),
        { replay: 1 },
      );

      await pipe(
        createReadableIOSource(() =>
          pipe(generate(), Readable.from, createDisposableNodeStream),
        ),
        sinkInto(dest),
        endWith({ ...fromArrayT, ...concatT }, 0),
        toPromise(scheduler),
      );

      const acc = await pipe(
        dest,
        takeFirst({ count: 1 }),
        toPromise(scheduler),
      );
      pipe(acc, expectEquals("abcdefg"));
    }),
    testAsync("reading from readable that throws", async () => {
      const cause = new Error();

      function* generate() {
        yield Buffer.from("abc", "utf8");
        throw cause;
      }

      const textDecoder = new TextDecoder();
      const dest = createFlowableSinkAccumulator(
        (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
        returns(""),
        { replay: 1 },
      );

      await pipe(
        createReadableIOSource(() =>
          pipe(generate(), Readable.from, createDisposableNodeStream),
        ),
        sinkInto(dest),
        endWith({ ...fromArrayT, ...concatT }, 0),
        toPromise(scheduler),
        expectPromiseToThrow,
      );
    }),
  ),
  testAsync("transform", async () => {
    const encoder = new TextEncoder();

    const textDecoder = new TextDecoder();
    const dest = createFlowableSinkAccumulator(
      (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
      returns(""),
      { replay: 1 },
    );

    await pipe(
      [encoder.encode("abc"), encoder.encode("defg")],
      fromArray<Uint8Array>(),
      flow(),
      gzip(),
      gunzip(),
      sinkInto(dest),
      endWith({ ...fromArrayT, ...concatT }, 0),
      toPromise(scheduler),
    );

    const acc = await pipe(dest, takeFirst({ count: 1 }), toPromise(scheduler));
    pipe(acc, expectEquals("abcdefg"));
  }),
);
