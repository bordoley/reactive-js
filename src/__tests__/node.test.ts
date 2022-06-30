import { Readable, Writable } from "stream";
import { endWith, ignoreElements } from "../container";
import { newInstance, pipe, pipeLazy, returns } from "../functions";
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
  keepT,
  takeFirst,
  toPromise,
} from "../observable";
import { createHostScheduler } from "../scheduler";
import {
  createFlowableSinkAccumulator,
  flow,
  sinkInto,
  stream,
} from "../streamable";
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

      const dest = pipe(
        createWritableIOSink(pipeLazy(writable, createDisposableNodeStream)),
        stream(scheduler),
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
      const encoder = newInstance(TextEncoder);

      const cause = newInstance(Error);
      const writable = newInstance(Writable, {
        autoDestroy: true,
        highWaterMark: 4,

        write(_chunk, _encoding, callback) {
          callback(cause);
        },
      });

      const dest = pipe(
        createWritableIOSink(pipeLazy(writable, createDisposableNodeStream)),
        stream(scheduler),
      );

      pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        fromArray(),
        flow(),
        sinkInto(dest),
      );

      const promise = pipe(
        dest,
        ignoreElements(keepT),
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

      const textDecoder = newInstance(TextDecoder);
      const dest = pipe(
        createFlowableSinkAccumulator(
          (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
          returns(""),
          { replay: 1 },
        ),
        stream(scheduler),
      );

      pipe(
        createReadableIOSource(() =>
          pipe(generate(), Readable.from, createDisposableNodeStream),
        ),
        sinkInto(dest),
      );

      await pipe(
        dest,
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
      const cause = newInstance(Error);

      function* generate() {
        yield Buffer.from("abc", "utf8");
        throw cause;
      }

      const textDecoder = newInstance(TextDecoder);
      const dest = pipe(
        createFlowableSinkAccumulator(
          (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
          returns(""),
          { replay: 1 },
        ),
        stream(scheduler),
      );

      pipe(
        createReadableIOSource(() =>
          pipe(generate(), Readable.from, createDisposableNodeStream),
        ),
        sinkInto(dest),
      );

      await pipe(
        dest.result,
        endWith({ ...fromArrayT, ...concatT }, 0),
        toPromise(scheduler),
        expectPromiseToThrow,
      );
    }),
  ),
  testAsync("transform", async () => {
    const encoder = newInstance(TextEncoder);
    const textDecoder = newInstance(TextDecoder);

    const dest = pipe(
      createFlowableSinkAccumulator(
        (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
        returns(""),
        { replay: 1 },
      ),
      stream(scheduler),
    );

    pipe(
      [encoder.encode("abc"), encoder.encode("defg")],
      fromArray<Uint8Array>(),
      flow(),
      gzip(),
      gunzip(),
      sinkInto(dest),
    );

    await pipe(
      dest.result,
      endWith({ ...fromArrayT, ...concatT }, 0),
      toPromise(scheduler),
    );

    const acc = await pipe(dest, takeFirst({ count: 1 }), toPromise(scheduler));
    pipe(acc, expectEquals("abcdefg"));
  }),
);
