import { TestGroup, TestGroupType } from "./testing";

const toJestTest = (testGroup: TestGroup, parents: readonly string[]) => {
  const path = [...parents, testGroup.name];

  if (testGroup.type === TestGroupType.Describe) {
    describe(testGroup.name, () => {
      const tests = testGroup.tests;
      for (const testGroup of tests) {
        toJestTest(testGroup, path);
      }
    });
  } else {
    const name = path.join(":");
    test(testGroup.name, testGroup.f(name));
  }
};

export const runTests = (testGroups: TestGroup[]) => {
  for (const test of testGroups) {
    toJestTest(test, []);
  }
};
