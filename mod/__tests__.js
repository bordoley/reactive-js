'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var disposable = require('./disposable.js');
var readonlyArray = require('./readonlyArray.js');
var enumerable = require('./enumerable.js');
var runnable = require('./runnable.js');
var queues = require('./queues.js');
var scheduler$1 = require('./scheduler.js');
var observable = require('./observable.js');
var dispatcher = require('./dispatcher.js');
var streamable = require('./streamable.js');
var asyncEnumerable = require('./asyncEnumerable.js');
var testing = require('./testing.js');
var flowable = require('./flowable.js');
var http = require('./http.js');
var io = require('./io.js');
var parserCombinators = require('./parserCombinators.js');
var ioSinkAccumulator = require('./ioSinkAccumulator.js');
var reactiveCache = require('./reactiveCache.js');
var sequence = require('./sequence.js');
var stateStore = require('./stateStore.js');

const tests = testing.describe("async-enumerable", testing.test("consume", () => {
    const enumerable = asyncEnumerable.fromIterable()([1, 2, 3, 4, 5, 6]);
    functions.pipe(enumerable, asyncEnumerable.consume((acc, next) => asyncEnumerable.notify(acc + next), functions.returns(0)), observable.toRunnable(), runnable.last, testing.expectEquals(21));
    functions.pipe(enumerable, asyncEnumerable.consume((acc, next) => (acc > 0 ? asyncEnumerable.done(acc + next) : asyncEnumerable.notify(acc + next)), functions.returns(0)), observable.toRunnable(), runnable.last, testing.expectEquals(3));
}), testing.describe("consumeAsync", testing.test("when the consumer early terminates", functions.defer([1, 2, 3, 4, 5, 6], asyncEnumerable.fromIterable(), asyncEnumerable.consumeAsync((acc, next) => observable.fromValue()(acc > 0 ? asyncEnumerable.done(acc + next) : asyncEnumerable.notify(acc + next)), functions.returns(0)), observable.toRunnable(), runnable.last, testing.expectEquals(3))), testing.test("when the consumer never terminates", functions.defer([1, 2, 3, 4, 5, 6], asyncEnumerable.fromIterable(), asyncEnumerable.consumeAsync((acc, next) => functions.pipe(acc + next, asyncEnumerable.notify, observable.fromValue()), functions.returns(0)), observable.toRunnable(), runnable.last, testing.expectEquals(21)))), testing.test("fromArray", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const enumerable = functions.pipe([1, 2, 3, 4, 5, 6], asyncEnumerable.fromArray());
    const enumerator = functions.pipe(enumerable, streamable.stream(scheduler));
    const result = [];
    functions.pipe(enumerator, observable.onNotify(x => result.push(x)), observable.subscribe(scheduler));
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([1, 2, 3]));
}), testing.test("fromIterable", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const enumerator = functions.pipe(asyncEnumerable.fromIterable()([1, 2, 3, 4, 5, 6]), streamable.stream(scheduler));
    const result = [];
    let error = option.none;
    const subscription = functions.pipe(enumerator, observable.onNotify(x => result.push(x)), observable.subscribe(scheduler));
    disposable.addTeardown(subscription, e => {
        error = e;
    });
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([1, 2, 3, 4, 5, 6]));
    functions.pipe(error, testing.expectNone);
}), testing.test("generate", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const enumerator = functions.pipe(asyncEnumerable.generate(functions.increment, functions.returns(0)), streamable.stream(scheduler));
    const result = [];
    functions.pipe(enumerator, observable.onNotify(x => result.push(x)), observable.subscribe(scheduler));
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    enumerator.dispatch(option.none);
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([1, 2, 3]));
}));

