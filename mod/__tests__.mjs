import { pipe, returns, defer, increment, raise, sum, alwaysTrue, incrementBy, compose, arrayEquality, ignore, identity, alwaysFalse } from './functions.mjs';
import { none } from './option.mjs';
import { addTeardown, createDisposable, addDisposable, dispose, createSerialDisposable, disposed, createDisposableValue } from './disposable.mjs';
import { map as map$1 } from './readonlyArray.mjs';
import { concat, concatMap, distinctUntilChanged, empty, endWith, fromArray as fromArray$1, fromValue as fromValue$1, generate as generate$1, keep, map, mapTo, repeat, scan, skipFirst, startWith, takeFirst, takeLast, takeWhile, toRunnable as toRunnable$1, toIterable, fromIterable as fromIterable$1, zipWith } from './enumerable.mjs';
import { last, toArray, fromArray as fromArray$4, forEach, concat as concat$3, concatMap as concatMap$2, distinctUntilChanged as distinctUntilChanged$2, empty as empty$4, endWith as endWith$2, fromValue as fromValue$4, generate as generate$3, keep as keep$2, map as map$5, mapTo as mapTo$3, repeat as repeat$2, scan as scan$2, skipFirst as skipFirst$2, startWith as startWith$2, takeFirst as takeFirst$2, takeLast as takeLast$2, takeWhile as takeWhile$2, toRunnable as toRunnable$2, contains, everySatisfy, compute as compute$1, first, noneSatisfy } from './runnable.mjs';
import { createPriorityQueue } from './queues.mjs';
import { createVirtualTimeScheduler, schedule, createHostScheduler } from './scheduler.mjs';
import { toRunnable, fromValue, onNotify, subscribe, generate as generate$2, concat as concat$1, concatMap as concatMap$1, distinctUntilChanged as distinctUntilChanged$1, empty as empty$3, endWith as endWith$1, fromArray as fromArray$3, keep as keep$1, map as map$3, mapTo as mapTo$1, repeat as repeat$1, scan as scan$1, skipFirst as skipFirst$1, startWith as startWith$1, takeFirst as takeFirst$1, takeLast as takeLast$1, takeWhile as takeWhile$1, await_, buffer, throws, catchError, concatWith, combineLatestWith, createObservable, createSubject, exhaustMap, fromPromise, toPromise, genMap, ignoreElements, merge, mergeWith, mergeMap, never, onSubscribe, retry, scanAsync, share, zip, switchAll, switchMap, throttle, throwIfEmpty, compute, timeout, withLatestFrom, fromIterable as fromIterable$2, zipWith as zipWith$1, zipLatestWith, zipWithLatestFrom } from './observable.mjs';
import { dispatchTo } from './dispatcher.mjs';
import { stream, sink, identity as identity$1, lift, createActionReducer, empty as empty$6, map as map$7, mapReq, onNotify as onNotify$1, scan as scan$4, mapTo as mapTo$5 } from './streamable.mjs';
import { fromIterable, consume, notify, done, consumeAsync, fromArray, generate } from './asyncEnumerable.mjs';
import { describe, test, expectEquals, expectArrayEquals, expectNone, expectTrue, mockFn, expectToHaveBeenCalledTimes, expectFalse, expectToThrow, expectToThrowError, testAsync, expectPromiseToThrow, expectSome } from './testing.mjs';
import { empty as empty$1, fromObservable, fromValue as fromValue$2 } from './flowable.mjs';
import { createHttpRequest, writeHttpRequestHeaders, createHttpResponse, writeHttpResponseHeaders, checkIfNotModified } from './http.mjs';
import { fromArray as fromArray$2, decodeWithCharset, empty as empty$2, fromValue as fromValue$3, encodeUtf8, map as map$2 } from './io.mjs';
import { string, many, parseWithOrThrow, concat as concat$2, manySatisfy, pForwardSlash, char, map as map$4, mapTo as mapTo$2, optional, orCompute, pEof, or, sepBy, pColon, createCharStream, throwParseError } from './parserCombinators.mjs';
import { createIOSinkAccumulator } from './ioSinkAccumulator.mjs';
import { createReactiveCache, getOrSet } from './reactiveCache.mjs';
import { concat as concat$4, concatMap as concatMap$3, distinctUntilChanged as distinctUntilChanged$3, empty as empty$5, endWith as endWith$3, fromArray as fromArray$5, fromValue as fromValue$5, generate as generate$4, keep as keep$3, map as map$6, mapTo as mapTo$4, repeat as repeat$3, scan as scan$3, skipFirst as skipFirst$3, startWith as startWith$3, takeFirst as takeFirst$3, takeLast as takeLast$3, takeWhile as takeWhile$3, toRunnable as toRunnable$3 } from './sequence.mjs';
import { toStateStore } from './stateStore.mjs';

