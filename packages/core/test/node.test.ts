import { Readable, Writable } from "stream";
import { StringDecoder } from "string_decoder";
import { createGzip, createGunzip } from "zlib";
import { pipe } from "../src/functions";
import {
  createFlowableFromReadable,
  createFlowableSinkFromWritable,
  transform,
  createDisposableNodeStream,
} from "../src/node";
import { toPromise } from "../src/observable";
import { createHostScheduler } from "../src/scheduler";
import { sink } from "../src/streamable";
import {
  describe,
  testAsync,
  expectEquals,
  expectPromiseToThrow,
} from "../src/testing";

const scheduler = createHostScheduler();

export const tests = describe(
  "node",
  testAsync("sinking to the buffer", async () => {
    let data = "";
    const decoder = new StringDecoder();

    const writable = new Writable({
      autoDestroy: true,
      highWaterMark: 4,

      write(chunk, encoding, callback) {
        if (encoding === "buffer") {
          chunk = decoder.write(chunk);
        }
        data += chunk;
        callback();
      },
    });

    const dest = createFlowableSinkFromWritable(() =>
      createDisposableNodeStream(writable),
    );

    function* generate() {
      yield Buffer.from("abc", "utf8");
      yield Buffer.from("defg", "utf8");
    }

    const src = createFlowableFromReadable(() =>
      pipe(generate(), Readable.from, createDisposableNodeStream),
    );

    await pipe(sink(src, dest), toPromise(scheduler));
    pipe(data, expectEquals("abcdefg"));
  }),

  testAsync("when the writable throws an exception", async () => {
    const cause = new Error();

    const writable = new Writable({
      write(_chunk, _encoding, callback) {
        callback(cause);
      },
    });

    const dest = createFlowableSinkFromWritable(() =>
      createDisposableNodeStream(writable),
    );

    function* generate() {
      yield Buffer.from("abc", "utf8");
      yield Buffer.from("defg", "utf8");
    }

    const src = createFlowableFromReadable(() =>
      pipe(generate(), Readable.from, createDisposableNodeStream),
    );

    const promise = pipe(sink(src, dest), toPromise(scheduler));
    await pipe(promise, expectPromiseToThrow);
  }),

  testAsync("when the readable throws an exception", async () => {
    const writable = new Writable({
      write(_chunk, _encoding, callback) {
        callback();
      },
    });

    const dest = createFlowableSinkFromWritable(() =>
      createDisposableNodeStream(writable),
    );

    const cause = new Error();

    function* generate() {
      yield Buffer.from("abc", "utf8");
      throw cause;
      yield Buffer.from("defg", "utf8");
    }

    const src = createFlowableFromReadable(() =>
      pipe(generate(), Readable.from, createDisposableNodeStream),
    );

    await pipe(sink(src, dest), toPromise(scheduler), expectPromiseToThrow);
  }),

  testAsync("transform", async () => {
    let data = "";
    const decoder = new StringDecoder();

    const writable = new Writable({
      highWaterMark: 4,

      write(chunk, encoding, callback) {
        if (encoding === "buffer") {
          chunk = decoder.write(chunk);
        }
        data += chunk;
        callback();
      },
    });

    const dest = createFlowableSinkFromWritable(() =>
      createDisposableNodeStream(writable),
    );

    function* generate() {
      yield Buffer.from("abc", "utf8");
      yield Buffer.from("defg", "utf8");
    }

    await pipe(
      createFlowableFromReadable(() =>
        pipe(generate(), Readable.from, createDisposableNodeStream),
      ),
      transform(() => createDisposableNodeStream(createGzip())),
      transform(() => createDisposableNodeStream(createGunzip())),
      src => sink(src, dest),
      toPromise(scheduler),
    );
    pipe(data, expectEquals("abcdefg"));
  }),
);
