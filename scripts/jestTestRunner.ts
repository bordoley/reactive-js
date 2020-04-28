const toJestTest = (testGroup: any) => {
  if (testGroup.type === 1) {
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

export const runTests = (testGroups: any[]) => {
  for (const test of testGroups) {
    toJestTest(test);
  }
}