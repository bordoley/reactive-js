import { TestGroup, TestGroupType } from "../src/testing";
import { tests as asyncEnumerableTests } from "./async-enumerable.test";
import { tests as collectionTests } from "./collections.test";
import { tests as disposableTests } from "./disposable.test";
import { tests as enumerableTests } from "./enumerable.test";
import { tests as httpTests } from "./http.test";
import { tests as observableTests } from "./observable.test";
import { tests as parserCombinatorTests } from "./parser-combinators.test";
import { tests as reactiveCacheTests } from "./reactive-cache.test";
import { tests as resourceManagerTests } from "./resource-manager.test";
import { tests as streamableTests } from "./streamable.test";


const toJestTest = (testGroup: TestGroup) => {
  if (testGroup.type === TestGroupType.Describe) {
    describe(testGroup.name, () => {
      const tests = testGroup.tests;
      for (const testGroup of tests) {
        toJestTest(testGroup);
      }
    });
  } else {
    test(testGroup.name, testGroup.f);
  }
};

toJestTest(asyncEnumerableTests);
toJestTest(collectionTests);
toJestTest(disposableTests);
toJestTest(enumerableTests);
toJestTest(httpTests);
toJestTest(observableTests);
toJestTest(parserCombinatorTests);
toJestTest(reactiveCacheTests);
toJestTest(resourceManagerTests);
toJestTest(streamableTests);
