import { Function1, Factory, Function2, Function3 } from "../../functions.mjs";
declare const Object_init: unique symbol;
declare const Object_properties: unique symbol;
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
        [Object_init]: (this: TReturn & TProperties, a: TA, b: TB, c: TB) => void;
    } & Omit<TReturn, keyof TProperties>, Function3<TA, TB, TC, TReturn>>;
}
declare const createObjectFactory: ObjectFactory;
interface MixWith {
    <TProto0 extends object, TProto1 extends object>(p0: TProto0): Function1<TProto1, Identity<TProto0 & TProto1>>;
    <TProto0 extends object, TProto1 extends object, TProto2 extends object>(p0: TProto0, p1: TProto1): Function1<TProto2, Identity<TProto0 & TProto1 & TProto2>>;
    <TProto0 extends object, TProto1 extends object, TProto2 extends object, TProto3 extends object>(p0: TProto0, p1: TProto1, p2: TProto2): Function1<TProto3, Identity<TProto0 & TProto1 & TProto2 & TProto3>>;
}
declare const mixWith: MixWith;
interface MixWithProps {
    <TProps0, TProps1>(p0: {
        [Object_properties]: TProps0;
    }): Function1<TProps1, Identity<TProps0 & TProps1>>;
    <TProps0, TProps1, TProps2>(p0: {
        [Object_properties]: TProps0;
    }, p1: {
        [Object_properties]: TProps1;
    }): Function1<TProps2, Identity<TProps0 & TProps1 & TProps2>>;
    <TProps0, TProps1, TProps2, TProps3>(p0: {
        [Object_properties]: TProps0;
    }, p1: {
        [Object_properties]: TProps1;
    }, p2: {
        [Object_properties]: TProps2;
    }): Function1<TProps3, Identity<TProps0 & TProps1 & TProps2 & TProps3>>;
}
declare const mixWithProps: MixWithProps;
export { Object_init, Object_properties, createObjectFactory, init, mixWith, mixWithProps };
