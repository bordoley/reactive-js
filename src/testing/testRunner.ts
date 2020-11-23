import { isDeno } from "../env";
import { TestGroup, TestGroupType } from "../testing";

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

const runTestsWithJest = (testGroups: readonly TestGroup[]) => {
  for (const test of testGroups) {
    toJestTest(test, []);
  }
};

declare var Deno: any;

const toDenoTest = (testGroup: TestGroup, parents: readonly string[]) => {
  const path = [...parents, testGroup.name];

  if (testGroup.type === TestGroupType.Describe) {
    const { tests } = testGroup;
    for (const test of tests) {
      toDenoTest(test, path);
    }
  } else {
    const name = path.join(":");
    Deno.test(name, testGroup.f(name));
  }
};

const runTestsWithDeno = (testGroups: TestGroup[]) => {
  for (const test of testGroups) {
    toDenoTest(test, []);
  }
};

export const runTests = (testGroups: TestGroup[]) => {
  if(isDeno) {
    runTestsWithDeno(testGroups);
  } else {
    runTestsWithJest(testGroups);
  }
}