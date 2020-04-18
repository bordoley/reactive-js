import { Readable, Writable } from "stream";
import { sink } from "@reactive-js/async-enumerable";
import { pipe } from "@reactive-js/pipe";
import { toPromise, toValue } from "@reactive-js/observable";
import {
  createBufferStreamFromReadable,
  getHostScheduler,
  createBufferStreamSinkFromWritable,
  transform,
  stringToBufferStream,
  bufferStreamToString,
} from "../src";
import { StringDecoder } from "string_decoder";
import { createGzip, createGunzip } from "zlib";

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

  test("readableToString", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    const result = pipe(
      str,
      stringToBufferStream("utf-8"),
      bufferStreamToString("utf-8"),
      toValue(),
    );
    expect(result).toEqual(str);
  });
});
