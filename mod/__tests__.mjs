/// <reference types="./__tests__.d.ts" />
import { fromIterable, consume, notify, done, consumeAsync, fromArray, generate } from './asyncEnumerable.mjs';
import { addTeardown, createDisposable, addDisposable, dispose, createSerialDisposable, disposed, createDisposableValue } from './disposable.mjs';
import { pipe, returns, defer, increment, raise, sum, alwaysTrue, incrementBy, arrayEquality, ignore, identity, alwaysFalse } from './functions.mjs';
import { t as toRunnable, f as fromValue, s as subscribe, g as generate$1, d as dispatchTo, c as concat, a as fromArray$3, b as buffer, e as throws, h as catchError, i as concatWith, j as takeFirst, k as combineLatestWith, l as createObservable, m as createSubject, n as exhaustMap, o as fromPromise, p as toPromise, q as genMap, r as ignoreElements, u as endWith, v as merge, w as mergeWith, x as mergeMap, y as never, z as empty$2, A as observable, _ as __memo, B as __observe, C as takeLast, D as onSubscribe, E as retry, F as scanAsync, G as share, H as zip, I as map$2, J as switchAll, K as switchMap, L as throttle, M as throwIfEmpty, N as compute, O as timeout, P as withLatestFrom, Q as fromIterable$2, R as zipWith$1, S as zipLatestWith, T as zipWithLatestFrom, U as Observable, V as startWith, W as onNotify } from './observable-01499efa.mjs';
import { none, isSome } from './option.mjs';
import { l as last, t as toArray, f as fromArray$4, a as forEach, e as empty$3, c as contains, g as generate$2, b as everySatisfy, d as compute$1, h as first, n as noneSatisfy, R as Runnable } from './runnable-90bcb00d.mjs';
import { createVirtualTimeScheduler, schedule, createHostScheduler } from './scheduler.mjs';
import { stream, sink, identity as identity$1, lift, __stream, createActionReducer, empty as empty$4, map as map$3, mapReq, onNotify as onNotify$1, scan, mapTo } from './streamable.mjs';
import { describe, test, expectEquals, expectArrayEquals, expectNone, expectTrue, mockFn, expectToHaveBeenCalledTimes, expectFalse, expectToThrow, expectToThrowError, testAsync, expectPromiseToThrow, expectSome } from './testing.mjs';
import { f as fromArray$1, t as toIterable, a as fromIterable$1, b as toRunnable$1, z as zipWith, m as map, E as Enumerable } from './enumerable-1c943b67.mjs';
import { empty, fromObservable, fromValue as fromValue$1 } from './flowable.mjs';
import { fromArray as fromArray$2, decodeWithCharset, createIOSinkAccumulator, empty as empty$1, fromValue as fromValue$2, encodeUtf8, map as map$1 } from './io.mjs';
import { S as Sequence } from './sequence-7715f886.mjs';
import { toStateStore } from './stateStore.mjs';

const tests$a = describe("async-enumerable", test("consume", () => {
    const enumerable = fromIterable()([1, 2, 3, 4, 5, 6]);
    pipe(enumerable, consume((acc, next) => notify(acc + next), returns(0)), toRunnable(), last, expectEquals(21));
    pipe(enumerable, consume((acc, next) => (acc > 0 ? done(acc + next) : notify(acc + next)), returns(0)), toRunnable(), last, expectEquals(3));
}), describe("consumeAsync", test("when the consumer early terminates", defer([1, 2, 3, 4, 5, 6], fromIterable(), consumeAsync((acc, next) => fromValue()(acc > 0 ? done(acc + next) : notify(acc + next)), returns(0)), toRunnable(), last, expectEquals(3))), test("when the consumer never terminates", defer([1, 2, 3, 4, 5, 6], fromIterable(), consumeAsync((acc, next) => pipe(acc + next, notify, fromValue()), returns(0)), toRunnable(), last, expectEquals(21)))), test("fromArray", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerable = pipe([1, 2, 3, 4, 5, 6], fromArray());
    const enumerator = pipe(enumerable, stream(scheduler));
    const result = [];
    pipe(enumerator, subscribe(scheduler, x => result.push(x)));
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3]));
}), test("fromIterable", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = pipe(fromIterable()([1, 2, 3, 4, 5, 6]), stream(scheduler));
    const result = [];
    let error = none;
    const subscription = pipe(enumerator, subscribe(scheduler, x => result.push(x)));
    addTeardown(subscription, e => {
        error = e;
    });
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6]));
    pipe(error, expectNone);
}), test("generate", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = pipe(generate(increment, returns(0)), stream(scheduler));
    const result = [];
    pipe(enumerator, subscribe(scheduler, x => result.push(x)));
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3]));
}));

