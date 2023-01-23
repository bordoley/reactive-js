import { Optional, error, none, pipe, pipeLazy, raise } from "../../functions";
import { subscribe } from "../../rx/ObservableLike";
import { run } from "../../scheduling/ContinuationLike";
import { getCurrentTime, schedule } from "../../scheduling/SchedulerLike";
import { create as createVirtualTimeScheduler } from "../../scheduling/VirtualTimeSchedulerLike";
import {
  add,
  addIgnoringChildErrors,
  addTo,
  create as createDisposable,
  dispose,
  getError,
  isDisposed,
  onDisposed,
  toObservable,
} from "../../util/DisposableLike";
import {
  expectArrayEquals,
  expectEquals,
  expectIsNone,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
  testModule,
} from "../testing";

testModule(
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
    pipe(disposable, getError, expectIsNone);
  }),
  test("propogates errors when disposed with an Error", () => {
    const err: Optional<Error> = error(null);

    const childTeardown = mockFn();
    const disposable = pipe(createDisposable(), onDisposed(childTeardown));

    pipe(disposable, dispose(err));

    pipe(disposable, getError, expectEquals<Optional<Error>>(err));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([err]));
  }),
  test("ignores when it is added to itself", () => {
    const disposable = createDisposable();
    pipe(disposable, addTo(disposable), dispose());
  }),
  test("disposes parent when child is disposed with error", () => {
    const parent = createDisposable();
    const child = createDisposable();

    pipe(parent, add(child));

    const e = new Error();
    pipe(child, dispose(e));

    pipe(parent, getError, expectEquals<Optional<Error>>(e));
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
