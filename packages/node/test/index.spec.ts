import { Readable, Writable } from "stream";
import {
  sink,
  ofValueStream,
  StreamEventType,
  StreamMode,
} from "@reactive-js/async-enumerable";
import { pipe } from "@reactive-js/pipe";
import { toPromise, subscribe, onNotify, scan } from "@reactive-js/observable";
import {
  createBufferStreamFromReadable,
  getHostScheduler,
  createBufferStreamSinkFromWritable,
  transform,
  encode,
  decode,
} from "../src";
import { StringDecoder } from "string_decoder";
import { createGzip, createGunzip } from "zlib";
import { createVirtualTimeScheduler } from "@reactive-js/scheduler";

describe("streams", () => {
  test("sinking to the buffer", async () => {
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

    const dest = createBufferStreamSinkFromWritable(() => writable);

    function* generate() {
      yield Buffer.from("abc", "utf8");
      yield Buffer.from("defg", "utf8");
    }

    const src = createBufferStreamFromReadable(() => Readable.from(generate()));

    await pipe(src, sink(dest), toPromise(getHostScheduler()));
    expect(data).toEqual("abcdefg");
  });

  test("when the writable throws an exception", () => {
    const cause = new Error();

    const writable = new Writable({
      write(_chunk, _encoding, callback) {
        callback(cause);
      },
    });

    const dest = createBufferStreamSinkFromWritable(() => writable);

    function* generate() {
      yield Buffer.from("abc", "utf8");
      yield Buffer.from("defg", "utf8");
    }

    const src = createBufferStreamFromReadable(() => Readable.from(generate()));

    const promise = pipe(src, sink(dest), toPromise(getHostScheduler()));
    expect(promise).rejects.toThrow(cause);
  });

  test("when the readable throws an exception", () => {
    const writable = new Writable({
      write(_chunk, _encoding, callback) {
        callback();
      },
    });

    const dest = createBufferStreamSinkFromWritable(() => writable);

    const cause = new Error();

    function* generate() {
      yield Buffer.from("abc", "utf8");
      throw cause;
      yield Buffer.from("defg", "utf8");
    }

    const src = createBufferStreamFromReadable(() => Readable.from(generate()));

    const promise = pipe(src, sink(dest), toPromise(getHostScheduler()));
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

    const dest = createBufferStreamSinkFromWritable(() => writable);

    function* generate() {
      yield Buffer.from("abc", "utf8");
      yield Buffer.from("defg", "utf8");
    }

    await pipe(
      createBufferStreamFromReadable(() => Readable.from(generate())),
      transform(() => createGzip()),
      transform(() => createGunzip()),
      sink(dest),
      toPromise(getHostScheduler()),
    );
    expect(data).toEqual("abcdefg");
  });

  test("encode/decode", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    const scheduler = createVirtualTimeScheduler();

    const transformed = pipe(
      ofValueStream(str),
      encode("utf-8"),
      decode("utf-8"),
    ).enumerateAsync(scheduler);

    let result = "";
    pipe(
      transformed,
      scan(
        (acc, ev) => (ev.type === StreamEventType.Next ? acc + ev.data : acc),
        () => "",
      ),
      onNotify(x => {
        result = x;
      }),
      subscribe(scheduler),
    );

    transformed.dispatch(StreamMode.Produce);
    scheduler.run();

    expect(result).toEqual(str);
  });
});
