/// <reference types="./isomorphic.tests.d.ts" />

/**
 * @jest-environment node
 */
import "../streaming/__tests__/AsyncEnumerable.test.js";
import "../containers/__tests__/AsyncIterable.test.js";
import "../util/__tests__/Disposable.test.js";
import "../rx/__tests__/Enumerable.test.js";
import "../streaming/__tests__/Flowable.test.js";
import "../containers/__tests__/Iterable.test.js";
import "../rx/__tests__/Observable.test.js";
import "../containers/__tests__/Promiseable.test.js";
import "../keyed-containers/__tests__/ReadonlyArray.test.js";
import "../rx/__tests__/Runnable.test.js";
import "../scheduling/__tests__/Scheduler.test.js";
import "../streaming/__tests__/Streamable.test.js";
import "../rx/__tests__/Publisher.test.js";
import "../util/__tests__/Queue.test.js";