const tests$1 = testing.describe("Disposable", testing.describe("AbstractDisposable", testing.test("disposes child disposable when disposed", () => {
    const disposable$1 = disposable.createDisposable();
    const child = disposable.createDisposable();
    disposable.addDisposable(disposable$1, child);
    functions.pipe(disposable$1, disposable.dispose());
    testing.expectTrue(child.isDisposed);
}), testing.test("adding to disposed disposable disposes the child", () => {
    const disposable$1 = disposable.createDisposable();
    const child = disposable.createDisposable();
    functions.pipe(disposable$1, disposable.dispose());
    disposable.addDisposable(disposable$1, child);
    testing.expectTrue(child.isDisposed);
}), testing.test("disposes teardown function exactly once when disposed", () => {
    const teardown = testing.mockFn();
    const disposable$1 = disposable.createDisposable(teardown);
    disposable.addTeardown(disposable$1, teardown);
    functions.pipe(disposable$1, disposable.dispose());
    functions.pipe(teardown, testing.expectToHaveBeenCalledTimes(1));
}), testing.test("catches and swallows Errors thrown by teardown function", () => {
    const teardown = functions.defer(option.none, functions.raise);
    const disposable$1 = disposable.createDisposable(teardown);
    functions.pipe(disposable$1, disposable.dispose());
    functions.pipe(disposable$1.error, testing.expectNone);
}), testing.test("propogates errors when disposed with an Error", () => {
    const error = { cause: null };
    const childTeardown = testing.mockFn();
    const disposable$1 = disposable.createDisposable(childTeardown);
    functions.pipe(disposable$1, disposable.dispose(error));
    functions.pipe(disposable$1.error, testing.expectEquals(error));
    functions.pipe(childTeardown, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(childTeardown.calls[0], testing.expectArrayEquals([error]));
})), testing.describe("AbstractSerialDisposable", testing.test("setting inner disposable disposes the previous inner disposable", () => {
    const serialDisposable = disposable.createSerialDisposable();
    const child = disposable.createDisposable();
    serialDisposable.inner = child;
    functions.pipe(serialDisposable.inner, testing.expectEquals(child));
    serialDisposable.inner = disposable.disposed;
    functions.pipe(child.isDisposed, testing.expectTrue);
}), testing.test("setting inner disposable with the same inner disposable has no effect", () => {
    const serialDisposable = disposable.createSerialDisposable();
    const child = disposable.createDisposable();
    serialDisposable.inner = child;
    functions.pipe(serialDisposable.inner, testing.expectEquals(child));
    serialDisposable.inner = child;
    functions.pipe(child.isDisposed, testing.expectFalse);
})), testing.describe("DisposableValue", testing.test("disposes the value when disposed", () => {
    const value = disposable.createDisposable();
    const disposable$1 = disposable.createDisposableValue(value, disposable.dispose());
    functions.pipe(disposable$1, disposable.dispose());
    functions.pipe(disposable$1.value, testing.expectEquals(value));
    functions.pipe(value.isDisposed, testing.expectTrue);
})));

const createMonadTests = (m) => testing.describe("monadic", testing.test("concat", functions.defer(m.concat(m.empty(), m.fromArray()([1, 2, 3]), m.empty(), m.fromArray()([4, 5, 6])), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 4, 5, 6]))), testing.describe("distinctUntilChanged", testing.test("when source has duplicates in order", functions.defer([1, 2, 2, 2, 2, 3, 3, 3, 4], m.fromArray(), m.distinctUntilChanged(), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 4]))), testing.test("when source is empty", functions.defer([], m.fromArray(), m.distinctUntilChanged(), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([])))), testing.test("endWith", functions.defer([1, 2, 3], m.fromArray(), m.endWith(4), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 4]))), testing.test("concatMap", functions.defer(0, m.fromValue(), m.concatMap((_) => m.fromArray()([1, 2, 3])), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]))), testing.test("keep", functions.defer([4, 8, 10, 7], m.fromArray(), m.keep((x) => x > 5), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([8, 10, 7]))), testing.test("map", functions.defer([1, 2, 3], m.fromArray(), m.map(functions.increment), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([2, 3, 4]))), testing.test("mapTo", functions.defer([1, 2, 3], m.fromArray(), m.mapTo(2), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([2, 2, 2]))), testing.describe("repeat", testing.test("when always repeating", functions.defer([1, 2, 3], m.fromArray(), m.repeat(), m.takeFirst({ count: 6 }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 1, 2, 3]))), testing.test("when repeating a finite amount of times.", functions.defer([1, 2, 3], m.fromArray(), m.repeat(3), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), testing.test("when repeating with a predicate", functions.defer([1, 2, 3], m.fromArray(), m.repeat((x) => x < 1), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3])))), testing.test("scan", functions.defer([1, 1, 1], m.fromArray(), m.scan(functions.sum, functions.returns(0)), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]))), testing.describe("skipFirst", testing.test("when skipped source has additional elements", functions.defer([1, 2, 3], m.fromArray(), m.skipFirst({ count: 2 }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([3]))), testing.test("when all elements are skipped", functions.defer([1, 2, 3], m.fromArray(), m.skipFirst({ count: 4 }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([])))), testing.test("startWith", functions.defer([1, 2, 3], m.fromArray(), m.startWith(0), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([0, 1, 2, 3]))), testing.describe("takeFirst", testing.test("when taking fewer than the total number of elements in the source", functions.defer(m.generate(functions.increment, functions.returns(0)), m.takeFirst({ count: 3 }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]))), testing.test("when taking more than all the items produced by the source", functions.defer(1, m.fromValue(), m.takeFirst({ count: 3 }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1])))), testing.test("takeLast", functions.defer([1, 2, 3, 4, 5], m.fromArray(), m.takeLast({ count: 3 }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([3, 4, 5]))), testing.describe("takeWhile", testing.test("exclusive", () => {
    functions.pipe(m.generate(functions.increment, functions.returns(0)), m.takeWhile((x) => x < 4), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]));
    functions.pipe([1, 2, 3], m.fromArray(), m.takeWhile(functions.alwaysTrue), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]));
    functions.pipe(m.empty(), m.takeWhile(functions.alwaysTrue), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([]));
}), testing.test("inclusive", functions.defer(m.generate(functions.increment, functions.returns(0)), m.takeWhile((x) => x < 4, { inclusive: true }), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 4])))), testing.test("lift", functions.defer(m.generate(functions.increment, functions.returns(0)), m.map((x) => x * 2), m.takeFirst({ count: 3 }), m.concatMap((count) => functions.pipe(m.generate(functions.incrementBy(1), functions.returns(0)), m.takeFirst({ count }))), m.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6]))));

const Enumerable = {
    concat: enumerable.concat,
    concatMap: enumerable.concatMap,
    distinctUntilChanged: enumerable.distinctUntilChanged,
    empty: enumerable.empty,
    endWith: enumerable.endWith,
    fromArray: enumerable.fromArray,
    fromValue: enumerable.fromValue,
    generate: enumerable.generate,
    keep: enumerable.keep,
    map: enumerable.map,
    mapTo: enumerable.mapTo,
    repeat: enumerable.repeat,
    scan: enumerable.scan,
    skipFirst: enumerable.skipFirst,
    startWith: enumerable.startWith,
    takeFirst: enumerable.takeFirst,
    takeLast: enumerable.takeLast,
    takeWhile: enumerable.takeWhile,
    toRunnable: enumerable.toRunnable,
};
const tests$2 = testing.describe("enumerable", testing.test("toIterable", functions.defer([1, 2, 3], enumerable.fromArray(), enumerable.toIterable(), enumerable.fromIterable(), enumerable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]))), testing.test("zip", functions.defer([1, 2, 3], enumerable.fromArray(), enumerable.zipWith(enumerable.fromArray()([1, 2, 3, 4, 5])), enumerable.map(([a, b]) => a + b), enumerable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([2, 4, 6]))), createMonadTests(Enumerable));

const tests$3 = testing.describe("flowables", testing.test("empty", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const emptyStream = functions.pipe(flowable.empty(), streamable.stream(scheduler));
    emptyStream.dispatch(2 /* Pause */);
    emptyStream.dispatch(1 /* Resume */);
    const f = testing.mockFn();
    const subscription = functions.pipe(emptyStream, observable.onNotify(f), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(0));
    testing.expectTrue(subscription.isDisposed);
    testing.expectTrue(emptyStream.isDisposed);
}), testing.test("fromObservable", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const generateStream = functions.pipe(observable.generate(functions.increment, functions.returns(-1), { delay: 1 }), flowable.fromObservable(), streamable.stream(scheduler));
    generateStream.dispatch(1 /* Resume */);
    functions.pipe(scheduler, scheduler$1.schedule(functions.defer(2 /* Pause */, dispatcher.dispatchTo(generateStream)), {
        delay: 2,
    }));
    functions.pipe(scheduler, scheduler$1.schedule(functions.defer(1 /* Resume */, dispatcher.dispatchTo(generateStream)), {
        delay: 4,
    }));
    functions.pipe(scheduler, scheduler$1.schedule(functions.defer(generateStream, disposable.dispose()), { delay: 5 }));
    const f = testing.mockFn();
    const subscription = functions.pipe(generateStream, observable.onNotify(x => {
        f(scheduler.now, x);
    }), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(3));
    functions.pipe(f.calls[0][1], testing.expectEquals(0));
    functions.pipe(f.calls[1][1], testing.expectEquals(1));
    functions.pipe(f.calls[2][1], testing.expectEquals(2));
    testing.expectTrue(subscription.isDisposed);
}), testing.test("fromValue", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const fromValueStream = functions.pipe(1, flowable.fromValue(), streamable.stream(scheduler));
    fromValueStream.dispatch(1 /* Resume */);
    fromValueStream.dispatch(1 /* Resume */);
    const f = testing.mockFn();
    const subscription = functions.pipe(fromValueStream, observable.onNotify(f), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(f.calls[0][0], testing.expectEquals(1));
    testing.expectTrue(subscription.isDisposed);
    testing.expectTrue(fromValueStream.isDisposed);
}));

