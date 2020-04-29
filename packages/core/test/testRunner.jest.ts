import { runTests } from "../../../scripts/jestTestRunner";
import { tests as asyncEnumerableTests } from "./asyncEnumerable.test";
import { tests as collectionTests } from "./collections.test";
import { tests as disposableTests } from "./disposable.test";
import { tests as enumerableTests } from "./enumerable.test";
import { tests as httpTests } from "./http.test";
import { tests as observableTests } from "./observable.test";
import { tests as parserCombinatorTests } from "./parserCombinators.test";
import { tests as reactiveCacheTests } from "./reactiveCache.test";
import { tests as resourceManagerTests } from "./resourceManager.test";
import { tests as streamableTests } from "./streamable.test";

export const tests = [
  asyncEnumerableTests,
  collectionTests,
  disposableTests,
  enumerableTests,
  httpTests,
  observableTests,
  parserCombinatorTests,
  reactiveCacheTests,
  resourceManagerTests,
  streamableTests,
];

runTests(tests);
