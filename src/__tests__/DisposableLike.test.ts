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
import { Exception, createDisposable } from "../util";
import {
  add,
  addIgnoringChildErrors,
  addTo,
  dispose,
  getException,
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
    pipe(disposable, getException, expectNone);
  }),
  test("propogates errors when disposed with an Exception", () => {
    const error: Option<Exception> = { cause: null };

    const childTeardown = mockFn();
    const disposable = pipe(createDisposable(), onDisposed(childTeardown));

    pipe(disposable, dispose(error));

    pipe(disposable, getException, expectEquals<Option<Exception>>(error));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([error]));
  }),
  test("ignores when it is added to itself", () => {
    const disposable = createDisposable();
    pipe(disposable, addTo(disposable), dispose());
  }),
  test("disposes parent when child is disposed with error", () => {
    const parent = createDisposable();
    const child = createDisposable();

    pipe(parent, add(child));

    const cause = new Error();
    pipe(child, dispose({ cause }));

    pipe(
      parent,
      getException,
      ({ cause }: Exception = { cause: undefined }) => cause as any,
      expectEquals(cause),
    );
  }),
);