const createHttpRequestTests = testing.test("createHttpRequest", () => {
    const request = http.createHttpRequest({
        method: "GET" /* GET */,
        uri: "http://www.example.com",
        body: option.none,
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
    http.writeHttpRequestHeaders(request, (key, value) => {
        headers[key] = value;
    });
    testing.expectTrue(request.expectContinue);
});
const createHttpResponseTests = testing.test("createHttpRequest", () => {
    const response = http.createHttpResponse({
        statusCode: 200 /* OK */,
        body: option.none,
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
    http.writeHttpResponseHeaders(response, (key, value) => {
        headers[key] = value;
    });
});
const checkIfNotModifiedTests = functions.pipe([
    [
        "when a non-conditional GET is performed",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
        }),
        http.createHttpResponse({ statusCode: 200 /* OK */, body: option.none }),
        200 /* OK */,
    ],
    [
        "when ETags match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETags mismatch",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"bar"',
        }),
        200 /* OK */,
    ],
    [
        "when at least one matches",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['"foo"', '"bar"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when etag is missing",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
        }),
        200 /* OK */,
    ],
    [
        "when ETag is weak on exact match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['W/"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: 'W/"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETag is weak on strong match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['W/"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETag is strong on exact match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when ETag is strong on weak match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: 'W/"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when * is given",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifNoneMatch: "*",
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
        }),
        304 /* NotModified */,
    ],
    [
        "when modified since the date",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 0,
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            lastModified: 1,
        }),
        200 /* OK */,
    ],
    [
        "when unmodified since the date",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 1,
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            lastModified: 1,
        }),
        304 /* NotModified */,
    ],
    [
        "when Last-Modified is missing",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 1,
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
        }),
        200 /* OK */,
    ],
    [
        "when requested with If-Modified-Since and If-None-Match and both match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 1,
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
            lastModified: 1,
        }),
        304 /* NotModified */,
    ],
    [
        "when requested with If-Modified-Since and If-None-Match when only ETag matches",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 0,
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
            lastModified: 1,
        }),
        200 /* OK */,
    ],
    [
        "when requested with If-Modified-Since and If-None-Match when only Last-Modified matches",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 0,
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"bar"',
            lastModified: 0,
        }),
        200 /* OK */,
    ],
    [
        "when none match",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            preconditions: {
                ifModifiedSince: 0,
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"bar"',
            lastModified: 1,
        }),
        200 /* OK */,
    ],
    [
        "when requested with Cache-Control: no-cache",
        http.createHttpRequest({
            method: "GET" /* GET */,
            uri: "http://www.example.com",
            body: option.none,
            cacheControl: ["no-cache"],
            preconditions: {
                ifNoneMatch: ['"foo"'],
            },
        }),
        http.createHttpResponse({
            statusCode: 200 /* OK */,
            body: option.none,
            etag: '"foo"',
        }),
        200 /* OK */,
    ],
], readonlyArray.map(([name, req, resp, status]) => testing.test(name, functions.defer(resp, http.checkIfNotModified(req), x => x.statusCode, testing.expectEquals(status)))), tests => testing.describe("checkIfNotModified", ...tests));
const tests$4 = testing.describe("http", checkIfNotModifiedTests, createHttpRequestTests, createHttpResponseTests);

