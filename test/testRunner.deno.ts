import { runTests } from "../mod/experimental/testing.deno.ts";

import { tests as asyncEnumerableTests } from "../mod/asyncEnumerable.test.ts";
import { tests as disposableTests } from "../mod/disposable.test.ts";
import { tests as enumerableTests } from "../mod/enumerable.test.ts";
//import { tests as httpTests } from "../mod/experimental/http.test.ts";
import { tests as flowableTests } from "../mod/flowable.test.ts";
//import { tests as ioTests } from "./mod/io.test";
import { tests as queuesTests } from "../mod/internal/queues.test.ts";
import { tests as observableTests } from "../mod/observable.test.ts";
import { tests as parserCombinatorTests } from "../mod/experimental/parserCombinators.test.ts";
import { tests as reactiveCacheTests } from "../mod/experimental/reactiveCache.test.ts";
//import { tests as resourceManagerTests } from "./resourceManager.test";
import { tests as runnableTests } from "../mod/runnable.test.ts";
import { tests as sequenceTests } from "../mod/sequence.test.ts";
import { tests as stateStoreTests } from "../mod/stateStore.test.ts";
import { tests as streamableTests } from "../mod/streamable.test.ts";

const tests = [
  asyncEnumerableTests,
  disposableTests,
  enumerableTests,
  flowableTests,
  //httpTests,
  //ioTests,
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
