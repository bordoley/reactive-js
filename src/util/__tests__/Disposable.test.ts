import {
  expectArrayEquals,
  expectEquals,
  expectIsNone,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
  testModule,
} from "../../__internal__/testing.js";
import {
  Optional,
  error,
  none,
  pipe,
  pipeLazy,
  raise,
} from "../../functions.js";
import * as Observable from "../../rx/Observable.js";
import {
  SchedulerLike_now,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../../scheduling.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../util.js";
import * as Disposable from "../Disposable.js";

testModule(
  "Disposable",
  test("disposes child disposable when disposed", () => {
    const child = Disposable.create();
    const disposable = pipe(
      Disposable.create(),
      Disposable.addIgnoringChildErrors(child),
    );
    disposable[DisposableLike_dispose]();
    pipe(child[DisposableLike_isDisposed], expectTrue);
  }),
  test("adding to disposed disposable disposes the child", () => {
    const child = Disposable.create();
    const disposable = Disposable.create();
    disposable[DisposableLike_dispose]();

    pipe(disposable, Disposable.addIgnoringChildErrors(child));

    pipe(child[DisposableLike_isDisposed], expectTrue);
  }),
  test("disposes teardown function exactly once when disposed", () => {
    const teardown = mockFn();
    const disposable = pipe(
      Disposable.create(),
      Disposable.onDisposed(teardown),
      Disposable.onDisposed(teardown),
    );
    disposable[DisposableLike_dispose]();
    pipe(teardown, expectToHaveBeenCalledTimes(1));
  }),
  test("catches and swallows Errors thrown by teardown function", () => {
    const teardown = pipeLazy(none, raise);

    const disposable = pipe(
      Disposable.create(),
      Disposable.onDisposed(teardown),
    );
    disposable[DisposableLike_dispose]();
    pipe(disposable[DisposableLike_error], expectIsNone);
  }),
  test("propogates errors when disposed with an Error", () => {
    const err: Optional<Error> = error(null);

    const childTeardown = mockFn();
    const disposable = pipe(
      Disposable.create(),
      Disposable.onDisposed(childTeardown),
    );

    disposable[DisposableLike_dispose](err);

    pipe(disposable[DisposableLike_error], expectEquals<Optional<Error>>(err));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([err]));
  }),
  test("ignores when it is added to itself", () => {
    const disposable = Disposable.create();
    pipe(disposable, Disposable.addTo(disposable));
    disposable[DisposableLike_dispose]();
  }),
  test("disposes parent when child is disposed with error", () => {
    const parent = Disposable.create();
    const child = Disposable.create();

    pipe(parent, Disposable.add(child));

    const e = new Error();
    child[DisposableLike_dispose](e);

    pipe(parent[DisposableLike_error], expectEquals<Optional<Error>>(e));
  }),
  test("toObservable", () => {
    const disposable = Disposable.create();
    const scheduler = Scheduler.createVirtualTimeScheduler();

    let disposedTime = 0;
    pipe(
      disposable,
      Disposable.toObservable(),
      Observable.subscribe(scheduler),
      Disposable.onDisposed(_ => {
        disposedTime = scheduler[SchedulerLike_now];
      }),
    );

    scheduler[SchedulerLike_schedule](
      () => {
        disposable[DisposableLike_dispose]();
      },
      { delay: 2 },
    );

    scheduler[VirtualTimeSchedulerLike_run]();
    pipe(disposedTime, expectEquals(2));
  }),
);