const tests$5 = testing.describe("io", testing.test("decodeWithCharset", () => {
    const src = functions.pipe([Uint8Array.from([226]), Uint8Array.from([130]), Uint8Array.from([172])], io.fromArray(), io.decodeWithCharset());
    const dest = ioSinkAccumulator.createIOSinkAccumulator((acc, next) => acc + next, functions.returns(""), { replay: 1 });
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const subscription = functions.pipe(streamable.sink(src, dest), observable.subscribe(scheduler));
    const f = testing.mockFn();
    functions.pipe(dest, observable.onNotify(f), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(f.calls[0][0], testing.expectEquals(String.fromCodePoint(8364)));
    testing.expectTrue(subscription.isDisposed);
}), testing.test("empty", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const emptyStream = functions.pipe(option.none, io.empty, streamable.stream(scheduler));
    emptyStream.dispatch(2 /* Pause */);
    emptyStream.dispatch(1 /* Resume */);
    const f = testing.mockFn();
    const subscription = functions.pipe(emptyStream, observable.onNotify(f), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(f.calls[0][0].type, testing.expectEquals(2 /* Done */));
    testing.expectTrue(subscription.isDisposed);
    testing.expectTrue(emptyStream.isDisposed);
}), testing.test("encodeUtf8", () => {
    const str = "abcdefghijklmnsopqrstuvwxyz";
    const src = functions.pipe(str, io.fromValue(), io.encodeUtf8, io.decodeWithCharset());
    const dest = ioSinkAccumulator.createIOSinkAccumulator((acc, next) => acc + next, functions.returns(""), { replay: 1 });
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const subscription = functions.pipe(streamable.sink(src, dest), observable.subscribe(scheduler));
    const f = testing.mockFn();
    functions.pipe(dest, observable.onNotify(f), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(f.calls[0][0], testing.expectEquals(str));
    testing.expectTrue(subscription.isDisposed);
}), testing.test("fromValue", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const fromValueStream = functions.pipe(1, io.fromValue(), streamable.stream(scheduler));
    fromValueStream.dispatch(1 /* Resume */);
    const f = testing.mockFn();
    const subscription = functions.pipe(fromValueStream, observable.onNotify(f), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(2));
    functions.pipe(f.calls[0][0].type, testing.expectEquals(1 /* Notify */));
    functions.pipe(f.calls[0][0].data, testing.expectEquals(1));
    functions.pipe(f.calls[1][0].type, testing.expectEquals(2 /* Done */));
    testing.expectTrue(subscription.isDisposed);
    testing.expectTrue(fromValueStream.isDisposed);
}), testing.test("map", () => {
    const src = functions.pipe(1, io.fromValue(), io.map(functions.returns(2)));
    const dest = ioSinkAccumulator.createIOSinkAccumulator(functions.sum, functions.returns(0), { replay: 1 });
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const subscription = functions.pipe(streamable.sink(src, dest), observable.subscribe(scheduler));
    const f = testing.mockFn();
    functions.pipe(dest, observable.onNotify(f), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(f.calls[0][0], testing.expectEquals(2));
    testing.expectTrue(subscription.isDisposed);
}));

const scheduler = scheduler$1.createHostScheduler();
const Observable = {
    concat: observable.concat,
    concatMap: observable.concatMap,
    distinctUntilChanged: observable.distinctUntilChanged,
    empty: observable.empty,
    endWith: observable.endWith,
    fromArray: observable.fromArray,
    fromValue: observable.fromValue,
    generate: observable.generate,
    keep: observable.keep,
    map: observable.map,
    mapTo: observable.mapTo,
    repeat: observable.repeat,
    scan: observable.scan,
    skipFirst: observable.skipFirst,
    startWith: observable.startWith,
    takeFirst: observable.takeFirst,
    takeLast: observable.takeLast,
    takeWhile: observable.takeWhile,
    toRunnable: observable.toRunnable,
};
const tests$6 = testing.describe("observable", testing.test("await_", functions.defer([0, 1, 2, 3, 4], observable.fromArray(), observable.await_(functions.compose(observable.fromValue(), observable.endWith(1))), observable.toRunnable(), runnable.last, testing.expectEquals(0))), testing.describe("buffer", testing.test("with duration and maxBufferSize", functions.defer(observable.concat(functions.pipe([1, 2, 3, 4], observable.fromArray()), functions.pipe([1, 2, 3], observable.fromArray({ delay: 1 })), functions.pipe(4, observable.fromValue({ delay: 8 }))), observable.buffer({ duration: 4, maxBufferSize: 3 }), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([[1, 2, 3], [4, 1, 2], [3], [4]], functions.arrayEquality()))), testing.test("when duration observable throws", functions.defer(functions.defer([1, 2, 3, 4], observable.fromArray(), observable.buffer({ duration: _ => observable.throws()(functions.raise) }), observable.toRunnable({
    schedulerFactory: functions.defer({ maxMicroTaskTicks: 1 }, scheduler$1.createVirtualTimeScheduler),
}), runnable.toArray()), testing.expectToThrow))), testing.describe("catchError", testing.test("source completes successfully", functions.defer(functions.pipe(1, observable.fromValue()), observable.catchError(_ => observable.fromValue()(2)), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1]))), testing.test("source throws, error caught and ignored", () => {
    const error = new Error();
    functions.pipe(1, observable.fromValue(), observable.concatWith(functions.pipe(error, functions.returns, observable.throws())), observable.catchError(functions.ignore), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1]));
}), testing.test("source throws, continues with second observable", () => {
    const error = new Error();
    functions.pipe(1, observable.fromValue(), observable.concatWith(functions.pipe(error, functions.returns, observable.throws())), observable.catchError(_ => observable.fromValue()(2)), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2]));
}), testing.test("source throws, catch throws", () => {
    const error = new Error();
    testing.expectToThrow(() => functions.pipe(1, observable.fromValue(), observable.concatWith(functions.pipe(error, functions.returns, observable.throws())), observable.catchError(_ => {
        throw error;
    }), observable.toRunnable(), runnable.toArray()));
})), testing.test("combineLatest", functions.defer(observable.generate(functions.incrementBy(2), functions.returns(1), { delay: 2 }), observable.takeFirst({ count: 3 }), observable.combineLatestWith(functions.pipe(observable.generate(functions.incrementBy(2), functions.returns(0), { delay: 3 }), observable.takeFirst({ count: 2 }))), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([
    [3, 2],
    [5, 2],
    [5, 4],
    [7, 4],
], functions.arrayEquality()))), testing.describe("createObservable", testing.test("disposes the observer if onSubscribe throws", () => {
    const cause = new Error();
    const observable$1 = observable.createObservable(_ => {
        throw cause;
    });
    functions.pipe(() => functions.pipe(observable$1, observable.toRunnable(), runnable.last), testing.expectToThrowError(cause));
}), testing.test("when queuing multiple events", functions.defer(observable.createObservable(dispatcher => {
    dispatcher.dispatch(1);
    dispatcher.dispatch(2);
    dispatcher.dispatch(3);
    functions.pipe(dispatcher, disposable.dispose());
}), observable.toRunnable({
    schedulerFactory: functions.defer({ maxMicroTaskTicks: 1 }, scheduler$1.createVirtualTimeScheduler),
}), runnable.toArray(), testing.expectArrayEquals([1, 2, 3])))), testing.describe("createSubject", testing.test("with replay", () => {
    const subject = observable.createSubject({ replay: 2 });
    functions.pipe([1, 2, 3, 4], runnable.fromArray(), runnable.forEach(dispatcher.dispatchTo(subject)));
    functions.pipe(subject, disposable.dispose());
    functions.pipe(subject, observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([3, 4]));
}), testing.test("with multiple observers", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const subject = observable.createSubject();
    functions.pipe(subject.observerCount, testing.expectEquals(0));
    const sub1 = functions.pipe(subject, observable.subscribe(scheduler));
    functions.pipe(subject.observerCount, testing.expectEquals(1));
    const sub2 = functions.pipe(subject, observable.subscribe(scheduler));
    functions.pipe(subject.observerCount, testing.expectEquals(2));
    functions.pipe(sub1, disposable.dispose());
    functions.pipe(subject.observerCount, testing.expectEquals(1));
    functions.pipe(sub2, disposable.dispose());
    functions.pipe(subject.observerCount, testing.expectEquals(0));
})), testing.test("exhaustMap", functions.defer([observable.fromArray()([1, 2, 3]), observable.fromArray()([4, 5, 6]), observable.fromArray()([7, 8, 9])], observable.fromArray(), observable.exhaustMap(functions.identity), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]))), testing.describe("fromPromise", testing.testAsync("when the promise resolves", async () => {
    const factory = () => Promise.resolve(1);
    const result = await functions.pipe(factory, observable.fromPromise, observable.toPromise(scheduler));
    functions.pipe(result, testing.expectEquals(1));
}), testing.testAsync("when the promise reject", async () => {
    const error = new Error();
    const factory = () => Promise.reject(error);
    await functions.pipe(functions.pipe(factory, observable.fromPromise, observable.toPromise(scheduler)), testing.expectPromiseToThrow);
})), testing.test("genMap", functions.defer(undefined, observable.fromValue(), observable.genMap(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3]))), testing.test("ignoreElements", functions.defer([1, 2, 3], observable.fromArray(), observable.ignoreElements(), observable.endWith(4), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([4]))), testing.describe("merge", testing.test("two arrays", functions.defer(observable.merge(functions.pipe([0, 2, 3, 5, 6], observable.fromArray({ delay: 1 })), functions.pipe([1, 4, 7], observable.fromArray({ delay: 2 }))), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7]))), testing.test("when one source throws", functions.defer(functions.defer([1, 4, 7], observable.fromArray({ delay: 2 }), observable.mergeWith(observable.throws({ delay: 5 })(functions.raise)), observable.toRunnable(), runnable.last), testing.expectToThrow))), testing.describe("mergeMap", testing.test("when a mapped observable throws", functions.defer(functions.defer([observable.fromArray({ delay: 1 })([1, 2, 3]), observable.throws({ delay: 2 })(functions.raise)], observable.fromArray(), observable.mergeMap(functions.identity), observable.toRunnable(), runnable.last), testing.expectToThrow)), testing.test("when the map function throws", functions.defer(functions.defer([1, 2, 3, 4], observable.fromArray(), observable.mergeMap(x => {
    if (x > 2) {
        functions.raise();
    }
    return observable.fromValue()(x);
}), observable.toRunnable(), runnable.last), testing.expectToThrow))), testing.test("never", functions.defer(observable.never(), observable.toRunnable(), runnable.last, testing.expectNone)), testing.describe("onSubscribe", testing.test("when subscribe function returns a teardown function", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const disp = testing.mockFn();
    const f = testing.mockFn(disp);
    functions.pipe(1, observable.fromValue(), observable.onSubscribe(f), observable.subscribe(scheduler));
    functions.pipe(disp, testing.expectToHaveBeenCalledTimes(0));
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
    scheduler.run();
    functions.pipe(disp, testing.expectToHaveBeenCalledTimes(1));
    functions.pipe(f, testing.expectToHaveBeenCalledTimes(1));
}), testing.test("when callback function throws", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const subscription = functions.pipe(1, observable.fromValue(), observable.onSubscribe(functions.raise), observable.subscribe(scheduler));
    functions.pipe(subscription.error, testing.expectSome);
})), testing.describe("retry", testing.test("repeats the observable n times", () => {
    let retried = false;
    const src = observable.createObservable(d => {
        d.dispatch(1);
        if (retried) {
            d.dispatch(2);
            d.dispose();
        }
        else {
            retried = true;
            functions.pipe(d, disposable.dispose({ cause: new Error() }));
        }
    });
    functions.pipe(src, observable.retry(), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 1, 2]));
})), testing.describe("scanAsync", testing.test("fast lib, slow acc", functions.defer([1, 2, 3], observable.fromArray(), observable.scanAsync((acc, x) => observable.fromValue({ delay: 4 })(x + acc), functions.returns(0)), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 3, 6]))), testing.test("slow lib, fast acc", functions.defer([1, 2, 3], observable.fromArray({ delay: 4 }), observable.scanAsync((acc, x) => observable.fromValue()(x + acc), functions.returns(0)), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 3, 6]))), testing.test("slow lib, slow acc", functions.defer([1, 2, 3], observable.fromArray({ delay: 4 }), observable.scanAsync((acc, x) => observable.fromValue({ delay: 4 })(x + acc), functions.returns(0)), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 3, 6]))), testing.test("fast lib, fast acc", functions.defer([1, 2, 3], observable.fromArray(), observable.scanAsync((acc, x) => observable.fromValue()(x + acc), functions.returns(0)), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 3, 6])))), testing.test("share", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const shared = functions.pipe([1, 2, 3], observable.fromArray({ delay: 1 }), observable.share(scheduler, { replay: 1 }));
    let result = [];
    functions.pipe(observable.zip(shared, shared), observable.map(([a, b]) => a + b), observable.buffer(), observable.onNotify(x => {
        result = x;
    }), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([2, 4, 6]));
}), testing.describe("switchAll", testing.test("with empty source", functions.defer(observable.empty(), observable.switchAll(), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([]))), testing.test("when source throw", functions.defer(functions.defer(functions.raise, observable.throws(), observable.switchAll(), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([])), testing.expectToThrow))), testing.test("switchMap", functions.defer([1, 2, 3], observable.fromArray({ delay: 1 }), observable.switchMap(_ => functions.pipe([1, 2, 3], observable.fromArray())), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]))), testing.describe("takeLast", testing.test("when pipeline throws", functions.defer(functions.defer(functions.raise, observable.throws(), observable.takeLast(), observable.toRunnable(), runnable.last), testing.expectToThrow))), testing.describe("throttle", testing.test("first", functions.defer(observable.generate(functions.increment, functions.returns(-1), { delay: 1 }), observable.takeFirst({ count: 100 }), observable.throttle(50, { mode: 1 /* First */ }), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([0, 49]))), testing.test("last", functions.defer(observable.generate(functions.increment, functions.returns(-1), { delay: 1 }), observable.takeFirst({ count: 200 }), observable.throttle(50, { mode: 2 /* Last */ }), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([49, 99, 149, 199]))), testing.test("interval", functions.defer(observable.generate(functions.increment, functions.returns(-1), { delay: 1 }), observable.takeFirst({ count: 200 }), observable.throttle(75, { mode: 3 /* Interval */ }), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([0, 74, 149, 199]))), testing.test("when duration observable throws", functions.defer(functions.defer([1, 2, 3, 4, 5], observable.fromArray({ delay: 1 }), observable.throttle(_ => observable.throws()(functions.raise)), observable.toRunnable(), runnable.last), testing.expectToThrow))), testing.describe("throwIfEmpty", testing.test("when source is empty", functions.defer(functions.defer(observable.empty(), observable.throwIfEmpty(() => undefined), observable.toRunnable(), runnable.last), testing.expectToThrow)), testing.test("when source is not empty", functions.defer(1, functions.returns, observable.compute(), observable.throwIfEmpty(() => undefined), observable.toRunnable(), runnable.last, testing.expectEquals(1)))), testing.describe("timeout", testing.test("throws when a timeout occurs", functions.defer(functions.defer(1, observable.fromValue({ delay: 2 }), observable.timeout(1), runnable.toArray()), testing.expectToThrow)), testing.test("when timeout is greater than observed time", functions.defer(1, observable.fromValue({ delay: 2 }), observable.timeout(3), observable.toRunnable(), runnable.last, testing.expectEquals(1)))), testing.describe("toPromise", testing.testAsync("when observable completes without producing a value", async () => {
    await functions.pipe(functions.pipe(observable.empty(), observable.toPromise(scheduler)), testing.expectPromiseToThrow);
})), testing.describe("withLatestFrom", testing.test("when source and latest are interlaced", functions.defer([0, 1, 2, 3], observable.fromArray({ delay: 1 }), observable.withLatestFrom(functions.pipe([0, 1, 2, 3], observable.fromArray({ delay: 2 })), (a, b) => [
    a,
    b,
]), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([
    [1, 0],
    [2, 0],
    [3, 1],
], functions.arrayEquality()))), testing.test("when latest produces no values", functions.defer([0], observable.fromArray({ delay: 1 }), observable.withLatestFrom(observable.empty(), functions.sum), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([]))), testing.test("when latest throws", () => {
    const error = new Error();
    functions.pipe(functions.defer([0], observable.fromArray({ delay: 1 }), observable.withLatestFrom(observable.throws()(functions.returns(error)), functions.sum), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([])), testing.expectToThrowError(error));
})), testing.describe("zip", testing.test("with non-delayed sources", functions.defer(observable.zip(functions.pipe([1, 2], observable.fromArray()), functions.pipe([1, 2], observable.fromArray(), observable.map(functions.increment)), observable.generate(functions.increment, functions.returns(2))), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([
    [1, 2, 3],
    [2, 3, 4],
], functions.arrayEquality()))), testing.test("with synchronous and non-synchronous sources", functions.defer(observable.zip(functions.pipe([1, 2], observable.fromArray({ delay: 1 })), functions.pipe([2, 3], observable.fromIterable()), functions.pipe([3, 4, 5], observable.fromArray({ delay: 1 }))), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([
    [1, 2, 3],
    [2, 3, 4],
], functions.arrayEquality()))), testing.test("fast with slow", functions.defer([1, 2, 3], observable.fromArray({ delay: 1 }), observable.zipWith(functions.pipe([1, 2, 3], observable.fromArray({ delay: 5 }))), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([
    [1, 1],
    [2, 2],
    [3, 3],
], functions.arrayEquality()))), testing.test("when source throws", functions.defer(functions.defer(functions.raise, observable.throws(), observable.zipWith(observable.fromArray()([1, 2, 3])), observable.map(([, b]) => b), observable.toRunnable(), runnable.toArray()), testing.expectToThrow))), testing.test("zipLatestWith", functions.defer([1, 2, 3, 4, 5, 6, 7, 8], observable.fromArray({ delay: 1 }), observable.zipLatestWith(functions.pipe([1, 2, 3, 4], observable.fromArray({ delay: 2 }))), observable.map(([a, b]) => a + b), observable.toRunnable(), runnable.toArray(), testing.expectArrayEquals([2, 5, 8, 11]))), testing.describe("zipWithLatestFrom", testing.test("when source throws", functions.defer(functions.defer(observable.throws()(functions.raise), observable.zipWithLatestFrom(observable.fromValue()(1), (_, b) => b), observable.toRunnable(), runnable.last), testing.expectToThrow)), testing.test("when other throws", functions.defer(functions.defer([1, 2, 3], observable.fromArray({ delay: 1 }), observable.zipWithLatestFrom(observable.throws()(functions.raise), (_, b) => b), observable.toRunnable(), runnable.last), testing.expectToThrow)), testing.test("when other completes first", functions.defer([1], observable.fromArray({ delay: 1 }), observable.zipWithLatestFrom(observable.fromArray()([2]), (_, b) => b), observable.toRunnable(), runnable.last, testing.expectEquals(2)))), createMonadTests(Observable));

