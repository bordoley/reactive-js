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
export const Object_properties_type = Symbol("Object_properties_type");
export const Object_prototype = Symbol("Object_prototype");

export type UnknownObject = Record<string | symbol | number, unknown>;
export type EmptyObject = Record<string | symbol | number, never>;

export type PropertyTypeOf<T extends unknown[]> = T extends [infer F]
  ? F extends { [Object_properties_type]?: unknown }
    ? NonNullable<F[typeof Object_properties_type]>
    : never
  : T extends [infer F, ...infer R]
  ? PropertyTypeOf<[F]> & PropertyTypeOf<R>
  : never;

type TMixin = {
  [Object_properties]: object;
  [Object_prototype]: object;
  [Object_properties_type]?: unknown;
};

export type MixinTypeOf<T extends TMixin> = {
  [Object_properties]: T[typeof Object_properties];
  [Object_prototype]: T[typeof Object_prototype];
};

type OptionalProps<T> = T extends object
  ? {
      [P in keyof T]: T[P] extends object ? Option<T[P]> : T[P];
    }
  : T;

export interface Class<
  TReturn,
  TProperties extends object,
  TPrototype extends object,
> {
  [Object_init](this: unknown): TReturn;
  [Object_properties]: OptionalProps<TProperties>;
  [Object_properties_type]?: TProperties;
  [Object_prototype]: TPrototype;
}

export interface Class1<
  TA,
  TReturn,
  TProperties extends object,
  TPrototype extends object,
> {
  [Object_init](this: unknown, a: TA): TReturn;
  [Object_properties]: OptionalProps<TProperties>;
  [Object_properties_type]?: TProperties;
  [Object_prototype]: TPrototype;
}

export interface Class2<
  TA,
  TB,
  TReturn,
  TProperties extends object,
  TPrototype extends object,
> {
  [Object_init](this: unknown, a: TA, b: TB): TReturn;
  [Object_properties]: OptionalProps<TProperties>;
  [Object_properties_type]?: TProperties;
  [Object_prototype]: TPrototype;
}

export interface Class3<
  TA,
  TB,
  TC,
  TReturn,
  TProperties extends object,
  TPrototype extends object,
> {
  [Object_init](this: unknown, a: TA, b: TB, c: TC): TReturn;
  [Object_properties]: OptionalProps<TProperties>;
  [Object_properties_type]?: TProperties;
  [Object_prototype]: TPrototype;
}

export interface Class4<
  TA,
  TB,
  TC,
  TD,
  TReturn,
  TProperties extends object,
  TPrototype extends object,
> {
  [Object_init](this: unknown, a: TA, b: TB, c: TC, d: TD): TReturn;
  [Object_properties]: OptionalProps<TProperties>;
  [Object_properties_type]?: TProperties;
  [Object_prototype]: TPrototype;
}

const {
  create: createObject,
  getOwnPropertyDescriptors,
  prototype: objectPrototype,
} = Object;

const initUnsafe = <TReturn>(
  clazz: {
    [Object_init](this: TReturn, ...args: readonly any[]): TReturn;
  },
  self: any,
  ...args: readonly unknown[]
): TReturn => clazz[Object_init].call(self, ...args) as unknown as TReturn;

interface init {
  <TReturn, TProperties, TPrototype>(
    clazz: {
      [Object_init](this: TReturn & TProperties & TPrototype): TReturn;
    },
    self: TProperties,
  ): TReturn;

  <TReturn, TProperties, TPrototype, TA>(
    clazz: {
      [Object_init](this: TReturn & TProperties & TPrototype, a: TA): TReturn;
    },
    self: TProperties,
    a: TA,
  ): TReturn;

  <TReturn, TProperties, TPrototype, TA, TB>(
    clazz: {
      [Object_init](
        this: TReturn & TProperties & TPrototype,
        a: TA,
        b: TB,
      ): TReturn;
    },
    self: TProperties,
    a: TA,
    b: TB,
  ): TReturn;
  <TReturn, TProperties, TPrototype, TA, TB, TC>(
    clazz: {
      [Object_init](
        this: TReturn & TProperties & TPrototype,
        a: TA,
        b: TB,
        c: TC,
      ): TReturn;
    },
    self: TProperties,
    a: TA,
    b: TB,
    c: TC,
  ): TReturn;
}
export const init: init = initUnsafe;

interface __extends {
  <TMixin0 extends TMixin>(m0: TMixin0): {
    [Object_properties]: TMixin0[typeof Object_properties];
    [Object_properties_type]?: PropertyTypeOf<[TMixin0]>;
    [Object_prototype]: TMixin0[typeof Object_prototype];
  };
  <TMixin0 extends TMixin, TMixin1 extends TMixin>(m0: TMixin0, m1: TMixin1): {
    [Object_properties]: TMixin0[typeof Object_properties] &
      TMixin1[typeof Object_properties];
    [Object_properties_type]?: PropertyTypeOf<[TMixin0, TMixin1]>;
    [Object_prototype]: TMixin0[typeof Object_prototype] &
      TMixin1[typeof Object_prototype];
  };