const tests$9 = describe("Disposable", describe("AbstractDisposable", test("disposes child disposable when disposed", () => {
    const disposable = createDisposable();
    const child = createDisposable();
    addDisposable(disposable, child);
    pipe(disposable, dispose());
    expectTrue(child.isDisposed);
}), test("adding to disposed disposable disposes the child", () => {
    const disposable = createDisposable();
    const child = createDisposable();
    pipe(disposable, dispose());
    addDisposable(disposable, child);
    expectTrue(child.isDisposed);
}), test("disposes teardown function exactly once when disposed", () => {
    const teardown = mockFn();
    const disposable = createDisposable(teardown);
    addTeardown(disposable, teardown);
    pipe(disposable, dispose());
    pipe(teardown, expectToHaveBeenCalledTimes(1));
}), test("catches and swallows Errors thrown by teardown function", () => {
    const teardown = defer(none, raise);
    const disposable = createDisposable(teardown);
    pipe(disposable, dispose());
    pipe(disposable.error, expectNone);
}), test("propogates errors when disposed with an Error", () => {
    const error = { cause: null };
    const childTeardown = mockFn();
    const disposable = createDisposable(childTeardown);
    pipe(disposable, dispose(error));
    pipe(disposable.error, expectEquals(error));
    pipe(childTeardown, expectToHaveBeenCalledTimes(1));
    pipe(childTeardown.calls[0], expectArrayEquals([error]));
})), describe("AbstractSerialDisposable", test("setting inner disposable disposes the previous inner disposable", () => {
    const serialDisposable = createSerialDisposable();
    const child = createDisposable();
    serialDisposable.inner = child;
    pipe(serialDisposable.inner, expectEquals(child));
    serialDisposable.inner = disposed;
    pipe(child.isDisposed, expectTrue);
}), test("setting inner disposable with the same inner disposable has no effect", () => {
    const serialDisposable = createSerialDisposable();
    const child = createDisposable();
    serialDisposable.inner = child;
    pipe(serialDisposable.inner, expectEquals(child));
    serialDisposable.inner = child;
    pipe(child.isDisposed, expectFalse);
})), describe("DisposableValue", test("disposes the value when disposed", () => {
    const value = createDisposable();
    const disposable = createDisposableValue(value, dispose());
    pipe(disposable, dispose());
    pipe(disposable.value, expectEquals(value));
    pipe(value.isDisposed, expectTrue);
})));

const createMonadTests = (m) => describe("monadic", test("concat", defer(m.concat(m.empty(), m.fromArray()([1, 2, 3]), m.empty(), m.fromArray()([4, 5, 6])), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), describe("distinctUntilChanged", test("when source has duplicates in order", defer([1, 2, 2, 2, 2, 3, 3, 3, 4], m.fromArray(), m.distinctUntilChanged(), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 4]))), test("when source is empty", defer([], m.fromArray(), m.distinctUntilChanged(), m.toRunnable(), toArray(), expectArrayEquals([])))), test("endWith", defer([1, 2, 3], m.fromArray(), m.endWith(4), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 4]))), test("concatMap", defer(0, m.fromValue(), m.concatMap((_) => m.fromArray()([1, 2, 3])), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), test("keep", defer([4, 8, 10, 7], m.fromArray(), m.keep((x) => x > 5), m.toRunnable(), toArray(), expectArrayEquals([8, 10, 7]))), test("map", defer([1, 2, 3], m.fromArray(), m.map(increment), m.toRunnable(), toArray(), expectArrayEquals([2, 3, 4]))), test("mapTo", defer([1, 2, 3], m.fromArray(), m.mapTo(2), m.toRunnable(), toArray(), expectArrayEquals([2, 2, 2]))), describe("repeat", test("when always repeating", defer([1, 2, 3], m.fromArray(), m.repeat(), m.takeFirst({ count: 6 }), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("when repeating a finite amount of times.", defer([1, 2, 3], m.fromArray(), m.repeat(3), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), test("when repeating with a predicate", defer([1, 2, 3], m.fromArray(), m.repeat((x) => x < 1), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3])))), test("scan", defer([1, 1, 1], m.fromArray(), m.scan(sum, returns(0)), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), describe("skipFirst", test("when skipped source has additional elements", defer([1, 2, 3], m.fromArray(), m.skipFirst({ count: 2 }), m.toRunnable(), toArray(), expectArrayEquals([3]))), test("when all elements are skipped", defer([1, 2, 3], m.fromArray(), m.skipFirst({ count: 4 }), m.toRunnable(), toArray(), expectArrayEquals([])))), test("startWith", defer([1, 2, 3], m.fromArray(), m.startWith(0), m.toRunnable(), toArray(), expectArrayEquals([0, 1, 2, 3]))), describe("takeFirst", test("when taking fewer than the total number of elements in the source", defer(m.generate(increment, returns(0)), m.takeFirst({ count: 3 }), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), test("when taking more than all the items produced by the source", defer(1, m.fromValue(), m.takeFirst({ count: 3 }), m.toRunnable(), toArray(), expectArrayEquals([1])))), test("takeLast", defer([1, 2, 3, 4, 5], m.fromArray(), m.takeLast({ count: 3 }), m.toRunnable(), toArray(), expectArrayEquals([3, 4, 5]))), describe("takeWhile", test("exclusive", () => {
    pipe(m.generate(increment, returns(0)), m.takeWhile((x) => x < 4), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3]));
    pipe([1, 2, 3], m.fromArray(), m.takeWhile(alwaysTrue), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3]));
    pipe(m.empty(), m.takeWhile(alwaysTrue), m.toRunnable(), toArray(), expectArrayEquals([]));
}), test("inclusive", defer(m.generate(increment, returns(0)), m.takeWhile((x) => x < 4, { inclusive: true }), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 4])))), test("lift", defer(m.generate(increment, returns(0)), m.map((x) => x * 2), m.takeFirst({ count: 3 }), m.concatMap((count) => pipe(m.generate(incrementBy(1), returns(0)), m.takeFirst({ count }))), m.toRunnable(), toArray(), expectArrayEquals([1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6]))));

