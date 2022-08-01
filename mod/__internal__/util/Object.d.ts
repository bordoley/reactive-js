import { Function1, Factory, Function2, Function3, Function4, Option } from "../../functions.mjs";
declare const Object_init: unique symbol;
declare const Object_properties: unique symbol;
declare const Object_prototype: unique symbol;
declare type UnknownObject = Record<string | symbol | number, unknown>;
declare type PropertyTypeOf<T extends any[]> = T extends [
    infer F,
    ...infer R
] ? (F extends {
    [Object_properties]: unknown;
} ? F[typeof Object_properties] : never) & PropertyTypeOf<R> : unknown;
declare type OptionalProps<T> = T extends object ? {
    [P in keyof T]: T[P] extends object ? Option<T[P]> : T[P];
} : T;
declare type TMixin = {
    [Object_init](this: any, ...args: readonly any[]): void;
    [Object_properties]: object;
    [Object_prototype]: object;
};
interface Init {
    <TProperties, TPrototype>(clazz: {
        [Object_properties]: TProperties;
        [Object_init](this: TProperties & TPrototype): void;
    }, self: TProperties): void;
    <TProperties, TPrototype, TA>(clazz: {
        [Object_properties]: TProperties;
        [Object_init](this: TProperties & TPrototype, a: TA): void;
    }, self: TProperties, a: TA): void;
    <TProperties, TPrototype, TA, TB>(clazz: {
        [Object_properties]: TProperties;
        [Object_init](this: TProperties & TPrototype, a: TA, b: TB): void;
    }, self: TProperties, a: TA, b: TB): void;
    <TProperties, TPrototype, TA, TB, TC>(clazz: {
        [Object_properties]: TProperties;
        [Object_init](this: TProperties & TPrototype, a: TA, b: TB, c: TC): void;
    }, self: TProperties, a: TA, b: TB, c: TC): void;
}
declare const init: Init;
interface ObjectFactory {
    <TReturn>(): Function1<{
        [Object_init]: (this: any) => void;
        [Object_properties]: unknown;
        [Object_prototype]: object;
    }, Factory<TReturn>>;
    <TReturn, TA>(): Function1<{
        [Object_init]: (this: any, a: TA) => void;
        [Object_properties]: unknown;
        [Object_prototype]: object;
    }, Function1<TA, TReturn>>;
    <TReturn, TA, TB>(): Function1<{
        [Object_init]: (this: any, a: TA, b: TB) => void;
        [Object_properties]: unknown;
        [Object_prototype]: object;
    }, Function2<TA, TB, TReturn>>;
    <TReturn, TA, TB, TC>(): Function1<{
        [Object_init]: (this: any, a: TA, b: TB, c: TC) => void;
        [Object_properties]: unknown;
        [Object_prototype]: object;
    }, Function3<TA, TB, TC, TReturn>>;
    <TReturn, TA, TB, TC, TD>(): Function1<{
        [Object_init]: (this: any, a: TA, b: TB, c: TC, d: TD) => void;
        [Object_properties]: unknown;
        [Object_prototype]: object;
    }, Function4<TA, TB, TC, TD, TReturn>>;
}
declare const createObjectFactory: ObjectFactory;
interface MixWith {
    <TTMixin0 extends TMixin, TTMixin1 extends TMixin>(m0: TTMixin0): Function1<TTMixin1, {
        [Object_init]: TTMixin1[typeof Object_init];
        [Object_properties]: OptionalProps<TTMixin0[typeof Object_properties] & TTMixin1[typeof Object_properties]>;
        [Object_prototype]: TTMixin0[typeof Object_prototype] & TTMixin1[typeof Object_prototype];
    }>;
    <TTMixin0 extends TMixin, TTMixin1 extends TMixin, TTMixin2 extends TMixin>(m0: TTMixin0, m1: TTMixin1): Function1<TTMixin2, {
        [Object_init]: TTMixin2[typeof Object_init];
        [Object_properties]: OptionalProps<TTMixin0[typeof Object_properties] & TTMixin1[typeof Object_properties] & TTMixin2[typeof Object_properties]>;
        [Object_prototype]: TTMixin0[typeof Object_prototype] & TTMixin1[typeof Object_prototype] & TTMixin2[typeof Object_prototype];
    }>;
    <TTMixin0 extends TMixin, TTMixin1 extends TMixin, TTMixin2 extends TMixin, TTMixin3 extends TMixin>(m0: TTMixin0, m1: TTMixin1, m2: TTMixin2): Function1<TTMixin3, {
        [Object_init]: TTMixin3[typeof Object_init];
        [Object_properties]: OptionalProps<TTMixin0[typeof Object_properties] & TTMixin1[typeof Object_properties] & TTMixin2[typeof Object_properties] & TTMixin3[typeof Object_properties]>;
        [Object_prototype]: TTMixin0[typeof Object_prototype] & TTMixin1[typeof Object_prototype] & TTMixin2[typeof Object_prototype] & TTMixin3[typeof Object_prototype];
    }>;
}
declare const mixWith: MixWith;
declare const clazz: <TInit extends (this: any, ...args: readonly any[]) => void, TProperties extends object, TPrototype extends object>(init: TInit, properties: TProperties, prototype: TPrototype) => {
    [Object_init]: TInit;
    [Object_properties]: TProperties;
    [Object_prototype]: TPrototype;
};
export { Object_init, Object_properties, Object_prototype, PropertyTypeOf, UnknownObject, clazz, createObjectFactory, init, mixWith };
