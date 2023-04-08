import { Factory, Function1, Function2, Function3, Function4, Function5, Function6, Optional } from "../functions.js";
import { __DelegatingLike_delegate as DelegatingLike_delegate, __Object_init, __Object_private_initializedProperties, __Object_properties, __Object_prototype } from "./symbols.js";
export { DelegatingLike_delegate };
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
export interface MixinAny<TReturn> extends PartialMixin {
    [__Object_init]: (instance: unknown, ...args: readonly any[]) => TReturn;
}
export interface Mixin<TReturn, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: unknown): TReturn;
    [__Object_prototype]: TPrototype;
}
export interface Mixin1<TReturn, TA, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: unknown, a: TA): TReturn;
    [__Object_prototype]: TPrototype;
}
export interface Mixin2<TReturn, TA, TB, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: unknown, a: TA, b: TB): TReturn;
    [__Object_prototype]: TPrototype;
}
export interface Mixin3<TReturn, TA, TB, TC, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: unknown, a: TA, b: TB, c: TC): TReturn;
    [__Object_prototype]: TPrototype;
}
export interface Mixin4<TReturn, TA, TB, TC, TD, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: unknown, a: TA, b: TB, c: TC, d: TD): TReturn;
    [__Object_prototype]: TPrototype;
}
export interface Mixin5<TReturn, TA, TB, TC, TD, TE, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: unknown, a: TA, b: TB, c: TC, d: TD, e: TE): TReturn;
    [__Object_prototype]: TPrototype;
}
export interface Mixin6<TReturn, TA, TB, TC, TD, TE, TF, TPrototype extends object = object> extends PartialMixin {
    [__Object_init](instance: unknown, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): TReturn;
    [__Object_prototype]: TPrototype;
}
interface Init {
    init<TReturn>(mixin: Mixin<TReturn>, instance: unknown): asserts instance is TReturn;
    init<TReturn, TA>(mixin: Mixin1<TReturn, TA>, instance: unknown, a: TA): asserts instance is TReturn;
    init<TReturn, TA, TB>(mixin: Mixin2<TReturn, TA, TB>, instance: unknown, a: TA, b: TB): asserts instance is TReturn;
    init<TReturn, TA, TB, TC>(mixin: Mixin3<TReturn, TA, TB, TC>, instance: unknown, a: TA, b: TB, c: TC): asserts instance is TReturn;
    init<TReturn, TA, TB, TC, TD>(mixin: Mixin4<TReturn, TA, TB, TC, TD>, instance: unknown, a: TA, b: TB, c: TC, d: TD): asserts instance is TReturn;
    init<TReturn, TA, TB, TC, TD, TE>(mixin: Mixin5<TReturn, TA, TB, TC, TD, TE>, instance: unknown, a: TA, b: TB, c: TC, d: TD, e: TE): asserts instance is TReturn;
    init<TReturn, TA, TB, TC, TD, TE, TF>(mixin: Mixin6<TReturn, TA, TB, TC, TD, TE, TF>, instance: unknown, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): asserts instance is TReturn;
}
export declare const init: Init["init"];
export declare const include: (m0: PartialMixin, ...tail: readonly PartialMixin[]) => PartialMixin;
interface CreateMixin {
    create<TInit extends (instance: TPrototype & Mutable<TProperties>, ...args: readonly any[]) => unknown, TProperties extends {
        [__Object_private_initializedProperties]?: true;
    }, TPrototype extends object>(init: TInit, properties: TProperties, prototype: TPrototype): PartialMixin & {
        [__Object_init]: typeof init;
        [__Object_prototype]: TPrototype;
    };
    create<TInit extends (instance: TPrototype & Mutable<TProperties>, ...args: readonly any[]) => unknown, TProperties extends {
        [__Object_private_initializedProperties]?: true;
    }, TPrototype extends object>(parent: PartialMixin, init: TInit, properties: TProperties, prototype: TPrototype): PartialMixin & {
        [__Object_init]: TInit;
        [__Object_prototype]: TPrototype;
    };
    create<TInit extends (instance: unknown, ...args: readonly any[]) => unknown>(parent: PartialMixin, init: TInit): PartialMixin & {
        [__Object_init]: TInit;
    };
}
export declare const mix: CreateMixin["create"];
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
export interface DelegatingLike<T> {
    readonly [DelegatingLike_delegate]: T;
}
export declare const delegatingMixin: <TDelegate>() => Mixin1<DelegatingLike<TDelegate>, TDelegate>;
export type MixinPrototype<TPrototype> = {
    [__Object_prototype]: TPrototype;
};
export declare const getPrototype: <TPrototype>(mixin: MixinPrototype<TPrototype>) => TPrototype;
