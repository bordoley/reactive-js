/// <reference types="./isomorphic.tests.d.ts" />

/**
 * @jest-environment node
 */
import "./computations.test.js";
import "./functions.test.js";
import "../concurrent/__tests__/Observable.test.js";
import "../concurrent/__tests__/ReplayPublisher.test.js";
import "../concurrent/__tests__/VirtualTimeScheduler.test.js";
import "../utils/__tests__/Disposable.test.js";
import "../events/__tests__/WritableStore.test.js";
