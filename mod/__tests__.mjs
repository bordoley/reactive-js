/// <reference types="./__tests__.d.ts" />
import { fromArray, fromIterable, generate, consume, consumeContinue, consumeDone, consumeAsync, toObservable, map, keep, scan } from './asyncEnumerable.mjs';
import { fromValue, empty, endWith, concatMap, mapTo, startWith, ignoreElements, contains, compute, noneSatisfy, zipWith, throws, concatWith, genMap, encodeUtf8 } from './container.mjs';
import { onDisposed, Disposable, add, dispose, isDisposed, SerialDisposable, disposed, DisposableValue } from './disposable.mjs';
import { forEach } from './enumerator.mjs';
import { pipe, ignore, increment, returns, pipeLazy, isEven, sum, newInstance, raise, newInstanceWith, alwaysTrue, incrementBy, alwaysFalse, arrayEquality, identity } from './functions.mjs';
import { onNotify, subscribe, toRunnable, fromArrayT, concat as concat$2, fromArray as fromArray$3, buffer, mapT, catchError, concatT, generate as generate$3, takeFirst as takeFirst$2, combineLatestWith, createObservable, Subject, observerCount, exhaustT, fromPromise, toPromise, concatAllT, fromIteratorT, merge, mergeT, mergeAllT, never, observable, __memo, __observe, takeLast as takeLast$2, onSubscribe, retry, scanAsync, share, zip as zip$1, map as map$3, switchAll, switchAllT, throttle, throwIfEmpty, timeout, withLatestFrom, fromIterable as fromIterable$2, zipT, zipLatestWith, zipWithLatestFrom, keepT as keepT$2, distinctUntilChanged as distinctUntilChanged$2, repeat as repeat$2, scan as scan$3, skipFirst as skipFirst$2, takeWhile as takeWhile$2, decodeWithCharset, reduce, usingT } from './observable.mjs';
import { none, isSome } from './option.mjs';
import { last, toArray, fromArray as fromArray$1, someSatisfyT, first, generate as generate$1, everySatisfy, map as map$1, forEach as forEach$1, everySatisfyT, fromArrayT as fromArrayT$1, keepT, concat, concatAll, distinctUntilChanged, repeat, scan as scan$1, skipFirst, takeFirst, takeLast, takeWhile, toRunnable as toRunnable$1 } from './runnable.mjs';
import { createVirtualTimeScheduler, createHostScheduler, schedule, now } from './scheduler.mjs';
import { stream, createStateStore, __stream, createActionReducer, createLiftedStreamable, sourceFrom } from './streamable.mjs';
import { describe, test, expectArrayEquals, expectNone, expectEquals, expectTrue, mockFn, expectToHaveBeenCalledTimes, expectFalse, expectToThrow, expectToThrowError, testAsync, expectPromiseToThrow, expectSome } from './testing.mjs';
import { fromArray as fromArray$2, toIterable, fromIterable as fromIterable$1, toRunnable as toRunnable$2, fromArrayT as fromArrayT$2, keepT as keepT$1, concat as concat$1, concatAll as concatAll$1, distinctUntilChanged as distinctUntilChanged$1, generate as generate$2, map as map$2, repeat as repeat$1, scan as scan$2, skipFirst as skipFirst$1, takeFirst as takeFirst$1, takeLast as takeLast$1, takeWhile as takeWhile$1, zip } from './enumerable.mjs';
import { type, fromArray as fromArray$4, concat as concat$3, concatAll as concatAll$2, distinctUntilChanged as distinctUntilChanged$3, generate as generate$4, keep as keep$1, map as map$4, repeat as repeat$3, scan as scan$4, skipFirst as skipFirst$3, takeFirst as takeFirst$3, takeLast as takeLast$3, takeWhile as takeWhile$3, toRunnable as toRunnable$3, fromArrayT as fromArrayT$3, zipT as zipT$1 } from './sequence.mjs';
import { dispatchTo } from './dispatcher.mjs';
import { flow, toObservable as toObservable$1 } from './flowable.mjs';

