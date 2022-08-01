import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Option,
} from "../../functions";
import { __DEV__ } from "../env";

export const Object_init = Symbol("Object_init");
export const Object_properties = Symbol("Object_properties");
export const Object_prototype = Symbol("Object_prototype");

export type UnknownObject = Record<string | symbol | number, unknown>;

export type PropertyTypeOf<T extends any[]> = T extends [infer F, ...infer R]
  ? (F extends {
      [Object_properties]: unknown;
    }
      ? F[typeof Object_properties]
      : never) &
      PropertyTypeOf<R>
  : unknown;

type OptionalProps<T> = T extends object
  ? {
      [P in keyof T]: T[P] extends object ? Option<T[P]> : T[P];
    }
  : T;

type TMixin = {
  [Object_init](this: any, ...args: readonly any[]): void;
  [Object_properties]: object;
  [Object_prototype]: object;
};

const {
  create: createObject,
  getOwnPropertyDescriptors,
  prototype: objectPrototype,
} = Object;

const initUnsafe = (clazz: any, self: any, ...args: readonly any[]): void => {
  clazz[Object_init].call(self, ...args);
};

interface Init {
  <TProperties, TPrototype>(
    clazz: {
      [Object_properties]: TProperties;
      [Object_init](this: TProperties & TPrototype): void;
    },
    self: TProperties,
  ): void;

  <TProperties, TPrototype, TA>(
    clazz: {
      [Object_properties]: TProperties;
      [Object_init](this: TProperties & TPrototype, a: TA): void;
    },
    self: TProperties,
    a: TA,
  ): void;

  <TProperties, TPrototype, TA, TB>(
    clazz: {
      [Object_properties]: TProperties;
      [Object_init](this: TProperties & TPrototype, a: TA, b: TB): void;
    },
    self: TProperties,
    a: TA,
    b: TB,
  ): void;
  <TProperties, TPrototype, TA, TB, TC>(
    clazz: {
      [Object_properties]: TProperties;
      [Object_init](this: TProperties & TPrototype, a: TA, b: TB, c: TC): void;
    },
    self: TProperties,
    a: TA,
    b: TB,
    c: TC,
  ): void;
}
export const init: Init = initUnsafe;

interface ObjectFactory {
  <TReturn>(): Function1<
    {
      [Object_init]: (this: any) => void;
      [Object_properties]: unknown;
      [Object_prototype]: object;
    },
    Factory<TReturn>
  >;

  <TReturn, TA>(): Function1<
    {
      [Object_init]: (this: any, a: TA) => void;
      [Object_properties]: unknown;
      [Object_prototype]: object;
    },
    Function1<TA, TReturn>
  >;

  <TReturn, TA, TB>(): Function1<
    {
      [Object_init]: (this: any, a: TA, b: TB) => void;
      [Object_properties]: unknown;
      [Object_prototype]: object;
    },
    Function2<TA, TB, TReturn>
  >;

  <TReturn, TA, TB, TC>(): Function1<
    {
      [Object_init]: (this: any, a: TA, b: TB, c: TC) => void;
      [Object_properties]: unknown;
      [Object_prototype]: object;
    },
    Function3<TA, TB, TC, TReturn>
  >;

  <TReturn, TA, TB, TC, TD>(): Function1<
    {
      [Object_init]: (this: any, a: TA, b: TB, c: TC, d: TD) => void;
      [Object_properties]: unknown;
      [Object_prototype]: object;
    },
    Function4<TA, TB, TC, TD, TReturn>
  >;
}
export const createObjectFactory: ObjectFactory =
  <TReturn>() =>
  (clazz: {
    [Object_init]: (this: any, ...args: readonly any[]) => void;
    [Object_properties]: unknown;
    [Object_prototype]: object;
  }): Factory<TReturn> => {
    const propertyDescription = getOwnPropertyDescriptors(
      clazz[Object_properties],
    );

    const constructorObject: object = __DEV__
      ? {
          constructor: {
            configurable: true,
            enumerable: true,
            value: clazz[Object_init],
            writable: true,
          },
        }
      : {};

    const prototypeDescription = {
      ...getOwnPropertyDescriptors(clazz[Object_prototype]),
      ...constructorObject,
    };

    const prototype = createObject(objectPrototype, prototypeDescription);

    return (...args: readonly any[]) => {
      const instance = createObject(prototype, propertyDescription);
      initUnsafe(clazz, instance, ...args);
      return instance;
    };
  };

interface MixWith {
  <TTMixin0 extends TMixin, TTMixin1 extends TMixin>(m0: TTMixin0): Function1<
    TTMixin1,
    {
      [Object_init]: TTMixin1[typeof Object_init];
      [Object_properties]: OptionalProps<
        TTMixin0[typeof Object_properties] & TTMixin1[typeof Object_properties]
      >;
      [Object_prototype]: TTMixin0[typeof Object_prototype] &
        TTMixin1[typeof Object_prototype];
    }
  >;

  <TTMixin0 extends TMixin, TTMixin1 extends TMixin, TTMixin2 extends TMixin>(
    m0: TTMixin0,
    m1: TTMixin1,
  ): Function1<
    TTMixin2,
    {
      [Object_init]: TTMixin2[typeof Object_init];
      [Object_properties]: OptionalProps<
        TTMixin0[typeof Object_properties] &
          TTMixin1[typeof Object_properties] &
          TTMixin2[typeof Object_properties]
      >;
      [Object_prototype]: TTMixin0[typeof Object_prototype] &
        TTMixin1[typeof Object_prototype] &
        TTMixin2[typeof Object_prototype];
    }
  >;

  <
    TTMixin0 extends TMixin,
    TTMixin1 extends TMixin,
    TTMixin2 extends TMixin,
    TTMixin3 extends TMixin,
  >(
    m0: TTMixin0,
    m1: TTMixin1,
    m2: TTMixin2,
  ): Function1<
    TTMixin3,
    {
      [Object_init]: TTMixin3[typeof Object_init];
      [Object_properties]: OptionalProps<
        TTMixin0[typeof Object_properties] &
          TTMixin1[typeof Object_properties] &
          TTMixin2[typeof Object_properties] &
          TTMixin3[typeof Object_properties]
      >;
      [Object_prototype]: TTMixin0[typeof Object_prototype] &
        TTMixin1[typeof Object_prototype] &
        TTMixin2[typeof Object_prototype] &
        TTMixin3[typeof Object_prototype];
    }
  >;
}

export const mixWith: MixWith =
  (...mixins: readonly TMixin[]) =>
  (lastTMixin: TMixin): TMixin => {
    const properties = [...mixins, lastTMixin]
      .map(clazz => clazz[Object_properties])
      .reduce((acc, next) => ({ ...acc, ...next }), {});

    const prototypeDescriptions = [...mixins, lastTMixin]
      .map(clazz => getOwnPropertyDescriptors(clazz[Object_prototype]))
      .reduce((acc, next) => ({ ...acc, ...next }), {});

    return {
      [Object_init]: lastTMixin[Object_init],
      [Object_properties]: properties,
      [Object_prototype]: createObject(objectPrototype, prototypeDescriptions),
    };
  };

export const clazz = <
  TInit extends (this: any, ...args: readonly any[]) => void,
  TProperties extends object,
  TPrototype extends object,
>(
  init: TInit,
  properties: TProperties,
  prototype: TPrototype,
): {
  [Object_init]: TInit;
  [Object_properties]: TProperties;
  [Object_prototype]: TPrototype;
} => ({
  [Object_init]: init,
  [Object_properties]: properties,
  [Object_prototype]: prototype,
});
