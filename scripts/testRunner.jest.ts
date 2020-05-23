/**
 * @jest-environment node
 */

import { tests as asyncEnumerableTests } from "../src/asyncEnumerable.test";
import { tests as disposableTests } from "../src/disposable.test";
import { tests as enumerableTests } from "../src/enumerable.test";
import { tests as httpTests } from "../src/experimental/http.test";
import { tests as parserCombinatorTests } from "../src/experimental/parserCombinators.test";
import { tests as reactiveCacheTests } from "../src/experimental/reactiveCache.test";
import { runTests } from "../src/experimental/testing.jest";
import { tests as flowableTests } from "../src/flowable.test";
import { tests as queuesTests } from "../src/internal/queues.test";
import { tests as ioTests } from "../src/io.test";
import { tests as nodeTests } from "../src/node.test";
import { tests as observableTests } from "../src/observable.test";
//import { tests as resourceManagerTests } from "./resourceManager.test";
import { tests as runnableTests } from "../src/runnable.test";
import { tests as sequenceTests } from "../src/sequence.test";
import { tests as stateStoreTests } from "../src/stateStore.test";
import { tests as streamableTests } from "../src/streamable.test";

const tests = [
  asyncEnumerableTests,
  disposableTests,
  enumerableTests,
  flowableTests,
  httpTests,
  ioTests,
  nodeTests,
  observableTests,
  parserCombinatorTests,
  queuesTests,
  reactiveCacheTests,
  //resourceManagerTests,
  runnableTests,
  sequenceTests,
  stateStoreTests,
  streamableTests,
];

runTests(tests);
