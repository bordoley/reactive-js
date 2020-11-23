/// <reference types="node" />
import { Function1, SideEffect, Factory, Equality } from './functions';
import { Option } from './option';

declare const runTests: (testGroups: TestGroup[]) => void;

declare const enum TestGroupType {
    Describe = 1,
    Test = 2,
    TestAsync = 3
}
declare type Describe = {
    readonly type: TestGroupType.Describe;
    readonly name: string;
    readonly tests: readonly TestGroup[];
};
declare type Test = {
    readonly type: TestGroupType.Test;
    readonly name: string;
    readonly f: Function1<string, SideEffect>;
};
declare type TestAsync = {
    readonly type: TestGroupType.TestAsync;
    readonly name: string;
    readonly f: Function1<string, Factory<Promise<void>>>;
};
declare type TestGroup = Describe | Test | TestAsync;
declare const describe: (name: string, ...tests: TestGroup[]) => Describe;
declare const test: (name: string, f: SideEffect) => Test;
declare const testAsync: (name: string, f: Factory<Promise<void>>) => TestAsync;
declare const expectToThrow: (f: SideEffect) => void;
declare const expectToThrowError: (error: unknown) => (f: SideEffect) => void;
declare const expectEquals: <T>(b: T, valueEquality?: <T_1>(a: T_1, b: T_1) => boolean) => (a: T) => void;
declare const expectArrayEquals: <T>(b: readonly T[], valueEquality?: Equality<T>) => (a: readonly T[]) => void;
declare const expectTrue: (v: boolean) => void;
declare const expectFalse: (v: boolean) => void;
declare const expectNone: (v: Option<unknown>) => void;
declare const expectSome: (v: Option<unknown>) => void;
declare type MockFunction = {
    (...v: readonly any[]): any;
    readonly calls: readonly ReadonlyArray<any>[];
};
declare const mockFn: (retval?: any) => MockFunction;
declare const expectToHaveBeenCalledTimes: (times: number) => (fn: MockFunction) => void;
declare const expectPromiseToThrow: (promise: Promise<any>) => Promise<void>;

export { Describe, Test, TestAsync, TestGroup, TestGroupType, describe, expectArrayEquals, expectEquals, expectFalse, expectNone, expectPromiseToThrow, expectSome, expectToHaveBeenCalledTimes, expectToThrow, expectToThrowError, expectTrue, mockFn, runTests, test, testAsync };
