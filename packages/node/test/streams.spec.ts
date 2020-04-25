import { Readable, Writable } from "stream";
import { sink } from "@reactive-js/core/dist/js/streamable";
import {
  ofValue,
  FlowEventType,
  FlowMode,
} from "@reactive-js/core/dist/js/flowable";
import { pipe } from "@reactive-js/core/dist/js/pipe";
import {
  toPromise,
  subscribe,
  onNotify,
  scan,
} from "@reactive-js/core/dist/js/observable";
import { scheduler } from "../src/scheduler";
import {
  createBufferFlowableFromReadable,
  createBufferFlowableSinkFromWritable,
  transform,
  encode,
  decode,
  createDisposableNodeStream,
} from "../src/streams";
import { StringDecoder } from "string_decoder";
import { createGzip, createGunzip } from "zlib";
import { createVirtualTimeScheduler } from "@reactive-js/core/dist/js/scheduler";

describe("streams", () => {
  test("sinking to the buffer", async () => {
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

    const dest = createBufferFlowableSinkFromWritable(() =>
      createDisposableNodeStream(writable),
    );

    function* generate() {
      yield Buffer.from("abc", "utf8");
      yield Buffer.from("defg", "utf8");
    }

    const src = createBufferFlowableFromReadable(() =>
      pipe(generate(), Readable.from, createDisposableNodeStream),
    );

    await pipe(sink(src, dest), toPromise(scheduler));
    expect(data).toEqual("abcdefg");
  });

  test("when the writable throws an exception", () => {
    const cause = new Error();

    const writable = new Writable({
      write(_chunk, _encoding, callback) {
        callback(cause);
      },
    });

    const dest = createBufferFlowableSinkFromWritable(() =>
      createDisposableNodeStream(writable),
    );

    function* generate() {
      yield Buffer.from("abc", "utf8");
      yield Buffer.from("defg", "utf8");
    }

    const src = createBufferFlowableFromReadable(() =>
      pipe(generate(), Readable.from, createDisposableNodeStream),
    );

    const promise = pipe(sink(src, dest), toPromise(scheduler));
    expect(promise).rejects.toThrow(cause);
  });

  test("when the readable throws an exception", () => {
    const writable = new Writable({
      write(_chunk, _encoding, callback) {
        callback();
      },
    });

    const dest = createBufferFlowableSinkFromWritable(() =>
      createDisposableNodeStream(writable),
    );

    const cause = new Error();

    function* generate() {
      yield Buffer.from("abc", "utf8");
      throw cause;
      yield Buffer.from("defg", "utf8");
    }

    const src = createBufferFlowableFromReadable(() =>
      pipe(generate(), Readable.from, createDisposableNodeStream),
    );

    const promise = pipe(sink(src, dest), toPromise(scheduler));
    expect(promise).rejects.toThrow(cause);
  });

  test("transform", async () => {
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

    const dest = createBufferFlowableSinkFromWritable(() =>
      createDisposableNodeStream(writable),
    );

    function* generate() {
      yield Buffer.from("abc", "utf8");
      yield Buffer.from("defg", "utf8");
    }

    await pipe(
      createBufferFlowableFromReadable(() =>
        pipe(generate(), Readable.from, createDisposableNodeStream),
      ),
      transform(() => createDisposableNodeStream(createGzip())),
      transform(() => createDisposableNodeStream(createGunzip())),
      src => sink(src, dest),
      toPromise(scheduler),
    );
    expect(data).toEqual("abcdefg");
  });

  test("encode/decode", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    const scheduler = createVirtualTimeScheduler();

    const transformed = pipe(
      ofValue(str),
      encode("utf-8"),
      decode("utf-8"),
    ).stream(scheduler);

    let result = "";
    pipe(
      transformed,
      scan(
        (acc, ev) => (ev.type === FlowEventType.Next ? acc + ev.data : acc),
        () => "",
      ),
      onNotify(x => {
        result = x;
      }),
      subscribe(scheduler),
    );

    transformed.dispatch(FlowMode.Resume);
    scheduler.run();

    expect(result).toEqual(str);
  });
});