const tests = describe("async-enumerable", test("consume", () => {
    const enumerable = fromIterable()([1, 2, 3, 4, 5, 6]);
    pipe(enumerable, consume((acc, next) => notify(acc + next), returns(0)), toRunnable(), last, expectEquals(21));
    pipe(enumerable, consume((acc, next) => (acc > 0 ? done(acc + next) : notify(acc + next)), returns(0)), toRunnable(), last, expectEquals(3));
}), describe("consumeAsync", test("when the consumer early terminates", defer([1, 2, 3, 4, 5, 6], fromIterable(), consumeAsync((acc, next) => fromValue()(acc > 0 ? done(acc + next) : notify(acc + next)), returns(0)), toRunnable(), last, expectEquals(3))), test("when the consumer never terminates", defer([1, 2, 3, 4, 5, 6], fromIterable(), consumeAsync((acc, next) => pipe(acc + next, notify, fromValue()), returns(0)), toRunnable(), last, expectEquals(21)))), test("fromArray", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerable = pipe([1, 2, 3, 4, 5, 6], fromArray());
    const enumerator = pipe(enumerable, stream(scheduler));
    const result = [];
    pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler));
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
    const subscription = pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler));
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
    pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler));
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3]));
}));

const tests$1 = describe("Disposable", describe("AbstractDisposable", test("disposes child disposable when disposed", () => {
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

const Enumerable = {
    concat,
    concatMap,
    distinctUntilChanged,
    empty,
    endWith,
    fromArray: fromArray$1,
    fromValue: fromValue$1,
    generate: generate$1,
    keep,
    map,
    mapTo,
    repeat,
    scan,
    skipFirst,
    startWith,
    takeFirst,
    takeLast,
    takeWhile,
    toRunnable: toRunnable$1,
};
const tests$2 = describe("enumerable", test("toIterable", defer([1, 2, 3], fromArray$1(), toIterable(), fromIterable$1(), toRunnable$1(), toArray(), expectArrayEquals([1, 2, 3]))), test("zip", defer([1, 2, 3], fromArray$1(), zipWith(fromArray$1()([1, 2, 3, 4, 5])), map(([a, b]) => a + b), toRunnable$1(), toArray(), expectArrayEquals([2, 4, 6]))), createMonadTests(Enumerable));

const tests$3 = describe("flowables", test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(empty$1(), stream(scheduler));
    emptyStream.dispatch(2 /* Pause */);
    emptyStream.dispatch(1 /* Resume */);
    const f = mockFn();
    const subscription = pipe(emptyStream, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(0));
    expectTrue(subscription.isDisposed);
    expectTrue(emptyStream.isDisposed);
}), test("fromObservable", () => {
    const scheduler = createVirtualTimeScheduler();
    const generateStream = pipe(generate$2(increment, returns(-1), { delay: 1 }), fromObservable(), stream(scheduler));
    generateStream.dispatch(1 /* Resume */);
    pipe(scheduler, schedule(defer(2 /* Pause */, dispatchTo(generateStream)), {
        delay: 2,
    }));
    pipe(scheduler, schedule(defer(1 /* Resume */, dispatchTo(generateStream)), {
        delay: 4,
    }));
    pipe(scheduler, schedule(defer(generateStream, dispose()), { delay: 5 }));
    const f = mockFn();
    const subscription = pipe(generateStream, onNotify(x => {
        f(scheduler.now, x);
    }), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(3));
    pipe(f.calls[0][1], expectEquals(0));
    pipe(f.calls[1][1], expectEquals(1));
    pipe(f.calls[2][1], expectEquals(2));
    expectTrue(subscription.isDisposed);
}), test("fromValue", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueStream = pipe(1, fromValue$2(), stream(scheduler));
    fromValueStream.dispatch(1 /* Resume */);
    fromValueStream.dispatch(1 /* Resume */);
    const f = mockFn();
    const subscription = pipe(fromValueStream, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(1));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
}));

const createHttpRequestTests = test("createHttpRequest", () => {
    const request = createHttpRequest({
        method: "GET" /* GET */,
        uri: "http://www.example.com",
        body: none,
        headers: {
            ["Accept" /* Accept */]: "text/*;q=0.3, text/html;q=0.7, text/html;level=1, text/html;level=2;q=0.4, */*;q=0.5",
            ["Accept-Charset" /* AcceptCharset */]: "iso-8859-5, unicode-1-1;q=0.8",
            ["Accept-Encoding" /* AcceptEncoding */]: "gzip;q=1.0, identity; q=0.5, *;q=0",
            ["Accept-Language" /* AcceptLanguage */]: "da, en-gb;q=0.8, en;q=0.7",
            ["Accept-Ranges" /* AcceptRanges */]: "bytes",
            ["Age" /* Age */]: "2147483648",
            ["Allow" /* Allow */]: "GET, HEAD, PUT",
            ["Cache-Control" /* CacheControl */]: "max-age=3, no-transform",
            ["Connection" /* Connection */]: "close",
            ["Content-Encoding" /* ContentEncoding */]: "gzip",
            ["Content-Language" /* ContentLanguage */]: "mi, en",
            ["Content-Length" /* ContentLength */]: "123",
            ["Content-Location" /* ContentLocation */]: "http://www.example.com",
            ["Content-MD5" /* ContentMD5 */]: "asdjbklsjdfs",
            ["Content-Range" /* ContentRange */]: "bytes 0-499/1234",
            ["Content-Type" /* ContentType */]: "application/json; charset=UTF-8",
            ["Date" /* Date */]: "Tue, 15 Nov 1994 08:12:31 GMT",
            ["ETag" /* ETag */]: 'W/"foo"',
            ["Expect" /* Expect */]: "100-continue",
            ["Expires" /* Expires */]: "Thu, 01 Dec 1994 16:00:00 GMT",
            ["From" /* From */]: "webmaster@w3.org",
            ["Host" /* Host */]: "www.w3.org",
            ["If-Match" /* IfMatch */]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
            ["If-Modified-Since" /* IfModifiedSince */]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["If-None-Match" /* IfNoneMatch */]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
            ["If-Range" /* IfRange */]: '"xyzzy"',
            ["If-Unmodified-Since" /* IfUnmodifiedSince */]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["Last-Modified" /* LastModified */]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["Location" /* Location */]: "http://www.example.com/path",
            ["Max-Forwards" /* MaxForwards */]: "10",
            ["Pragma" /* Pragma */]: "no-cache",
            ["Range" /* Range */]: "bytes=0-499",
            ["Referer" /* Referer */]: "http://www.w3.org/hypertext/DataSources/Overview.html",
            ["Retry-After" /* RetryAfter */]: "120",
            ["Server" /* Server */]: "CERN/3.0 libwww/2.17",
            ["Upgrade" /* Upgrade */]: "HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11",
            ["User-Agent" /* UserAgent */]: "CERN-LineMode/2.15 libwww/2.17b3",
            ["Vary" /* Vary */]: "Content-Encoding",
        },
    });
    const headers = {};
    writeHttpRequestHeaders(request, (key, value) => {
        headers[key] = value;
    });
    expectTrue(request.expectContinue);
});
const createHttpResponseTests = test("createHttpRequest", () => {
    const response = createHttpResponse({
        statusCode: 200 /* OK */,
        body: none,
        headers: {
            ["Accept" /* Accept */]: "text/*;q=0.3, text/html;q=0.7, text/html;level=1, text/html;level=2;q=0.4, */*;q=0.5",
            ["Accept-Charset" /* AcceptCharset */]: "iso-8859-5, unicode-1-1;q=0.8",
            ["Accept-Encoding" /* AcceptEncoding */]: "gzip;q=1.0, identity; q=0.5, *;q=0",
            ["Accept-Language" /* AcceptLanguage */]: "da, en-gb;q=0.8, en;q=0.7",
            ["Accept-Ranges" /* AcceptRanges */]: "bytes",
            ["Age" /* Age */]: "2147483648",
            ["Allow" /* Allow */]: "GET, HEAD, PUT",
            ["Cache-Control" /* CacheControl */]: "max-age=3, no-transform",
            ["Connection" /* Connection */]: "close",
            ["Content-Encoding" /* ContentEncoding */]: "gzip",
            ["Content-Language" /* ContentLanguage */]: "mi, en",
            ["Content-Length" /* ContentLength */]: "123",
            ["Content-Location" /* ContentLocation */]: "http://www.example.com",
            ["Content-MD5" /* ContentMD5 */]: "asdjbklsjdfs",
            ["Content-Range" /* ContentRange */]: "bytes 0-499/1234",
            ["Content-Type" /* ContentType */]: "application/json; charset=UTF-8",
            ["Date" /* Date */]: "Tue, 15 Nov 1994 08:12:31 GMT",
            ["ETag" /* ETag */]: 'W/"foo"',
            ["Expect" /* Expect */]: "100-continue",
            ["Expires" /* Expires */]: "Thu, 01 Dec 1994 16:00:00 GMT",
            ["From" /* From */]: "webmaster@w3.org",
            ["Host" /* Host */]: "www.w3.org",
            ["If-Match" /* IfMatch */]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
            ["If-Modified-Since" /* IfModifiedSince */]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["If-None-Match" /* IfNoneMatch */]: '"xyzzy", "r2d2xxxx", "c3piozzzz"',
            ["If-Range" /* IfRange */]: '"xyzzy"',
            ["If-Unmodified-Since" /* IfUnmodifiedSince */]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["Last-Modified" /* LastModified */]: "Sat, 29 Oct 1994 19:43:31 GMT",
            ["Location" /* Location */]: "http://www.example.com/path",
            ["Max-Forwards" /* MaxForwards */]: "10",
            ["Pragma" /* Pragma */]: "no-cache",
            ["Range" /* Range */]: "bytes=0-499",
            ["Referer" /* Referer */]: "http://www.w3.org/hypertext/DataSources/Overview.html",
            ["Retry-After" /* RetryAfter */]: "120",
            ["Server" /* Server */]: "CERN/3.0 libwww/2.17",
            ["Upgrade" /* Upgrade */]: "HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11",
            ["User-Agent" /* UserAgent */]: "CERN-LineMode/2.15 libwww/2.17b3",
            ["Vary" /* Vary */]: "Content-Encoding",
        },
    });
    const headers = {};
    writeHttpResponseHeaders(response, (key, value) => {
        headers[key] = value;
    });
});
const checkIfNotModifiedTests = pipe([
    [
        "when a non-conditional GET is performed",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
        }),
        createHttpResponse({ statusCode: 200 /* OK */, body: none }),
        200 /* OK */,
    ],
    [
        "when ETags match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETags mismatch",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"bar"',
        }),
        200 /* OK */,
    ],
    [
        "when at least one matches",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['"foo"', '"bar"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when etag is missing",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
        }),
        200 /* OK */,
    ],
    [
        "when ETag is weak on exact match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['W/"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: 'W/"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETag is weak on strong match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['W/"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETag is strong on exact match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETag is strong on weak match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: 'W/"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when * is given",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifNoneMatch: "*",
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when modified since the date",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 0,
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            lastModified: 1,
        }),
        200 /* OK */,
    ],
    [
        "when unmodified since the date",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 1,
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            lastModified: 1,
        }),
        304 /* NotModified */,
    ],
    [
        "when Last-Modified is missing",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 1,
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
        }),
        200 /* OK */,
    ],
    [
        "when requested with If-Modified-Since and If-None-Match and both match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 1,
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
            lastModified: 1,
        }),
        304 /* NotModified */,
    ],
    [
        "when requested with If-Modified-Since and If-None-Match when only ETag matches",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 0,
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
            lastModified: 1,
        }),
        200 /* OK */,
    ],
    [
        "when requested with If-Modified-Since and If-None-Match when only Last-Modified matches",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 0,
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"bar"',
            lastModified: 0,
        }),
        200 /* OK */,
    ],
    [
        "when none match",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            preconditions: {
                ifModifiedSince: 0,
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"bar"',
            lastModified: 1,
        }),
        200 /* OK */,
    ],
    [
        "when requested with Cache-Control: no-cache",
        createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: none,
            cacheControl: ["no-cache"],
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        createHttpResponse({
            statusCode: 200 /* OK */,
            body: none,
            etag: '"foo"',
        }),
        200 /* OK */,
    ],
], map$1(([name, req, resp, status]) => test(name, defer(resp, checkIfNotModified(req), x => x.statusCode, expectEquals(status)))), tests => describe("checkIfNotModified", ...tests));
const tests$4 = describe("http", checkIfNotModifiedTests, createHttpRequestTests, createHttpResponseTests);

