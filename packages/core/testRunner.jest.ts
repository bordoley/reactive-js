/**
 * @jest-environment node
 */

import { runTests } from "../../scripts/jestTestRunner";

import { tests as asyncEnumerableTests } from "./src/test/asyncEnumerable.test";
import { tests as disposableTests } from "./src/test/disposable.test";
import { tests as enumerableTests } from "./src/test/enumerable.test";
import { tests as flowableTests } from "./src/test/flowable.test";
import { tests as queuesTests } from "./src/test/internal/queues.test";
import { tests as nodeTests } from "./src/test/node.test";
import { tests as observableTests } from "./src/test/observable.test";
import { tests as parserCombinatorTests } from "./src/test/internal/parserCombinators.test";
//import { tests as reactiveCacheTests } from "./reactiveCache.test";
//import { tests as resourceManagerTests } from "./resourceManager.test";
import { tests as stateStoreTests } from "./src/test/stateStore.test";
import { tests as streamableTests } from "./src/test/streamable.test";

const tests = [
  asyncEnumerableTests,
  disposableTests,
  enumerableTests,
  flowableTests,
  nodeTests,
  observableTests,
  parserCombinatorTests,
  queuesTests,
  //reactiveCacheTests,
  //resourceManagerTests,
  stateStoreTests,
  streamableTests,
];

runTests(tests);
