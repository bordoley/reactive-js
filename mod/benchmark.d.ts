/// <reference types="node" />
import { Function1, SideEffect, Factory, SideEffect1 } from './functions';

declare type BenchmarkTest<TData> = {
    name: string;
    factory: Function1<TData, Promise<SideEffect>>;
};
declare type BenchmarkGroup<TData> = {
    name: string;
    setup: Factory<TData>;
    tests: readonly BenchmarkTest<TData>[];
};
declare const benchmarkTest: <TData, T>(name: string, setup: Function1<TData, Promise<T>>, run: SideEffect1<T>) => BenchmarkTest<TData>;
declare const benchmarkGroup: <TData>(name: string, setup: Factory<TData>, ...tests: readonly BenchmarkTest<TData>[]) => BenchmarkGroup<TData>;

export { BenchmarkGroup, BenchmarkTest, benchmarkGroup, benchmarkTest };
