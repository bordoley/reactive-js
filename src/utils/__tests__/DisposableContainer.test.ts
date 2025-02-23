import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsNone,
  expectToHaveBeenCalledTimes,
  mockFn,
  test,
  testModule,
} from "../../__internal__/testing.js";
import {
  Optional,
  error,
  newInstance,
  none,
  pipe,
  pipeLazy,
  raise,
} from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";

testModule(
  "DisposableContainer",
  describe(
    "onComplete",
    test("disposing the parent without error invokes the callback", () => {
      const disposable = Disposable.create();
      const callback = mockFn();

      pipe(disposable, DisposableContainer.onComplete(callback));
      disposable[DisposableLike_dispose]();

      pipe(callback, expectToHaveBeenCalledTimes(1));
    }),
    test("disposing the parent with an error does not invoke the callback", () => {
      const disposable = Disposable.create();
      const callback = mockFn();

      pipe(disposable, DisposableContainer.onComplete(callback));
      disposable[DisposableLike_dispose](newInstance(Error));

      pipe(callback, expectToHaveBeenCalledTimes(0));
    }),
    test("adding the same callback multiple times is memoized", () => {
      const teardown = mockFn();
      const disposable = pipe(
        Disposable.create(),
        DisposableContainer.onComplete(teardown),
        DisposableContainer.onComplete(teardown),
        DisposableContainer.onComplete(teardown),
      );

      disposable[DisposableLike_dispose]();
      pipe(teardown, expectToHaveBeenCalledTimes(1));
    }),
  ),
  describe(
    "onDisposed",
    test("disposes teardown function exactly once when disposed", () => {
      const teardown = mockFn();
      const disposable = pipe(
        Disposable.create(),
        DisposableContainer.onDisposed(teardown),
        DisposableContainer.onDisposed(teardown),
      );
      disposable[DisposableLike_dispose]();
      pipe(teardown, expectToHaveBeenCalledTimes(1));
    }),
    test("catches and swallows Errors thrown by teardown function", () => {
      const teardown = pipeLazy(none, raise);

      const disposable = pipe(
        Disposable.create(),
        DisposableContainer.onDisposed(teardown),
      );
      disposable[DisposableLike_dispose]();
      pipe(disposable[DisposableLike_error], expectIsNone);
    }),
    test("propogates errors when disposed with an Error", () => {
      const err: Optional<Error> = error(null);

      const childTeardown = mockFn();
      const disposable = pipe(
        Disposable.create(),
        DisposableContainer.onDisposed(childTeardown),
      );

      disposable[DisposableLike_dispose](err);

      pipe(
        disposable[DisposableLike_error],
        expectEquals<Optional<Error>>(err),
      );
      pipe(childTeardown, expectToHaveBeenCalledTimes(1));
      pipe(childTeardown.calls[0], expectArrayEquals([err]));
    }),
  ),
  describe(
    "onError",
    test("adding the same callback multiple times is memoized", () => {
      const teardown = mockFn();
      const disposable = pipe(
        Disposable.create(),
        DisposableContainer.onError(teardown),
        DisposableContainer.onError(teardown),
        DisposableContainer.onError(teardown),
      );

      disposable[DisposableLike_dispose](newInstance(Error));
      pipe(teardown, expectToHaveBeenCalledTimes(1));
    }),
  ),
  describe(
    "toAbortSignal",
    test("disposing the disposable invokes the abort signal", () => {
      const disposable = Disposable.create();
      const signal = pipe(disposable, DisposableContainer.toAbortSignal);

      const callback = mockFn();
      signal.onabort = callback;

      disposable[DisposableLike_dispose]();

      pipe(callback, expectToHaveBeenCalledTimes(1));
    }),
    test("disposing the disposable with an error invokes the abort signal", () => {
      const disposable = Disposable.create();
      const signal = pipe(disposable, DisposableContainer.toAbortSignal);

      const callback = mockFn();
      signal.onabort = callback;

      const error = newInstance(Error);
      disposable[DisposableLike_dispose](error);

      pipe(callback, expectToHaveBeenCalledTimes(1));
      pipe(signal.reason, expectEquals(error));
    }),
  ),
);

((_: Disposable.Signature) => {})(Disposable);