const tests$8 = describe("enumerable", test("toIterable", defer([1, 2, 3], fromArray$1(), toIterable(), fromIterable$1(), toRunnable$1(), toArray(), expectArrayEquals([1, 2, 3]))), test("zip", defer([1, 2, 3], fromArray$1(), zipWith(fromArray$1()([1, 2, 3, 4, 5])), map(([a, b]) => a + b), toRunnable$1(), toArray(), expectArrayEquals([2, 4, 6]))), createMonadTests(Enumerable));

const tests$7 = describe("flowables", test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(empty(), stream(scheduler));
    emptyStream.dispatch("pause");
    emptyStream.dispatch("resume");
    const f = mockFn();
    const subscription = pipe(emptyStream, subscribe(scheduler, f));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(0));
    expectTrue(subscription.isDisposed);
    expectTrue(emptyStream.isDisposed);
}), test("fromObservable", () => {
    const scheduler = createVirtualTimeScheduler();
    const generateStream = pipe(generate$1(increment, returns(-1), { delay: 1 }), fromObservable(), stream(scheduler));
    generateStream.dispatch("resume");
    pipe(scheduler, schedule(defer("pause", dispatchTo(generateStream)), {
        delay: 2,
    }));
    pipe(scheduler, schedule(defer("resume", dispatchTo(generateStream)), {
        delay: 4,
    }));
    pipe(scheduler, schedule(defer(generateStream, dispose()), { delay: 5 }));
    const f = mockFn();
    const subscription = pipe(generateStream, subscribe(scheduler, x => {
        f(scheduler.now, x);
    }));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls[0][1], expectEquals(0));
    pipe(f.calls[1][1], expectEquals(1));
    pipe(f.calls[2][1], expectEquals(2));
    expectTrue(subscription.isDisposed);
}), test("fromValue", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueStream = pipe(1, fromValue$1(), stream(scheduler));
    fromValueStream.dispatch("resume");
    fromValueStream.dispatch("resume");
    const f = mockFn();
    const subscription = pipe(fromValueStream, subscribe(scheduler, f));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(1));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
}));

const tests$6 = describe("io", test("decodeWithCharset", () => {
    const src = pipe([Uint8Array.from([226]), Uint8Array.from([130]), Uint8Array.from([172])], fromArray$2(), decodeWithCharset());
    const dest = createIOSinkAccumulator((acc, next) => acc + next, returns(""), { replay: 1 });
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    const f = mockFn();
    pipe(dest, subscribe(scheduler, f));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(String.fromCodePoint(8364)));
    expectTrue(subscription.isDisposed);
}), test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(none, empty$1, stream(scheduler));
    emptyStream.dispatch("pause");
    emptyStream.dispatch("resume");
    const f = mockFn();
    const subscription = pipe(emptyStream, subscribe(scheduler, f));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0].type, expectEquals("done"));
    expectTrue(subscription.isDisposed);
    expectTrue(emptyStream.isDisposed);
}), test("encodeUtf8", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    const src = pipe(str, fromValue$2(), encodeUtf8, decodeWithCharset());
    const dest = createIOSinkAccumulator((acc, next) => acc + next, returns(""), { replay: 1 });
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    const f = mockFn();
    pipe(dest, subscribe(scheduler, f));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(str));
    expectTrue(subscription.isDisposed);
}), test("fromValue", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueStream = pipe(1, fromValue$2(), stream(scheduler));
    fromValueStream.dispatch("resume");
    const f = mockFn();
    const subscription = pipe(fromValueStream, subscribe(scheduler, f));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(2));
    pipe(f.calls[0][0].type, expectEquals("notify"));
    pipe(f.calls[0][0].data, expectEquals(1));
    pipe(f.calls[1][0].type, expectEquals("done"));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
}), test("map", () => {
    const src = pipe(1, fromValue$2(), map$1(returns(2)));
    const dest = createIOSinkAccumulator(sum, returns(0), { replay: 1 });
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    const f = mockFn();
    pipe(dest, subscribe(scheduler, f));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(2));
    expectTrue(subscription.isDisposed);
}));

