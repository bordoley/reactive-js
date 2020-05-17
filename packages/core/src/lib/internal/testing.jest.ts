import {
  TestGroup,
  TestGroupType,
} from "./testing";

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

export const runTests = (testGroups: TestGroup[]) => {
  for (const test of testGroups) {
    toJestTest(test);
  }
};
