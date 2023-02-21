import {
  Optional,
  error,
  none,
  pipe,
  pipeLazy,
  raise,
} from "../../functions.js";
import Observable from "../../rx/Observable.js";
import Continuation from "../../scheduling/Continuation.js";
import Scheduler from "../../scheduling/Scheduler.js";
import VirtualTimeScheduler from "../../scheduling/VirtualTimeScheduler.js";
import Disposable from "../../util/Disposable.js";
import {
  expectArrayEquals,
  expectEquals,
  expectIsNone,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
  testModule,
} from "../testing.js";

testModule(
  "Disposable",
  test("disposes child disposable when disposed", () => {
    const child = Disposable.create();
    pipe(
      Disposable.create(),
      Disposable.addIgnoringChildErrors(child),
      Disposable.dispose(),
    );
    pipe(child, Disposable.isDisposed, expectTrue);
  }),
  test("adding to disposed disposable disposes the child", () => {
    const child = Disposable.create();
    pipe(
      Disposable.create(),
      Disposable.dispose(),
      Disposable.addIgnoringChildErrors(child),
    );
    pipe(child, Disposable.isDisposed, expectTrue);
  }),
  test("disposes teardown function exactly once when disposed", () => {
    const teardown = mockFn();
    pipe(
      Disposable.create(),
      Disposable.onDisposed(teardown),
      Disposable.onDisposed(teardown),
      Disposable.dispose(),
    );
    pipe(teardown, expectToHaveBeenCalledTimes(1));
  }),
  test("catches and swallows Errors thrown by teardown function", () => {
    const teardown = pipeLazy(none, raise);

    const disposable = pipe(
      Disposable.create(),
      Disposable.onDisposed(teardown),
      Disposable.dispose(),
    );
    pipe(disposable, Disposable.getError, expectIsNone);
  }),
  test("propogates errors when disposed with an Error", () => {
    const err: Optional<Error> = error(null);

    const childTeardown = mockFn();
    const disposable = pipe(
      Disposable.create(),
      Disposable.onDisposed(childTeardown),
    );

    pipe(disposable, Disposable.dispose(err));

    pipe(disposable, Disposable.getError, expectEquals<Optional<Error>>(err));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([err]));
  }),
  test("ignores when it is added to itself", () => {
    const disposable = Disposable.create();
    pipe(disposable, Disposable.addTo(disposable), Disposable.dispose());
  }),
  test("disposes parent when child is disposed with error", () => {
    const parent = Disposable.create();
    const child = Disposable.create();

    pipe(parent, Disposable.add(child));

    const e = new Error();
    pipe(child, Disposable.dispose(e));

    pipe(parent, Disposable.getError, expectEquals<Optional<Error>>(e));
  }),
  test("toObservable", () => {
    const disposable = Disposable.create();
    const scheduler = VirtualTimeScheduler.create();

    let disposedTime = 0;
    pipe(
      disposable,
      Disposable.toObservable(),
      Observable.subscribe(scheduler),
      Disposable.onDisposed(_ => {
        disposedTime = Scheduler.getCurrentTime(scheduler);
      }),
    );

    pipe(
      scheduler,
      Scheduler.schedule(
        () => {
          pipe(disposable, Disposable.dispose());
        },
        { delay: 2 },
      ),
    );

    Continuation.run(scheduler);
    pipe(disposedTime, expectEquals(2));
  }),
);