const tests$5 = describe("io", test("decodeWithCharset", () => {
    const src = pipe([Uint8Array.from([226]), Uint8Array.from([130]), Uint8Array.from([172])], fromArray$2(), decodeWithCharset());
    const dest = createIOSinkAccumulator((acc, next) => acc + next, returns(""), { replay: 1 });
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    const f = mockFn();
    pipe(dest, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(String.fromCodePoint(8364)));
    expectTrue(subscription.isDisposed);
}), test("empty", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(none, empty$2, stream(scheduler));
    emptyStream.dispatch(2 /* Pause */);
    emptyStream.dispatch(1 /* Resume */);
    const f = mockFn();
    const subscription = pipe(emptyStream, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0].type, expectEquals(2 /* Done */));
    expectTrue(subscription.isDisposed);
    expectTrue(emptyStream.isDisposed);
}), test("encodeUtf8", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    const src = pipe(str, fromValue$3(), encodeUtf8, decodeWithCharset());
    const dest = createIOSinkAccumulator((acc, next) => acc + next, returns(""), { replay: 1 });
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    const f = mockFn();
    pipe(dest, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(str));
    expectTrue(subscription.isDisposed);
}), test("fromValue", () => {
    const scheduler = createVirtualTimeScheduler();
    const fromValueStream = pipe(1, fromValue$3(), stream(scheduler));
    fromValueStream.dispatch(1 /* Resume */);
    const f = mockFn();
    const subscription = pipe(fromValueStream, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(2));
    pipe(f.calls[0][0].type, expectEquals(1 /* Notify */));
    pipe(f.calls[0][0].data, expectEquals(1));
    pipe(f.calls[1][0].type, expectEquals(2 /* Done */));
    expectTrue(subscription.isDisposed);
    expectTrue(fromValueStream.isDisposed);
}), test("map", () => {
    const src = pipe(1, fromValue$3(), map$2(returns(2)));
    const dest = createIOSinkAccumulator(sum, returns(0), { replay: 1 });
    const scheduler = createVirtualTimeScheduler();
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    const f = mockFn();
    pipe(dest, onNotify(f), subscribe(scheduler));
    scheduler.run();
    pipe(f, expectToHaveBeenCalledTimes(1));
    pipe(f.calls[0][0], expectEquals(2));
    expectTrue(subscription.isDisposed);
}));

