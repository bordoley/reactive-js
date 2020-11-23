'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const benchmarkTest = (name, setup, run) => {
    const factory = async (data) => {
        const v = await setup(data);
        return () => run(v);
    };
    return { name, factory };
};
const benchmarkGroup = (name, setup, ...tests) => ({ name, setup, tests });

exports.benchmarkGroup = benchmarkGroup;
exports.benchmarkTest = benchmarkTest;
