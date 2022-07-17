import { Option } from '../util/Option.js';
import { Function1, SideEffect, Factory, Equality } from '../util/functions.js';
declare const DescribeType = 1;
declare const TestType = 2;
declare const TestAsyncType = 3;
declare type Describe = {
    readonly type: typeof DescribeType;
    readonly name: string;
    readonly tests: readonly TestGroup[];
};
declare type Test = {
    readonly type: typeof TestType;
    readonly name: string;
    readonly f: Function1<string, SideEffect>;
};
declare type TestAsync = {
    readonly type: typeof TestAsyncType;
    readonly name: string;
    readonly f: Function1<string, Factory<Promise<void>>>;
};
declare type TestGroup = Describe | Test | TestAsync;
declare const createDescribe: (name: string, ...tests: TestGroup[]) => Describe;
declare const createTest: (name: string, f: SideEffect) => Test;
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
declare const runTests: (testGroups: TestGroup[]) => void;
export { Describe, DescribeType, Test, TestAsync, TestAsyncType, TestGroup, TestType, createDescribe as describe, expectArrayEquals, expectEquals, expectFalse, expectNone, expectPromiseToThrow, expectSome, expectToHaveBeenCalledTimes, expectToThrow, expectToThrowError, expectTrue, mockFn, runTests, createTest as test, testAsync };
