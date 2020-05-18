const toDenoTest = (testGroup, parents) => {
    const path = [...parents, testGroup.name];
    if (testGroup.type === 1) {
        const { tests } = testGroup;
        for (const test of tests) {
            toDenoTest(test, path);
        }
    }
    else {
        const name = path.join(":");
        Deno.test(name, testGroup.f(name));
    }
};
export const runTests = (testGroups) => {
    for (const test of testGroups) {
        toDenoTest(test, []);
    }
};
