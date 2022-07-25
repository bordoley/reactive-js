import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectNone,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
} from "../__internal__/testing";
import { Option, none, pipe, pipeLazy, raise } from "../functions";
import { Error, createDisposable } from "../util";
import {
  addIgnoringChildErrors,
  dispose,
  getError,
  isDisposed,
  onDisposed,
} from "../util/DisposableLike";

export const DisposableLikeTests = describe(
  "DisposableLike",
  test("disposes child disposable when disposed", () => {
    const child = createDisposable();
    pipe(createDisposable(), addIgnoringChildErrors(child), dispose());
    pipe(child, isDisposed, expectTrue);
  }),
  test("adding to disposed disposable disposes the child", () => {
    const child = createDisposable();
    pipe(createDisposable(), dispose(), addIgnoringChildErrors(child));
    pipe(child, isDisposed, expectTrue);
  }),
  test("disposes teardown function exactly once when disposed", () => {
    const teardown = mockFn();
    pipe(
      createDisposable(),
      onDisposed(teardown),
      onDisposed(teardown),
      dispose(),
    );
    pipe(teardown, expectToHaveBeenCalledTimes(1));
  }),
  test("catches and swallows Errors thrown by teardown function", () => {
    const teardown = pipeLazy(none, raise);

    const disposable = pipe(
      createDisposable(),
      onDisposed(teardown),
      dispose(),
    );
    pipe(disposable, getError, expectNone);
  }),
  test("propogates errors when disposed with an Error", () => {
    const error: Option<Error> = { cause: null };

    const childTeardown = mockFn();
    const disposable = pipe(createDisposable(), onDisposed(childTeardown));

    pipe(disposable, dispose(error));

    pipe(disposable, getError, expectEquals<Option<Error>>(error));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([error]));
  }),
);
