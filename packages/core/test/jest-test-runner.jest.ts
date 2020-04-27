import { TestGroup, TestGroupType } from "../src/testing";
import { tests as collectionTests } from "./collections.test";
import { tests as enumerableTests } from "./enumerable.test";
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

toJestTest(collectionTests);
toJestTest(enumerableTests);
toJestTest(streamableTests);
