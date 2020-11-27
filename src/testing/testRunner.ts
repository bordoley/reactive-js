import { __DENO__ } from "../env";
import { TestGroup, TestGroupType } from "../testing";

const createJasmineTests = (
  testGroup: TestGroup,
  parents: readonly string[],
) => {
  const path = [...parents, testGroup.name];

  if (testGroup.type === TestGroupType.Describe) {
    describe(testGroup.name, () => {
      const tests = testGroup.tests;
      for (const testGroup of tests) {
        createJasmineTests(testGroup, path);
      }
    });
  } else {
    const name = path.join(":");
    test(testGroup.name, testGroup.f(name));
  }
};

declare const Deno: any;

const createDenoTests = (testGroup: TestGroup, parents: readonly string[]) => {
  const path = [...parents, testGroup.name];

  if (testGroup.type === TestGroupType.Describe) {
    const { tests } = testGroup;
    for (const test of tests) {
      createDenoTests(test, path);
    }
  } else {
    const name = path.join(":");
    Deno.test(name, testGroup.f(name));
  }
};

export const runTests = (testGroups: TestGroup[]) => {
  if (__DENO__) {
    for (const test of testGroups) {
      createDenoTests(test, []);
    }
  } else {
    for (const test of testGroups) {
      createJasmineTests(test, []);
    }
  }
};
