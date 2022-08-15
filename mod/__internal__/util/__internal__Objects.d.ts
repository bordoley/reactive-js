import { Option, Factory, Function1, Function2, Function3, Function4 } from "../../functions.mjs";
declare const Object_init: unique symbol;
declare const Object_properties: unique symbol;
declare const Object_prototype: unique symbol;
declare const Object_private_initializedProperties: unique symbol;
declare type OptionalProperties<T> = T extends object ? {
    [P in keyof T]: Option<T[P]>;
} : T;
declare type Mutable<Type> = {
    -readonly [Key in keyof Type]: Type[Key];
};
declare type PartialMixin = {
    [Object_properties]: object;
    [Object_prototype]: object;
};
interface MixinAny<TReturn> extends PartialMixin {
    [Object_init]: (instance: unknown, ...args: readonly any[]) => TReturn;
}
interface Mixin<TReturn> extends PartialMixin {
    [Object_init](instance: unknown): TReturn;
}
interface Mixin1<TReturn, TA> extends PartialMixin {
    [Object_init](instance: unknown, a: TA): TReturn;
}
interface Mixin2<TReturn, TA, TB> extends PartialMixin {
    [Object_init](instance: unknown, a: TA, b: TB): TReturn;
}
interface Mixin3<TReturn, TA, TB, TC> extends PartialMixin {
    [Object_init](instance: unknown, a: TA, b: TB, c: TC): TReturn;
}
interface Mixin4<TReturn, TA, TB, TC, TD> extends PartialMixin {
    [Object_init](instance: unknown, a: TA, b: TB, c: TC, d: TD): TReturn;
}
interface Init {
    <TReturn>(mixin: Mixin<TReturn>, instance: unknown): asserts instance is TReturn;
    <TReturn, TA>(mixin: Mixin1<TReturn, TA>, instance: unknown, a: TA): asserts instance is TReturn;
    <TReturn, TA, TB>(mixin: Mixin2<TReturn, TA, TB>, instance: unknown, a: TA, b: TB): asserts instance is TReturn;
    <TReturn, TA, TB, TC>(mixin: Mixin3<TReturn, TA, TB, TC>, instance: unknown, a: TA, b: TB, c: TC): asserts instance is TReturn;
}
declare const init: Init;
declare const include: (m0: PartialMixin, ...tail: readonly PartialMixin[]) => PartialMixin;
interface CreateMixin {
    <TInit extends (instance: TPrototype & Mutable<TProperties>, ...args: readonly any[]) => unknown, TProperties extends {
        [Object_private_initializedProperties]?: true;
    }, TPrototype extends object>(init: TInit, properties: TProperties, prototype: TPrototype): PartialMixin & {
        [Object_init]: typeof init;
    };
    <TInit extends (instance: TPrototype & Mutable<TProperties>, ...args: readonly any[]) => unknown, TProperties extends {
        [Object_private_initializedProperties]?: true;
    }, TPrototype extends object>(parent: PartialMixin, init: TInit, properties: TProperties, prototype: TPrototype): PartialMixin & {
        [Object_init]: TInit;
    };
    <TInit extends (instance: unknown, ...args: readonly any[]) => unknown>(parent: PartialMixin, init: TInit): PartialMixin & {
        [Object_init]: TInit;
    };
}
declare const mixin: CreateMixin;
interface CreateInstanceFactory {
    <TReturn>(mixin: Mixin<TReturn>): Factory<TReturn>;
    <TReturn, TA>(mixin: Mixin1<TReturn, TA>): Function1<TA, TReturn>;
    <TReturn, TA, TB>(mixin: Mixin2<TReturn, TA, TB>): Function2<TA, TB, TReturn>;
    <TReturn, TA, TB, TC>(mixin: Mixin3<TReturn, TA, TB, TC>): Function3<TA, TB, TC, TReturn>;
    <TReturn, TA, TB, TC, TD>(mixin: Mixin4<TReturn, TA, TB, TC, TD>): Function4<TA, TB, TC, TD, TReturn>;
}
declare const createInstanceFactory: CreateInstanceFactory;
declare const props: <TProperties>(o: OptionalProperties<TProperties>) => TProperties & {
    [Object_private_initializedProperties]?: true | undefined;
};
export { Mixin, Mixin1, Mixin2, Mixin3, Mixin4, MixinAny, Mutable, PartialMixin, createInstanceFactory, include, init, mixin, props };
