const toDenoTest = (testGroup, label = "") => {
    if (testGroup.type === 1) {
        const name = label.length > 0 ? `${label}:${testGroup.name}` : testGroup.name;
        const { tests } = testGroup;
        for (const test of tests) {
            toDenoTest(test, name);
        }
    }
    else {
        const name = label.length > 0 ? `${label} - ${testGroup.name}` : testGroup.name;
        Deno.test(name, testGroup.f);
    }
};
export const runTests = (testGroups) => {
    for (const test of testGroups) {
        toDenoTest(test);
    }
};
