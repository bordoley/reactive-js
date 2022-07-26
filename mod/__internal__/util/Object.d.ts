import { Factory, Function1, Function2, Function3 } from "../../functions.mjs";
declare const Object_init: unique symbol;
interface Init {
    <TPrototype extends {
        [Object_init](this: TProperties & TPrototype): void;
    }, TProperties>(prototype: TPrototype, self: TProperties): void;
    <TPrototype extends {
        [Object_init](this: TProperties & TPrototype, a: TA): void;
    }, TProperties, TA>(prototype: TPrototype, self: TProperties, a: TA): void;
    <TPrototype extends {
        [Object_init](this: TProperties & TPrototype, a: TA, b: TB): void;
    }, TProperties, TA, TB>(prototype: TPrototype, self: TProperties, a: TA, b: TB): void;
}
declare const init: Init;
interface ObjectFactory {
    <TReturn, TProperties>(properties: TProperties, prototype: {
        [Object_init]: (this: TReturn & TProperties) => void;
    } & Omit<TReturn, keyof TProperties>): Factory<TReturn>;
    <TReturn, TProperties, TA>(properties: TProperties, prototype: {
        [Object_init]: (this: TReturn & TProperties, a: TA) => void;
    } & Omit<TReturn, keyof TProperties>): Function1<TA, TReturn>;
    <TReturn, TProperties, TA, TB>(properties: TProperties, prototype: {
        [Object_init]: (this: TReturn & TProperties, a: TA, b: TB) => void;
    } & Omit<TReturn, keyof TProperties>): Function2<TA, TB, TReturn>;
    <TReturn, TProperties, TA, TB, TC>(properties: TProperties, prototype: {
        [Object_init]: (this: TReturn & TProperties, a: TA, b: TB, c: TC) => void;
    } & Omit<TReturn, keyof TProperties>): Function3<TA, TB, TC, TReturn>;
}
declare const createObjectFactory: ObjectFactory;
declare type Identity<T> = T extends object ? {
    [P in keyof T]: T[P];
} : T;
interface Mix {
    <TProto0 extends object, TProto1 extends object>(p0: TProto0, p1: TProto1): Identity<TProto0 & TProto1>;
    <TProto0 extends object, TProto1 extends object, TProto2 extends object>(p0: TProto0, p1: TProto1, p2: TProto2): Identity<TProto0 & TProto1 & TProto2>;
    <TProto0 extends object, TProto1 extends object, TProto2 extends object, TProto3 extends object>(p0: TProto0, p1: TProto1, p2: TProto2, p3: TProto3): Identity<TProto0 & TProto1 & TProto2 & TProto3>;
}
declare const mix: Mix;
export { Object_init, createObjectFactory, init, mix };
