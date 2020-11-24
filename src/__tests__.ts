import { tests as asyncEnumerableTests } from "./__tests__/asyncEnumerable.test";
import { tests as disposableTests } from "./__tests__/disposable.test";
import { tests as enumerableTests } from "./__tests__/enumerable.test";
import { tests as flowableTests } from "./__tests__/flowable.test";
import { tests as httpTests } from "./__tests__/http.test";
import { tests as ioTests } from "./__tests__/io.test";
//import { tests as nodeTests } from "../src/node.test";
import { tests as observableTests } from "./__tests__/observable.test";
import { tests as parserCombinatorTests } from "./__tests__/parserCombinators.test";
import { tests as queuesTests } from "./__tests__/queues.test";
import { tests as reactiveCacheTests } from "./__tests__/reactiveCache.test";
//import { tests as resourceManagerTests } from "./resourceManager.test";
import { tests as runnableTests } from "./__tests__/runnable.test";
import { tests as sequenceTests } from "./__tests__/sequence.test";
import { tests as stateStoreTests } from "./__tests__/stateStore.test";
import { tests as streamableTests } from "./__tests__/streamable.test";

export const tests = [
  asyncEnumerableTests,
  disposableTests,
  enumerableTests,
  flowableTests,
  httpTests,
  ioTests,
  //nodeTests
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
