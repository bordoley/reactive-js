import {
  Factory,
  Function1,
  Function2,
  Function3,
  none,
} from "../../functions";

export const Object_init = Symbol("Object_init");
export const Object_properties = Symbol("Object_properties");

const {
  create: createObject,
  getOwnPropertyDescriptors,
  prototype: objectPrototype,
} = Object;

export type PropertyTypeOf<T extends any[]> = T extends [infer F, ...infer R]
  ? (F extends {
      [Object_properties]: unknown;
    }
      ? F[typeof Object_properties]
      : never) &
      PropertyTypeOf<R>
  : unknown;

interface Init {
  <TProperties>(
    prototype: {
      [Object_properties]: TProperties;
      [Object_init](this: TProperties): void;
    },
    self: TProperties,
  ): void;

  <TProperties, TA>(
    prototype: {
      [Object_properties]: TProperties;
      [Object_init](this: TProperties, a: TA): void;
    },
    self: TProperties,
    a: TA,
  ): void;

  <TProperties, TA, TB>(
    prototype: {
      [Object_properties]: TProperties;
      [Object_init](this: TProperties, a: TA, b: TB): void;
    },
    self: TProperties,
    a: TA,
    b: TB,
  ): void;
}

const initUnsafe = (
  prototype: any,
  self: any,
  ...args: readonly any[]
): void => {
  prototype[Object_init].call(self, ...args);
};

export const init: Init = initUnsafe;

type Identity<T> = T extends object
  ? {
      [P in keyof T]: T[P];
    }
  : T;

interface ObjectFactory {
  <TReturn, TProperties>(): Function1<
    {
      [Object_properties]: TProperties;
      [Object_init]: (this: TReturn & TProperties) => void;
    } & Omit<TReturn, keyof TProperties>,
    Factory<TReturn>
  >;

  <TReturn, TProperties, TA>(): Function1<
    {
      [Object_properties]: TProperties;
      [Object_init]: (this: TReturn & TProperties, a: TA) => void;
    } & Omit<TReturn, keyof TProperties>,
    Function1<TA, TReturn>
  >;

  <TReturn, TProperties, TA, TB>(): Function1<
    {
      [Object_properties]: TProperties;
      [Object_init]: (this: TReturn & TProperties, a: TA, b: TB) => void;
    } & Omit<TReturn, keyof TProperties>,
    Function2<TA, TB, TReturn>
  >;

  <TReturn, TProperties, TA, TB, TC>(): Function1<
    {
      [Object_properties]: TProperties;
      [Object_init]: (this: TReturn & TProperties, a: TA, b: TB, c: TB) => void;
    } & Omit<TReturn, keyof TProperties>,
    Function3<TA, TB, TC, TReturn>
  >;
}

export const createObjectFactory: ObjectFactory =
  <TReturn, TProperties>() =>
  (prototype: {
    [Object_properties]: TProperties;
    [Object_init]: (
      this: TReturn & TProperties,
      ...args: readonly any[]
    ) => void;
  }): Factory<TReturn> => {
    const propertyDescription = getOwnPropertyDescriptors(
      prototype[Object_properties],
    );

    const prototypeDescription = getOwnPropertyDescriptors(prototype);
    const {
      [Object_properties]: _properties,
      [Object_init]: _init,
      ...objectPrototypeDescription
    } = prototypeDescription;
    const factoryPrototype = createObject(
      objectPrototype,
      objectPrototypeDescription as any,
    );

    return (...args: readonly any[]) => {
      const instance = createObject(factoryPrototype, propertyDescription);
      initUnsafe(prototype, instance, ...args);
      return instance;
    };
  };

interface MixWith {
  <TProto0 extends object, TProto1 extends object>(p0: TProto0): Function1<
    TProto1,
    Identity<
      TProto0 &
        TProto1 & {
          [Object_properties]: PropertyTypeOf<[TProto0, TProto1]>;
        }
    >
  >;

  <TProto0 extends object, TProto1 extends object, TProto2 extends object>(
    p0: TProto0,
    p1: TProto1,
  ): Function1<
    TProto2,
    Identity<
      TProto0 &
        TProto1 &
        TProto2 & {
          [Object_properties]: PropertyTypeOf<[TProto0, TProto1, TProto2]>;
        }
    >
  >;

  <
    TProto0 extends object,
    TProto1 extends object,
    TProto2 extends object,
    TProto3 extends object,
  >(
    p0: TProto0,
    p1: TProto1,
    p2: TProto2,
  ): Function1<
    TProto3,
    Identity<
      TProto0 &
        TProto1 &
        TProto2 &
        TProto3 & {
          [Object_properties]: PropertyTypeOf<
            [TProto0, TProto1, TProto2, TProto3]
          >;
        }
    >
  >;
}
export const mixWith: MixWith =
  (
    ...prototypes: readonly {
      [Object_properties]: object;
    }[]
  ) =>
  (lastProto: { [Object_properties]: object }) => {
    const propertyDescriptors = prototypes
      .map(prototype => getOwnPropertyDescriptors(prototype))
      .reduce((acc, next) => ({ ...acc, ...next }), {});

    const properties = [...prototypes, lastProto]
      .map(prototype => prototype[Object_properties])
      .reduce((acc, next) => ({ ...acc, ...next }), {});

    const descriptor = {
      ...propertyDescriptors,
      ...getOwnPropertyDescriptors(lastProto),
      [Object_properties]: {
        configurable: true,
        enumerable: true,
        value: properties,
        writable: true,
      },
    };

    return createObject(objectPrototype, descriptor);
  };

export const anyProperty: any = none;
