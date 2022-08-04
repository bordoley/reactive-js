import { Factory, Function1, Function2, Function3, Function4, Option } from "../../functions.mjs";
declare const Object_init: unique symbol;
declare const Object_properties: unique symbol;
declare const Object_properties_type: unique symbol;
declare const Object_prototype: unique symbol;
declare type UnknownObject = Record<string | symbol | number, unknown>;
declare type EmptyObject = Record<string | symbol | number, never>;
declare type PropertyTypeOf<T extends unknown[]> = T extends [
    infer F
] ? F extends {
    [Object_properties_type]?: unknown;
} ? NonNullable<F[typeof Object_properties_type]> : never : T extends [
    infer F,
    ...infer R
] ? PropertyTypeOf<[
    F
]> & PropertyTypeOf<R> : never;
declare type TMixin = {
    [Object_properties]: object;
    [Object_prototype]: object;
    [Object_properties_type]?: unknown;
};
declare type MixinTypeOf<T extends TMixin> = {
    [Object_properties]: T[typeof Object_properties];
    [Object_prototype]: T[typeof Object_prototype];
};
declare type OptionalProps<T> = T extends object ? {
    [P in keyof T]: T[P] extends object ? Option<T[P]> : T[P];
} : T;
interface Class<TReturn, TProperties extends object, TPrototype extends object> {
    [Object_init](this: unknown): TReturn;
    [Object_properties]: OptionalProps<TProperties>;
    [Object_properties_type]?: TProperties;
    [Object_prototype]: TPrototype;
}
interface Class1<TA, TReturn, TProperties extends object, TPrototype extends object> {
    [Object_init](this: unknown, a: TA): TReturn;
    [Object_properties]: OptionalProps<TProperties>;
    [Object_properties_type]?: TProperties;
    [Object_prototype]: TPrototype;
}
interface Class2<TA, TB, TReturn, TProperties extends object, TPrototype extends object> {
    [Object_init](this: unknown, a: TA, b: TB): TReturn;
    [Object_properties]: OptionalProps<TProperties>;
    [Object_properties_type]?: TProperties;
    [Object_prototype]: TPrototype;
}
interface Class3<TA, TB, TC, TReturn, TProperties extends object, TPrototype extends object> {
    [Object_init](this: unknown, a: TA, b: TB, c: TC): TReturn;
    [Object_properties]: OptionalProps<TProperties>;
    [Object_properties_type]?: TProperties;
    [Object_prototype]: TPrototype;
}
interface Class4<TA, TB, TC, TD, TReturn, TProperties extends object, TPrototype extends object> {
    [Object_init](this: unknown, a: TA, b: TB, c: TC, d: TD): TReturn;
    [Object_properties]: OptionalProps<TProperties>;
    [Object_properties_type]?: TProperties;
    [Object_prototype]: TPrototype;
}
interface init {
    <TReturn, TProperties, TPrototype>(clazz: {
        [Object_init](this: TReturn & TProperties & TPrototype): TReturn;
    }, self: TProperties): TReturn;
    <TReturn, TProperties, TPrototype, TA>(clazz: {
        [Object_init](this: TReturn & TProperties & TPrototype, a: TA): TReturn;
    }, self: TProperties, a: TA): TReturn;
    <TReturn, TProperties, TPrototype, TA, TB>(clazz: {
        [Object_init](this: TReturn & TProperties & TPrototype, a: TA, b: TB): TReturn;
    }, self: TProperties, a: TA, b: TB): TReturn;
    <TReturn, TProperties, TPrototype, TA, TB, TC>(clazz: {
        [Object_init](this: TReturn & TProperties & TPrototype, a: TA, b: TB, c: TC): TReturn;
    }, self: TProperties, a: TA, b: TB, c: TC): TReturn;
}
declare const init: init;
interface __extends {
    <TMixin0 extends TMixin>(m0: TMixin0): {
        [Object_properties]: TMixin0[typeof Object_properties];
        [Object_properties_type]?: PropertyTypeOf<[
            TMixin0
        ]>;
        [Object_prototype]: TMixin0[typeof Object_prototype];
    };
    <TMixin0 extends TMixin, TMixin1 extends TMixin>(m0: TMixin0, m1: TMixin1): {
        [Object_properties]: TMixin0[typeof Object_properties] & TMixin1[typeof Object_properties];
        [Object_properties_type]?: PropertyTypeOf<[
            TMixin0,
            TMixin1
        ]>;
        [Object_prototype]: TMixin0[typeof Object_prototype] & TMixin1[typeof Object_prototype];
    };
    <TMixin0 extends TMixin, TMixin1 extends TMixin, TMixin2 extends TMixin>(m0: TMixin0, m1: TMixin1, m2: TMixin2): {
        [Object_properties]: TMixin0[typeof Object_properties] & TMixin1[typeof Object_properties] & TMixin2[typeof Object_properties];
        [Object_properties_type]?: PropertyTypeOf<[
            TMixin0,
            TMixin1,
            TMixin2
        ]>;
        [Object_prototype]: TMixin0[typeof Object_prototype] & TMixin1[typeof Object_prototype] & TMixin2[typeof Object_prototype];
    };
    <TMixin0 extends TMixin, TMixin1 extends TMixin, TMixin2 extends TMixin, TMixin3 extends TMixin>(m0: TMixin0, m1: TMixin1, m2: TMixin2, m3: TMixin3): {
        [Object_properties]: TMixin0[typeof Object_properties] & TMixin1[typeof Object_properties] & TMixin2[typeof Object_properties] & TMixin3[typeof Object_properties];
        [Object_properties_type]?: PropertyTypeOf<[
            TMixin0,
            TMixin1,
            TMixin2,
            TMixin3
        ]>;
        [Object_prototype]: TMixin0[typeof Object_prototype] & TMixin1[typeof Object_prototype] & TMixin2[typeof Object_prototype] & TMixin3[typeof Object_prototype];
    };
}
declare const __extends: __extends;
interface clazz {
    <TInit extends (this: any, ...args: readonly any[]) => unknown, TProperties extends UnknownObject = UnknownObject, TPrototype extends UnknownObject = UnknownObject>(init: TInit, properties: OptionalProps<TProperties>, prototype: TPrototype): {
        [Object_init]: TInit;
        [Object_properties]: OptionalProps<TProperties>;
        [Object_properties_type]?: TProperties;
        [Object_prototype]: TPrototype;
    };
    <TParent extends TMixin, TInit extends (this: any, ...args: readonly any[]) => unknown, TProperties extends UnknownObject, TPrototype extends UnknownObject>(parent: TParent, init: TInit, properties: OptionalProps<TProperties>, prototype: TPrototype): {
        [Object_init]: TInit;
        [Object_properties]: OptionalProps<TProperties & NonNullable<TParent[typeof Object_properties_type]>>;
        [Object_properties_type]?: TProperties & NonNullable<TParent[typeof Object_properties_type]>;
        [Object_prototype]: TPrototype & TParent[typeof Object_prototype];
    };
    <TParent extends TMixin, TInit extends (this: any, ...args: readonly any[]) => unknown, TProperties extends UnknownObject>(parent: TParent, init: TInit, properties: OptionalProps<TProperties>): {
        [Object_init]: TInit;
        [Object_properties]: OptionalProps<TProperties & NonNullable<TParent[typeof Object_properties_type]>>;
        [Object_properties_type]?: TProperties & NonNullable<TParent[typeof Object_properties_type]>;
        [Object_prototype]: TParent[typeof Object_prototype];
    };
    <TParent extends TMixin, TInit extends (this: any, ...args: readonly any[]) => unknown>(parent: TParent, init: TInit): {
        [Object_init]: TInit;
        [Object_properties]: OptionalProps<NonNullable<TParent[typeof Object_properties_type]>>;
        [Object_properties_type]?: NonNullable<TParent[typeof Object_properties_type]>;
        [Object_prototype]: TParent[typeof Object_prototype];
    };
}
declare const clazz: clazz;
interface createInstanceFactory {
    <TReturn>(clazz: {
        [Object_init]: (this: any) => TReturn;
        [Object_properties]: unknown;
        [Object_prototype]: object;
    }): Factory<TReturn>;
    <TReturn, TA>(clazz: {
        [Object_init]: (this: any, a: TA) => TReturn;
        [Object_properties]: unknown;
        [Object_prototype]: object;
    }): Function1<TA, TReturn>;
    <TReturn, TA, TB>(clazz: {
        [Object_init]: (this: any, a: TA, b: TB) => TReturn;
        [Object_properties]: unknown;
        [Object_prototype]: object;
    }): Function2<TA, TB, TReturn>;
    <TReturn, TA, TB, TC>(clazz: {
        [Object_init]: (this: any, a: TA, b: TB, c: TC) => TReturn;
        [Object_properties]: unknown;
        [Object_prototype]: object;
    }): Function3<TA, TB, TC, TReturn>;
    <TReturn, TA, TB, TC, TD>(clazz: {
        [Object_init]: (this: any, a: TA, b: TB, c: TC, d: TD) => TReturn;
        [Object_properties]: unknown;
        [Object_prototype]: object;
    }): Function4<TA, TB, TC, TD, TReturn>;
}
declare const createInstanceFactory: createInstanceFactory;
export { Class, Class1, Class2, Class3, Class4, EmptyObject, MixinTypeOf, Object_init, Object_properties, Object_properties_type, Object_prototype, PropertyTypeOf, UnknownObject, __extends, clazz, createInstanceFactory, init };