const tests$7 = describe("async enumerable", test("fromArray", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerable = pipe([1, 2, 3, 4, 5, 6], fromArray());
    const enumerator = pipe(enumerable, stream(scheduler));
    const result = [];
    pipe(enumerator, onNotify((x) => result.push(x)), subscribe(scheduler));
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    pipe(scheduler, forEach(ignore));
    pipe(result, expectArrayEquals([1, 2, 3]));
}), test("fromIterable", () => {
    const scheduler = createVirtualTimeScheduler();
    const result = [];
    let error = none;
    const enumerator = pipe(fromIterable()([1, 2, 3, 4, 5, 6]), stream(scheduler));
    pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler), onDisposed(e => {
        error = e;
    }));
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    pipe(scheduler, forEach(ignore));
    pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6]));
    pipe(error, expectNone);
}), test("generate", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = pipe(generate(increment, returns(0)), stream(scheduler));
    const result = [];
    pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler));
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    pipe(scheduler, forEach(ignore));
    pipe(result, expectArrayEquals([1, 2, 3]));
}), test("consume", () => {
    const enumerable = fromIterable()([1, 2, 3, 4, 5, 6]);
    pipe(enumerable, consume((acc, next) => consumeContinue(acc + next), returns(0)), toRunnable(), last(), expectEquals(21));
    pipe(enumerable, consume((acc, next) => acc > 0 ? consumeDone(acc + next) : consumeContinue(acc + next), returns(0)), toRunnable(), last(), expectEquals(3));
}), describe("consumeAsync", test("when the consumer early terminates", pipeLazy([1, 2, 3, 4, 5, 6], fromIterable(), consumeAsync((acc, next) => fromValue(fromArrayT)(acc > 0 ? consumeDone(acc + next) : consumeContinue(acc + next)), returns(0)), toRunnable(), last(), expectEquals(3))), test("when the consumer never terminates", pipeLazy([1, 2, 3, 4, 5, 6], fromIterable(), consumeAsync((acc, next) => pipe(acc + next, consumeContinue, fromValue(fromArrayT)), returns(0)), toRunnable(), last(), expectEquals(21)))), test("toObservable", pipeLazy([1, 2, 3, 4, 5], fromArray(), toObservable(), toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 4, 5]))), test("toObservable", pipeLazy([1, 2, 3, 4, 5], fromArray(), toObservable(), toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 4, 5]))), test("map", pipeLazy([1, 2, 3, 4, 5], fromArray(), map(increment), toObservable(), toRunnable(), toArray(), expectArrayEquals([2, 3, 4, 5, 6]))), test("keep", pipeLazy([1, 2, 3, 4, 5], fromArray(), keep(isEven), toObservable(), toRunnable(), toArray(), expectArrayEquals([2, 4]))), test("map/keep", pipeLazy([1, 2, 3, 4, 5], fromArray(), map(increment), keep(isEven), toObservable(), toRunnable(), toArray(), expectArrayEquals([2, 4, 6]))), test("keep/map", pipeLazy([1, 2, 3, 4, 5, 6], fromArray(), keep(isEven), map(increment), toObservable(), toRunnable(), toArray(), expectArrayEquals([3, 5, 7]))), test("scan", pipeLazy([1, 1, 1], fromArray(), scan(sum, returns(0)), toObservable(), toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))));

const tests$6 = describe("Disposable", describe("Disposable", test("disposes child disposable when disposed", () => {
    const child = newInstance(Disposable);
    pipe(newInstance(Disposable), add(child, true), dispose());
    pipe(child, isDisposed, expectTrue);
}), test("adding to disposed disposable disposes the child", () => {
    const child = newInstance(Disposable);
    pipe(newInstance(Disposable), dispose(), add(child, true));
    pipe(child, isDisposed, expectTrue);
}), test("disposes teardown function exactly once when disposed", () => {
    const teardown = mockFn();
    pipe(newInstance(Disposable), onDisposed(teardown), onDisposed(teardown), dispose());
    pipe(teardown, expectToHaveBeenCalledTimes(1));
}), test("catches and swallows Errors thrown by teardown function", () => {
    const teardown = pipeLazy(none, raise);
    const disposable = pipe(newInstance(Disposable), onDisposed(teardown), dispose());
    pipe(disposable.error, expectNone);
}), test("propogates errors when disposed with an Error", () => {
    const error = { cause: null };
    const childTeardown = mockFn();
    const disposable = pipe(Disposable, newInstanceWith(), onDisposed(childTeardown));
    pipe(disposable, dispose(error));
    pipe(disposable.error, expectEquals(error));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([error]));
})), describe("AbstractSerialDisposable", test("setting inner disposable disposes the previous inner disposable", () => {
    const serialDisposable = newInstance(SerialDisposable);
    const child = newInstance(Disposable);
    serialDisposable.inner = child;
    pipe(serialDisposable.inner, expectEquals(child));
    serialDisposable.inner = disposed;
    pipe(child, isDisposed, expectTrue);
}), test("setting inner disposable with the same inner disposable has no effect", () => {
    const serialDisposable = newInstance(SerialDisposable);
    const child = newInstance(Disposable);
    serialDisposable.inner = child;
    pipe(serialDisposable.inner, expectEquals(child));
    serialDisposable.inner = child;
    pipe(child, isDisposed, expectFalse);
})), describe("DisposableValue", test("disposes the value when disposed", () => {
    const value = newInstance(Disposable);
    const disposable = newInstance(DisposableValue, value, dispose());
    pipe(disposable, dispose());
    pipe(disposable.value, expectEquals(value));
    pipe(value, isDisposed, expectTrue);
})));

