import { Factory, Function1, Function2, Function3, Function4, Function5, Function6, Optional } from "../functions.js";
import { __Object_init, __Object_private_initializedProperties, __Object_properties, __Object_prototype } from "./symbols.js";
type OptionalProperties<T> = T extends object ? {
    [P in keyof T]: Optional<T[P]>;
} : T;
export type Mutable<Type> = {
    -readonly [Key in keyof Type]: Type[Key];
};
export type PartialMixin = {
    [__Object_properties]: object;
    [__Object_prototype]: object;
};
export interface MixinAny<TReturn extends TInstance, TInstance = unknown> extends PartialMixin {
    [__Object_init]: (instance: TInstance, ...args: readonly any[]) => TReturn;
}
export interface Mixin<TReturn extends TInstance, TInstance = unknown, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: TInstance): TReturn;
    [__Object_prototype]: TPrototype;
}
export interface Mixin1<TReturn extends TInstance, TA, TInstance = unknown, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: TInstance, a: TA): TReturn;
    [__Object_prototype]: TPrototype;
}
export interface Mixin2<TReturn extends TInstance, TA, TB, TInstance = unknown, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: TInstance, a: TA, b: TB): TReturn;
    [__Object_prototype]: TPrototype;
}
export interface Mixin3<TReturn extends TInstance, TA, TB, TC, TInstance = unknown, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: TInstance, a: TA, b: TB, c: TC): TReturn;
    [__Object_prototype]: TPrototype;
}
export interface Mixin4<TReturn extends TInstance, TA, TB, TC, TD, TInstance = unknown, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: TInstance, a: TA, b: TB, c: TC, d: TD): TReturn;
    [__Object_prototype]: TPrototype;
}
export interface Mixin5<TReturn extends TInstance, TA, TB, TC, TD, TE, TInstance = unknown, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE): TReturn;
    [__Object_prototype]: TPrototype;
}
export interface Mixin6<TReturn extends TInstance, TA, TB, TC, TD, TE, TF, TInstance = unknown, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): TReturn;
    [__Object_prototype]: TPrototype;
}
interface Init {
    init<TReturn extends TInstance, TInstance = unknown>(mixin: Mixin<TReturn, TInstance>, instance: TInstance): asserts instance is TReturn;
    init<TReturn extends TInstance, TA, TInstance = unknown>(mixin: Mixin1<TReturn, TA, TInstance>, instance: TInstance, a: TA): asserts instance is TReturn;
    init<TReturn extends TInstance, TA, TB, TInstance = unknown>(mixin: Mixin2<TReturn, TA, TB, TInstance>, instance: TInstance, a: TA, b: TB): asserts instance is TReturn;
    init<TReturn extends TInstance, TA, TB, TC, TInstance = unknown>(mixin: Mixin3<TReturn, TA, TB, TC, TInstance>, instance: TInstance, a: TA, b: TB, c: TC): asserts instance is TReturn;
    init<TReturn extends TInstance, TA, TB, TC, TD, TInstance = unknown>(mixin: Mixin4<TReturn, TA, TB, TC, TD, TInstance>, instance: TInstance, a: TA, b: TB, c: TC, d: TD): asserts instance is TReturn;
    init<TReturn extends TInstance, TA, TB, TC, TD, TE, TInstance = unknown>(mixin: Mixin5<TReturn, TA, TB, TC, TD, TE, TInstance>, instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE): asserts instance is TReturn;
    init<TReturn extends TInstance, TA, TB, TC, TD, TE, TF, TInstance = unknown>(mixin: Mixin6<TReturn, TA, TB, TC, TD, TE, TF, TInstance>, instance: TInstance, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): asserts instance is TReturn;
}
export declare const init: Init["init"];
export declare const include: (m0: PartialMixin, ...tail: readonly PartialMixin[]) => PartialMixin;
interface Mix {
    mix<TInit extends (instance: TPrototype & Mutable<TProperties> & TInstance, ...args: readonly any[]) => unknown, TProperties extends {
        [__Object_private_initializedProperties]?: true;
    }, TPrototype extends object, TInstance = unknown>(init: TInit, properties: TProperties, prototype: TPrototype): PartialMixin & {
        [__Object_init]: typeof init;
        [__Object_prototype]: TPrototype;
    };
    mix<TInit extends (instance: TPrototype & Mutable<TProperties> & TInstance, ...args: readonly any[]) => unknown, TProperties extends {
        [__Object_private_initializedProperties]?: true;
    }, TPrototype extends object, TInstance = unknown>(parent: PartialMixin, init: TInit, properties: TProperties, prototype: TPrototype): PartialMixin & {
        [__Object_init]: TInit;
        [__Object_prototype]: TPrototype;
    };
    mix<TInit extends (instance: TInstance, ...args: readonly any[]) => unknown, TInstance = unknown>(parent: PartialMixin, init: TInit): PartialMixin & {
        [__Object_init]: TInit;
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
    [__Object_private_initializedProperties]?: true | undefined;
};
export type MixinPrototype<TPrototype> = {
    [__Object_prototype]: TPrototype;
};
export declare const getPrototype: <TPrototype>(mixin: MixinPrototype<TPrototype>) => TPrototype;
export {};
