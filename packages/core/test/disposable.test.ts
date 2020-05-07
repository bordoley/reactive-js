import {
  createDisposable,
  createSerialDisposable,
  disposed,
} from "../src/disposable";
import { fromArray, forEach, map } from "../src/enumerable";
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
} from "../src/testing";

export const tests = describe(
  "Disposable",
  test("create", () => {
    const disposable = createDisposable();
    pipe(disposable.isDisposed, expectFalse);
    disposable.dispose();
    pipe(disposable.isDisposed, expectTrue);
  }),

  test("add", () => {
    const disposable = createDisposable();

    const children = [
      createDisposable(),
      createDisposable(),
      createDisposable(),
      createDisposable(),
    ];

    for (const child of children) {
      disposable.add(child);
    }

    pipe(
      children,
      fromArray,
      map(d => d.isDisposed),
      forEach(expectFalse),
    );

    disposable.dispose();

    pipe(
      children,
      fromArray,
      map(d => d.isDisposed),
      forEach(expectTrue),
    );

    const anotherDisposable = createDisposable();
    disposable.add(anotherDisposable);
    pipe(anotherDisposable.isDisposed, expectTrue);
  }),

  test("disposed", () => {
    pipe(disposed.isDisposed, expectTrue);

    const child = createDisposable();
    disposed.add(child);

    pipe(child.isDisposed, expectTrue);
  }),

  test("dispose when teardown throws an exception", () => {
    const disposable = createDisposable(() => {
      throw new Error();
    });
    disposable.dispose();
  }),

  test("dispose with error", () => {
    const error = { cause: null };

    const childTeardown = mockFn();
    const child = createDisposable().add(e => childTeardown(e));

    const teardown = mockFn();
    const disposable = createDisposable()
      .add(child)
      .add(e => teardown(e));
    disposable.dispose(error);

    const teardown2 = mockFn();
    disposable.add(e => teardown2(e));

    const childTeardown2 = mockFn();
    const child2 = createDisposable().add(e => childTeardown2(e));
    disposable.add(child2);

    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([error]));

    pipe(teardown, expectToHaveBeenCalledTimes(1));
    pipe(teardown.calls[0], expectArrayEquals([error]));

    pipe(childTeardown2, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown2.calls[0], expectArrayEquals([error]));

    pipe(teardown2, expectToHaveBeenCalledTimes(1));
    pipe(teardown2.calls[0], expectArrayEquals([error]));
  }),

  describe(
    "SerialDisposable",
    test("create", () => {
      const serialDisposable = createSerialDisposable();
      pipe(serialDisposable.isDisposed, expectFalse);

      serialDisposable.dispose();
      pipe(serialDisposable.isDisposed, expectTrue);
    }),

    test("set disposable", () => {
      const serialDisposable = createSerialDisposable();
      const disposable = createDisposable();

      serialDisposable.inner = disposable;
      pipe(serialDisposable.inner, expectEquals(disposable));

      const anotherDisposable = createDisposable();
      serialDisposable.inner = anotherDisposable;
      pipe(serialDisposable.inner, expectEquals(anotherDisposable));

      pipe(disposable.isDisposed, expectTrue);

      pipe(anotherDisposable.isDisposed, expectFalse);
      serialDisposable.dispose();
      pipe(anotherDisposable.isDisposed, expectTrue);

      const yetAnotherDisposable = createDisposable();
      serialDisposable.inner = yetAnotherDisposable;
      pipe(yetAnotherDisposable.isDisposed, expectTrue);
    }),
  ),
);
