import { Factory, Function1, Function2, Function3 } from '../../util/functions.js';
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
export { Object_init, createObjectFactory, init };