const tests$7 = testing.describe("parser combinators", testing.test("many", () => {
    const parser = functions.pipe(parserCombinators.string("abc"), parserCombinators.many());
    functions.pipe("abcabcabcabc", parserCombinators.parseWithOrThrow(parser), testing.expectArrayEquals(["abc", "abc", "abc", "abc"]));
}), testing.test("many", () => {
    const parser = functions.pipe(parserCombinators.string("abc"), parserCombinators.many());
    functions.pipe("abcabcabcabc", parserCombinators.parseWithOrThrow(parser), testing.expectArrayEquals(["abc", "abc", "abc", "abc"]));
}), testing.test("manySatisy", () => {
    const parser = parserCombinators.concat(parserCombinators.manySatisfy()(parserCombinators.pForwardSlash), parserCombinators.manySatisfy()(parserCombinators.char("z")));
    functions.pipe("////zzz", parserCombinators.parseWithOrThrow(parser), testing.expectArrayEquals(["////", "zzz"]));
}), testing.test("map", () => {
    const parser = functions.pipe(parserCombinators.string("ab"), parserCombinators.map((x) => x + "cd"));
    functions.pipe("ab", parserCombinators.parseWithOrThrow(parser), testing.expectEquals("abcd"));
}), testing.test("mapTo", () => {
    const parser = functions.pipe(parserCombinators.string("ab"), parserCombinators.mapTo("xyz"));
    functions.pipe("ab", parserCombinators.parseWithOrThrow(parser), testing.expectEquals("xyz"));
}), testing.test("optional", () => {
    const parser = parserCombinators.concat(parserCombinators.string("ab"), functions.pipe(parserCombinators.optional(parserCombinators.string("cd")), parserCombinators.orCompute(functions.returns("ef"))), parserCombinators.pEof);
    functions.pipe("abcd", parserCombinators.parseWithOrThrow(parser), testing.expectArrayEquals(["ab", "cd", option.none]));
    functions.pipe("ab", parserCombinators.parseWithOrThrow(parser)), testing.expectArrayEquals(["ab", "ef", option.none]);
}), testing.test("or", () => {
    const parser = functions.pipe(parserCombinators.string("ab"), parserCombinators.or(parserCombinators.string("cd")));
    functions.pipe("ab", parserCombinators.parseWithOrThrow(parser), testing.expectEquals("ab"));
    functions.pipe("cd", parserCombinators.parseWithOrThrow(parser), testing.expectEquals("cd"));
}), testing.test("sepBy", () => {
    const parser = functions.pipe(parserCombinators.string("ab"), parserCombinators.sepBy(parserCombinators.pColon));
    functions.pipe("ab:ab:ab:ab", parserCombinators.parseWithOrThrow(parser), testing.expectArrayEquals(["ab", "ab", "ab", "ab"]));
}), testing.test("string", () => {
    const parser = parserCombinators.concat(parserCombinators.string("ab"), parserCombinators.string("cd"));
    functions.pipe("abcd", parserCombinators.parseWithOrThrow(parser), testing.expectArrayEquals(["ab", "cd"]));
}), testing.test("throwParseError", functions.defer(functions.defer("abc", parserCombinators.createCharStream, parserCombinators.throwParseError), testing.expectToThrow)));

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
const tests$8 = testing.describe("priority queue", testing.test("push", () => {
    const queue = queues.createPriorityQueue(compare);
    const shuffledArray = makeShuffledArray(100);
    for (let i = 0; i < shuffledArray.length; i++) {
        queue.push(shuffledArray[i]);
    }
    const acc = [];
    while (queue.count > 0) {
        acc.push(queue.pop());
    }
    functions.pipe(acc, testing.expectArrayEquals(makeSortedArray(100)));
}));

