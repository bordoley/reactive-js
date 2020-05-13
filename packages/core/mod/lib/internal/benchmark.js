export const benchmarkTest = (name, setup, run) => {
    const factory = async (data) => {
        const v = await setup(data);
        return () => run(v);
    };
    return { name, factory };
};
export const benchmarkGroup = (name, setup, ...tests) => ({ name, setup, tests });
