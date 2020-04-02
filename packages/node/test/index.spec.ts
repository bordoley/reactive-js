import { Readable, Writable } from "stream";
import { sink } from "@reactive-js/async-enumerable";
import { pipe } from "@reactive-js/pipe";
import { toPromise } from "@reactive-js/observable";
import {
  createReadableAsyncEnumerable,
  getHostScheduler,
  createWritableAsyncEnumerable,
  transform,
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

    const dest = createWritableAsyncEnumerable(() => writable);

    function* generate() {
      yield Buffer.from("abc", "utf8");
      yield Buffer.from("defg", "utf8");
    }

    const src = createReadableAsyncEnumerable(() => Readable.from(generate()));

    await pipe(src, sink(dest), toPromise(getHostScheduler()));
    expect(data).toEqual("abcdefg");
  });

  test("when the writable throws an exception", async () => {
    const cause = new Error();

    const writable = new Writable({
      write(_chunk, _encoding, callback) {
        callback(cause);
      },
    });

    const dest = createWritableAsyncEnumerable(() => writable);

    function* generate() {
      yield Buffer.from("abc", "utf8");
      yield Buffer.from("defg", "utf8");
    }

    const src = createReadableAsyncEnumerable(() => Readable.from(generate()));

    const promise = pipe(src, sink(dest), toPromise(getHostScheduler()));
    expect(promise).rejects.toThrow(cause);
  });

  test("when the readable throws an exception", async () => {
    const writable = new Writable({
      write(_chunk, _encoding, callback) {
        callback();
      },
    });

    const dest = createWritableAsyncEnumerable(() => writable);

    const cause = new Error();

    function* generate() {
      yield Buffer.from("abc", "utf8");
      throw cause;
      yield Buffer.from("defg", "utf8");
    }

    const src = createReadableAsyncEnumerable(() => Readable.from(generate()));

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

    const dest = createWritableAsyncEnumerable(() => writable);

    function* generate() {
      yield Buffer.from("abc", "utf8");
      yield Buffer.from("defg", "utf8");
    }

    await pipe(
      createReadableAsyncEnumerable(() => Readable.from(generate())),
      transform(() => createGzip()),
      transform(() => createGunzip()),
      sink(dest),
      toPromise(getHostScheduler()),
    );
    expect(data).toEqual("abcdefg");
  });
});
