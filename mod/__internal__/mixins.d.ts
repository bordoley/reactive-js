import { Factory, Function1, Function2, Function3, Function4, Function5, Function6, Optional } from "../functions.js";
export declare const Object_init: unique symbol;
export declare const Object_private_initializedProperties: unique symbol;
export declare const Object_properties: unique symbol;
export declare const Object_prototype: unique symbol;
type OptionalProperties<T> = T extends object ? {
    [P in keyof T]: Optional<T[P]>;
} : T;
export type Mutable<Type> = {
    -readonly [Key in keyof Type]: Type[Key];
};
export type PartialMixin<TPrototype extends object = object> = {
    [Object_properties]: object;
    [Object_prototype]: TPrototype;
};
export interface MixinAny<TReturn extends TInstance, TInstance = unknown> extends PartialMixin {
    [Object_init]: (instance: TInstance, ...args: readonly any[]) => TReturn;
}
export interface Mixin<TReturn extends TInstance, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Object_init](instance: TInstance): TReturn;
}
export interface Mixin1<TReturn extends TInstance, TA, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Object_init](instance: TInstance, a: TA): TReturn;
}
export interface Mixin2<TReturn extends TInstance, TA, TB, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Object_init](instance: TInstance, a: TA, b: TB): TReturn;
}
export interface Mixin3<TReturn extends TInstance, TA, TB, TC, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Object_init](instance: TInstance, a: TA, b: TB, c: TC): TReturn;
}
export interface Mixin4<TReturn extends TInstance, TA, TB, TC, TD, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Object_init](instance: TInstance, a: TA, b: TB, c: TC, d: TD): TReturn;
}
export interface Mixin5<TReturn extends TInstance, TA, TB, TC, TD, TE, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Object_init](instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE): TReturn;
}
export interface Mixin6<TReturn extends TInstance, TA, TB, TC, TD, TE, TF, TInstance = unknown, TPrototype extends object = object> extends PartialMixin<TPrototype> {
    [Object_init](instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): TReturn;
}
interface Init {
    init<TReturn extends TInstance, TInstance>(mixin: Mixin<TReturn, TInstance>, instance: TInstance): asserts instance is TReturn;
    init<TReturn extends TInstance, TA, TInstance>(mixin: Mixin1<TReturn, TA, TInstance>, instance: TInstance, a: TA): asserts instance is TReturn;
    init<TReturn extends TInstance, TA, TB, TInstance>(mixin: Mixin2<TReturn, TA, TB, TInstance>, instance: TInstance, a: TA, b: TB): asserts instance is TReturn;
    init<TReturn extends TInstance, TA, TB, TC, TInstance>(mixin: Mixin3<TReturn, TA, TB, TC, TInstance>, instance: TInstance, a: TA, b: TB, c: TC): asserts instance is TReturn;
    init<TReturn extends TInstance, TA, TB, TC, TD, TInstance>(mixin: Mixin4<TReturn, TA, TB, TC, TD, TInstance>, instance: TInstance, a: TA, b: TB, c: TC, d: TD): asserts instance is TReturn;
    init<TReturn extends TInstance, TA, TB, TC, TD, TE, TInstance>(mixin: Mixin5<TReturn, TA, TB, TC, TD, TE, TInstance>, instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE): asserts instance is TReturn;
    init<TReturn extends TInstance, TA, TB, TC, TD, TE, TF, TInstance>(mixin: Mixin6<TReturn, TA, TB, TC, TD, TE, TF, TInstance>, instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): asserts instance is TReturn;
}
export declare const init: Init["init"];
export declare const include: (m0: PartialMixin, ...tail: readonly PartialMixin[]) => PartialMixin;
interface Mix {
    mix<TInit extends (instance: TPrototype & Mutable<TProperties> & TInstance, ...args: readonly any[]) => unknown, TProperties extends {
        [Object_private_initializedProperties]?: true;
    }, TPrototype extends object, TInstance = unknown>(init: TInit, properties: TProperties, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Object_init]: typeof init;
    };
    mix<TInit extends (instance: TPrototype & Mutable<TProperties> & TInstance, ...args: readonly any[]) => unknown, TProperties extends {
        [Object_private_initializedProperties]?: true;
    }, TPrototype extends object, TInstance = unknown>(parent: PartialMixin, init: TInit, properties: TProperties, prototype: TPrototype): PartialMixin<TPrototype> & {
        [Object_init]: TInit;
    };
    mix<TInit extends (instance: TInstance, ...args: readonly any[]) => unknown, TInstance = unknown>(parent: PartialMixin, init: TInit): PartialMixin & {
        [Object_init]: TInit;
    };
    mix<TInit extends (instance: TInstance & Mutable<TProperties>, ...args: readonly any[]) => unknown, TProperties extends {
        [Object_private_initializedProperties]?: true;
    }, TInstance = unknown>(parent: PartialMixin, init: TInit, properties: TProperties): PartialMixin & {
        [Object_init]: TInit;
    };
}
export declare const mix: Mix["mix"];
interface CreateInstanceFactory {
    createInstanceFactory<TReturn>(mixin: Mixin<TReturn>): Factory<TReturn>;
    createInstanceFactory<TReturn, TA>(mixin: Mixin1<TReturn, TA>): Function1<TA, TReturn>;
    createInstanceFactory<TReturn, TA, TB>(mixin: Mixin2<TReturn, TA, TB>): Function2<TA, TB, TReturn>;
    createInstanceFactory<TReturn, TA, TB, TC>(mixin: Mixin3<TReturn, TA, TB, TC>): Function3<TA, TB, TC, TReturn>;
    createInstanceFactory<TReturn, TA, TB, TC, TD>(mixin: Mixin4<TReturn, TA, TB, TC, TD>): Function4<TA, TB, TC, TD, TReturn>;
    createInstanceFactory<TReturn, TA, TB, TC, TD, TE>(mixin: Mixin5<TReturn, TA, TB, TC, TD, TE>): Function5<TA, TB, TC, TD, TE, TReturn>;
    createInstanceFactory<TReturn, TA, TB, TC, TD, TE, TF>(mixin: Mixin6<TReturn, TA, TB, TC, TD, TE, TF>): Function6<TA, TB, TC, TD, TE, TF, TReturn>;
}
export declare const createInstanceFactory: CreateInstanceFactory["createInstanceFactory"];
export declare const props: <TProperties>(o: OptionalProperties<TProperties>) => TProperties & {
    [Object_private_initializedProperties]?: true | undefined;
};
export declare const getPrototype: <TPrototype extends object>(mixin: PartialMixin<TPrototype>) => TPrototype;
export declare function unsafeCast<T>(_v: unknown): asserts _v is T;
export {};
