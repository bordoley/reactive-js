/// <reference types="./isomorphic.tests.d.ts" />

/**
 * @jest-environment node
 */
import "./computations.test.js";
import "./functions.test.js";
import "../collections/__tests__/Dictionary.test.js";
import "../collections/__tests__/Enumerable.test.js";
import "../collections/__tests__/Indexed.test.js";
import "../collections/__tests__/ReadonlyArray.test.js";
import "../collections/__tests__/ReadonlyMap.test.js";
import "../collections/__tests__/ReadonlyObjectMap.test.js";
import "../concurrent/__tests__/Observable.test.js";
import "../concurrent/__tests__/PauseableObservable.test.js";
import "../concurrent/__tests__/Scheduler.test.js";
import "../concurrent/__tests__/Stream.test.js";
import "../concurrent/__tests__/Streamable.test.js";
import "../concurrent/__tests__/Subject.test.js";
import "../concurrent/__tests__/VirtualTimeScheduler.test.js";
import "../events/__tests__/EventSource.test.js";
import "../events/__tests__/Publisher.test.js";
import "../events/__tests__/WritableStore.test.js";
import "../utils/__tests__/Disposable.test.js";
import "../utils/__tests__/Queue.test.js";
