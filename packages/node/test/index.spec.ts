import { Readable } from "stream";
import { reduce, ReducerRequestType } from "@reactive-js/async-enumerable";
import { pipe } from "@reactive-js/pipe";
import { toPromise } from "@reactive-js/observable";
import { createReadableAsyncEnumerable, getHostScheduler } from "../src";

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