const tests$9 = testing.describe("reactive-cache", testing.test("lifecycle integration", () => {
    // Use microticks to test yielding
    const scheduler = scheduler$1.createVirtualTimeScheduler({ maxMicroTaskTicks: 1 });
    const cache = reactiveCache.createReactiveCache(scheduler, scheduler, {
        maxCount: 2,
    });
    let bSubscription = disposable.disposed;
    let cSubscription = disposable.disposed;
    let dSubscription = disposable.disposed;
    let eSubscription = disposable.disposed;
    functions.pipe([
        () => {
            cache.set("a", observable.fromValue()("a"));
            cache.set("b", observable.fromValue()("b"));
            cache.set("c", observable.fromValue()("c"));
        },
        () => {
            // Max size is 2. A is never subscribed to so it is garbage collected.
            functions.pipe(cache.get("a"), testing.expectNone);
            const entryB = cache.get("b");
            functions.pipe(entryB, testing.expectSome);
            bSubscription = functions.pipe(entryB, observable.subscribe(scheduler));
            const entryC = cache.get("c");
            functions.pipe(entryC, testing.expectSome);
            cSubscription = functions.pipe(entryC, observable.subscribe(scheduler));
            const entryD = cache.set("d", observable.fromValue({ delay: 3 })("d"));
            dSubscription = functions.pipe(entryD, observable.subscribe(scheduler));
        },
        () => {
            // Assert that the cache maintain all active values
            // given the active subscription, despite the capacity
            // exceeding the cache's max size.
            functions.pipe(cache.get("b"), testing.expectSome);
            functions.pipe(cache.get("c"), testing.expectSome);
            functions.pipe(cache.get("d"), testing.expectSome);
            functions.pipe(cSubscription, disposable.dispose());
            functions.pipe(dSubscription, disposable.dispose());
            const entryE = cache.set("e", observable.fromValue()("e"));
            eSubscription = functions.pipe(entryE, observable.subscribe(scheduler));
        },
        () => {
            // c and d were disposed so ensure they return undefined
            functions.pipe(cache.get("b"), testing.expectSome);
            functions.pipe(cache.get("c"), testing.expectNone);
            functions.pipe(cache.get("d"), testing.expectNone);
            functions.pipe(cache.get("e"), testing.expectSome);
        },
        functions.defer(cache, disposable.dispose()),
        () => {
            // Ensure that disposing the cache disposes all outstanding subscriptions.
            // Note: check these here as these subscriptions require scheduling by the
            // cache to dispose (not done synchronously).
            functions.pipe(bSubscription.isDisposed, testing.expectTrue);
            functions.pipe(eSubscription.isDisposed, testing.expectTrue);
            functions.pipe(cache.get("b"), testing.expectNone);
            functions.pipe(cache.get("c"), testing.expectNone);
            functions.pipe(cache.get("d"), testing.expectNone);
            functions.pipe(cache.get("e"), testing.expectNone);
        },
    ], observable.fromArray({ delay: 1 }), observable.toRunnable({ schedulerFactory: functions.returns(scheduler) }), runnable.forEach(x => x()));
}), testing.test("subscribing to disposed value", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const cache = reactiveCache.createReactiveCache(scheduler, scheduler, {
        maxCount: 1,
    });
    let observable$1 = observable.never();
    let value = "";
    functions.pipe([
        () => {
            observable$1 = reactiveCache.getOrSet(cache, "a", observable.fromValue()("a"));
            reactiveCache.getOrSet(cache, "b", observable.fromValue()("b"));
        },
        () => {
            functions.pipe(observable$1, observable.onNotify(x => {
                value = x;
            }), observable.subscribe(scheduler));
        },
        () => {
            functions.pipe(value, testing.expectEquals(""));
        },
    ], observable.fromArray(), observable.toRunnable({ schedulerFactory: functions.returns(scheduler) }), runnable.forEach(x => x()));
}), testing.test("getOrSet", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const cache = reactiveCache.createReactiveCache(scheduler, scheduler, {
        maxCount: 2,
    });
    let value = "";
    functions.pipe([
        () => {
            let obs = reactiveCache.getOrSet(cache, "a", observable.fromValue()("a"));
            obs = reactiveCache.getOrSet(cache, "a", observable.fromValue()("b"));
            functions.pipe(obs, observable.onNotify(x => {
                value = x;
            }), observable.subscribe(scheduler));
        },
        () => {
            functions.pipe(value, testing.expectEquals("a"));
        },
    ], observable.fromArray({ delay: 1 }), observable.toRunnable({ schedulerFactory: functions.returns(scheduler) }), runnable.forEach(x => x()));
}));

