import { runTests } from "../mod/lib/internal/testing.deno.ts";

import { tests as asyncEnumerableTests } from "../mod/test/asyncEnumerable.test.ts";
import { tests as disposableTests } from "../mod/test/disposable.test.ts";
import { tests as enumerableTests } from "../mod/test/enumerable.test.ts";
import { tests as flowableTests } from "../mod/test/flowable.test.ts";
//import { tests as ioTests } from "./src/test/io.test";
import { tests as parserCombinatorTests } from "../mod/test/internal/parserCombinators.test.ts";
import { tests as queuesTests } from "../mod/test/internal/queues.test.ts";
import { tests as observableTests } from "../mod/test/observable.test.ts";
//import { tests as reactiveCacheTests } from "./reactiveCache.test";
//import { tests as resourceManagerTests } from "./resourceManager.test";
import { tests as runnableTests } from "../mod/test/runnable.test.ts";
import { tests as sequenceTests } from "../src/test/sequence.test.ts";
import { tests as stateStoreTests } from "../mod/test/stateStore.test.ts";
import { tests as streamableTests } from "../mod/test/streamable.test.ts";

const tests = [
  asyncEnumerableTests,
  disposableTests,
  enumerableTests,
  flowableTests,
  observableTests,
  parserCombinatorTests,
  queuesTests,
  //reactiveCacheTests,
  //resourceManagerTests,
  runnableTests,
  sequenceTests,
  stateStoreTests,
  streamableTests,
];

runTests(tests);
