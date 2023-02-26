import { Factory, Function1, Function2, Function3, Optional } from "../functions.js";
declare const Object_init: unique symbol;
declare const Object_properties: unique symbol;
declare const Object_prototype: unique symbol;
declare const Object_private_initializedProperties: unique symbol;
type OptionalProperties<T> = T extends object ? {
    [P in keyof T]: Optional<T[P]>;
} : T;
export type Mutable<Type> = {
    -readonly [Key in keyof Type]: Type[Key];
};
export type PartialMixin = {
    [Object_properties]: object;
    [Object_prototype]: object;
};
export interface MixinAny<TReturn> extends PartialMixin {
    [Object_init]: (instance: unknown, ...args: readonly any[]) => TReturn;
}
export interface Mixin<TReturn, TPrototype extends object = object> extends PartialMixin {
    [Object_init](instance: unknown): TReturn;
    [Object_prototype]: TPrototype;
}
export interface Mixin1<TReturn, TA, TPrototype extends object = object> extends PartialMixin {
    [Object_init](instance: unknown, a: TA): TReturn;
    [Object_prototype]: TPrototype;
}
export interface Mixin2<TReturn, TA, TB, TPrototype extends object = object> extends PartialMixin {
    [Object_init](instance: unknown, a: TA, b: TB): TReturn;
    [Object_prototype]: TPrototype;
}
export interface Mixin3<TReturn, TA, TB, TC, TPrototype extends object = object> extends PartialMixin {
    [Object_init](instance: unknown, a: TA, b: TB, c: TC): TReturn;
    [Object_prototype]: TPrototype;
}
interface Init {
    <TReturn>(mixin: Mixin<TReturn>, instance: unknown): asserts instance is TReturn;
    <TReturn, TA>(mixin: Mixin1<TReturn, TA>, instance: unknown, a: TA): asserts instance is TReturn;
    <TReturn, TA, TB>(mixin: Mixin2<TReturn, TA, TB>, instance: unknown, a: TA, b: TB): asserts instance is TReturn;
    <TReturn, TA, TB, TC>(mixin: Mixin3<TReturn, TA, TB, TC>, instance: unknown, a: TA, b: TB, c: TC): asserts instance is TReturn;
}
export declare const init: Init;
export declare const include: (m0: PartialMixin, ...tail: readonly PartialMixin[]) => PartialMixin;
interface CreateMixin {
    <TInit extends (instance: TPrototype & Mutable<TProperties>, ...args: readonly any[]) => unknown, TProperties extends {
        [Object_private_initializedProperties]?: true;
    }, TPrototype extends object>(init: TInit, properties: TProperties, prototype: TPrototype): PartialMixin & {
        [Object_init]: typeof init;
        [Object_prototype]: TPrototype;
    };
    <TInit extends (instance: TPrototype & Mutable<TProperties>, ...args: readonly any[]) => unknown, TProperties extends {
        [Object_private_initializedProperties]?: true;
    }, TPrototype extends object>(parent: PartialMixin, init: TInit, properties: TProperties, prototype: TPrototype): PartialMixin & {
        [Object_init]: TInit;
        [Object_prototype]: TPrototype;
    };
    <TInit extends (instance: unknown, ...args: readonly any[]) => unknown>(parent: PartialMixin, init: TInit): PartialMixin & {
        [Object_init]: TInit;
    };
}
export declare const mix: CreateMixin;
interface CreateInstanceFactory {
    <TReturn>(mixin: Mixin<TReturn>): Factory<TReturn>;
    <TReturn, TA>(mixin: Mixin1<TReturn, TA>): Function1<TA, TReturn>;
    <TReturn, TA, TB>(mixin: Mixin2<TReturn, TA, TB>): Function2<TA, TB, TReturn>;
    <TReturn, TA, TB, TC>(mixin: Mixin3<TReturn, TA, TB, TC>): Function3<TA, TB, TC, TReturn>;
}
export declare const createInstanceFactory: CreateInstanceFactory;
export declare const props: <TProperties>(o: OptionalProperties<TProperties>) => TProperties & {
    [Object_private_initializedProperties]?: true | undefined;
};
export declare const DelegatingLike_delegate: unique symbol;
export interface DelegatingLike<T> {
    readonly [DelegatingLike_delegate]: T;
}
export declare const delegatingMixin: <TDelegate>() => Mixin1<DelegatingLike<TDelegate>, TDelegate>;
export type MixinPrototype<TPrototype> = {
    [Object_prototype]: TPrototype;
};
export declare const getPrototype: <TPrototype>(mixin: MixinPrototype<TPrototype>) => TPrototype;
export {};
