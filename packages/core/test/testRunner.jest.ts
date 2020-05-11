/**
 * @jest-environment node
 */

import { runTests } from "../../../scripts/jestTestRunner";
//import { tests as asyncEnumerableTests } from "./asyncEnumerable.test";
import { tests as disposableTests } from "./disposable.test";
import { tests as enumerableTests } from "./enumerable.test";
import { tests as flowableTests } from "./flowable.test";
//import { tests as queuesTests } from "./internal/queues.test";
//import { tests as nodeTests } from "./node.test";
import { tests as observableTests } from "./observable.test";
//import { tests as reactiveCacheTests } from "./reactiveCache.test";
//import { tests as resourceManagerTests } from "./resourceManager.test";
import { tests as stateStoreTests } from "./stateStore.test";
import { tests as streamableTests } from "./streamable.test";

export const tests = [
  //asyncEnumerableTests,
  disposableTests,
  enumerableTests,
  flowableTests,
  //nodeTests,
  observableTests,
  //queuesTests,
  //reactiveCacheTests,
  //resourceManagerTests,
  stateStoreTests,
  streamableTests,
];

runTests(tests);
