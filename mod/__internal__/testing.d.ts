import { Equality, Factory, Function1, Optional, Predicate, SideEffect } from "../functions.js";
export declare const __DENO__: boolean;
export declare const DescribeType = 1;
export declare const TestType = 2;
export declare const TestAsyncType = 3;
export declare const TestDebugType = 4;
export type Describe = {
    readonly type: typeof DescribeType;
    readonly name: string;
    readonly tests: readonly TestGroup[];
};
export type Test = {
    readonly type: typeof TestType;
    readonly name: string;
    readonly f: Function1<string, SideEffect>;
};
export type TestDebug = {
    readonly type: typeof TestDebugType;
    readonly name: string;
    readonly f: Function1<string, SideEffect>;
};
export type TestAsync = {
    readonly type: typeof TestAsyncType;
    readonly name: string;
    readonly f: Function1<string, Factory<Promise<void>>>;
};
export type TestGroup = Describe | Test | TestAsync | TestDebug;
export declare const describe: (name: string, ...tests: TestGroup[]) => Describe;
export declare const test: (name: string, f: SideEffect) => Test;
export declare const testDebug: (name: string, f: SideEffect) => TestDebug;
export declare const testPredicateExpectingTrue: <T>(input: T, predicate: Predicate<T>) => any;
export declare const testPredicateExpectingFalse: <T>(input: T, predicate: Predicate<T>) => any;
export declare const testAsync: (name: string, f: Factory<Promise<void>>) => TestAsync;
export declare const expectToThrow: (f: SideEffect) => void;
export declare const expectToThrowAsync: (f: Factory<Promise<unknown>>) => Promise<void>;
export declare const expectToThrowError: (error: unknown) => (f: SideEffect) => void;
export declare const expectEquals: <T>(b: T, valueEquality?: <T_1>(a: T_1, b: T_1) => boolean) => (a: T) => void;
export declare const expectArrayEquals: <T>(b: readonly T[], { valuesEquality, }?: {
    valuesEquality: Equality<T>;
}) => (a: readonly T[]) => void;
export declare const expectArrayNotEquals: <T>(b: readonly T[], { valuesEquality, }?: {
    valuesEquality: Equality<T>;
}) => (a: readonly T[]) => void;
export declare const expectTrue: (v: boolean) => void;
export declare const expectFalse: (v: boolean) => void;
export declare const expectIsNone: (v: Optional) => void;
export declare const expectIsSome: (v: Optional) => void;
type MockFunction = {
    (...v: readonly unknown[]): any;
    readonly calls: readonly ReadonlyArray<any>[];
};
export declare const mockFn: (retval?: unknown) => MockFunction;
export declare const expectToHaveBeenCalledTimes: (times: number) => (fn: MockFunction) => void;
export declare const expectPromiseToThrow: (promise: PromiseLike<unknown>) => Promise<void>;
export declare const testModule: (name: string, ...testGroups: TestGroup[]) => void;
export declare const testDebugModule: (name: string, ...testGroups: TestGroup[]) => void;
export {};