const scheduler = createHostScheduler();
const Observable = {
    concat: concat$1,
    concatMap: concatMap$1,
    distinctUntilChanged: distinctUntilChanged$1,
    empty: empty$3,
    endWith: endWith$1,
    fromArray: fromArray$3,
    fromValue,
    generate: generate$2,
    keep: keep$1,
    map: map$3,
    mapTo: mapTo$1,
    repeat: repeat$1,
    scan: scan$1,
    skipFirst: skipFirst$1,
    startWith: startWith$1,
    takeFirst: takeFirst$1,
    takeLast: takeLast$1,
    takeWhile: takeWhile$1,
    toRunnable,
};
const tests$6 = describe("observable", test("await_", defer([0, 1, 2, 3, 4], fromArray$3(), await_(compose(fromValue(), endWith$1(1))), toRunnable(), last, expectEquals(0))), describe("buffer", test("with duration and maxBufferSize", defer(concat$1(pipe([1, 2, 3, 4], fromArray$3()), pipe([1, 2, 3], fromArray$3({ delay: 1 })), pipe(4, fromValue({ delay: 8 }))), buffer({ duration: 4, maxBufferSize: 3 }), toRunnable(), toArray(), expectArrayEquals([[1, 2, 3], [4, 1, 2], [3], [4]], arrayEquality()))), test("when duration observable throws", defer(defer([1, 2, 3, 4], fromArray$3(), buffer({ duration: _ => throws()(raise) }), toRunnable({
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
})), test("combineLatest", defer(generate$2(incrementBy(2), returns(1), { delay: 2 }), takeFirst$1({ count: 3 }), combineLatestWith(pipe(generate$2(incrementBy(2), returns(0), { delay: 3 }), takeFirst$1({ count: 2 }))), toRunnable(), toArray(), expectArrayEquals([
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
    const factory = () => Promise.resolve(1);
    const result = await pipe(factory, fromPromise, toPromise(scheduler));
    pipe(result, expectEquals(1));
}), testAsync("when the promise reject", async () => {
    const error = new Error();
    const factory = () => Promise.reject(error);
    await pipe(pipe(factory, fromPromise, toPromise(scheduler)), expectPromiseToThrow);
})), test("genMap", defer(undefined, fromValue(), genMap(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), toRunnable(), toArray(), expectArrayEquals([1, 2, 3]))), test("ignoreElements", defer([1, 2, 3], fromArray$3(), ignoreElements(), endWith$1(4), toRunnable(), toArray(), expectArrayEquals([4]))), describe("merge", test("two arrays", defer(merge(pipe([0, 2, 3, 5, 6], fromArray$3({ delay: 1 })), pipe([1, 4, 7], fromArray$3({ delay: 2 }))), toRunnable(), toArray(), expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), test("when one source throws", defer(defer([1, 4, 7], fromArray$3({ delay: 2 }), mergeWith(throws({ delay: 5 })(raise)), toRunnable(), last), expectToThrow))), describe("mergeMap", test("when a mapped observable throws", defer(defer([fromArray$3({ delay: 1 })([1, 2, 3]), throws({ delay: 2 })(raise)], fromArray$3(), mergeMap(identity), toRunnable(), last), expectToThrow)), test("when the map function throws", defer(defer([1, 2, 3, 4], fromArray$3(), mergeMap(x => {
    if (x > 2) {
        raise();
    }
    return fromValue()(x);
}), toRunnable(), last), expectToThrow))), test("never", defer(never(), toRunnable(), last, expectNone)), describe("onSubscribe", test("when subscribe function returns a teardown function", () => {
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
    pipe(zip(shared, shared), map$3(([a, b]) => a + b), buffer(), onNotify(x => {
        result = x;
    }), subscribe(scheduler));
    scheduler.run();
    pipe(result, expectArrayEquals([2, 4, 6]));
}), describe("switchAll", test("with empty source", defer(empty$3(), switchAll(), toRunnable(), toArray(), expectArrayEquals([]))), test("when source throw", defer(defer(raise, throws(), switchAll(), toRunnable(), toArray(), expectArrayEquals([])), expectToThrow))), test("switchMap", defer([1, 2, 3], fromArray$3({ delay: 1 }), switchMap(_ => pipe([1, 2, 3], fromArray$3())), toRunnable(), toArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), describe("takeLast", test("when pipeline throws", defer(defer(raise, throws(), takeLast$1(), toRunnable(), last), expectToThrow))), describe("throttle", test("first", defer(generate$2(increment, returns(-1), { delay: 1 }), takeFirst$1({ count: 100 }), throttle(50, { mode: 1 /* First */ }), toRunnable(), toArray(), expectArrayEquals([0, 49]))), test("last", defer(generate$2(increment, returns(-1), { delay: 1 }), takeFirst$1({ count: 200 }), throttle(50, { mode: 2 /* Last */ }), toRunnable(), toArray(), expectArrayEquals([49, 99, 149, 199]))), test("interval", defer(generate$2(increment, returns(-1), { delay: 1 }), takeFirst$1({ count: 200 }), throttle(75, { mode: 3 /* Interval */ }), toRunnable(), toArray(), expectArrayEquals([0, 74, 149, 199]))), test("when duration observable throws", defer(defer([1, 2, 3, 4, 5], fromArray$3({ delay: 1 }), throttle(_ => throws()(raise)), toRunnable(), last), expectToThrow))), describe("throwIfEmpty", test("when source is empty", defer(defer(empty$3(), throwIfEmpty(() => undefined), toRunnable(), last), expectToThrow)), test("when source is not empty", defer(1, returns, compute(), throwIfEmpty(() => undefined), toRunnable(), last, expectEquals(1)))), describe("timeout", test("throws when a timeout occurs", defer(defer(1, fromValue({ delay: 2 }), timeout(1), toArray()), expectToThrow)), test("when timeout is greater than observed time", defer(1, fromValue({ delay: 2 }), timeout(3), toRunnable(), last, expectEquals(1)))), describe("toPromise", testAsync("when observable completes without producing a value", async () => {
    await pipe(pipe(empty$3(), toPromise(scheduler)), expectPromiseToThrow);
})), describe("withLatestFrom", test("when source and latest are interlaced", defer([0, 1, 2, 3], fromArray$3({ delay: 1 }), withLatestFrom(pipe([0, 1, 2, 3], fromArray$3({ delay: 2 })), (a, b) => [
    a,
    b,
]), toRunnable(), toArray(), expectArrayEquals([
    [1, 0],
    [2, 0],
    [3, 1],
], arrayEquality()))), test("when latest produces no values", defer([0], fromArray$3({ delay: 1 }), withLatestFrom(empty$3(), sum), toRunnable(), toArray(), expectArrayEquals([]))), test("when latest throws", () => {
    const error = new Error();
    pipe(defer([0], fromArray$3({ delay: 1 }), withLatestFrom(throws()(returns(error)), sum), toRunnable(), toArray(), expectArrayEquals([])), expectToThrowError(error));
})), describe("zip", test("with non-delayed sources", defer(zip(pipe([1, 2], fromArray$3()), pipe([1, 2], fromArray$3(), map$3(increment)), generate$2(increment, returns(2))), toRunnable(), toArray(), expectArrayEquals([
    [1, 2, 3],
    [2, 3, 4],
], arrayEquality()))), test("with synchronous and non-synchronous sources", defer(zip(pipe([1, 2], fromArray$3({ delay: 1 })), pipe([2, 3], fromIterable$2()), pipe([3, 4, 5], fromArray$3({ delay: 1 }))), toRunnable(), toArray(), expectArrayEquals([
    [1, 2, 3],
    [2, 3, 4],
], arrayEquality()))), test("fast with slow", defer([1, 2, 3], fromArray$3({ delay: 1 }), zipWith$1(pipe([1, 2, 3], fromArray$3({ delay: 5 }))), toRunnable(), toArray(), expectArrayEquals([
    [1, 1],
    [2, 2],
    [3, 3],
], arrayEquality()))), test("when source throws", defer(defer(raise, throws(), zipWith$1(fromArray$3()([1, 2, 3])), map$3(([, b]) => b), toRunnable(), toArray()), expectToThrow))), test("zipLatestWith", defer([1, 2, 3, 4, 5, 6, 7, 8], fromArray$3({ delay: 1 }), zipLatestWith(pipe([1, 2, 3, 4], fromArray$3({ delay: 2 }))), map$3(([a, b]) => a + b), toRunnable(), toArray(), expectArrayEquals([2, 5, 8, 11]))), describe("zipWithLatestFrom", test("when source throws", defer(defer(throws()(raise), zipWithLatestFrom(fromValue()(1), (_, b) => b), toRunnable(), last), expectToThrow)), test("when other throws", defer(defer([1, 2, 3], fromArray$3({ delay: 1 }), zipWithLatestFrom(throws()(raise), (_, b) => b), toRunnable(), last), expectToThrow)), test("when other completes first", defer([1], fromArray$3({ delay: 1 }), zipWithLatestFrom(fromArray$3()([2]), (_, b) => b), toRunnable(), last, expectEquals(2)))), createMonadTests(Observable));

const tests$7 = describe("parser combinators", test("many", () => {
    const parser = pipe(string("abc"), many());
    pipe("abcabcabcabc", parseWithOrThrow(parser), expectArrayEquals(["abc", "abc", "abc", "abc"]));
}), test("many", () => {
    const parser = pipe(string("abc"), many());
    pipe("abcabcabcabc", parseWithOrThrow(parser), expectArrayEquals(["abc", "abc", "abc", "abc"]));
}), test("manySatisy", () => {
    const parser = concat$2(manySatisfy()(pForwardSlash), manySatisfy()(char("z")));
    pipe("////zzz", parseWithOrThrow(parser), expectArrayEquals(["////", "zzz"]));
}), test("map", () => {
    const parser = pipe(string("ab"), map$4((x) => x + "cd"));
    pipe("ab", parseWithOrThrow(parser), expectEquals("abcd"));
}), test("mapTo", () => {
    const parser = pipe(string("ab"), mapTo$2("xyz"));
    pipe("ab", parseWithOrThrow(parser), expectEquals("xyz"));
}), test("optional", () => {
    const parser = concat$2(string("ab"), pipe(optional(string("cd")), orCompute(returns("ef"))), pEof);
    pipe("abcd", parseWithOrThrow(parser), expectArrayEquals(["ab", "cd", none]));
    pipe("ab", parseWithOrThrow(parser)), expectArrayEquals(["ab", "ef", none]);
}), test("or", () => {
    const parser = pipe(string("ab"), or(string("cd")));
    pipe("ab", parseWithOrThrow(parser), expectEquals("ab"));
    pipe("cd", parseWithOrThrow(parser), expectEquals("cd"));
}), test("sepBy", () => {
    const parser = pipe(string("ab"), sepBy(pColon));
    pipe("ab:ab:ab:ab", parseWithOrThrow(parser), expectArrayEquals(["ab", "ab", "ab", "ab"]));
}), test("string", () => {
    const parser = concat$2(string("ab"), string("cd"));
    pipe("abcd", parseWithOrThrow(parser), expectArrayEquals(["ab", "cd"]));
}), test("throwParseError", defer(defer("abc", createCharStream, throwParseError), expectToThrow)));

const compare = (a, b) => a - b;
const makeSortedArray = (n) => {
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = i;
    }
    return result;
};
const makeShuffledArray = (n) => {
    const result = makeSortedArray(n);
    for (let count = n - 1; count >= 0; count--) {
        const index = Math.floor(Math.random() * (count + 1));
        const temp = result[count];
        result[count] = result[index];
        result[index] = temp;
    }
    return result;
};
const tests$8 = describe("priority queue", test("push", () => {
    const queue = createPriorityQueue(compare);
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
        queue.push(shuffledArray[i]);
    }
    const acc = [];
    while (queue.count > 0) {
        acc.push(queue.pop());
    }
    pipe(acc, expectArrayEquals(makeSortedArray(100)));
}));

const tests$9 = describe("reactive-cache", test("lifecycle integration", () => {
    // Use microticks to test yielding
    const scheduler = createVirtualTimeScheduler({ maxMicroTaskTicks: 1 });
    const cache = createReactiveCache(scheduler, scheduler, {
        maxCount: 2,
    });
    let bSubscription = disposed;
    let cSubscription = disposed;
    let dSubscription = disposed;
    let eSubscription = disposed;
    pipe([
        () => {
            cache.set("a", fromValue()("a"));
            cache.set("b", fromValue()("b"));
            cache.set("c", fromValue()("c"));
        },
        () => {
            // Max size is 2. A is never subscribed to so it is garbage collected.
            pipe(cache.get("a"), expectNone);
            const entryB = cache.get("b");
            pipe(entryB, expectSome);
            bSubscription = pipe(entryB, subscribe(scheduler));
            const entryC = cache.get("c");
            pipe(entryC, expectSome);
            cSubscription = pipe(entryC, subscribe(scheduler));
            const entryD = cache.set("d", fromValue({ delay: 3 })("d"));
            dSubscription = pipe(entryD, subscribe(scheduler));
        },
        () => {
            // Assert that the cache maintain all active values
            // given the active subscription, despite the capacity
            // exceeding the cache's max size.
            pipe(cache.get("b"), expectSome);
            pipe(cache.get("c"), expectSome);
            pipe(cache.get("d"), expectSome);
            pipe(cSubscription, dispose());
            pipe(dSubscription, dispose());
            const entryE = cache.set("e", fromValue()("e"));
            eSubscription = pipe(entryE, subscribe(scheduler));
        },
        () => {
            // c and d were disposed so ensure they return undefined
            pipe(cache.get("b"), expectSome);
            pipe(cache.get("c"), expectNone);
            pipe(cache.get("d"), expectNone);
            pipe(cache.get("e"), expectSome);
        },
        defer(cache, dispose()),
        () => {
            // Ensure that disposing the cache disposes all outstanding subscriptions.
            // Note: check these here as these subscriptions require scheduling by the
            // cache to dispose (not done synchronously).
            pipe(bSubscription.isDisposed, expectTrue);
            pipe(eSubscription.isDisposed, expectTrue);
            pipe(cache.get("b"), expectNone);
            pipe(cache.get("c"), expectNone);
            pipe(cache.get("d"), expectNone);
            pipe(cache.get("e"), expectNone);
        },
    ], fromArray$3({ delay: 1 }), toRunnable({ schedulerFactory: returns(scheduler) }), forEach(x => x()));
}), test("subscribing to disposed value", () => {
    const scheduler = createVirtualTimeScheduler();
    const cache = createReactiveCache(scheduler, scheduler, {
        maxCount: 1,
    });
    let observable = never();
    let value = "";
    pipe([
        () => {
            observable = getOrSet(cache, "a", fromValue()("a"));
            getOrSet(cache, "b", fromValue()("b"));
        },
        () => {
            pipe(observable, onNotify(x => {
                value = x;
            }), subscribe(scheduler));
        },
        () => {
            pipe(value, expectEquals(""));
        },
    ], fromArray$3(), toRunnable({ schedulerFactory: returns(scheduler) }), forEach(x => x()));
}), test("getOrSet", () => {
    const scheduler = createVirtualTimeScheduler();
    const cache = createReactiveCache(scheduler, scheduler, {
        maxCount: 2,
    });
    let value = "";
    pipe([
        () => {
            let obs = getOrSet(cache, "a", fromValue()("a"));
            obs = getOrSet(cache, "a", fromValue()("b"));
            pipe(obs, onNotify(x => {
                value = x;
            }), subscribe(scheduler));
        },
        () => {
            pipe(value, expectEquals("a"));
        },
    ], fromArray$3({ delay: 1 }), toRunnable({ schedulerFactory: returns(scheduler) }), forEach(x => x()));
}));

const Runnable = {
    concat: concat$3,
    concatMap: concatMap$2,
    distinctUntilChanged: distinctUntilChanged$2,
    empty: empty$4,
    endWith: endWith$2,
    fromArray: fromArray$4,
    fromValue: fromValue$4,
    generate: generate$3,
    keep: keep$2,
    map: map$5,
    mapTo: mapTo$3,
    repeat: repeat$2,
    scan: scan$2,
    skipFirst: skipFirst$2,
    startWith: startWith$2,
    takeFirst: takeFirst$2,
    takeLast: takeLast$2,
    takeWhile: takeWhile$2,
    toRunnable: toRunnable$2,
};
const tests$a = describe("runnable", describe("contains", test("source is empty", defer(empty$4(), contains(1), expectFalse)), test("source contains value", defer(generate$3(increment, returns(0)), contains(1), expectTrue)), test("source does not contain value", defer([2, 3, 4], fromArray$4(), contains(1), expectFalse))), describe("everySatisfy", test("source is empty", defer(empty$4(), everySatisfy(alwaysFalse), expectTrue)), test("source values pass predicate", defer([1, 2, 3], fromArray$4(), everySatisfy(alwaysTrue), expectTrue)), test("source values fail predicate", defer([1, 2, 3], fromArray$4(), everySatisfy(alwaysFalse), expectFalse))), describe("first", test("when enumerable is not empty", defer(returns(1), compute$1(), first, expectEquals(1))), test("when enumerable is empty", defer(empty$4(), first, expectNone))), test("forEach", () => {
    const fn = mockFn();
    pipe([1, 2, 3], fromArray$4(), forEach(fn));
    pipe(fn, expectToHaveBeenCalledTimes(3));
}), describe("noneSatisfy", test("source is empty", defer(empty$4(), noneSatisfy(alwaysFalse), expectTrue)), test("source values pass predicate", defer([1, 2, 3], fromArray$4(), noneSatisfy(alwaysTrue), expectFalse)), test("source values fail predicate", defer([1, 2, 3], fromArray$4(), noneSatisfy(alwaysFalse), expectTrue))), createMonadTests(Runnable));

const Sequence = {
    concat: concat$4,
    concatMap: concatMap$3,
    distinctUntilChanged: distinctUntilChanged$3,
    empty: empty$5,
    endWith: endWith$3,
    fromArray: fromArray$5,
    fromValue: fromValue$5,
    generate: generate$4,
    keep: keep$3,
    map: map$6,
    mapTo: mapTo$4,
    repeat: repeat$3,
    scan: scan$3,
    skipFirst: skipFirst$3,
    startWith: startWith$3,
    takeFirst: takeFirst$3,
    takeLast: takeLast$3,
    takeWhile: takeWhile$3,
    toRunnable: toRunnable$3,
};
const tests$b = describe("sequence", createMonadTests(Sequence));

const tests$c = describe("stateStore", test("toStateStore", () => {
    const scheduler = createVirtualTimeScheduler({ maxMicroTaskTicks: 0 });
    const stateStream = pipe(identity$1(), lift(startWith$1(0)), toStateStore(), stream(scheduler));
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
    const subscription = pipe(stateStream, onNotify(x => {
        result.push(x);
    }), subscribe(scheduler));
    scheduler.run();
    pipe(result, expectArrayEquals([0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]));
    expectTrue(subscription.isDisposed);
}));

const tests$d = describe("streamable", test("createActionReducer", () => {
    const scheduler = createVirtualTimeScheduler();
    const actionReducerStream = pipe(createActionReducer(sum, returns(0)), stream(scheduler));
    actionReducerStream.dispatch(1);
    actionReducerStream.dispatch(2);
    pipe(actionReducerStream, dispose());
    let result = [];
    pipe(actionReducerStream, onNotify(x => {
        result.push(x);
    }), subscribe(scheduler));
    scheduler.run();
    pipe(result, expectArrayEquals([0, 1, 3]));
}), describe("empty", test("with no delay", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(empty$6(), stream(scheduler));
    emptyStream.dispatch(none);
    emptyStream.dispatch(none);
    let result = [];
    const subscription = pipe(emptyStream, onNotify(x => {
        result.push(x);
    }), subscribe(scheduler));
    scheduler.run();
    pipe(result, expectArrayEquals([]));
    expectTrue(emptyStream.isDisposed);
    expectTrue(subscription.isDisposed);
}), test("with delay", () => {
    const scheduler = createVirtualTimeScheduler();
    const emptyStream = pipe(empty$6({ delay: 4 }), stream(scheduler));
    emptyStream.dispatch(none);
    emptyStream.dispatch(none);
    let result = [];
    let disposedTime = 0;
    const subscription = pipe(emptyStream, onNotify(x => {
        result.push(x);
    }), subscribe(scheduler));
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
    const incrStream = pipe(identity$1(), map$7(incrementBy(100)), stream(scheduler));
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
    const incrStream = pipe(identity$1(), map$7(incrementBy(100)), stream(scheduler));
    incrStream.dispatch(10);
    incrStream.dispatch(20);
    incrStream.dispatch(30);
    pipe(incrStream, dispose());
    let result = [];
    const subscription = pipe(incrStream, buffer(), onNotify(x => {
        result = x;
    }), subscribe(scheduler));
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
    const subscription = pipe(incrStream, buffer(), onNotify(x => {
        result = x;
    }), subscribe(scheduler));
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
    const scanStream = pipe(identity$1(), scan$4(sum, returns(0)), onNotify$1(x => {
        result.push(x);
    }), stream(scheduler));
    scanStream.dispatch(1);
    scanStream.dispatch(2);
    scanStream.dispatch(3);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 3, 6]));
}), test("sink", () => {
    const scheduler = createVirtualTimeScheduler();
    const src = pipe(identity$1(), scan$4((acc, _) => acc + 1, returns(0)), lift(takeFirst$1({ count: 3 })));
    let result = 0;
    const dest = pipe(identity$1(), scan$4((acc, _) => acc + 1, returns(0)), onNotify$1(v => {
        result = v;
    }), mapTo$5(none), lift(startWith$1(none)));
    const subscription = pipe(sink(src, dest), subscribe(scheduler));
    expectFalse(subscription.isDisposed);
    scheduler.run();
    expectTrue(subscription.isDisposed);
    pipe(result, expectEquals(3));
}));

const tests$e = [
    tests,
    tests$1,
    tests$2,
    tests$3,
    tests$4,
    tests$5,
    //nodeTests
    tests$6,
    tests$7,
    tests$8,
    tests$9,
    //resourceManagerTests,
    tests$a,
    tests$b,
    tests$c,
    tests$d,
];

export { tests$e as tests };