const Runnable = {
    concat: runnable.concat,
    concatMap: runnable.concatMap,
    distinctUntilChanged: runnable.distinctUntilChanged,
    empty: runnable.empty,
    endWith: runnable.endWith,
    fromArray: runnable.fromArray,
    fromValue: runnable.fromValue,
    generate: runnable.generate,
    keep: runnable.keep,
    map: runnable.map,
    mapTo: runnable.mapTo,
    repeat: runnable.repeat,
    scan: runnable.scan,
    skipFirst: runnable.skipFirst,
    startWith: runnable.startWith,
    takeFirst: runnable.takeFirst,
    takeLast: runnable.takeLast,
    takeWhile: runnable.takeWhile,
    toRunnable: runnable.toRunnable,
};
const tests$a = testing.describe("runnable", testing.describe("contains", testing.test("source is empty", functions.defer(runnable.empty(), runnable.contains(1), testing.expectFalse)), testing.test("source contains value", functions.defer(runnable.generate(functions.increment, functions.returns(0)), runnable.contains(1), testing.expectTrue)), testing.test("source does not contain value", functions.defer([2, 3, 4], runnable.fromArray(), runnable.contains(1), testing.expectFalse))), testing.describe("everySatisfy", testing.test("source is empty", functions.defer(runnable.empty(), runnable.everySatisfy(functions.alwaysFalse), testing.expectTrue)), testing.test("source values pass predicate", functions.defer([1, 2, 3], runnable.fromArray(), runnable.everySatisfy(functions.alwaysTrue), testing.expectTrue)), testing.test("source values fail predicate", functions.defer([1, 2, 3], runnable.fromArray(), runnable.everySatisfy(functions.alwaysFalse), testing.expectFalse))), testing.describe("first", testing.test("when enumerable is not empty", functions.defer(functions.returns(1), runnable.compute(), runnable.first, testing.expectEquals(1))), testing.test("when enumerable is empty", functions.defer(runnable.empty(), runnable.first, testing.expectNone))), testing.test("forEach", () => {
    const fn = testing.mockFn();
    functions.pipe([1, 2, 3], runnable.fromArray(), runnable.forEach(fn));
    functions.pipe(fn, testing.expectToHaveBeenCalledTimes(3));
}), testing.describe("noneSatisfy", testing.test("source is empty", functions.defer(runnable.empty(), runnable.noneSatisfy(functions.alwaysFalse), testing.expectTrue)), testing.test("source values pass predicate", functions.defer([1, 2, 3], runnable.fromArray(), runnable.noneSatisfy(functions.alwaysTrue), testing.expectFalse)), testing.test("source values fail predicate", functions.defer([1, 2, 3], runnable.fromArray(), runnable.noneSatisfy(functions.alwaysFalse), testing.expectTrue))), createMonadTests(Runnable));

const Sequence = {
    concat: sequence.concat,
    concatMap: sequence.concatMap,
    distinctUntilChanged: sequence.distinctUntilChanged,
    empty: sequence.empty,
    endWith: sequence.endWith,
    fromArray: sequence.fromArray,
    fromValue: sequence.fromValue,
    generate: sequence.generate,
    keep: sequence.keep,
    map: sequence.map,
    mapTo: sequence.mapTo,
    repeat: sequence.repeat,
    scan: sequence.scan,
    skipFirst: sequence.skipFirst,
    startWith: sequence.startWith,
    takeFirst: sequence.takeFirst,
    takeLast: sequence.takeLast,
    takeWhile: sequence.takeWhile,
    toRunnable: sequence.toRunnable,
};
const tests$b = testing.describe("sequence", createMonadTests(Sequence));

