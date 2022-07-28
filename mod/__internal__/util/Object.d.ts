import { Function1, Factory, Function2, Function3, Function4, Option } from "../../functions.mjs";
declare const Object_init: unique symbol;
declare const Object_properties: unique symbol;
declare type PropertyTypeOf<T extends any[]> = T extends [
    infer F,
    ...infer R
] ? (F extends {
    [Object_properties]: unknown;
} ? F[typeof Object_properties] : never) & PropertyTypeOf<R> : unknown;
declare type OptionalProps<T> = T extends object ? {
    [P in keyof T]: T[P] extends object ? Option<T[P]> : T[P];
} : T;
interface Init {
    <TProperties>(mixin: {
        [Object_properties]: TProperties;
        [Object_init](this: TProperties): void;
    }, self: TProperties): void;
    <TProperties, TA>(mixin: {
        [Object_properties]: TProperties;
        [Object_init](this: TProperties, a: TA): void;
    }, self: TProperties, a: TA): void;
    <TProperties, TA, TB>(mixin: {
        [Object_properties]: TProperties;
        [Object_init](this: TProperties, a: TA, b: TB): void;
    }, self: TProperties, a: TA, b: TB): void;
}
declare const init: Init;
declare type Identity<T> = T extends object ? {
    [P in keyof T]: T[P];
} : T;
interface ObjectFactory {
    <TReturn, TProperties>(): Function1<{
        [Object_properties]: OptionalProps<TProperties>;
        [Object_init]: (this: TReturn & TProperties) => void;
    } & Omit<TReturn, keyof TProperties>, Factory<TReturn>>;
    <TReturn, TProperties, TA>(): Function1<{
        [Object_properties]: OptionalProps<TProperties>;
        [Object_init]: (this: TReturn & TProperties, a: TA) => void;
    } & Omit<TReturn, keyof TProperties>, Function1<TA, TReturn>>;
    <TReturn, TProperties, TA, TB>(): Function1<{
        [Object_properties]: OptionalProps<TProperties>;
        [Object_init]: (this: TReturn & TProperties, a: TA, b: TB) => void;
    } & Omit<TReturn, keyof TProperties>, Function2<TA, TB, TReturn>>;
    <TReturn, TProperties, TA, TB, TC>(): Function1<{
        [Object_properties]: OptionalProps<TProperties>;
        [Object_init]: (this: TReturn & TProperties, a: TA, b: TB, c: TC) => void;
    } & Omit<TReturn, keyof TProperties>, Function3<TA, TB, TC, TReturn>>;
    <TReturn, TProperties, TA, TB, TC, TD>(): Function1<{
        [Object_properties]: OptionalProps<TProperties>;
        [Object_init]: (this: TReturn & TProperties, a: TA, b: TB, c: TC, d: TD) => void;
    } & Omit<TReturn, keyof TProperties>, Function4<TA, TB, TC, TD, TReturn>>;
}
declare const createObjectFactory: ObjectFactory;
interface MixWith {
    <TMixin0 extends object, TMixin1 extends object>(m0: TMixin0): Function1<TMixin1, Identity<TMixin0 & TMixin1 & {
        [Object_properties]: OptionalProps<PropertyTypeOf<[
            TMixin0,
            TMixin1
        ]>>;
    }>>;
    <TMixin0 extends object, TMixin1 extends object, TMixin2 extends object>(m0: TMixin0, m1: TMixin1): Function1<TMixin2, Identity<TMixin0 & TMixin1 & TMixin2 & {
        [Object_properties]: OptionalProps<PropertyTypeOf<[
            TMixin0,
            TMixin1,
            TMixin2
        ]>>;
    }>>;
    <TMixin0 extends object, TMixin1 extends object, TMixin2 extends object, TMixin3 extends object>(m0: TMixin0, m1: TMixin1, m2: TMixin2): Function1<TMixin3, Identity<TMixin0 & TMixin1 & TMixin2 & TMixin3 & {
        [Object_properties]: OptionalProps<PropertyTypeOf<[
            TMixin0,
            TMixin1,
            TMixin2,
            TMixin3
        ]>>;
    }>>;
}
declare const mixWith: MixWith;
export { Object_init, Object_properties, PropertyTypeOf, createObjectFactory, init, mixWith };
