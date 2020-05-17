import { TestGroup, TestGroupType } from "./testing";

declare var Deno: any;

const toDenoTest = (testGroup: TestGroup, label = "") => {
  if (testGroup.type === TestGroupType.Describe) {
    const name =
      label.length > 0 ? `${label}:${testGroup.name}` : testGroup.name;
    const { tests } = testGroup;
    for (const test of tests) {
      toDenoTest(test, name);
    }
  } else {
    const name =
      label.length > 0 ? `${label} - ${testGroup.name}` : testGroup.name;
    Deno.test(name, testGroup.f);
  }
};

export const runTests = (testGroups: TestGroup[]) => {
  for (const test of testGroups) {
    toDenoTest(test);
  }
};
