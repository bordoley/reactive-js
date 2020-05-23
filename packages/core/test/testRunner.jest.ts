/**
 * @jest-environment node
 */

import { runTests } from "../src/lib/experimental/testing.jest";

import { tests as asyncEnumerableTests } from "../src/test/asyncEnumerable.test";
import { tests as disposableTests } from "../src/test/disposable.test";
import { tests as enumerableTests } from "../src/test/enumerable.test";
import { tests as parserCombinatorTests } from "../src/test/experimental/parserCombinators.test";
import { tests as flowableTests } from "../src/test/flowable.test";
import { tests as queuesTests } from "../src/test/internal/queues.test";
import { tests as ioTests } from "../src/test/io.test";
import { tests as nodeTests } from "../src/test/node.test";
import { tests as observableTests } from "../src/test/observable.test";
import { tests as reactiveCacheTests } from "../src/test/reactiveCache.test";
//import { tests as resourceManagerTests } from "./resourceManager.test";
import { tests as runnableTests } from "../src/test/runnable.test";
import { tests as sequenceTests } from "../src/test/sequence.test";
import { tests as stateStoreTests } from "../src/test/stateStore.test";
import { tests as streamableTests } from "../src/test/streamable.test";

const tests = [
  asyncEnumerableTests,
  disposableTests,
  enumerableTests,
  flowableTests,
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