const tests$c = testing.describe("stateStore", testing.test("toStateStore", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler({ maxMicroTaskTicks: 0 });
    const stateStream = functions.pipe(streamable.identity(), streamable.lift(observable.startWith(0)), stateStore.toStateStore(), streamable.stream(scheduler));
    stateStream.dispatch(functions.incrementBy(1));
    stateStream.dispatch(functions.incrementBy(2));
    stateStream.dispatch(functions.incrementBy(3));
    stateStream.dispatch(functions.incrementBy(4));
    stateStream.dispatch(functions.incrementBy(5));
    stateStream.dispatch(functions.incrementBy(6));
    stateStream.dispatch(functions.incrementBy(7));
    stateStream.dispatch(functions.incrementBy(8));
    stateStream.dispatch(functions.incrementBy(9));
    stateStream.dispatch(functions.incrementBy(10));
    functions.pipe(stateStream, disposable.dispose());
    let result = [];
    const subscription = functions.pipe(stateStream, observable.onNotify(x => {
        result.push(x);
    }), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]));
    testing.expectTrue(subscription.isDisposed);
}));

const tests$d = testing.describe("streamable", testing.test("createActionReducer", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const actionReducerStream = functions.pipe(streamable.createActionReducer(functions.sum, functions.returns(0)), streamable.stream(scheduler));
    actionReducerStream.dispatch(1);
    actionReducerStream.dispatch(2);
    functions.pipe(actionReducerStream, disposable.dispose());
    let result = [];
    functions.pipe(actionReducerStream, observable.onNotify(x => {
        result.push(x);
    }), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([0, 1, 3]));
}), testing.describe("empty", testing.test("with no delay", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const emptyStream = functions.pipe(streamable.empty(), streamable.stream(scheduler));
    emptyStream.dispatch(option.none);
    emptyStream.dispatch(option.none);
    let result = [];
    const subscription = functions.pipe(emptyStream, observable.onNotify(x => {
        result.push(x);
    }), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([]));
    testing.expectTrue(emptyStream.isDisposed);
    testing.expectTrue(subscription.isDisposed);
}), testing.test("with delay", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const emptyStream = functions.pipe(streamable.empty({ delay: 4 }), streamable.stream(scheduler));
    emptyStream.dispatch(option.none);
    emptyStream.dispatch(option.none);
    let result = [];
    let disposedTime = 0;
    const subscription = functions.pipe(emptyStream, observable.onNotify(x => {
        result.push(x);
    }), observable.subscribe(scheduler));
    disposable.addTeardown(subscription, _ => {
        disposedTime = scheduler.now;
    });
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([]));
    testing.expectTrue(emptyStream.isDisposed);
    testing.expectTrue(subscription.isDisposed);
    functions.pipe(disposedTime, testing.expectEquals(4));
})), testing.test("with multiple observers", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const incrStream = functions.pipe(streamable.identity(), streamable.map(functions.incrementBy(100)), streamable.stream(scheduler));
    functions.pipe(incrStream.observerCount, testing.expectEquals(0));
    const sub1 = functions.pipe(incrStream, observable.subscribe(scheduler));
    functions.pipe(incrStream.observerCount, testing.expectEquals(1));
    const sub2 = functions.pipe(incrStream, observable.subscribe(scheduler));
    functions.pipe(incrStream.observerCount, testing.expectEquals(2));
    functions.pipe(sub1, disposable.dispose());
    functions.pipe(incrStream.observerCount, testing.expectEquals(1));
    functions.pipe(sub2, disposable.dispose());
    functions.pipe(incrStream.observerCount, testing.expectEquals(0));
}), testing.test("map", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const incrStream = functions.pipe(streamable.identity(), streamable.map(functions.incrementBy(100)), streamable.stream(scheduler));
    incrStream.dispatch(10);
    incrStream.dispatch(20);
    incrStream.dispatch(30);
    functions.pipe(incrStream, disposable.dispose());
    let result = [];
    const subscription = functions.pipe(incrStream, observable.buffer(), observable.onNotify(x => {
        result = x;
    }), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([110, 120, 130]));
    testing.expectTrue(subscription.isDisposed);
}), testing.test("mapReq", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const incrStream = functions.pipe(streamable.identity(), streamable.mapReq(functions.incrementBy(100)), streamable.mapReq(x => Number.parseInt(x)), streamable.stream(scheduler));
    incrStream.dispatch("10");
    incrStream.dispatch("20");
    incrStream.dispatch("30");
    functions.pipe(incrStream, disposable.dispose());
    let result = [];
    const subscription = functions.pipe(incrStream, observable.buffer(), observable.onNotify(x => {
        result = x;
    }), observable.subscribe(scheduler));
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([110, 120, 130]));
    testing.expectTrue(subscription.isDisposed);
}), testing.test("onNotify", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    let result = [];
    const notifyStream = functions.pipe(streamable.identity(), streamable.onNotify(x => {
        result.push(x);
    }), streamable.stream(scheduler));
    notifyStream.dispatch(1);
    notifyStream.dispatch(2);
    notifyStream.dispatch(3);
    functions.pipe(notifyStream, disposable.dispose());
    testing.expectTrue(notifyStream.isDisposed);
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([1, 2, 3]));
}), testing.test("scan", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    let result = [];
    const scanStream = functions.pipe(streamable.identity(), streamable.scan(functions.sum, functions.returns(0)), streamable.onNotify(x => {
        result.push(x);
    }), streamable.stream(scheduler));
    scanStream.dispatch(1);
    scanStream.dispatch(2);
    scanStream.dispatch(3);
    scheduler.run();
    functions.pipe(result, testing.expectArrayEquals([1, 3, 6]));
}), testing.test("sink", () => {
    const scheduler = scheduler$1.createVirtualTimeScheduler();
    const src = functions.pipe(streamable.identity(), streamable.scan((acc, _) => acc + 1, functions.returns(0)), streamable.lift(observable.takeFirst({ count: 3 })));
    let result = 0;
    const dest = functions.pipe(streamable.identity(), streamable.scan((acc, _) => acc + 1, functions.returns(0)), streamable.onNotify(v => {
        result = v;
    }), streamable.mapTo(option.none), streamable.lift(observable.startWith(option.none)));
    const subscription = functions.pipe(streamable.sink(src, dest), observable.subscribe(scheduler));
    testing.expectFalse(subscription.isDisposed);
    scheduler.run();
    testing.expectTrue(subscription.isDisposed);
    functions.pipe(result, testing.expectEquals(3));
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

exports.tests = tests$e;
