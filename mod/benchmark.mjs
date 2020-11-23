const benchmarkTest = (name, setup, run) => {
    const factory = async (data) => {
        const v = await setup(data);
        return () => run(v);
    };
    return { name, factory };
};
const benchmarkGroup = (name, setup, ...tests) => ({ name, setup, tests });

export { benchmarkGroup, benchmarkTest };
