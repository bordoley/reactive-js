import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsNone,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
} from "../../__internal__/testing";
import { Option, none, pipe, pipeLazy, raise } from "../../functions";
import { subscribe } from "../../rx/ObservableLike";
import { createVirtualTimeScheduler } from "../../scheduling";
import { getCurrentTime, schedule } from "../../scheduling/SchedulerLike";
import { Exception, createDisposable } from "../../util";
import { run } from "../../util/ContinuationLike";
import {
  add,
  addIgnoringChildErrors,
  addTo,
  dispose,
  getException,
  isDisposed,
  onDisposed,
  toObservable,
} from "../../util/DisposableLike";

export default describe(
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
    pipe(disposable, getException, expectIsNone);
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
      ({ cause }: Exception = { cause: undefined }) => cause,
      expectEquals(cause as unknown),
    );
  }),
  test("toObservable", () => {
    const disposable = createDisposable();
    const scheduler = createVirtualTimeScheduler();

    let disposedTime = 0;
    pipe(
      disposable,
      toObservable(),
      subscribe(scheduler),
      onDisposed(_ => {
        disposedTime = getCurrentTime(scheduler);
      }),
    );

    pipe(
      scheduler,
      schedule(
        () => {
          pipe(disposable, dispose());
        },
        { delay: 2 },
      ),
    );

    run(scheduler);
    pipe(disposedTime, expectEquals(2));
  }),
);
