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
  ObservableLike,
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
  sourceFrom,
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

      const src = pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        fromArray(),
        flow(),
      );

      const dest = pipe(
        createWritableIOSink(pipeLazy(writable, createDisposableNodeStream)),
        stream(scheduler),
        sourceFrom(src),
      );

      await pipe(
        dest,
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

      const src = pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        fromArray(),
        flow(),
      );

      const dest = pipe(
        createWritableIOSink(pipeLazy(writable, createDisposableNodeStream)),
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

      const textDecoder = newInstance(TextDecoder);
      const flowAcc = createFlowableSinkAccumulator(
        (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
        returns(""),
        { replay: 1 },
      );
      const dest = pipe(flowAcc, stream(scheduler), sourceFrom(src));

      await pipe(
        dest,
        ignoreElements(keepT),
        endWith<ObservableLike<number>, number>(
          { ...fromArrayT, ...concatT },
          0,
        ),
        toPromise(scheduler),
      );

      const acc = await pipe(
        flowAcc,
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
      const src = createReadableIOSource(() =>
        pipe(generate(), Readable.from, createDisposableNodeStream),
      );

      const flowAcc = createFlowableSinkAccumulator(
        (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
        returns(""),
        { replay: 1 },
      );

      pipe(flowAcc, stream(scheduler), sourceFrom(src));

      await pipe(
        flowAcc,
        endWith({ ...fromArrayT, ...concatT }, 0),
        toPromise(scheduler),
        expectPromiseToThrow,
      );
    }),
  ),
  testAsync("transform", async () => {
    const encoder = newInstance(TextEncoder);

    const textDecoder = newInstance(TextDecoder);
    const src = pipe(
      [encoder.encode("abc"), encoder.encode("defg")],
      fromArray<Uint8Array>(),
      flow(),
      gzip(),
      gunzip(),
    );

    const flowAcc = createFlowableSinkAccumulator(
      (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
      returns(""),
      { replay: 1 },
    );

    const dest = pipe(flowAcc, stream(scheduler), sourceFrom(src));

    await pipe(
      dest,
      endWith({ ...fromArrayT, ...concatT }, 0),
      toPromise(scheduler),
    );

    const acc = await pipe(
      flowAcc,
      takeFirst({ count: 1 }),
      toPromise(scheduler),
    );
    pipe(acc, expectEquals("abcdefg"));
  }),
);
