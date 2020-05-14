import {
  TestGroup,
  TestGroupType,
} from "../packages/core/mod/lib/internal/testing.ts";

const toJestTest = (testGroup: TestGroup, label = "") => {
  if (testGroup.type === TestGroupType.Describe) {
    const name =
        label.length > 0 ? `${label}:${testGroup.name}` : testGroup.name;
    const { tests } = testGroup;
    for (const test of tests) {
      toJestTest(test, name);
    }
  } else {
    const name =
      label.length > 0 ? `${label} - ${testGroup.name}` : testGroup.name;
    Deno.test(name, testGroup.f);
  }
};

export const runTests = (testGroups: TestGroup[]) => {
  for (const test of testGroups) {
    toJestTest(test);
  }
};