const createRunnableTests = (m) => describe("RunnableContainer", test("concat", pipeLazy(m.concat(empty(m), m.fromArray()([1, 2, 3]), empty(m), m.fromArray()([4, 5, 6])), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), describe("distinctUntilChanged", test("when source has duplicates in order", pipeLazy([1, 2, 2, 2, 2, 3, 3, 3, 4], m.fromArray(), m.distinctUntilChanged(), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 4]))), test("when source is empty", pipeLazy([], m.fromArray(), m.distinctUntilChanged(), m.toRunnable(), toArray(), expectArrayEquals([])))), test("endWith", pipeLazy([1, 2, 3], m.fromArray(), endWith(m, 4), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 4]))), test("concatMap", pipeLazy(0, fromValue(m), concatMap(m, pipeLazy([1, 2, 3], m.fromArray())), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), test("keep", pipeLazy([4, 8, 10, 7], m.fromArray(), m.keep(x => x > 5), m.toRunnable(), toArray(), expectArrayEquals([8, 10, 7]))), test("map", pipeLazy([1, 2, 3], m.fromArray(), m.map(increment), m.toRunnable(), toArray(), expectArrayEquals([2, 3, 4]))), test("mapTo", pipeLazy([1, 2, 3], m.fromArray(), mapTo(m, 2), m.toRunnable(), toArray(), expectArrayEquals([2, 2, 2]))), describe("repeat", test("when always repeating", pipeLazy([1, 2, 3], m.fromArray(), m.repeat(), m.takeFirst({ count: 6 }), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("when repeating a finite amount of times.", pipeLazy([1, 2, 3], m.fromArray(), m.repeat(3), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating with a predicate", pipeLazy([1, 2, 3], m.fromArray(), m.repeat(x => x < 1), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3])))), test("scan", pipeLazy([1, 1, 1], m.fromArray(), m.scan(sum, returns(0)), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), describe("skipFirst", test("when skipped source has additional elements", pipeLazy([1, 2, 3], m.fromArray(), m.skipFirst({ count: 2 }), m.toRunnable(), toArray(), expectArrayEquals([3]))), test("when all elements are skipped", pipeLazy([1, 2, 3], m.fromArray(), m.skipFirst({ count: 4 }), m.toRunnable(), toArray(), expectArrayEquals([])))), test("startWith", pipeLazy([1, 2, 3], m.fromArray(), startWith(m, 0), m.toRunnable(), toArray(), expectArrayEquals([0, 1, 2, 3]))), describe("takeFirst", test("when taking fewer than the total number of elements in the source", pipeLazy(m.generate(increment, returns(0)), m.takeFirst({ count: 3 }), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), test("when taking more than all the items produced by the source", pipeLazy(1, fromValue(m), m.takeFirst({ count: 3 }), m.toRunnable(), toArray(), expectArrayEquals([1])))), test("takeLast", pipeLazy([1, 2, 3, 4, 5], m.fromArray(), m.takeLast({ count: 3 }), m.toRunnable(), toArray(), expectArrayEquals([3, 4, 5]))), describe("takeWhile", test("exclusive", () => {
    pipe(m.generate(increment, returns(0)), m.takeWhile(x => x < 4), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3]));
    pipe([1, 2, 3], m.fromArray(), m.takeWhile(alwaysTrue), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3]));
    pipe(empty(m), m.takeWhile(alwaysTrue), m.toRunnable(), toArray(), expectArrayEquals([]));
}), test("inclusive", pipeLazy(m.generate(increment, returns(0)), m.takeWhile(x => x < 4, { inclusive: true }), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 4])))), test("lift", pipeLazy(m.generate(increment, returns(0)), m.map(x => x * 2), m.takeFirst({ count: 3 }), concatMap(m, count => pipe(m.generate(incrementBy(1), returns(0)), m.takeFirst({ count }))), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6]))), test("ignoreElements", pipeLazy([1, 2, 3], m.fromArray(), ignoreElements(m), endWith(m, 4), m.toRunnable(), toArray(), expectArrayEquals([4]))));
const tests$5 = describe("runnable", describe("contains", test("source is empty", pipeLazy(empty({ fromArray: fromArray$1 }), contains(someSatisfyT, 1), first(), expectFalse)), test("source contains value", pipeLazy(generate$1(increment, returns(0)), contains(someSatisfyT, 1), first(), expectTrue)), test("source does not contain value", pipeLazy([2, 3, 4], fromArray$1(), contains(someSatisfyT, 1), first(), expectFalse))), describe("everySatisfy", test("source is empty", pipeLazy(empty({ fromArray: fromArray$1 }), everySatisfy(alwaysFalse), first(), expectTrue)), test("source values pass predicate", pipeLazy([1, 2, 3], fromArray$1(), everySatisfy(alwaysTrue), first(), expectTrue)), test("source values fail predicate", pipeLazy([1, 2, 3], fromArray$1(), everySatisfy(alwaysFalse), first(), expectFalse))), describe("first", test("when enumerable is not empty", pipeLazy(returns(1), compute({ fromArray: fromArray$1, map: map$1 }), first(), expectEquals(1))), test("when enumerable is empty", pipeLazy(empty({ fromArray: fromArray$1 }), first(), expectNone))), test("forEach", () => {
    const fn = mockFn();
    pipe([1, 2, 3], fromArray$1(), forEach$1(fn));
    pipe(fn, expectToHaveBeenCalledTimes(3));
}), describe("noneSatisfy", test("source is empty", pipeLazy(empty({ fromArray: fromArray$1 }), noneSatisfy(everySatisfyT, alwaysFalse), first(), expectTrue)), test("source values pass predicate", pipeLazy([1, 2, 3], fromArray$1(), noneSatisfy(everySatisfyT, alwaysTrue), first(), expectFalse)), test("source values fail predicate", pipeLazy([1, 2, 3], fromArray$1(), noneSatisfy(everySatisfyT, alwaysFalse), first(), expectTrue))), createRunnableTests({
    ...fromArrayT$1,
    ...keepT,
    concat,
    concatAll,
    distinctUntilChanged,
    generate: generate$1,
    map: map$1,
    repeat,
    scan: scan$1,
    skipFirst,
    takeFirst,
    takeLast,
    takeWhile,
    toRunnable: toRunnable$1,
}));

