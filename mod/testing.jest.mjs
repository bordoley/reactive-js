const toJestTest = (testGroup, parents) => {
    const path = [...parents, testGroup.name];
    if (testGroup.type === 1 /* Describe */) {
        describe(testGroup.name, () => {
            const tests = testGroup.tests;
            for (const testGroup of tests) {
                toJestTest(testGroup, path);
            }
        });
    }
    else {
        const name = path.join(":");
        test(testGroup.name, testGroup.f(name));
    }
};
const runTests = (testGroups) => {
    for (const test of testGroups) {
        toJestTest(test, []);
    }
};

export { runTests };
