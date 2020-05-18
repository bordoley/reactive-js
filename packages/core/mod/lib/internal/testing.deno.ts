import { TestGroup, TestGroupType } from "./testing.ts";

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

export const runTests = (testGroups: TestGroup[]) => {
  for (const test of testGroups) {
    toDenoTest(test, []);
  }
};