const createZippableTests = (m) => describe("ZippableContainer", test("zip", pipeLazy([1, 2, 3], m.fromArray(), zipWith(m, m.fromArray()([1, 2, 3, 4, 5])), m.map(([a, b]) => a + b), m.toRunnable(), toArray(), expectArrayEquals([2, 4, 6]))), test("with non-delayed sources", pipeLazy(m.zip(pipe([1, 2], m.fromArray()), pipe([1, 2], m.fromArray(), m.map(increment)), m.generate(increment, returns(2))), m.toRunnable(), toArray(), expectArrayEquals([
    [1, 2, 3],
    [2, 3, 4],
], arrayEquality()))));
const tests$4 = describe("enumerable", test("toIterable", pipeLazy([1, 2, 3], fromArray$2(), toIterable(), fromIterable$1(), toRunnable$2(), toArray(), expectArrayEquals([1, 2, 3]))), createRunnableTests({
    ...fromArrayT$2,
    ...keepT$1,
    concat: concat$1,
    concatAll: concatAll$1,
    distinctUntilChanged: distinctUntilChanged$1,
    generate: generate$2,
    map: map$2,
    repeat: repeat$1,
    scan: scan$2,
    skipFirst: skipFirst$1,
    takeFirst: takeFirst$1,
    takeLast: takeLast$1,
    takeWhile: takeWhile$1,
    toRunnable: toRunnable$2,
}), createZippableTests({ ...fromArrayT$2, generate: generate$2, map: map$2, toRunnable: toRunnable$2, zip }));

