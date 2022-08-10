import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Option,
} from "../../functions";

export const Object_init = Symbol("Object_init");
export const Object_properties = Symbol("Object_properties");
export const Object_prototype = Symbol("Object_prototype");

export type UnknownObject = Record<string | symbol | number, unknown>;
export type EmptyObject = Record<string | symbol | number, never>;

export type OptionalProps<T> = T extends object
  ? {
      [P in keyof T]: T[P] extends object ? Option<T[P]> : T[P];
    }
  : T;

export type TMixin<_TReturn> = {
  [Object_properties]: object;
  [Object_prototype]: object;
};

export interface ClassAnyArgs<TReturn> {
  [Object_init]: (
    instance: unknown,
    ...args: readonly any[]
  ) => asserts instance is TReturn;
  [Object_properties]: object;
  [Object_prototype]: object;
}

export interface Class<TReturn> {
  [Object_init](instance: unknown): asserts instance is TReturn;
  [Object_properties]: object;
  [Object_prototype]: object;
}

export interface Class1<TA, TReturn> {
  [Object_init](instance: unknown, a: TA): asserts instance is TReturn;
  [Object_properties]: object;
  [Object_prototype]: object;
}

export interface Class2<TA, TB, TReturn> {
  [Object_init](instance: unknown, a: TA, b: TB): asserts instance is TReturn;
  [Object_properties]: object;
  [Object_prototype]: object;
}

export interface Class3<TA, TB, TC, TReturn> {
  [Object_init](
    instance: unknown,
    a: TA,
    b: TB,
    c: TC,
  ): asserts instance is TReturn;
  [Object_properties]: object;
  [Object_prototype]: object;
}

export interface Class4<TA, TB, TC, TD, TReturn> {
  [Object_init](
    instance: unknown,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): asserts instance is TReturn;
  [Object_properties]: object;
  [Object_prototype]: object;
}

const {
  create: createObject,
  getOwnPropertyDescriptors,
  prototype: objectPrototype,
} = Object;

interface InitableAnyArgs<TReturn> {
  [Object_init](
    instance: unknown,
    ...args: readonly any[]
  ): asserts instance is TReturn;
}
interface Initable<TReturn> {
  [Object_init](instance: unknown): asserts instance is TReturn;
}
interface Initable1<TReturn, TA> {
  [Object_init](instance: unknown, a: TA): asserts instance is TReturn;
}

interface Initable2<TReturn, TA, TB> {
  [Object_init](instance: unknown, a: TA, b: TB): asserts instance is TReturn;
}

interface Initable3<TReturn, TA, TB, TC> {
  [Object_init](
    instance: unknown,
    a: TA,
    b: TB,
    c: TC,
  ): asserts instance is TReturn;
}

function initUnsafe<TReturn>(
  clazz: InitableAnyArgs<TReturn>,
  instance: unknown,
  ...args: readonly unknown[]
): asserts instance is TReturn {
  const f = clazz[Object_init];
  f.call(undefined, instance, ...args);
}

interface Init {
  <TReturn>(
    clazz: Initable<TReturn>,
    instance: unknown,
  ): asserts instance is TReturn;

  <TReturn, TA>(
    clazz: Initable1<TReturn, TA>,
    instance: unknown,
    a: TA,
  ): asserts instance is TReturn;

  <TReturn, TA, TB>(
    clazz: Initable2<TReturn, TA, TB>,
    instance: unknown,
    a: TA,
    b: TB,
  ): asserts instance is TReturn;

  <TReturn, TA, TB, TC>(
    clazz: Initable3<TReturn, TA, TB, TC>,
    instance: unknown,
    a: TA,
    b: TB,
    c: TC,
  ): asserts instance is TReturn;
}
export const init: Init = initUnsafe;

interface Extends {
  <TReturn0>(m0: TMixin<TReturn0>): TMixin<TReturn0>;

  <TReturn0, TReturn1>(m0: TMixin<TReturn0>, m1: TMixin<TReturn1>): TMixin<
    TReturn0 & TReturn1
  >;

  <TReturn0, TReturn1, TReturn2>(
    m0: TMixin<TReturn0>,
    m1: TMixin<TReturn1>,
    m2: TMixin<TReturn2>,
  ): TMixin<TReturn0 & TReturn1 & TReturn2>;

  <TReturn0, TReturn1, TReturn2, TReturn3>(
    m0: TMixin<TReturn0>,
    m1: TMixin<TReturn1>,
    m2: TMixin<TReturn2>,
    m3: TMixin<TReturn3>,
  ): TMixin<TReturn0 & TReturn1 & TReturn2 & TReturn3>;
}
export const __extends: Extends = (...mixins: readonly TMixin<any>[]) => {
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
    TInit extends (
      instance: unknown,
      ...args: readonly any[]
    ) => asserts instance is Partial<TProperties & TPrototype>,
    TProperties extends object = object,
    TPrototype extends object = object,
  >(
    init: TInit,
    properties: OptionalProps<TProperties>,
    prototype: TPrototype,
  ): TMixin<ReturnType<TInit>> & {
    [Object_init]: TInit;
  };

  <
    TParentReturn,
    TInit extends (
      instance: unknown,
      ...args: readonly any[]
    ) => asserts instance is Partial<TParentReturn & TProperties & TPrototype>,
    TProperties extends object,
    TPrototype extends object,
  >(
    parent: TMixin<TParentReturn>,
    init: TInit,
    properties: OptionalProps<TProperties>,
    prototype: TPrototype,
  ): TMixin<ReturnType<TInit>> & {
    [Object_init]: TInit;
  };

  <
    TParentReturn,
    TInit extends (
      instance: unknown,
      ...args: readonly any[]
    ) => asserts instance is Partial<TParentReturn & TProperties>,
    TProperties extends object,
  >(
    parent: TMixin<TParentReturn>,
    init: TInit,
    properties: OptionalProps<TProperties>,
  ): TMixin<ReturnType<TInit>> & {
    [Object_init]: TInit;
  };

  <
    TParentReturn,
    TInit extends (
      instance: unknown,
      ...args: readonly any[]
    ) => asserts instance is Partial<TParentReturn>,
  >(
    parent: TMixin<TParentReturn>,
    init: TInit,
  ): TMixin<ReturnType<TInit>> & {
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
  <TReturn>(clazz: Class<TReturn>): Factory<TReturn>;

  <TReturn, TA>(clazz: Class1<TA, TReturn>): Function1<TA, TReturn>;

  <TReturn, TA, TB>(clazz: Class2<TA, TB, TReturn>): Function2<TA, TB, TReturn>;

  <TReturn, TA, TB, TC>(clazz: Class3<TA, TB, TC, TReturn>): Function3<
    TA,
    TB,
    TC,
    TReturn
  >;

  <TReturn, TA, TB, TC, TD>(clazz: Class4<TA, TB, TC, TD, TReturn>): Function4<
    TA,
    TB,
    TC,
    TD,
    TReturn
  >;
}
export const createInstanceFactory: CreateInstanceFactory = <TReturn>(
  clazz: ClassAnyArgs<TReturn>,
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
