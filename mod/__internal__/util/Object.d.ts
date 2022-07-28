import { Function1, Factory, Function2, Function3, Function4 } from "../../functions.mjs";
declare const Object_init: unique symbol;
declare const Object_properties: unique symbol;
declare type PropertyTypeOf<T extends any[]> = T extends [
    infer F,
    ...infer R
] ? (F extends {
    [Object_properties]: unknown;
} ? F[typeof Object_properties] : never) & PropertyTypeOf<R> : unknown;
interface Init {
    <TProperties>(prototype: {
        [Object_properties]: TProperties;
        [Object_init](this: TProperties): void;
    }, self: TProperties): void;
    <TProperties, TA>(prototype: {
        [Object_properties]: TProperties;
        [Object_init](this: TProperties, a: TA): void;
    }, self: TProperties, a: TA): void;
    <TProperties, TA, TB>(prototype: {
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
        [Object_properties]: TProperties;
        [Object_init]: (this: TReturn & TProperties) => void;
    } & Omit<TReturn, keyof TProperties>, Factory<TReturn>>;
    <TReturn, TProperties, TA>(): Function1<{
        [Object_properties]: TProperties;
        [Object_init]: (this: TReturn & TProperties, a: TA) => void;
    } & Omit<TReturn, keyof TProperties>, Function1<TA, TReturn>>;
    <TReturn, TProperties, TA, TB>(): Function1<{
        [Object_properties]: TProperties;
        [Object_init]: (this: TReturn & TProperties, a: TA, b: TB) => void;
    } & Omit<TReturn, keyof TProperties>, Function2<TA, TB, TReturn>>;
    <TReturn, TProperties, TA, TB, TC>(): Function1<{
        [Object_properties]: TProperties;
        [Object_init]: (this: TReturn & TProperties, a: TA, b: TB, c: TC) => void;
    } & Omit<TReturn, keyof TProperties>, Function3<TA, TB, TC, TReturn>>;
    <TReturn, TProperties, TA, TB, TC, TD>(): Function1<{
        [Object_properties]: TProperties;
        [Object_init]: (this: TReturn & TProperties, a: TA, b: TB, c: TC, d: TD) => void;
    } & Omit<TReturn, keyof TProperties>, Function4<TA, TB, TC, TD, TReturn>>;
}
declare const createObjectFactory: ObjectFactory;
interface MixWith {
    <TProto0 extends object, TProto1 extends object>(p0: TProto0): Function1<TProto1, Identity<TProto0 & TProto1 & {
        [Object_properties]: PropertyTypeOf<[
            TProto0,
            TProto1
        ]>;
    }>>;
    <TProto0 extends object, TProto1 extends object, TProto2 extends object>(p0: TProto0, p1: TProto1): Function1<TProto2, Identity<TProto0 & TProto1 & TProto2 & {
        [Object_properties]: PropertyTypeOf<[
            TProto0,
            TProto1,
            TProto2
        ]>;
    }>>;
    <TProto0 extends object, TProto1 extends object, TProto2 extends object, TProto3 extends object>(p0: TProto0, p1: TProto1, p2: TProto2): Function1<TProto3, Identity<TProto0 & TProto1 & TProto2 & TProto3 & {
        [Object_properties]: PropertyTypeOf<[
            TProto0,
            TProto1,
            TProto2,
            TProto3
        ]>;
    }>>;
}
declare const mixWith: MixWith;
declare const anyProperty: any;
export { Object_init, Object_properties, PropertyTypeOf, anyProperty, createObjectFactory, init, mixWith };
