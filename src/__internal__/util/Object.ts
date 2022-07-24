import { Factory, Function1, Function2, Function3 } from "../../util/functions";

export const Object_init = Symbol("Object_init");

interface Init {
  <
    TPrototype extends {
      [Object_init](this: TProperties & TPrototype): void;
    },
    TProperties,
  >(
    prototype: TPrototype,
    self: TProperties,
  ): void;

  <
    TPrototype extends {
      [Object_init](this: TProperties & TPrototype, a: TA): void;
    },
    TProperties,
    TA,
  >(
    prototype: TPrototype,
    self: TProperties,
    a: TA,
  ): void;

  <
    TPrototype extends {
      [Object_init](this: TProperties & TPrototype, a: TA, b: TB): void;
    },
    TProperties,
    TA,
    TB,
  >(
    prototype: TPrototype,
    self: TProperties,
    a: TA,
    b: TB,
  ): void;
}

export const init: Init = <
  TPrototype extends {
    [Object_init]: (
      this: TPrototype & TProperties,
      ...args: readonly any[]
    ) => void;
  },
  TProperties,
>(
  prototype: TPrototype,
  self: TPrototype & TProperties,
  ...args: readonly any[]
): void => {
  prototype[Object_init].call(self, ...args);
};

interface ObjectFactory {
  <
    TPrototype extends {
      [Object_init]: (this: TPrototype & TProperties) => void;
    },
    TProperties,
  >(
    prototype: TPrototype,
    properties: TProperties,
  ): Factory<TPrototype & TProperties>;
  <
    TPrototype extends {
      [Object_init]: (this: TPrototype & TProperties, a: TA) => void;
    },
    TProperties,
    TA,
  >(
    prototype: TPrototype,
    properties: TProperties,
  ): Function1<TA, TPrototype & TProperties>;
  <
    TPrototype extends {
      [Object_init]: (this: TPrototype & TProperties, a: TA, b: TB) => void;
    },
    TProperties,
    TA,
    TB,
  >(
    prototype: TPrototype,
    properties: TProperties,
  ): Function2<TA, TB, TPrototype & TProperties>;
  <
    TPrototype extends {
      [Object_init]: (
        this: TPrototype & TProperties,
        a: TA,
        b: TB,
        c: TC,
      ) => void;
    },
    TProperties,
    TA,
    TB,
    TC,
  >(
    prototype: TPrototype,
    properties: TProperties,
  ): Function3<TA, TB, TC, TPrototype & TProperties>;
}

export const createObjectFactory: ObjectFactory = <
  TPrototype extends {
    [Object_init]: (
      this: TPrototype & TProperties,
      ...args: readonly any[]
    ) => void;
  },
  TProperties,
>(
  prototype: TPrototype,
  properties: TProperties,
): Factory<TPrototype & TProperties> => {
  const propertyDesccription = Object.getOwnPropertyDescriptors(properties);
  return (...args: readonly any[]) => {
    const instance = Object.create(prototype, propertyDesccription);
    instance[Object_init](...args);
    return instance;
  };
};
