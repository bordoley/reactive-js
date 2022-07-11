import {
  Disposable,
  add,
  dispose,
  isDisposed,
  onDisposed,
} from "../disposable";
import {
  newInstance,
  newInstanceWith,
  pipe,
  pipeLazy,
  raise,
} from "../functions";
import { none } from "../option";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectNone,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
} from "../testing";

export const tests = describe(
  "Disposable",

  describe(
    "Disposable",
    test("disposes child disposable when disposed", () => {
      const child = newInstance(Disposable);
      pipe(newInstance(Disposable), add(child, true), dispose());
      pipe(child, isDisposed, expectTrue);
    }),

    test("adding to disposed disposable disposes the child", () => {
      const child = newInstance(Disposable);
      pipe(newInstance(Disposable), dispose(), add(child, true));
      pipe(child, isDisposed, expectTrue);
    }),

    test("disposes teardown function exactly once when disposed", () => {
      const teardown = mockFn();
      pipe(
        newInstance(Disposable),
        onDisposed(teardown),
        onDisposed(teardown),
        dispose(),
      );
      pipe(teardown, expectToHaveBeenCalledTimes(1));
    }),

    test("catches and swallows Errors thrown by teardown function", () => {
      const teardown = pipeLazy(none, raise);

      const disposable = pipe(
        newInstance(Disposable),
        onDisposed(teardown),
        dispose(),
      );
      pipe(disposable.error, expectNone);
    }),

    test("propogates errors when disposed with an Error", () => {
      const error = { cause: null };

      const childTeardown = mockFn();
      const disposable = pipe(
        Disposable,
        newInstanceWith<Disposable>(),
        onDisposed(childTeardown),
      );

      pipe(disposable, dispose(error));

      pipe(disposable.error, expectEquals(error));
      pipe(childTeardown, expectToHaveBeenCalledTimes(1));
      pipe(childTeardown.calls[0], expectArrayEquals([error]));
    }),
  ),
);
