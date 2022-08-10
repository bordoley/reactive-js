import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Option,
} from "../../functions";

const Object_init = Symbol("Object_init");
const Object_properties = Symbol("Object_properties");
const Object_prototype = Symbol("Object_prototype");

type OptionalProps<T> = T extends object
  ? {
      [P in keyof T]: T[P] extends object ? Option<T[P]> : T[P];
    }
  : T;

export type PartialMixin<_TReturn> = {
  [Object_properties]: object;
  [Object_prototype]: object;
};

export interface MixinAny<TReturn> extends PartialMixin<TReturn> {
  [Object_init]: (instance: unknown, ...args: readonly any[]) => TReturn;
}

export interface Mixin<TReturn> extends PartialMixin<TReturn> {
  [Object_init](instance: unknown): TReturn;
}

export interface Mixin1<TReturn, TA> extends PartialMixin<TReturn> {
  [Object_init](instance: unknown, a: TA): TReturn;
}

export interface Mixin2<TReturn, TA, TB> extends PartialMixin<TReturn> {
  [Object_init](instance: unknown, a: TA, b: TB): TReturn;
}

export interface Mixin3<TReturn, TA, TB, TC> extends PartialMixin<TReturn> {
  [Object_init](instance: unknown, a: TA, b: TB, c: TC): TReturn;
}

export interface Mixin4<TReturn, TA, TB, TC, TD> extends PartialMixin<TReturn> {
  [Object_init](instance: unknown, a: TA, b: TB, c: TC, d: TD): TReturn;
}

const {
  create: createObject,
  getOwnPropertyDescriptors,
  prototype: objectPrototype,
} = Object;

function initUnsafe<TReturn>(
  clazz: MixinAny<TReturn>,
  instance: unknown,
  ...args: readonly unknown[]
): asserts instance is TReturn {
  const f = clazz[Object_init];
  f.call(undefined, instance, ...args);
}

interface Init {
  <TReturn>(
    clazz: Mixin<TReturn>,
    instance: unknown,
  ): asserts instance is TReturn;

  <TReturn, TA>(
    clazz: Mixin1<TReturn, TA>,
    instance: unknown,
    a: TA,
  ): asserts instance is TReturn;

  <TReturn, TA, TB>(
    clazz: Mixin2<TReturn, TA, TB>,
    instance: unknown,
    a: TA,
    b: TB,
  ): asserts instance is TReturn;

  <TReturn, TA, TB, TC>(
    clazz: Mixin3<TReturn, TA, TB, TC>,
    instance: unknown,
    a: TA,
    b: TB,
    c: TC,
  ): asserts instance is TReturn;
}
export const init: Init = initUnsafe;

interface Extends {
  <TReturn0>(m0: PartialMixin<TReturn0>): PartialMixin<TReturn0>;

  <TReturn0, TReturn1>(
    m0: PartialMixin<TReturn0>,
    m1: PartialMixin<TReturn1>,
  ): PartialMixin<TReturn0 & TReturn1>;

  <TReturn0, TReturn1, TReturn2>(
    m0: PartialMixin<TReturn0>,
    m1: PartialMixin<TReturn1>,
    m2: PartialMixin<TReturn2>,
  ): PartialMixin<TReturn0 & TReturn1 & TReturn2>;

  <TReturn0, TReturn1, TReturn2, TReturn3>(
    m0: PartialMixin<TReturn0>,
    m1: PartialMixin<TReturn1>,
    m2: PartialMixin<TReturn2>,
    m3: PartialMixin<TReturn3>,
  ): PartialMixin<TReturn0 & TReturn1 & TReturn2 & TReturn3>;
}
export const __extends: Extends = (...mixins: readonly PartialMixin<any>[]) => {
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

interface Clazz {
  <
    TInit extends (instance: TPrototype, ...args: readonly any[]) => TReturn,
    TReturn,
    TProperties extends object,
    TPrototype extends object,
  >(
    init: TInit,
    properties: OptionalProps<TProperties>,
    prototype: TPrototype,
  ): PartialMixin<TReturn> & {
    [Object_init]: TInit;
  };

  <
    TParentReturn,
    TInit extends (instance: TPrototype, ...args: readonly any[]) => TReturn,
    TReturn,
    TProperties extends object,
    TPrototype extends object,
  >(
    parent: PartialMixin<TParentReturn>,
    init: TInit,
    properties: OptionalProps<TProperties>,
    prototype: TPrototype,
  ): PartialMixin<TReturn> & {
    [Object_init]: TInit;
  };

  <
    TParentReturn,
    TInit extends (instance: unknown, ...args: readonly any[]) => TParentReturn,
  >(
    parent: PartialMixin<TParentReturn>,
    init: TInit,
  ): PartialMixin<TParentReturn> & {
    [Object_init]: TInit;
  };
}
export const clazz: Clazz = ((
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
}) as Clazz;

interface CreateInstanceFactory {
  <TReturn>(clazz: Mixin<TReturn>): Factory<TReturn>;

  <TReturn, TA>(clazz: Mixin1<TReturn, TA>): Function1<TA, TReturn>;

  <TReturn, TA, TB>(clazz: Mixin2<TReturn, TA, TB>): Function2<TA, TB, TReturn>;

  <TReturn, TA, TB, TC>(clazz: Mixin3<TReturn, TA, TB, TC>): Function3<
    TA,
    TB,
    TC,
    TReturn
  >;

  <TReturn, TA, TB, TC, TD>(clazz: Mixin4<TReturn, TA, TB, TC, TD>): Function4<
    TA,
    TB,
    TC,
    TD,
    TReturn
  >;
}
export const createInstanceFactory: CreateInstanceFactory = <TReturn>(
  clazz: MixinAny<TReturn>,
): Factory<TReturn> => {
  const propertyDescription = getOwnPropertyDescriptors(
    clazz[Object_properties],
  );

  const prototypeDescription = {
    ...getOwnPropertyDescriptors(clazz[Object_prototype]),
    constructor: {
      configurable: true,
      enumerable: true,
      value: clazz[Object_init],
      writable: true,
    },
  };

  const prototype = createObject(objectPrototype, prototypeDescription);

  return (...args: readonly any[]) => {
    const instance: unknown = createObject(prototype, propertyDescription);
    initUnsafe(clazz, instance, ...args);
    return instance;
  };
};
