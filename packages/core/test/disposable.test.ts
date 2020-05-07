import {
  createDisposable,
  createDisposableValue,
  createSerialDisposable,
  disposed,
} from "../src/disposable";
import { pipe } from "../src/functions";
import {
  test,
  describe,
  expectFalse,
  expectTrue,
  mockFn,
  expectToHaveBeenCalledTimes,
  expectArrayEquals,
  expectEquals,
  expectNone,
} from "../src/testing";

export const tests = describe(
  "Disposable",

  describe("AbstractDisposable",
    test("disposes child disposable when disposed", () => {
      const disposable = createDisposable();
      const child = createDisposable();

      disposable.add(child);
      disposable.dispose();

      expectTrue(child.isDisposed);
    }),

    test("adding to disposed disposable disposes the child", () => {
      const disposable = createDisposable();
      const child = createDisposable();

      disposable.dispose();
      disposable.add(child);

      expectTrue(child.isDisposed);
    }),

    test("disposes teardown function exactly once when disposed", () => {
      const teardown = mockFn();
      const disposable = createDisposable(teardown);
      disposable.add(teardown);

      disposable.dispose();

      pipe(teardown, expectToHaveBeenCalledTimes(1));
    }),

    test("catches and swallows exceptions thrown by teardown function", () => {
      const teardown = () => {
        throw new Error();
      };
      const disposable = createDisposable(teardown);

      disposable.dispose();
      pipe(disposable.error, expectNone);
    }),

    test("propogates errors when disposed with an exception", () => {
      const error = { cause: null };

      const childTeardown = mockFn();
      const disposable = createDisposable(childTeardown);

      disposable.dispose(error);

      pipe(disposable.error, expectEquals(error));
      pipe(childTeardown, expectToHaveBeenCalledTimes(1));
      pipe(childTeardown.calls[0], expectArrayEquals([error]));
    }),
  ),

  describe(
    "AbstractSerialDisposable",

    test("setting inner disposable disposes the previous inner disposable", () => {
      const serialDisposable = createSerialDisposable();
      const child = createDisposable();

      serialDisposable.inner = child;
      pipe(serialDisposable.inner, expectEquals(child));

      serialDisposable.inner = disposed;
      pipe(child.isDisposed, expectTrue);
    }),

    test("setting inner disposable with the same inner disposable has no effect", () => {
      const serialDisposable = createSerialDisposable();
      const child = createDisposable();

      serialDisposable.inner = child;
      pipe(serialDisposable.inner, expectEquals(child));
      serialDisposable.inner = child;

      pipe(child.isDisposed, expectFalse);
    }),
  ),

  describe(
    "DisposableValue",

    test("disposes the value when disposed", () => {
      const value = createDisposable();
      const disposable = createDisposableValue(value, v => v.dispose());

      disposable.dispose();

      pipe(disposable.value, expectEquals(value));
      pipe(value.isDisposed, expectTrue);
    }),
  ),
);
