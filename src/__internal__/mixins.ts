import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Optional,
  isFunction,
} from "../functions";

const Object_init = Symbol("Object_init");
const Object_properties = Symbol("Object_properties");
const Object_prototype = Symbol("Object_prototype");

const Object_private_initializedProperties = Symbol(
  "Object_private_initializedProperties",
);

type OptionalProperties<T> = T extends object
  ? {
      [P in keyof T]: Optional<T[P]>;
    }
  : T;

export type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};

export type PartialMixin = {
  [Object_properties]: object;
  [Object_prototype]: object;
};

export interface MixinAny<TReturn> extends PartialMixin {
  [Object_init]: (instance: unknown, ...args: readonly any[]) => TReturn;
}

export interface Mixin<TReturn> extends PartialMixin {
  [Object_init](instance: unknown): TReturn;
}

export interface Mixin1<TReturn, TA> extends PartialMixin {
  [Object_init](instance: unknown, a: TA): TReturn;
}

export interface Mixin2<TReturn, TA, TB> extends PartialMixin {
  [Object_init](instance: unknown, a: TA, b: TB): TReturn;
}

export interface Mixin3<TReturn, TA, TB, TC> extends PartialMixin {
  [Object_init](instance: unknown, a: TA, b: TB, c: TC): TReturn;
}

export interface Mixin4<TReturn, TA, TB, TC, TD> extends PartialMixin {
  [Object_init](instance: unknown, a: TA, b: TB, c: TC, d: TD): TReturn;
}

const {
  create: createObject,
  getOwnPropertyDescriptors,
  prototype: objectPrototype,
} = Object;

function initUnsafe<TReturn>(
  mixin: MixinAny<TReturn>,
  instance: unknown,
  ...args: readonly unknown[]
): asserts instance is TReturn {
  const f = mixin[Object_init];
  f.call(undefined, instance, ...args);
}

interface Init {
  <TReturn>(
    mixin: Mixin<TReturn>,
    instance: unknown,
  ): asserts instance is TReturn;

  <TReturn, TA>(
    mixin: Mixin1<TReturn, TA>,
    instance: unknown,
    a: TA,
  ): asserts instance is TReturn;

  <TReturn, TA, TB>(
    mixin: Mixin2<TReturn, TA, TB>,
    instance: unknown,
    a: TA,
    b: TB,
  ): asserts instance is TReturn;

  <TReturn, TA, TB, TC>(
    mixin: Mixin3<TReturn, TA, TB, TC>,
    instance: unknown,
    a: TA,
    b: TB,
    c: TC,
  ): asserts instance is TReturn;
}
export const init: Init = initUnsafe;

export const include: (
  m0: PartialMixin,
  ...tail: readonly PartialMixin[]
) => PartialMixin = (...mixins: readonly PartialMixin[]) => {
  if (mixins.length == 1) {
    return mixins[0];
  } else {
    const properties = mixins
      .map(mixin => mixin[Object_properties])
      .reduce((acc, next) => ({ ...acc, ...next }), {});

    const prototypeDescriptions = mixins
      .map(mixin => getOwnPropertyDescriptors(mixin[Object_prototype]))
      .reduce((acc, next) => ({ ...acc, ...next }), {});

    return {
      [Object_properties]: properties,
      [Object_prototype]: createObject(objectPrototype, prototypeDescriptions),
    };
  }
};

interface CreateMixin {
  <
    TInit extends (
      instance: TPrototype & Mutable<TProperties>,
      ...args: readonly any[]
    ) => unknown,
    TProperties extends {
      [Object_private_initializedProperties]?: true;
    },
    TPrototype extends object,
  >(
    init: TInit,
    properties: TProperties,
    prototype: TPrototype,
  ): PartialMixin & {
    [Object_init]: typeof init;
  };

  <
    TInit extends (
      instance: TPrototype & Mutable<TProperties>,
      ...args: readonly any[]
    ) => unknown,
    TProperties extends {
      [Object_private_initializedProperties]?: true;
    },
    TPrototype extends object,
  >(
    parent: PartialMixin,
    init: TInit,
    properties: TProperties,
    prototype: TPrototype,
  ): PartialMixin & {
    [Object_init]: TInit;
  };

  <TInit extends (instance: unknown, ...args: readonly any[]) => unknown>(
    parent: PartialMixin,
    init: TInit,
  ): PartialMixin & {
    [Object_init]: TInit;
  };
}
export const mix: CreateMixin = ((
  initOrParent: any,
  propertiesOrInit: any,
  prototypeOrParent?: any,
  nothingOrPrototype?: any,
) => {
  if (isFunction(initOrParent)) {
    return {
      [Object_init]: initOrParent,
      [Object_properties]: propertiesOrInit ?? {},
      [Object_prototype]: prototypeOrParent ?? {},
    };
  } else {
    const base = include(initOrParent, {
      [Object_properties]: prototypeOrParent ?? {},
      [Object_prototype]: nothingOrPrototype ?? {},
    });
    return {
      ...base,
      [Object_init]: propertiesOrInit,
    };
  }
}) as CreateMixin;

interface CreateInstanceFactory {
  <TReturn>(mixin: Mixin<TReturn>): Factory<TReturn>;

  <TReturn, TA>(mixin: Mixin1<TReturn, TA>): Function1<TA, TReturn>;

  <TReturn, TA, TB>(mixin: Mixin2<TReturn, TA, TB>): Function2<TA, TB, TReturn>;

  <TReturn, TA, TB, TC>(mixin: Mixin3<TReturn, TA, TB, TC>): Function3<
    TA,
    TB,
    TC,
    TReturn
  >;

  <TReturn, TA, TB, TC, TD>(mixin: Mixin4<TReturn, TA, TB, TC, TD>): Function4<
    TA,
    TB,
    TC,
    TD,
    TReturn
  >;
}
export const createInstanceFactory: CreateInstanceFactory = <TReturn>(
  mixin: MixinAny<TReturn>,
): Factory<TReturn> => {
  const propertyDescription = getOwnPropertyDescriptors(
    mixin[Object_properties],
  );

  const prototypeDescription = {
    ...getOwnPropertyDescriptors(mixin[Object_prototype]),
    constructor: {
      configurable: true,
      enumerable: true,
      value: mixin[Object_init],
      writable: true,
    },
  };

  const prototype = createObject(objectPrototype, prototypeDescription);

  return (...args: readonly any[]) => {
    const instance: unknown = createObject(prototype, propertyDescription);
    initUnsafe(mixin, instance, ...args);
    return instance;
  };
};

export const props = <TProperties>(
  o: OptionalProperties<TProperties>,
): TProperties & {
  [Object_private_initializedProperties]?: true;
} => {
  return o as unknown as TProperties & {
    [Object_private_initializedProperties]?: true;
  };
};