const tests$5 = describe("observable", describe("buffer", test("with duration and maxBufferSize", defer(concat(pipe([1, 2, 3, 4], fromArray$3()), pipe([1, 2, 3], fromArray$3({ delay: 1 })), pipe(4, fromValue({ delay: 8 }))), buffer({ duration: 4, maxBufferSize: 3 }), toRunnable(), toArray(), expectArrayEquals([[1, 2, 3], [4, 1, 2], [3], [4]], arrayEquality()))), test("when duration observable throws", defer(defer([1, 2, 3, 4], fromArray$3(), buffer({ duration: _ => throws()(raise) }), toRunnable({
    schedulerFactory: defer({ maxMicroTaskTicks: 1 }, createVirtualTimeScheduler),
}), toArray()), expectToThrow))), describe("catchError", test("source completes successfully", defer(pipe(1, fromValue()), catchError(_ => fromValue()(2)), toRunnable(), toArray(), expectArrayEquals([1]))), test("source throws, error caught and ignored", () => {
    const error = new Error();
    pipe(1, fromValue(), concatWith(pipe(error, returns, throws())), catchError(ignore), toRunnable(), toArray(), expectArrayEquals([1]));
}), test("source throws, continues with second observable", () => {
    const error = new Error();
    pipe(1, fromValue(), concatWith(pipe(error, returns, throws())), catchError(_ => fromValue()(2)), toRunnable(), toArray(), expectArrayEquals([1, 2]));
}), test("source throws, catch throws", () => {
    const error = new Error();
    expectToThrow(() => pipe(1, fromValue(), concatWith(pipe(error, returns, throws())), catchError(_ => {
        throw error;
    }), toRunnable(), toArray()));
})), test("combineLatest", defer(generate$1(incrementBy(2), returns(1), { delay: 2 }), takeFirst({ count: 3 }), combineLatestWith(pipe(generate$1(incrementBy(2), returns(0), { delay: 3 }), takeFirst({ count: 2 }))), toRunnable(), toArray(), expectArrayEquals([
    [3, 2],
    [5, 2],
    [5, 4],
    [7, 4],
], arrayEquality()))), describe("createObservable", test("disposes the observer if onSubscribe throws", () => {
    const cause = new Error();
    const observable = createObservable(_ => {
        throw cause;
    });
    pipe(() => pipe(observable, toRunnable(), last), expectToThrowError(cause));
}), test("when queuing multiple events", defer(createObservable(dispatcher => {
    dispatcher.dispatch(1);
    dispatcher.dispatch(2);
    dispatcher.dispatch(3);
    pipe(dispatcher, dispose());
}), toRunnable({
    schedulerFactory: defer({ maxMicroTaskTicks: 1 }, createVirtualTimeScheduler),
}), toArray(), expectArrayEquals([1, 2, 3])))), describe("createSubject", test("with replay", () => {
    const subject = createSubject({ replay: 2 });
    pipe([1, 2, 3, 4], fromArray$4(), forEach(dispatchTo(subject)));
    pipe(subject, dispose());
    pipe(subject, toRunnable(), toArray(), expectArrayEquals([3, 4]));
}), test("with multiple observers", () => {
    const scheduler = createVirtualTimeScheduler();
    const subject = createSubject();
    pipe(subject.observerCount, expectEquals(0));
    const sub1 = pipe(subject, subscribe(scheduler));
    pipe(subject.observerCount, expectEquals(1));
    const sub2 = pipe(subject, subscribe(scheduler));
    pipe(subject.observerCount, expectEquals(2));
    pipe(sub1, dispose());
    pipe(subject.observerCount, expectEquals(1));
    pipe(sub2, dispose());
    pipe(subject.observerCount, expectEquals(0));
})), test("exhaustMap", defer([fromArray$3()([1, 2, 3]), fromArray$3()([4, 5, 6]), fromArray$3()([7, 8, 9])], fromArray$3(), exhaustMap(identity), toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), describe("fromPromise", testAsync("when the promise resolves", async () => {
    const scheduler = createHostScheduler();
    const factory = () => Promise.resolve(1);
    const result = await pipe(factory, fromPromise, toPromise(scheduler));
    pipe(result, expectEquals(1));
    scheduler.dispose();
}), testAsync("when the promise reject", async () => {
    const error = new Error();
    const factory = () => Promise.reject(error);
    const scheduler = createHostScheduler();
    await pipe(pipe(factory, fromPromise, toPromise(scheduler)), expectPromiseToThrow);
    scheduler.dispose();
})), test("genMap", defer(undefined, fromValue(), genMap(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), test("ignoreElements", defer([1, 2, 3], fromArray$3(), ignoreElements(), endWith(4), toRunnable(), toArray(), expectArrayEquals([4]))), describe("merge", test("two arrays", defer(merge(pipe([0, 2, 3, 5, 6], fromArray$3({ delay: 1 })), pipe([1, 4, 7], fromArray$3({ delay: 2 }))), toRunnable(), toArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), test("when one source throws", defer(defer([1, 4, 7], fromArray$3({ delay: 2 }), mergeWith(throws({ delay: 5 })(raise)), toRunnable(), last), expectToThrow))), describe("mergeMap", test("when a mapped observable throws", defer(defer([fromArray$3({ delay: 1 })([1, 2, 3]), throws({ delay: 2 })(raise)], fromArray$3(), mergeMap(identity), toRunnable(), last), expectToThrow)), test("when the map function throws", defer(defer([1, 2, 3, 4], fromArray$3(), mergeMap(x => {
    if (x > 2) {
        raise();
    }
    return fromValue()(x);
}), toRunnable(), last), expectToThrow))), test("never", defer(never(), toRunnable(), last, expectNone)), test("observable", () => {
    const fromValueWithDelay = (delay, value) => fromValue({ delay })(value);
    const emptyDelayed = empty$2({ delay: 100 });
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
    pipe(computedObservable, takeLast(), toRunnable(), last, expectEquals(22));
    // switch map test
    const oneTwoThreeDelayed = fromArray$3({ delay: 1 })([1, 2, 3]);
    const createOneTwoThree = (x) => isSome(x) ? fromArray$3()([1, 2, 3]) : empty$2();
    pipe(observable(() => {
        const v = __observe(oneTwoThreeDelayed);
        const next = __memo(createOneTwoThree, v);
        return __observe(next);
    }, { mode: "combine-latest" }), toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
}), describe("onSubscribe", test("when subscribe function returns a teardown function", () => {
    const scheduler = createVirtualTimeScheduler();
    const disp = mockFn();
    const f = mockFn(disp);
    pipe(1, fromValue(), onSubscribe(f), subscribe(scheduler));
    pipe(disp, expectToHaveBeenCalledTimes(0));
    pipe(f, expectToHaveBeenCalledTimes(1));
    scheduler.run();
    pipe(disp, expectToHaveBeenCalledTimes(1));
    pipe(f, expectToHaveBeenCalledTimes(1));
}), test("when callback function throws", () => {
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(1, fromValue(), onSubscribe(raise), subscribe(scheduler));
    pipe(subscription.error, expectSome);
})), describe("retry", test("repeats the observable n times", () => {
    let retried = false;
    const src = createObservable(d => {
        d.dispatch(1);
        if (retried) {
            d.dispatch(2);
            d.dispose();
        }
        else {
            retried = true;
            pipe(d, dispose({ cause: new Error() }));
        }
    });
    pipe(src, retry(), toRunnable(), toArray(), expectArrayEquals([1, 1, 2]));
})), describe("scanAsync", test("fast lib, slow acc", defer([1, 2, 3], fromArray$3(), scanAsync((acc, x) => fromValue({ delay: 4 })(x + acc), returns(0)), toRunnable(), toArray(), expectArrayEquals([1, 3, 6]))), test("slow lib, fast acc", defer([1, 2, 3], fromArray$3({ delay: 4 }), scanAsync((acc, x) => fromValue()(x + acc), returns(0)), toRunnable(), toArray(), expectArrayEquals([1, 3, 6]))), test("slow lib, slow acc", defer([1, 2, 3], fromArray$3({ delay: 4 }), scanAsync((acc, x) => fromValue({ delay: 4 })(x + acc), returns(0)), toRunnable(), toArray(), expectArrayEquals([1, 3, 6]))), test("fast lib, fast acc", defer([1, 2, 3], fromArray$3(), scanAsync((acc, x) => fromValue()(x + acc), returns(0)), toRunnable(), toArray(), expectArrayEquals([1, 3, 6])))), test("share", () => {
    const scheduler = createVirtualTimeScheduler();
    const shared = pipe([1, 2, 3], fromArray$3({ delay: 1 }), share(scheduler, { replay: 1 }));
    let result = [];
    pipe(zip(shared, shared), map$2(([a, b]) => a + b), buffer(), subscribe(scheduler, x => {
        result = x;
    }));
    scheduler.run();
    pipe(result, expectArrayEquals([2, 4, 6]));
}), describe("switchAll", test("with empty source", defer(empty$2(), switchAll(), toRunnable(), toArray(), expectArrayEquals([]))), test("when source throw", defer(defer(raise, throws(), switchAll(), toRunnable(), toArray(), expectArrayEquals([])), expectToThrow))), test("switchMap", defer([1, 2, 3], fromArray$3({ delay: 1 }), switchMap(_ => pipe([1, 2, 3], fromArray$3())), toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), describe("takeLast", test("when pipeline throws", defer(defer(raise, throws(), takeLast(), toRunnable(), last), expectToThrow))), describe("throttle", test("first", defer(generate$1(increment, returns(-1), { delay: 1 }), takeFirst({ count: 100 }), throttle(50, { mode: "first" }), toRunnable(), toArray(), expectArrayEquals([0, 49]))), test("last", defer(generate$1(increment, returns(-1), { delay: 1 }), takeFirst({ count: 200 }), throttle(50, { mode: "last" }), toRunnable(), toArray(), expectArrayEquals([49, 99, 149, 199]))), test("interval", defer(generate$1(increment, returns(-1), { delay: 1 }), takeFirst({ count: 200 }), throttle(75, { mode: "interval" }), toRunnable(), toArray(), expectArrayEquals([0, 74, 149, 199]))), test("when duration observable throws", defer(defer([1, 2, 3, 4, 5], fromArray$3({ delay: 1 }), throttle(_ => throws()(raise)), toRunnable(), last), expectToThrow))), describe("throwIfEmpty", test("when source is empty", defer(defer(empty$2(), throwIfEmpty(() => undefined), toRunnable(), last), expectToThrow)), test("when source is not empty", defer(1, returns, compute(), throwIfEmpty(() => undefined), toRunnable(), last, expectEquals(1)))), describe("timeout", test("throws when a timeout occurs", defer(defer(1, fromValue({ delay: 2 }), timeout(1), toArray()), expectToThrow)), test("when timeout is greater than observed time", defer(1, fromValue({ delay: 2 }), timeout(3), toRunnable(), last, expectEquals(1)))), describe("toPromise", testAsync("when observable completes without producing a value", async () => {
    const scheduler = createHostScheduler();
    await pipe(pipe(empty$2(), toPromise(scheduler)), expectPromiseToThrow);
    scheduler.dispose();
})), describe("withLatestFrom", test("when source and latest are interlaced", defer([0, 1, 2, 3], fromArray$3({ delay: 1 }), withLatestFrom(pipe([0, 1, 2, 3], fromArray$3({ delay: 2 })), (a, b) => [
    a,
    b,
]), toRunnable(), toArray(), expectArrayEquals([
    [1, 0],
    [2, 0],
    [3, 1],
], arrayEquality()))), test("when latest produces no values", defer([0], fromArray$3({ delay: 1 }), withLatestFrom(empty$2(), sum), toRunnable(), toArray(), expectArrayEquals([]))), test("when latest throws", () => {
    const error = new Error();
    pipe(defer([0], fromArray$3({ delay: 1 }), withLatestFrom(throws()(returns(error)), sum), toRunnable(), toArray(), expectArrayEquals([])), expectToThrowError(error));
})), describe("zip", test("with non-delayed sources", defer(zip(pipe([1, 2], fromArray$3()), pipe([1, 2], fromArray$3(), map$2(increment)), generate$1(increment, returns(2))), toRunnable(), toArray(), expectArrayEquals([
    [1, 2, 3],
    [2, 3, 4],
], arrayEquality()))), test("with synchronous and non-synchronous sources", defer(zip(pipe([1, 2], fromArray$3({ delay: 1 })), pipe([2, 3], fromIterable$2()), pipe([3, 4, 5], fromArray$3({ delay: 1 }))), toRunnable(), toArray(), expectArrayEquals([
    [1, 2, 3],
    [2, 3, 4],
], arrayEquality()))), test("fast with slow", defer([1, 2, 3], fromArray$3({ delay: 1 }), zipWith$1(pipe([1, 2, 3], fromArray$3({ delay: 5 }))), toRunnable(), toArray(), expectArrayEquals([
    [1, 1],
    [2, 2],
    [3, 3],
], arrayEquality()))), test("when source throws", defer(defer(raise, throws(), zipWith$1(fromArray$3()([1, 2, 3])), map$2(([, b]) => b), toRunnable(), toArray()), expectToThrow))), test("zipLatestWith", defer([1, 2, 3, 4, 5, 6, 7, 8], fromArray$3({ delay: 1 }), zipLatestWith(pipe([1, 2, 3, 4], fromArray$3({ delay: 2 }))), map$2(([a, b]) => a + b), toRunnable(), toArray(), expectArrayEquals([2, 5, 8, 11]))), describe("zipWithLatestFrom", test("when source throws", defer(defer(throws()(raise), zipWithLatestFrom(fromValue()(1), (_, b) => b), toRunnable(), last), expectToThrow)), test("when other throws", defer(defer([1, 2, 3], fromArray$3({ delay: 1 }), zipWithLatestFrom(throws()(raise), (_, b) => b), toRunnable(), last), expectToThrow)), test("when other completes first", defer([1], fromArray$3({ delay: 1 }), zipWithLatestFrom(fromArray$3()([2]), (_, b) => b), toRunnable(), last, expectEquals(2)))), createMonadTests(Observable));

const tests$4 = describe("runnable", describe("contains", test("source is empty", defer(empty$3(), contains(1), expectFalse)), test("source contains value", defer(generate$2(increment, returns(0)), contains(1), expectTrue)), test("source does not contain value", defer([2, 3, 4], fromArray$4(), contains(1), expectFalse))), describe("everySatisfy", test("source is empty", defer(empty$3(), everySatisfy(alwaysFalse), expectTrue)), test("source values pass predicate", defer([1, 2, 3], fromArray$4(), everySatisfy(alwaysTrue), expectTrue)), test("source values fail predicate", defer([1, 2, 3], fromArray$4(), everySatisfy(alwaysFalse), expectFalse))), describe("first", test("when enumerable is not empty", defer(returns(1), compute$1(), first, expectEquals(1))), test("when enumerable is empty", defer(empty$3(), first, expectNone))), test("forEach", () => {
    const fn = mockFn();
    pipe([1, 2, 3], fromArray$4(), forEach(fn));
    pipe(fn, expectToHaveBeenCalledTimes(3));
}), describe("noneSatisfy", test("source is empty", defer(empty$3(), noneSatisfy(alwaysFalse), expectTrue)), test("source values pass predicate", defer([1, 2, 3], fromArray$4(), noneSatisfy(alwaysTrue), expectFalse)), test("source values fail predicate", defer([1, 2, 3], fromArray$4(), noneSatisfy(alwaysFalse), expectTrue))), createMonadTests(Runnable));

const tests$3 = describe("sequence", createMonadTests(Sequence));

const tests$2 = describe("stateStore", test("toStateStore", () => {
    const scheduler = createVirtualTimeScheduler({ maxMicroTaskTicks: 0 });
    const stateStream = pipe(identity$1(), lift(startWith(0)), toStateStore(), stream(scheduler));
    stateStream.dispatch(incrementBy(1));
    stateStream.dispatch(incrementBy(2));
    stateStream.dispatch(incrementBy(3));
    stateStream.dispatch(incrementBy(4));
    stateStream.dispatch(incrementBy(5));
    stateStream.dispatch(incrementBy(6));
    stateStream.dispatch(incrementBy(7));
    stateStream.dispatch(incrementBy(8));
    stateStream.dispatch(incrementBy(9));
    stateStream.dispatch(incrementBy(10));
    pipe(stateStream, dispose());
    let result = [];
    const subscription = pipe(stateStream, subscribe(scheduler, x => {
        result.push(x);
    }));
    scheduler.run();
    pipe(result, expectArrayEquals([0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]));
    expectTrue(subscription.isDisposed);
}));

const tests$1 = describe("streamable", test("__stream", () => {
    const streamable = identity$1();
    const createLooper = (stream) => pipe([0, 1, 2, 3], fromArray$3({ delay: 10 }), onNotify(x => {
        stream.dispatch(x);
    }), ignoreElements());
    const obs = observable(() => {
        var _a;
        const stream = __stream(streamable);
        const runLooper = __memo(createLooper, stream);
        __observe(runLooper);
        return (_a = __observe(stream)) !== null && _a !== void 0 ? _a : -1;
    });
    pipe(obs, toRunnable(), toArray(), console.log);
}), test("createActionReducer", () => {
    const scheduler = createVirtualTimeScheduler();
    const actionReducerStream = pipe(createActionReducer(sum, returns(0)), stream(scheduler));
    actionReducerStream.dispatch(1);
    actionReducerStream.dispatch(2);
    pipe(actionReducerStream, dispose());
    let result = [];
    pipe(actionReducerStream, subscribe(scheduler, x => {
        result.push(x);
    }));
    scheduler.run();
    pipe(result, expectArrayEquals([0, 1, 3]));
}), describe("empty", test("with no delay", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(empty$4(), stream(scheduler));
    emptyStream.dispatch(none);
    emptyStream.dispatch(none);
    let result = [];
    const subscription = pipe(emptyStream, subscribe(scheduler, x => {
        result.push(x);
    }));
    scheduler.run();
    pipe(result, expectArrayEquals([]));
    expectTrue(emptyStream.isDisposed);
    expectTrue(subscription.isDisposed);
}), test("with delay", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(empty$4({ delay: 4 }), stream(scheduler));
    emptyStream.dispatch(none);
    emptyStream.dispatch(none);
    let result = [];
    let disposedTime = 0;
    const subscription = pipe(emptyStream, subscribe(scheduler, x => {
        result.push(x);
    }));
    addTeardown(subscription, _ => {
        disposedTime = scheduler.now;
    });
    scheduler.run();
    pipe(result, expectArrayEquals([]));
    expectTrue(emptyStream.isDisposed);
    expectTrue(subscription.isDisposed);
    pipe(disposedTime, expectEquals(4));
})), test("with multiple observers", () => {
    const scheduler = createVirtualTimeScheduler();
    const incrStream = pipe(identity$1(), map$3(incrementBy(100)), stream(scheduler));
    pipe(incrStream.observerCount, expectEquals(0));
    const sub1 = pipe(incrStream, subscribe(scheduler));
    pipe(incrStream.observerCount, expectEquals(1));
    const sub2 = pipe(incrStream, subscribe(scheduler));
    pipe(incrStream.observerCount, expectEquals(2));
    pipe(sub1, dispose());
    pipe(incrStream.observerCount, expectEquals(1));
    pipe(sub2, dispose());
    pipe(incrStream.observerCount, expectEquals(0));
}), test("map", () => {
    const scheduler = createVirtualTimeScheduler();
    const incrStream = pipe(identity$1(), map$3(incrementBy(100)), stream(scheduler));
    incrStream.dispatch(10);
    incrStream.dispatch(20);
    incrStream.dispatch(30);
    pipe(incrStream, dispose());
    let result = [];
    const subscription = pipe(incrStream, buffer(), subscribe(scheduler, x => {
        result = x;
    }));
    scheduler.run();
    pipe(result, expectArrayEquals([110, 120, 130]));
    expectTrue(subscription.isDisposed);
}), test("mapReq", () => {
    const scheduler = createVirtualTimeScheduler();
    const incrStream = pipe(identity$1(), mapReq(incrementBy(100)), mapReq(x => Number.parseInt(x)), stream(scheduler));
    incrStream.dispatch("10");
    incrStream.dispatch("20");
    incrStream.dispatch("30");
    pipe(incrStream, dispose());
    let result = [];
    const subscription = pipe(incrStream, buffer(), subscribe(scheduler, x => {
        result = x;
    }));
    scheduler.run();
    pipe(result, expectArrayEquals([110, 120, 130]));
    expectTrue(subscription.isDisposed);
}), test("onNotify", () => {
    const scheduler = createVirtualTimeScheduler();
    let result = [];
    const notifyStream = pipe(identity$1(), onNotify$1(x => {
        result.push(x);
    }), stream(scheduler));
    notifyStream.dispatch(1);
    notifyStream.dispatch(2);
    notifyStream.dispatch(3);
    pipe(notifyStream, dispose());
    expectTrue(notifyStream.isDisposed);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3]));
}), test("scan", () => {
    const scheduler = createVirtualTimeScheduler();
    let result = [];
    const scanStream = pipe(identity$1(), scan(sum, returns(0)), onNotify$1(x => {
        result.push(x);
    }), stream(scheduler));
    scanStream.dispatch(1);
    scanStream.dispatch(2);
    scanStream.dispatch(3);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 3, 6]));
}), test("sink", () => {
    const scheduler = createVirtualTimeScheduler();
    const src = pipe(identity$1(), scan((acc, _) => acc + 1, returns(0)), lift(takeFirst({ count: 3 })));
    let result = 0;
    const dest = pipe(identity$1(), scan((acc, _) => acc + 1, returns(0)), onNotify$1(v => {
        result = v;
    }), mapTo(none), lift(startWith(none)));
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    expectFalse(subscription.isDisposed);
    scheduler.run();
    expectTrue(subscription.isDisposed);
    pipe(result, expectEquals(3));
}));

const tests = [
    tests$a,
    tests$9,
    tests$8,
    tests$7,
    tests$6,
    tests$5,
    tests$4,
    tests$3,
    tests$2,
    tests$1,
];

export { tests };