  <TMixin0 extends TMixin, TMixin1 extends TMixin, TMixin2 extends TMixin>(
    m0: TMixin0,
    m1: TMixin1,
    m2: TMixin2,
  ): {
    [Object_properties]: TMixin0[typeof Object_properties] &
      TMixin1[typeof Object_properties] &
      TMixin2[typeof Object_properties];
    [Object_properties_type]?: PropertyTypeOf<[TMixin0, TMixin1, TMixin2]>;
    [Object_prototype]: TMixin0[typeof Object_prototype] &
      TMixin1[typeof Object_prototype] &
      TMixin2[typeof Object_prototype];
  };

  <
    TMixin0 extends TMixin,
    TMixin1 extends TMixin,
    TMixin2 extends TMixin,
    TMixin3 extends TMixin,
  >(
    m0: TMixin0,
    m1: TMixin1,
    m2: TMixin2,
    m3: TMixin3,
  ): {
    [Object_properties]: TMixin0[typeof Object_properties] &
      TMixin1[typeof Object_properties] &
      TMixin2[typeof Object_properties] &
      TMixin3[typeof Object_properties];
    [Object_properties_type]?: PropertyTypeOf<
      [TMixin0, TMixin1, TMixin2, TMixin3]
    >;
    [Object_prototype]: TMixin0[typeof Object_prototype] &
      TMixin1[typeof Object_prototype] &
      TMixin2[typeof Object_prototype] &
      TMixin3[typeof Object_prototype];
  };
}
export const __extends: __extends = (...mixins: readonly TMixin[]) => {
  if (mixins.length == 1) {
    return mixins[0];
  } else {
    const properties = mixins
      .map(clazz => clazz[Object_properties])
      .reduce((acc, next) => ({ ...acc, ...next }), {});

    const prototypeDescriptions = mixins
      .map(clazz => getOwnPropertyDescriptors(clazz[Object_prototype]))
      .reduce((acc, next) => ({ ...acc, ...next }), {});

    return {
      [Object_properties]: properties,
      [Object_prototype]: createObject(objectPrototype, prototypeDescriptions),
    };
  }
};

interface clazz {
  <
    TInit extends (this: any, ...args: readonly any[]) => unknown,
    TProperties extends UnknownObject = UnknownObject,
    TPrototype extends UnknownObject = UnknownObject,
  >(
    init: TInit,
    properties: OptionalProps<TProperties>,
    prototype: TPrototype,
  ): {
    [Object_init]: TInit;
    [Object_properties]: OptionalProps<TProperties>;
    [Object_properties_type]?: TProperties;
    [Object_prototype]: TPrototype;
  };

  <
    TParent extends TMixin,
    TInit extends (this: any, ...args: readonly any[]) => unknown,
    TProperties extends UnknownObject,
    TPrototype extends UnknownObject,
  >(
    parent: TParent,
    init: TInit,
    properties: OptionalProps<TProperties>,
    prototype: TPrototype,
  ): {
    [Object_init]: TInit;
    [Object_properties]: OptionalProps<
      TProperties & NonNullable<TParent[typeof Object_properties_type]>
    >;
    [Object_properties_type]?: TProperties &
      NonNullable<TParent[typeof Object_properties_type]>;
    [Object_prototype]: TPrototype & TParent[typeof Object_prototype];
  };

  <
    TParent extends TMixin,
    TInit extends (this: any, ...args: readonly any[]) => unknown,
    TProperties extends UnknownObject,
  >(
    parent: TParent,
    init: TInit,
    properties: OptionalProps<TProperties>,
  ): {
    [Object_init]: TInit;
    [Object_properties]: OptionalProps<
      TProperties & NonNullable<TParent[typeof Object_properties_type]>
    >;
    [Object_properties_type]?: TProperties &
      NonNullable<TParent[typeof Object_properties_type]>;
    [Object_prototype]: TParent[typeof Object_prototype];
  };

  <
    TParent extends TMixin,
    TInit extends (this: any, ...args: readonly any[]) => unknown,
  >(
    parent: TParent,
    init: TInit,
  ): {
    [Object_init]: TInit;
    [Object_properties]: OptionalProps<
      NonNullable<TParent[typeof Object_properties_type]>
    >;
    [Object_properties_type]?: NonNullable<
      TParent[typeof Object_properties_type]
    >;
    [Object_prototype]: TParent[typeof Object_prototype];
  };
}
export const clazz: clazz = ((
  initOrParent: any,
  propertiesOrInit: any,
  prototypeOrParent?: any,
  nothingOrPrototype?: any,
) => {
  if (typeof initOrParent === "function") {
    return {
      [Object_init]: initOrParent,
      [Object_properties]: propertiesOrInit ?? {},
      [Object_prototype]: prototypeOrParent ?? {},
    };
  } else {
    const base = __extends(initOrParent, {
      [Object_properties]: prototypeOrParent ?? {},
      [Object_prototype]: nothingOrPrototype ?? {},
    });
    return {
      ...base,
      [Object_init]: propertiesOrInit,
    };
  }
}) as clazz;

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
export const createInstanceFactory: createInstanceFactory = <TReturn>(clazz: {
  [Object_init]: (this: any, ...args: readonly any[]) => TReturn;
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

  return (...args: readonly unknown[]) => {
    const instance = createObject(prototype, propertyDescription);
    return initUnsafe(clazz, instance, ...args);
  };
};
