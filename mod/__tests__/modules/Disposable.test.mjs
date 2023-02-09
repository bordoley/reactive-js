/// <reference types="./Disposable.test.d.ts" />
import { pipe, pipeLazy, none, raise, error } from '../../functions.mjs';
import Observable from '../../rx/Observable.mjs';
import Continuation from '../../scheduling/Continuation.mjs';
import Scheduler from '../../scheduling/Scheduler.mjs';
import VirtualTimeScheduler from '../../scheduling/VirtualTimeScheduler.mjs';
import Disposable from '../../util/Disposable.mjs';
import { testModule, test as createTest, expectTrue, mockFn, expectToHaveBeenCalledTimes, expectIsNone, expectEquals, expectArrayEquals } from '../testing.mjs';

testModule("Disposable", createTest("disposes child disposable when disposed", () => {
    const child = Disposable.create();
    pipe(Disposable.create(), Disposable.addIgnoringChildErrors(child), Disposable.dispose());
    pipe(child, Disposable.isDisposed, expectTrue);
}), createTest("adding to disposed disposable disposes the child", () => {
    const child = Disposable.create();
    pipe(Disposable.create(), Disposable.dispose(), Disposable.addIgnoringChildErrors(child));
    pipe(child, Disposable.isDisposed, expectTrue);
}), createTest("disposes teardown function exactly once when disposed", () => {
    const teardown = mockFn();
    pipe(Disposable.create(), Disposable.onDisposed(teardown), Disposable.onDisposed(teardown), Disposable.dispose());
    pipe(teardown, expectToHaveBeenCalledTimes(1));
}), createTest("catches and swallows Errors thrown by teardown function", () => {
    const teardown = pipeLazy(none, raise);
    const disposable = pipe(Disposable.create(), Disposable.onDisposed(teardown), Disposable.dispose());
    pipe(disposable, Disposable.getError, expectIsNone);
}), createTest("propogates errors when disposed with an Error", () => {
    const err = error(null);
    const childTeardown = mockFn();
    const disposable = pipe(Disposable.create(), Disposable.onDisposed(childTeardown));
    pipe(disposable, Disposable.dispose(err));
    pipe(disposable, Disposable.getError, expectEquals(err));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([err]));
}), createTest("ignores when it is added to itself", () => {
    const disposable = Disposable.create();
    pipe(disposable, Disposable.addTo(disposable), Disposable.dispose());
}), createTest("disposes parent when child is disposed with error", () => {
    const parent = Disposable.create();
    const child = Disposable.create();
    pipe(parent, Disposable.add(child));
    const e = new Error();
    pipe(child, Disposable.dispose(e));
    pipe(parent, Disposable.getError, expectEquals(e));
}), createTest("toObservable", () => {
    const disposable = Disposable.create();
    const scheduler = VirtualTimeScheduler.create();
    let disposedTime = 0;
    pipe(disposable, Disposable.toObservable(), Observable.subscribe(scheduler), Disposable.onDisposed(_ => {
        disposedTime = Scheduler.getCurrentTime(scheduler);
    }));
    pipe(scheduler, Scheduler.schedule(() => {
        pipe(disposable, Disposable.dispose());
    }, { delay: 2 }));
    Continuation.run(scheduler);
    pipe(disposedTime, expectEquals(2));
}));
