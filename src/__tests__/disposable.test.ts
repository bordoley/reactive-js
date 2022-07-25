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
import { pipe, pipeLazy, raise } from "../functions";
import { Error, Option } from "../util";
import {
  addIgnoringChildErrors,
  create,
  dispose,
  getError,
  isDisposed,
  onDisposed,
} from "../util/DisposableLike";
import { none } from "../util/Option";

export const tests = describe(
  "Disposable",

  describe(
    "Disposable",
    test("disposes child disposable when disposed", () => {
      const child = create();
      pipe(create(), addIgnoringChildErrors(child), dispose());
      pipe(child, isDisposed, expectTrue);
    }),

    test("adding to disposed disposable disposes the child", () => {
      const child = create();
      pipe(create(), dispose(), addIgnoringChildErrors(child));
      pipe(child, isDisposed, expectTrue);
    }),

    test("disposes teardown function exactly once when disposed", () => {
      const teardown = mockFn();
      pipe(create(), onDisposed(teardown), onDisposed(teardown), dispose());
      pipe(teardown, expectToHaveBeenCalledTimes(1));
    }),

    test("catches and swallows Errors thrown by teardown function", () => {
      const teardown = pipeLazy(none, raise);

      const disposable = pipe(create(), onDisposed(teardown), dispose());
      pipe(disposable, getError, expectNone);
    }),

    test("propogates errors when disposed with an Error", () => {
      const error: Option<Error> = { cause: null };

      const childTeardown = mockFn();
      const disposable = pipe(create(), onDisposed(childTeardown));

      pipe(disposable, dispose(error));

      pipe(disposable, getError, expectEquals<Option<Error>>(error));
      pipe(childTeardown, expectToHaveBeenCalledTimes(1));
      pipe(childTeardown.calls[0], expectArrayEquals([error]));
    }),
  ),
);
