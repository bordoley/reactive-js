import {
  add,
  createDisposable,
  createDisposableValue,
  createSerialDisposable,
  dispose,
  disposed,
  isDisposed,
  onDisposed,
} from "../disposable";
import { pipe, pipeLazy, raise } from "../functions";
import { none } from "../option";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectNone,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
} from "../testing";

export const tests = describe(
  "Disposable",

  describe(
    "AbstractDisposable",
    test("disposes child disposable when disposed", () => {
      const child = createDisposable();
      pipe(createDisposable(), add(child, true), dispose());
      pipe(child, isDisposed, expectTrue);
    }),

    test("adding to disposed disposable disposes the child", () => {
      const child = createDisposable();
      pipe(createDisposable(), dispose(), add(child, true));
      pipe(child, isDisposed, expectTrue);
    }),

    test("disposes teardown function exactly once when disposed", () => {
      const teardown = mockFn();
      pipe(createDisposable(teardown), onDisposed(teardown), dispose());
      pipe(teardown, expectToHaveBeenCalledTimes(1));
    }),

    test("catches and swallows Errors thrown by teardown function", () => {
      const teardown = pipeLazy(none, raise);

      const disposable = pipe(createDisposable(teardown), dispose());
      pipe(disposable.error, expectNone);
    }),

    test("propogates errors when disposed with an Error", () => {
      const error = { cause: null };

      const childTeardown = mockFn();
      const disposable = createDisposable(childTeardown);

      pipe(disposable, dispose(error));

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
      pipe(child, isDisposed, expectTrue);
    }),

    test("setting inner disposable with the same inner disposable has no effect", () => {
      const serialDisposable = createSerialDisposable();
      const child = createDisposable();

      serialDisposable.inner = child;
      pipe(serialDisposable.inner, expectEquals(child));
      serialDisposable.inner = child;

      pipe(child, isDisposed, expectFalse);
    }),
  ),

  describe(
    "DisposableValue",

    test("disposes the value when disposed", () => {
      const value = createDisposable();
      const disposable = createDisposableValue(value, dispose());

      pipe(disposable, dispose());

      pipe(disposable.value, expectEquals(value));
      pipe(value, isDisposed, expectTrue);
    }),
  ),
);
