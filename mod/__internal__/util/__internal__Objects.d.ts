import { Factory, Function1, Function2, Function3, Function4, Option } from "../../functions.mjs";
declare const Object_init: unique symbol;
declare const Object_properties: unique symbol;
declare const Object_prototype: unique symbol;
declare type OptionalProps<T> = T extends object ? {
    [P in keyof T]: T[P] extends object ? Option<T[P]> : T[P];
} : T;
declare type PartialMixin<_TReturn> = {
    [Object_properties]: object;
    [Object_prototype]: object;
};
interface MixinAny<TReturn> extends PartialMixin<TReturn> {
    [Object_init]: (instance: unknown, ...args: readonly any[]) => TReturn;
}
interface Mixin<TReturn> extends PartialMixin<TReturn> {
    [Object_init](instance: unknown): TReturn;
}
interface Mixin1<TReturn, TA> extends PartialMixin<TReturn> {
    [Object_init](instance: unknown, a: TA): TReturn;
}
interface Mixin2<TReturn, TA, TB> extends PartialMixin<TReturn> {
    [Object_init](instance: unknown, a: TA, b: TB): TReturn;
}
interface Mixin3<TReturn, TA, TB, TC> extends PartialMixin<TReturn> {
    [Object_init](instance: unknown, a: TA, b: TB, c: TC): TReturn;
}
interface Mixin4<TReturn, TA, TB, TC, TD> extends PartialMixin<TReturn> {
    [Object_init](instance: unknown, a: TA, b: TB, c: TC, d: TD): TReturn;
}
interface Init {
    <TReturn>(clazz: Mixin<TReturn>, instance: unknown): asserts instance is TReturn;
    <TReturn, TA>(clazz: Mixin1<TReturn, TA>, instance: unknown, a: TA): asserts instance is TReturn;
    <TReturn, TA, TB>(clazz: Mixin2<TReturn, TA, TB>, instance: unknown, a: TA, b: TB): asserts instance is TReturn;
    <TReturn, TA, TB, TC>(clazz: Mixin3<TReturn, TA, TB, TC>, instance: unknown, a: TA, b: TB, c: TC): asserts instance is TReturn;
}
declare const init: Init;
interface Extends {
    <TReturn0>(m0: PartialMixin<TReturn0>): PartialMixin<TReturn0>;
    <TReturn0, TReturn1>(m0: PartialMixin<TReturn0>, m1: PartialMixin<TReturn1>): PartialMixin<TReturn0 & TReturn1>;
    <TReturn0, TReturn1, TReturn2>(m0: PartialMixin<TReturn0>, m1: PartialMixin<TReturn1>, m2: PartialMixin<TReturn2>): PartialMixin<TReturn0 & TReturn1 & TReturn2>;
    <TReturn0, TReturn1, TReturn2, TReturn3>(m0: PartialMixin<TReturn0>, m1: PartialMixin<TReturn1>, m2: PartialMixin<TReturn2>, m3: PartialMixin<TReturn3>): PartialMixin<TReturn0 & TReturn1 & TReturn2 & TReturn3>;
}
declare const __extends: Extends;
interface Clazz {
    <TInit extends (instance: TPrototype, ...args: readonly any[]) => TReturn, TReturn, TProperties extends object, TPrototype extends object>(init: TInit, properties: OptionalProps<TProperties>, prototype: TPrototype): PartialMixin<TReturn> & {
        [Object_init]: TInit;
    };
    <TParentReturn, TInit extends (instance: TPrototype, ...args: readonly any[]) => TReturn, TReturn, TProperties extends object, TPrototype extends object>(parent: PartialMixin<TParentReturn>, init: TInit, properties: OptionalProps<TProperties>, prototype: TPrototype): PartialMixin<TReturn> & {
        [Object_init]: TInit;
    };
    <TParentReturn, TInit extends (instance: unknown, ...args: readonly any[]) => TParentReturn>(parent: PartialMixin<TParentReturn>, init: TInit): PartialMixin<TParentReturn> & {
        [Object_init]: TInit;
    };
}
declare const clazz: Clazz;
interface CreateInstanceFactory {
    <TReturn>(clazz: Mixin<TReturn>): Factory<TReturn>;
    <TReturn, TA>(clazz: Mixin1<TReturn, TA>): Function1<TA, TReturn>;
    <TReturn, TA, TB>(clazz: Mixin2<TReturn, TA, TB>): Function2<TA, TB, TReturn>;
    <TReturn, TA, TB, TC>(clazz: Mixin3<TReturn, TA, TB, TC>): Function3<TA, TB, TC, TReturn>;
    <TReturn, TA, TB, TC, TD>(clazz: Mixin4<TReturn, TA, TB, TC, TD>): Function4<TA, TB, TC, TD, TReturn>;
}
declare const createInstanceFactory: CreateInstanceFactory;
export { Mixin, Mixin1, Mixin2, Mixin3, Mixin4, MixinAny, PartialMixin, __extends, clazz, createInstanceFactory, init };
