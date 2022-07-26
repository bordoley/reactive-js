import { Factory, Function1, Function2, Function3 } from "../../functions";

export const Object_init = Symbol("Object_init");
export const Object_properties = Symbol("Object_properties");

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

export const init: Init = <
  TPrototype extends {
    [Object_properties]: TProperties;
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

type Identity<T> = T extends object
  ? {
      [P in keyof T]: T[P];
    }
  : T;

interface Mix {
  <TProto0 extends object, TProto1 extends object>(
    p0: TProto0,
    p1: TProto1,
  ): Identity<TProto0 & TProto1>;

  <TProto0 extends object, TProto1 extends object, TProto2 extends object>(
    p0: TProto0,
    p1: TProto1,
    p2: TProto2,
  ): Identity<TProto0 & TProto1 & TProto2>;

  <
    TProto0 extends object,
    TProto1 extends object,
    TProto2 extends object,
    TProto3 extends object,
  >(
    p0: TProto0,
    p1: TProto1,
    p2: TProto2,
    p3: TProto3,
  ): Identity<TProto0 & TProto1 & TProto2 & TProto3>;
}
export const mix: Mix = (...prototypes: readonly object[]) => {
  const propertyDescriptors = prototypes.map(prototype =>
    Object.getOwnPropertyDescriptors(prototype),
  );
  const descriptor = propertyDescriptors.reduce(
    (acc, next) => ({ ...acc, ...next }),
    {},
  );
  return Object.create(Object.prototype, descriptor);
};

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
    const propertyDesccription = Object.getOwnPropertyDescriptors(
      prototype[Object_properties],
    );
    return (...args: readonly any[]) => {
      const instance = Object.create(prototype, propertyDesccription);
      instance[Object_init](...args);
      return instance;
    };
  };
