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
    <TPrototype extends {
        [Object_init]: (this: TPrototype & TProperties) => void;
    }, TProperties>(prototype: TPrototype, properties: TProperties): Factory<TPrototype & TProperties>;
    <TPrototype extends {
        [Object_init]: (this: TPrototype & TProperties, a: TA) => void;
    }, TProperties, TA>(prototype: TPrototype, properties: TProperties): Function1<TA, TPrototype & TProperties>;
    <TPrototype extends {
        [Object_init]: (this: TPrototype & TProperties, a: TA, b: TB) => void;
    }, TProperties, TA, TB>(prototype: TPrototype, properties: TProperties): Function2<TA, TB, TPrototype & TProperties>;
    <TPrototype extends {
        [Object_init]: (this: TPrototype & TProperties, a: TA, b: TB, c: TC) => void;
    }, TProperties, TA, TB, TC>(prototype: TPrototype, properties: TProperties): Function3<TA, TB, TC, TPrototype & TProperties>;
}
declare const createObjectFactory: ObjectFactory;
interface Mix {
    <TProto0 extends object, TProto1 extends object>(p0: TProto0, p1: TProto1): TProto0 & TProto1;
    <TProto0 extends object, TProto1 extends object, TProto2 extends object>(p0: TProto0, p1: TProto1, p2: TProto2): TProto0 & TProto1 & TProto2;
    <TProto0 extends object, TProto1 extends object, TProto2 extends object, TProto3 extends object>(p0: TProto0, p1: TProto1, p2: TProto2, p3: TProto3): TProto0 & TProto1 & TProto2 & TProto3;
}
declare const mix: Mix;
export { Object_init, createObjectFactory, init, mix };
