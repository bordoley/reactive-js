import { tests as asyncEnumerableTests } from "../mod/asyncEnumerable.test.mjs";
import { tests as disposableTests } from "../mod/disposable.test.mjs";
import { tests as enumerableTests } from "../mod/enumerable.test.mjs";
//import { tests as httpTests } from "../mod/experimental/http.test.mjs";
import { tests as parserCombinatorTests } from "../mod/parserCombinators.test.mjs";
import { tests as reactiveCacheTests } from "../mod/reactiveCache.test.mjs";
import { runTests } from "../mod/testing.deno.mjs";
import { tests as flowableTests } from "../mod/flowable.test.mjs";
//import { tests as ioTests } from "./mod/io.test";
import { tests as queuesTests } from "../mod/queues.test.mjs";
import { tests as observableTests } from "../mod/observable.test.mjs";
//import { tests as resourceManagerTests } from "./resourceManager.test";
import { tests as runnableTests } from "../mod/runnable.test.mjs";
import { tests as sequenceTests } from "../mod/sequence.test.mjs";
import { tests as stateStoreTests } from "../mod/stateStore.test.mjs";
import { tests as streamableTests } from "../mod/streamable.test.mjs";

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
