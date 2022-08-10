import { Option, Factory, Function1, Function2, Function3, Function4 } from "../../functions.mjs";
declare const Object_init: unique symbol;
declare const Object_properties: unique symbol;
declare const Object_prototype: unique symbol;
declare type UnknownObject = Record<string | symbol | number, unknown>;
declare type EmptyObject = Record<string | symbol | number, never>;
declare type OptionalProps<T> = T extends object ? {
    [P in keyof T]: T[P] extends object ? Option<T[P]> : T[P];
} : T;
declare type TMixin<_TReturn> = {
    [Object_properties]: object;
    [Object_prototype]: object;
};
interface ClassAnyArgs<TReturn> {
    [Object_init]: (instance: unknown, ...args: readonly any[]) => asserts instance is TReturn;
    [Object_properties]: object;
    [Object_prototype]: object;
}
interface Class<TReturn> {
    [Object_init](instance: unknown): asserts instance is TReturn;
    [Object_properties]: object;
    [Object_prototype]: object;
}
interface Class1<TA, TReturn> {
    [Object_init](instance: unknown, a: TA): asserts instance is TReturn;
    [Object_properties]: object;
    [Object_prototype]: object;
}
interface Class2<TA, TB, TReturn> {
    [Object_init](instance: unknown, a: TA, b: TB): asserts instance is TReturn;
    [Object_properties]: object;
    [Object_prototype]: object;
}
interface Class3<TA, TB, TC, TReturn> {
    [Object_init](instance: unknown, a: TA, b: TB, c: TC): asserts instance is TReturn;
    [Object_properties]: object;
    [Object_prototype]: object;
}
interface Class4<TA, TB, TC, TD, TReturn> {
    [Object_init](instance: unknown, a: TA, b: TB, c: TC, d: TD): asserts instance is TReturn;
    [Object_properties]: object;
    [Object_prototype]: object;
}
interface Initable<TReturn> {
    [Object_init](instance: unknown): asserts instance is TReturn;
}
interface Initable1<TReturn, TA> {
    [Object_init](instance: unknown, a: TA): asserts instance is TReturn;
}
interface Initable2<TReturn, TA, TB> {
    [Object_init](instance: unknown, a: TA, b: TB): asserts instance is TReturn;
}
interface Initable3<TReturn, TA, TB, TC> {
    [Object_init](instance: unknown, a: TA, b: TB, c: TC): asserts instance is TReturn;
}
interface Init {
    <TReturn>(clazz: Initable<TReturn>, instance: unknown): asserts instance is TReturn;
    <TReturn, TA>(clazz: Initable1<TReturn, TA>, instance: unknown, a: TA): asserts instance is TReturn;
    <TReturn, TA, TB>(clazz: Initable2<TReturn, TA, TB>, instance: unknown, a: TA, b: TB): asserts instance is TReturn;
    <TReturn, TA, TB, TC>(clazz: Initable3<TReturn, TA, TB, TC>, instance: unknown, a: TA, b: TB, c: TC): asserts instance is TReturn;
}
declare const init: Init;
interface Extends {
    <TReturn0>(m0: TMixin<TReturn0>): TMixin<TReturn0>;
    <TReturn0, TReturn1>(m0: TMixin<TReturn0>, m1: TMixin<TReturn1>): TMixin<TReturn0 & TReturn1>;
    <TReturn0, TReturn1, TReturn2>(m0: TMixin<TReturn0>, m1: TMixin<TReturn1>, m2: TMixin<TReturn2>): TMixin<TReturn0 & TReturn1 & TReturn2>;
    <TReturn0, TReturn1, TReturn2, TReturn3>(m0: TMixin<TReturn0>, m1: TMixin<TReturn1>, m2: TMixin<TReturn2>, m3: TMixin<TReturn3>): TMixin<TReturn0 & TReturn1 & TReturn2 & TReturn3>;
}
declare const __extends: Extends;
interface Clazz {
    <TInit extends (instance: unknown, ...args: readonly any[]) => asserts instance is Partial<TProperties & TPrototype>, TProperties extends object = object, TPrototype extends object = object>(init: TInit, properties: OptionalProps<TProperties>, prototype: TPrototype): TMixin<ReturnType<TInit>> & {
        [Object_init]: TInit;
    };
    <TParentReturn, TInit extends (instance: unknown, ...args: readonly any[]) => asserts instance is Partial<TParentReturn & TProperties & TPrototype>, TProperties extends object, TPrototype extends object>(parent: TMixin<TParentReturn>, init: TInit, properties: OptionalProps<TProperties>, prototype: TPrototype): TMixin<ReturnType<TInit>> & {
        [Object_init]: TInit;
    };
    <TParentReturn, TInit extends (instance: unknown, ...args: readonly any[]) => asserts instance is Partial<TParentReturn & TProperties>, TProperties extends object>(parent: TMixin<TParentReturn>, init: TInit, properties: OptionalProps<TProperties>): TMixin<ReturnType<TInit>> & {
        [Object_init]: TInit;
    };
    <TParentReturn, TInit extends (instance: unknown, ...args: readonly any[]) => asserts instance is Partial<TParentReturn>>(parent: TMixin<TParentReturn>, init: TInit): TMixin<ReturnType<TInit>> & {
        [Object_init]: TInit;
    };
}
declare const clazz: Clazz;
interface CreateInstanceFactory {
    <TReturn>(clazz: Class<TReturn>): Factory<TReturn>;
    <TReturn, TA>(clazz: Class1<TA, TReturn>): Function1<TA, TReturn>;
    <TReturn, TA, TB>(clazz: Class2<TA, TB, TReturn>): Function2<TA, TB, TReturn>;
    <TReturn, TA, TB, TC>(clazz: Class3<TA, TB, TC, TReturn>): Function3<TA, TB, TC, TReturn>;
    <TReturn, TA, TB, TC, TD>(clazz: Class4<TA, TB, TC, TD, TReturn>): Function4<TA, TB, TC, TD, TReturn>;
}
declare const createInstanceFactory: CreateInstanceFactory;
export { Class, Class1, Class2, Class3, Class4, ClassAnyArgs, EmptyObject, Object_init, Object_properties, Object_prototype, OptionalProps, TMixin, UnknownObject, __extends, clazz, createInstanceFactory, init };