const tests$3 = describe("observable", describe("buffer", test("with duration and maxBufferSize", pipeLazy(concat$2(pipe([1, 2, 3, 4], fromArray$3()), pipe([1, 2, 3], fromArray$3({ delay: 1 })), pipe(4, fromValue(fromArrayT, { delay: 8 }))), buffer({ duration: 4, maxBufferSize: 3 }), toRunnable(), toArray(), expectArrayEquals([[1, 2, 3], [4, 1, 2], [3], [4]], arrayEquality()))), test("when duration observable throws", pipeLazy(pipeLazy([1, 2, 3, 4], fromArray$3(), buffer({ duration: _ => throws({ ...fromArrayT, ...mapT })(raise) }), toRunnable({
    schedulerFactory: pipeLazy({ maxMicroTaskTicks: 1 }, createVirtualTimeScheduler),
}), toArray()), expectToThrow))), describe("catchError", test("source completes successfully", pipeLazy(pipe(1, fromValue(fromArrayT)), catchError(_ => fromValue(fromArrayT)(2)), toRunnable(), toArray(), expectArrayEquals([1]))), test("source throws, error caught and ignored", () => {
    const error = newInstance(Error);
    pipe(1, fromValue(fromArrayT), concatWith(concatT, pipe(error, returns, throws({ ...fromArrayT, ...mapT }))), catchError(ignore), toRunnable(), toArray(), expectArrayEquals([1]));
}), test("source throws, continues with second observable", () => {
    const error = newInstance(Error);
    pipe(1, fromValue(fromArrayT), concatWith(concatT, pipe(error, returns, throws({ ...fromArrayT, ...mapT }))), catchError(_ => fromValue(fromArrayT)(2)), toRunnable(), toArray(), expectArrayEquals([1, 2]));
}), test("source throws, catch throws", () => {
    const error = newInstance(Error);
    expectToThrow(() => pipe(1, fromValue(fromArrayT), concatWith(concatT, pipe(error, returns, throws({ ...fromArrayT, ...mapT }))), catchError(_ => {
        throw error;
    }), toRunnable(), toArray()));
})), test("combineLatest", pipeLazy(generate$3(incrementBy(2), returns(1), { delay: 2 }), takeFirst$2({ count: 3 }), combineLatestWith(pipe(generate$3(incrementBy(2), returns(0), { delay: 3 }), takeFirst$2({ count: 2 }))), toRunnable(), toArray(), expectArrayEquals([
    [3, 2],
    [5, 2],
    [5, 4],
    [7, 4],
], arrayEquality()))), describe("createObservable", test("disposes the observer if onSubscribe throws", () => {
    const cause = newInstance(Error);
    const observable = createObservable(_ => {
        throw cause;
    });
    pipe(() => pipe(observable, toRunnable(), last()), expectToThrowError(cause));
}), test("when queuing multiple events", pipeLazy(createObservable(({ dispatcher }) => {
    dispatcher.dispatch(1);
    dispatcher.dispatch(2);
    dispatcher.dispatch(3);
    pipe(dispatcher, dispose());
}), toRunnable({
    schedulerFactory: pipeLazy({ maxMicroTaskTicks: 1 }, createVirtualTimeScheduler),
}), toArray(), expectArrayEquals([1, 2, 3])))), describe("Subject", test("with replay", () => {
    const subject = newInstance(Subject, 2);
    pipe([1, 2, 3, 4], fromArray$1(), forEach$1(x => subject.publish(x)));
    pipe(subject, dispose());
    pipe(subject, toRunnable(), toArray(), expectArrayEquals([3, 4]));
}), test("with multiple observers", () => {
    const scheduler = createVirtualTimeScheduler();
    const subject = newInstance(Subject);
    pipe(subject, observerCount, expectEquals(0));
    const sub1 = pipe(subject, subscribe(scheduler));
    pipe(subject, observerCount, expectEquals(1));
    const sub2 = pipe(subject, subscribe(scheduler));
    pipe(subject, observerCount, expectEquals(2));
    pipe(sub1, dispose());
    pipe(subject, observerCount, expectEquals(1));
    pipe(sub2, dispose());
    pipe(subject, observerCount, expectEquals(0));
})), test("exhaustMap", pipeLazy([fromArray$3()([1, 2, 3]), fromArray$3()([4, 5, 6]), fromArray$3()([7, 8, 9])], fromArray$3(), concatMap({ ...exhaustT, ...mapT }, (x) => x), toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), describe("fromPromise", testAsync("when the promise resolves", async () => {
    const scheduler = createHostScheduler();
    const factory = () => Promise.resolve(1);
    const result = await pipe(factory, fromPromise, toPromise(scheduler));
    pipe(result, expectEquals(1));
    scheduler.dispose();
}), testAsync("when the promise reject", async () => {
    const error = newInstance(Error);
    const factory = () => Promise.reject(error);
    const scheduler = createHostScheduler();
    await pipe(pipe(factory, fromPromise, toPromise(scheduler)), expectPromiseToThrow);
    scheduler.dispose();
})), test("genMap", pipeLazy(undefined, fromValue(fromArrayT), genMap({ ...concatAllT, ...fromIteratorT, ...mapT }, function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), describe("merge", test("two arrays", pipeLazy(merge(pipe([0, 2, 3, 5, 6], fromArray$3({ delay: 1 })), pipe([1, 4, 7], fromArray$3({ delay: 2 }))), toRunnable(), toArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), test("when one source throws", pipeLazy(pipeLazy([1, 4, 7], fromArray$3({ delay: 2 }), concatWith(mergeT, throws({ ...fromArrayT, ...mapT }, { delay: 5 })(raise)), toRunnable(), last()), expectToThrow))), describe("mergeMap", test("when a mapped observable throws", pipeLazy(pipeLazy([
    fromArray$3({ delay: 1 })([1, 2, 3]),
    throws({ ...fromArrayT, ...mapT }, { delay: 2 })(raise),
], fromArray$3(), concatMap({ ...mergeAllT, ...mapT }, identity), toRunnable(), last()), expectToThrow)), test("when the map function throws", pipeLazy(pipeLazy([1, 2, 3, 4], fromArray$3(), concatMap({ ...mergeAllT, ...mapT }, (x) => {
    if (x > 2) {
        raise();
    }
    return fromValue(fromArrayT)(x);
}), toRunnable(), last()), expectToThrow))), test("never", pipeLazy(never(), toRunnable(), last(), expectNone)), test("observable", () => {
    const fromValueWithDelay = (delay, value) => fromValue(fromArrayT, { delay })(value);
    const emptyDelayed = empty(fromArrayT, { delay: 100 });
    const computedObservable = observable(() => {
        var _a, _b, _c;
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = (_a = __observe(obs1)) !== null && _a !== void 0 ? _a : 0;
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = (_b = __observe(obs2)) !== null && _b !== void 0 ? _b : 0;
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = (_c = __observe(obs3)) !== null && _c !== void 0 ? _c : 0;
        __observe(emptyDelayed);
        return result1 + result2 + result3;
    });
    pipe(computedObservable, takeLast$2(), toRunnable(), last(), expectEquals(22));
    // switch map test
    const oneTwoThreeDelayed = fromArray$3({ delay: 1 })([1, 2, 3]);
    const createOneTwoThree = (x) => isSome(x) ? fromArray$3()([1, 2, 3]) : empty(fromArrayT);
    pipe(observable(() => {
        const v = __observe(oneTwoThreeDelayed);
        const next = __memo(createOneTwoThree, v);
        return __observe(next);
    }, { mode: "combine-latest" }), toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
}), describe("onSubscribe", test("when subscribe function returns a teardown function", () => {
    const scheduler = createVirtualTimeScheduler();
    const disp = mockFn();
    const f = mockFn(disp);
    pipe(1, fromValue(fromArrayT), onSubscribe(f), subscribe(scheduler));
    pipe(disp, expectToHaveBeenCalledTimes(0));
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(scheduler, forEach(ignore));
    pipe(disp, expectToHaveBeenCalledTimes(1));
    pipe(f, expectToHaveBeenCalledTimes(1));
}), test("when callback function throws", () => {
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(1, fromValue(fromArrayT), onSubscribe(raise), subscribe(scheduler));
    pipe(subscription.error, expectSome);
})), describe("retry", test("repeats the observable n times", () => {
    let retried = false;
    const src = createObservable(({ dispatcher }) => {
        dispatcher.dispatch(1);
        if (retried) {
            dispatcher.dispatch(2);
            dispatcher.dispose();
        }
        else {
            retried = true;
            pipe(dispatcher, dispose({ cause: newInstance(Error) }));
        }
    });
    pipe(src, retry(), toRunnable(), toArray(), expectArrayEquals([1, 1, 2]));
})), describe("scanAsync", test("fast lib, slow acc", pipeLazy([1, 2, 3], fromArray$3(), scanAsync((acc, x) => fromValue(fromArrayT, { delay: 4 })(x + acc), returns(0)), toRunnable(), toArray(), expectArrayEquals([1, 3, 6]))), test("slow lib, fast acc", pipeLazy([1, 2, 3], fromArray$3({ delay: 4 }), scanAsync((acc, x) => fromValue(fromArrayT)(x + acc), returns(0)), toRunnable(), toArray(), expectArrayEquals([1, 3, 6]))), test("slow lib, slow acc", pipeLazy([1, 2, 3], fromArray$3({ delay: 4 }), scanAsync((acc, x) => fromValue(fromArrayT, { delay: 4 })(x + acc), returns(0)), toRunnable(), toArray(), expectArrayEquals([1, 3, 6]))), test("fast lib, fast acc", pipeLazy([1, 2, 3], fromArray$3(), scanAsync((acc, x) => fromValue(fromArrayT)(x + acc), returns(0)), toRunnable(), toArray(), expectArrayEquals([1, 3, 6])))), test("share", () => {
    const scheduler = createVirtualTimeScheduler();
    const shared = pipe([1, 2, 3], fromArray$3({ delay: 1 }), share(scheduler, { replay: 1 }));
    let result = [];
    pipe(zip$1(shared, shared), map$3(([a, b]) => a + b), buffer(), onNotify(x => {
        result = x;
    }), subscribe(scheduler));
    pipe(scheduler, forEach(ignore));
    pipe(result, expectArrayEquals([2, 4, 6]));
}), describe("switchAll", test("with empty source", pipeLazy(empty(fromArrayT), switchAll(), toRunnable(), toArray(), expectArrayEquals([]))), test("when source throw", pipeLazy(pipeLazy(raise, throws({ ...fromArrayT, ...mapT }), switchAll(), toRunnable(), toArray(), expectArrayEquals([])), expectToThrow))), test("switchMap", pipeLazy([1, 2, 3], fromArray$3({ delay: 1 }), concatMap({ ...switchAllT, ...mapT }, _ => pipe([1, 2, 3], fromArray$3())), toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), describe("takeLast", test("when pipeline throws", pipeLazy(pipeLazy(raise, throws({ ...fromArrayT, ...mapT }), takeLast$2(), toRunnable(), last()), expectToThrow))), describe("throttle", test("first", pipeLazy(generate$3(increment, returns(-1), { delay: 1 }), takeFirst$2({ count: 100 }), throttle(50, { mode: "first" }), toRunnable(), toArray(), expectArrayEquals([0, 49]))), test("last", pipeLazy(generate$3(increment, returns(-1), { delay: 1 }), takeFirst$2({ count: 200 }), throttle(50, { mode: "last" }), toRunnable(), toArray(), expectArrayEquals([49, 99, 149, 199]))), test("interval", pipeLazy(generate$3(increment, returns(-1), { delay: 1 }), takeFirst$2({ count: 200 }), throttle(75, { mode: "interval" }), toRunnable(), toArray(), expectArrayEquals([0, 74, 149, 199]))), test("when duration observable throws", pipeLazy(pipeLazy([1, 2, 3, 4, 5], fromArray$3({ delay: 1 }), throttle(_ => throws({ ...fromArrayT, ...mapT })(raise)), toRunnable(), last()), expectToThrow))), describe("throwIfEmpty", test("when source is empty", pipeLazy(pipeLazy(empty(fromArrayT), throwIfEmpty(() => undefined), toRunnable(), last()), expectToThrow)), test("when source is not empty", pipeLazy(1, returns, compute({ ...fromArrayT, ...mapT }), throwIfEmpty(() => undefined), toRunnable(), last(), expectEquals(1)))), describe("timeout", test("throws when a timeout occurs", pipeLazy(pipeLazy(1, fromValue(fromArrayT, { delay: 2 }), timeout(1), toArray()), expectToThrow)), test("when timeout is greater than observed time", pipeLazy(1, fromValue(fromArrayT, { delay: 2 }), timeout(3), toRunnable(), last(), expectEquals(1)))), describe("toPromise", testAsync("when observable completes without producing a value", async () => {
    const scheduler = createHostScheduler();
    await pipe(pipe(empty(fromArrayT), toPromise(scheduler)), expectPromiseToThrow);
    scheduler.dispose();
})), describe("withLatestFrom", test("when source and latest are interlaced", pipeLazy([0, 1, 2, 3], fromArray$3({ delay: 1 }), withLatestFrom(pipe([0, 1, 2, 3], fromArray$3({ delay: 2 })), (a, b) => [
    a,
    b,
]), toRunnable(), toArray(), expectArrayEquals([
    [1, 0],
    [2, 0],
    [3, 1],
], arrayEquality()))), test("when latest produces no values", pipeLazy([0], fromArray$3({ delay: 1 }), withLatestFrom(empty(fromArrayT), sum), toRunnable(), toArray(), expectArrayEquals([]))), test("when latest throws", () => {
    const error = newInstance(Error);
    pipe(pipeLazy([0], fromArray$3({ delay: 1 }), withLatestFrom(throws({ ...fromArrayT, ...mapT })(returns(error)), sum), toRunnable(), toArray(), expectArrayEquals([])), expectToThrowError(error));
})), describe("zip", test("with synchronous and non-synchronous sources", pipeLazy(zip$1(pipe([1, 2], fromArray$3({ delay: 1 })), pipe([2, 3], fromIterable$2()), pipe([3, 4, 5], fromArray$3({ delay: 1 }))), toRunnable(), toArray(), expectArrayEquals([
    [1, 2, 3],
    [2, 3, 4],
], arrayEquality()))), test("fast with slow", pipeLazy([1, 2, 3], fromArray$3({ delay: 1 }), zipWith(zipT, pipe([1, 2, 3], fromArray$3({ delay: 5 }))), toRunnable(), toArray(), expectArrayEquals([
    [1, 1],
    [2, 2],
    [3, 3],
], arrayEquality()))), test("when source throws", pipeLazy(pipeLazy(raise, throws({ ...fromArrayT, ...mapT }), zipWith(zipT, fromArray$3()([1, 2, 3])), map$3(([, b]) => b), toRunnable(), toArray()), expectToThrow))), test("zipLatestWith", pipeLazy([1, 2, 3, 4, 5, 6, 7, 8], fromArray$3({ delay: 1 }), zipLatestWith(pipe([1, 2, 3, 4], fromArray$3({ delay: 2 }))), map$3(([a, b]) => a + b), toRunnable(), toArray(), expectArrayEquals([2, 5, 8, 11]))), describe("zipWithLatestFrom", test("when source throws", pipeLazy(pipeLazy(throws({ ...fromArrayT, ...mapT })(raise), zipWithLatestFrom(fromValue(fromArrayT)(1), (_, b) => b), toRunnable(), last()), expectToThrow)), test("when other throws", pipeLazy(pipeLazy([1, 2, 3], fromArray$3({ delay: 1 }), zipWithLatestFrom(throws({ ...fromArrayT, ...mapT })(raise), (_, b) => b), toRunnable(), last()), expectToThrow)), test("when other completes first", pipeLazy([1], fromArray$3({ delay: 1 }), zipWithLatestFrom(fromArray$3()([2]), (_, b) => b), toRunnable(), last(), expectEquals(2)))), createRunnableTests({
    ...concatT,
    ...concatAllT,
    ...fromArrayT,
    ...keepT$2,
    distinctUntilChanged: distinctUntilChanged$2,
    generate: generate$3,
    map: map$3,
    repeat: repeat$2,
    scan: scan$3,
    skipFirst: skipFirst$2,
    takeFirst: takeFirst$2,
    takeLast: takeLast$2,
    takeWhile: takeWhile$2,
    toRunnable,
}), createZippableTests({ ...fromArrayT, generate: generate$3, map: map$3, toRunnable, zip: zip$1 }));

const tests$2 = describe("sequence", createRunnableTests({
    type,
    fromArray: fromArray$4,
    concat: concat$3,
    concatAll: concatAll$2,
    distinctUntilChanged: distinctUntilChanged$3,
    generate: generate$4,
    keep: keep$1,
    map: map$4,
    repeat: repeat$3,
    scan: scan$4,
    skipFirst: skipFirst$3,
    takeFirst: takeFirst$3,
    takeLast: takeLast$3,
    takeWhile: takeWhile$3,
    toRunnable: toRunnable$3,
}), createZippableTests({ ...fromArrayT$3, generate: generate$4, map: map$4, toRunnable: toRunnable$3, ...zipT$1 }));

const tests$1 = describe("streamable", test("__stream", () => {
    const streamable = createStateStore(() => 0);
    const createLooper = (stream) => pipe([1, 2, 3], fromArray$3({ delay: 10 }), onNotify(x => pipe(returns(x), dispatchTo(stream))), ignoreElements(keepT$2));
    const obs = observable(() => {
        var _a;
        const stream = __stream(streamable);
        const runLooper = __memo(createLooper, stream);
        __observe(runLooper);
        return (_a = __observe(stream)) !== null && _a !== void 0 ? _a : -1;
    });
    pipe(obs, toRunnable(), toArray(), expectArrayEquals([-1, 0, 1, 2, 3]));
}), test("createActionReducer", () => {
    const scheduler = createVirtualTimeScheduler();
    const actionReducerStream = pipe(createActionReducer(sum, returns(0)), stream(scheduler));
    actionReducerStream.dispatch(1);
    actionReducerStream.dispatch(2);
    pipe(actionReducerStream, dispose());
    let result = [];
    pipe(actionReducerStream, onNotify(x => {
        result.push(x);
    }), subscribe(scheduler));
    pipe(scheduler, forEach(ignore));
    pipe(result, expectArrayEquals([0, 1, 3]));
}), test("with multiple observers", () => {
    const scheduler = createVirtualTimeScheduler();
    const incrStream = pipe(createLiftedStreamable(map$3(incrementBy(100))), stream(scheduler));
    pipe(incrStream, observerCount, expectEquals(0));
    const sub1 = pipe(incrStream, subscribe(scheduler));
    pipe(incrStream, observerCount, expectEquals(1));
    const sub2 = pipe(incrStream, subscribe(scheduler));
    pipe(incrStream, observerCount, expectEquals(2));
    pipe(sub1, dispose());
    pipe(incrStream, observerCount, expectEquals(1));
    pipe(sub2, dispose());
    pipe(incrStream, observerCount, expectEquals(0));
}), test("map", () => {
    const scheduler = createVirtualTimeScheduler();
    const incrStream = pipe(createLiftedStreamable(map$3(incrementBy(100))), stream(scheduler));
    incrStream.dispatch(10);
    incrStream.dispatch(20);
    incrStream.dispatch(30);
    pipe(incrStream, dispose());
    let result = [];
    const subscription = pipe(incrStream, buffer(), onNotify(x => {
        result = x;
    }), subscribe(scheduler));
    pipe(scheduler, forEach(ignore));
    pipe(result, expectArrayEquals([110, 120, 130]));
    pipe(subscription, isDisposed, expectTrue);
}), test("onNotify", () => {
    const scheduler = createVirtualTimeScheduler();
    let result = [];
    const notifyStream = pipe(createLiftedStreamable(onNotify((x) => {
        result.push(x);
    })), stream(scheduler));
    notifyStream.dispatch(1);
    notifyStream.dispatch(2);
    notifyStream.dispatch(3);
    pipe(notifyStream, dispose());
    pipe(notifyStream, isDisposed, expectTrue);
    pipe(scheduler, forEach(ignore));
    pipe(result, expectArrayEquals([1, 2, 3]));
}), test("scan", () => {
    const scheduler = createVirtualTimeScheduler();
    let result = [];
    const scanStream = pipe(createLiftedStreamable(scan$3(sum, returns(0)), onNotify(x => {
        result.push(x);
    })), stream(scheduler));
    scanStream.dispatch(1);
    scanStream.dispatch(2);
    scanStream.dispatch(3);
    pipe(scheduler, forEach(ignore));
    pipe(result, expectArrayEquals([1, 3, 6]));
}), test("sink", () => {
    const scheduler = createVirtualTimeScheduler();
    const src = createLiftedStreamable(scan$3((acc, _) => acc + 1, returns(0)), takeFirst$2({ count: 3 }));
    let result = 0;
    const dest = pipe(createLiftedStreamable(scan$3((acc, _) => acc + 1, returns(0)), onNotify(v => {
        result = v;
    }), mapTo(mapT, none), startWith({ ...concatT, ...fromArrayT }, none)), stream(scheduler), sourceFrom(src));
    pipe(dest, isDisposed, expectFalse);
    pipe(scheduler, forEach(ignore));
    pipe(dest, isDisposed, expectTrue);
    pipe(result, expectEquals(3));
}), describe("flow", test("empty source", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe([], fromArray$3(), flow(), stream(scheduler));
    emptyStream.dispatch("pause");
    emptyStream.dispatch("resume");
    const f = mockFn();
    const subscription = pipe(emptyStream, onNotify(f), subscribe(scheduler));
    pipe(scheduler, forEach(ignore));
    pipe(f, expectToHaveBeenCalledTimes(0));
    pipe(subscription, isDisposed, expectTrue);
    pipe(emptyStream, isDisposed, expectTrue);
}), test("generate source", () => {
    const scheduler = createVirtualTimeScheduler();
    const generateStream = pipe(generate$3(increment, returns(-1), { delay: 1 }), flow(), stream(scheduler));
    generateStream.dispatch("resume");
    pipe(scheduler, schedule(pipeLazy("pause", dispatchTo(generateStream)), {
        delay: 2,
    }));
    pipe(scheduler, schedule(pipeLazy("resume", dispatchTo(generateStream)), {
        delay: 4,
    }));
    pipe(scheduler, schedule(pipeLazy(generateStream, dispose()), { delay: 5 }));
    const f = mockFn();
    const subscription = pipe(generateStream, onNotify(x => {
        f(now(scheduler), x);
    }), subscribe(scheduler));
    pipe(scheduler, forEach(ignore));
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls[0][1], expectEquals(0));
    pipe(f.calls[1][1], expectEquals(1));
    pipe(f.calls[2][1], expectEquals(2));
    pipe(subscription, isDisposed, expectTrue);
}), test("fromValue", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueStream = pipe([1], fromArray$3(), flow(), stream(scheduler));
    fromValueStream.dispatch("resume");
    fromValueStream.dispatch("resume");
    const f = mockFn();
    const subscription = pipe(fromValueStream, onNotify(f), subscribe(scheduler));
    pipe(scheduler, forEach(ignore));
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(1));
    pipe(subscription, isDisposed, expectTrue);
    pipe(fromValueStream, isDisposed, expectTrue);
})), describe("io", test("decodeWithCharset", () => {
    const scheduler = createVirtualTimeScheduler();
    const f = mockFn();
    const subscription = pipe([
        Uint8Array.from([226]),
        Uint8Array.from([130]),
        Uint8Array.from([172]),
    ], fromArray$3(), decodeWithCharset(), flow(), toObservable$1(), reduce((acc, next) => acc + next, returns("")), onNotify(f), subscribe(scheduler));
    pipe(scheduler, forEach(ignore));
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(String.fromCodePoint(8364)));
    pipe(subscription, isDisposed, expectTrue);
}), test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(empty(fromArrayT), flow(), stream(scheduler));
    emptyStream.dispatch("pause");
    emptyStream.dispatch("resume");
    const f = mockFn();
    const subscription = pipe(emptyStream, onNotify(f), subscribe(scheduler));
    pipe(scheduler, forEach(ignore));
    pipe(f, expectToHaveBeenCalledTimes(0));
    pipe(subscription, isDisposed, expectTrue);
    pipe(emptyStream, isDisposed, expectTrue);
}), test("encodeUtf8", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    const scheduler = createVirtualTimeScheduler();
    const f = mockFn();
    const subscription = pipe(str, fromValue(fromArrayT), encodeUtf8({ ...mapT, ...usingT }), decodeWithCharset(), flow(), toObservable$1(), reduce((acc, next) => acc + next, returns("")), onNotify(f), subscribe(scheduler));
    pipe(scheduler, forEach(ignore));
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(str));
    pipe(subscription, isDisposed, expectTrue);
}), test("fromValue", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueStream = pipe(1, fromValue(fromArrayT), flow(), stream(scheduler));
    fromValueStream.dispatch("resume");
    const f = mockFn();
    const subscription = pipe(fromValueStream, onNotify(f), subscribe(scheduler));
    pipe(scheduler, forEach(ignore));
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(1));
    pipe(subscription, isDisposed, expectTrue);
    pipe(fromValueStream, isDisposed, expectTrue);
}), test("map", () => {
    const scheduler = createVirtualTimeScheduler();
    const f = mockFn();
    const src = pipe(1, fromValue(fromArrayT), map$3(returns(2)), flow(), toObservable$1(), reduce(sum, returns(0)), onNotify(f), subscribe(scheduler));
    pipe(scheduler, forEach(ignore));
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(2));
    pipe(src, isDisposed, expectTrue);
})));

const tests = [
    tests$7,
    tests$6,
    tests$4,
    tests$3,
    tests$5,
    tests$2,
    tests$1,
];

export { tests };
