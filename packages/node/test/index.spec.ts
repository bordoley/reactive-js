import { Readable, Writable } from "stream";
import {
  reduce,
  ReducerRequestType,
  createAsyncEnumerable,
  sink,
} from "@reactive-js/async-enumerable";
import { pipe } from "@reactive-js/pipe";
import {
  toPromise,
  ObservableLike,
  map,
  scan,
  takeWhile,
  compute,
  repeat,
} from "@reactive-js/observable";
import {
  createReadableAsyncEnumerable,
  getHostScheduler,
  createWritableAsyncEnumerable,
  transform,
} from "../src";
import { StringDecoder } from "string_decoder";
import { createGzip, createGunzip } from "zlib";

describe("writable", () => {
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
    const src = createAsyncEnumerable((src: ObservableLike<void>) =>
      pipe(
        src,
        scan(
          (acc, _) => {
            switch (acc) {
              case "":
                return "abc";
              case "abc":
                return "defg";
              default:
                return "done";
            }
          },
          () => "",
        ),
        takeWhile(x => x !== "done"),
        map(x => Buffer.from(x, "utf8")),
      ),
    );

    await pipe(sink(src, dest), toPromise(getHostScheduler()));
    expect(data).toEqual("abcdefg");
  });
  test("when the write throws an exception", async () => {
    const cause = new Error();

    const writable = new Writable({
      write(_chunk, _encoding, callback) {
        callback(cause);
      },
    });

    const dest = createWritableAsyncEnumerable(() => writable);
    const src = createAsyncEnumerable(src =>
      pipe(
        src,
        map(_ => Buffer.from("a", "utf8")),
      ),
    );

    const promise = pipe(sink(src, dest), toPromise(getHostScheduler()));
    expect(promise).rejects.toThrow(cause);
  });
});

describe("createReadableAsyncEnumerable", () => {
  test("when the readable is infinite", async () => {
    function* generate() {
      while (true) {
        yield "ab";
      }
    }

    const enumerable = createReadableAsyncEnumerable(
      () => Readable.from(generate()),
      (a: unknown) => a as string,
    );

    const result = await pipe(
      enumerable,
      reduce(
        (acc, next) => {
          const newAcc = acc + next;

          return newAcc.length > 6
            ? { type: ReducerRequestType.Done, acc: newAcc }
            : {
                type: ReducerRequestType.Continue,
                req: undefined,
                acc: newAcc,
              };
        },
        () => ({ type: ReducerRequestType.Continue, req: undefined, acc: "" }),
      ),
      toPromise(getHostScheduler()),
    );

    expect(result).toEqual("abababab");
  });

  test("when the readable terminates", async () => {
    function* generate() {
      yield "ab";
      yield "cd";
    }

    const enumerable = createReadableAsyncEnumerable(
      () => Readable.from(generate()),
      (a: unknown) => a as string,
    );

    const result = await pipe(
      enumerable,
      reduce(
        (acc, next) => ({
          type: ReducerRequestType.Continue,
          req: undefined,
          acc: acc + next,
        }),
        () => ({ type: ReducerRequestType.Continue, req: undefined, acc: "" }),
      ),
      toPromise(getHostScheduler()),
    );

    expect(result).toEqual("abcd");
  });

  test("when the readable throw", () => {
    const cause = new Error();

    function* generate() {
      yield "ab";
      yield "cd";
      throw cause;
    }

    const enumerable = createReadableAsyncEnumerable(
      () => Readable.from(generate()),
      (a: unknown) => a as string,
    );

    const promise = pipe(
      enumerable,
      reduce(
        (acc, next) => ({
          type: ReducerRequestType.Continue,
          req: undefined,
          acc: acc + next,
        }),
        () => ({ type: ReducerRequestType.Continue, req: undefined, acc: "" }),
      ),
      toPromise(getHostScheduler()),
    );

    return expect(promise).rejects.toThrow(cause);
  });
});

test("transform", async () => {
  const result = await pipe(
    compute(() => Buffer.alloc(10, "a")),
    repeat(10),
    transform(() => createGzip()),
    transform(() => createGunzip()),
    map(d => d.toLocaleString()),
    toPromise(getHostScheduler()),
  );

  expect(result).toEqual(Buffer.alloc(100, "a").toLocaleString());
});
