import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  Function6,
  Optional,
  isFunction,
} from "../functions.js";
import * as Obj from "./Object.js";
import { __DEV__ } from "./constants.js";

export const Mixin_init = /*@__PURE__*/ Symbol("Mixin_init");
export const Mixin_private_initializedProperties = /*@__PURE__*/ Symbol(
  "Mixin_private_initializedProperties",
);
export const Mixin_properties = /*@__PURE__*/ Symbol("Mixin_properties");
export const Mixin_prototype = /*@__PURE__*/ Symbol("Mixin_prototype");

type OptionalProperties<T> = T extends object
  ? {
      [P in keyof T]: Optional<T[P]>;
    }
  : T;

export type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};

export type PartialMixin<TPrototype extends object = object> = {
  [Mixin_properties]: object;
  [Mixin_prototype]: TPrototype;
};

export interface MixinAny<TReturn, TInstance = unknown> extends PartialMixin {
  [Mixin_init]: (
    instance: TInstance,
    ...args: readonly any[]
  ) => TReturn & TInstance;
}

export interface Mixin<
  TReturn,
  TInstance = unknown,
  TPrototype extends object = object,
> extends PartialMixin<TPrototype> {
  [Mixin_init](instance: TInstance): TReturn & TInstance;
}

export interface Mixin1<
  TReturn,
  TA,
  TInstance = unknown,
  TPrototype extends object = object,
> extends PartialMixin<TPrototype> {
  [Mixin_init](instance: TInstance, a: TA): TReturn & TInstance;
}

export interface Mixin2<
  TReturn,
  TA,
  TB,
  TInstance = unknown,
  TPrototype extends object = object,
> extends PartialMixin<TPrototype> {
  [Mixin_init](instance: TInstance, a: TA, b: TB): TReturn & TInstance;
}

export interface Mixin3<
  TReturn,
  TA,
  TB,
  TC,
  TInstance = unknown,
  TPrototype extends object = object,
> extends PartialMixin<TPrototype> {
  [Mixin_init](instance: TInstance, a: TA, b: TB, c: TC): TReturn & TInstance;
}

export interface Mixin4<
  TReturn,
  TA,
  TB,
  TC,
  TD,
  TInstance = unknown,
  TPrototype extends object = object,
> extends PartialMixin<TPrototype> {
  [Mixin_init](
    instance: TInstance,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): TReturn & TInstance;
}
export interface Mixin5<
  TReturn,
  TA,
  TB,
  TC,
  TD,
  TE,
  TInstance = unknown,
  TPrototype extends object = object,
> extends PartialMixin<TPrototype> {
  [Mixin_init](
    instance: TInstance,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): TReturn & TInstance;
}
export interface Mixin6<
  TReturn,
  TA,
  TB,
  TC,
  TD,
  TE,
  TF,
  TInstance = unknown,
  TPrototype extends object = object,
> extends PartialMixin<TPrototype> {
  [Mixin_init](
    instance: TInstance,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): TReturn & TInstance;
}

function initUnsafe<TReturn>(
  mixin: MixinAny<TReturn>,
  instance: unknown,
  ...args: readonly unknown[]
): asserts instance is TReturn {
  const f = mixin[Mixin_init];
  f(instance, ...args);
}

interface Init {
  init<TReturn, TInstance>(
    mixin: Mixin<TReturn, TInstance>,
    instance: TInstance,
  ): asserts instance is TInstance & TReturn;

  init<TReturn, TA, TInstance>(
    mixin: Mixin1<TReturn, TA, TInstance>,
    instance: TInstance,
    a: TA,
  ): asserts instance is TInstance & TReturn;

  init<TReturn, TA, TB, TInstance>(
    mixin: Mixin2<TReturn, TA, TB, TInstance>,
    instance: TInstance,
    a: TA,
    b: TB,
  ): asserts instance is TInstance & TReturn;

  init<TReturn, TA, TB, TC, TInstance>(
    mixin: Mixin3<TReturn, TA, TB, TC, TInstance>,
    instance: TInstance,
    a: TA,
    b: TB,
    c: TC,
  ): asserts instance is TInstance & TReturn;

  init<TReturn, TA, TB, TC, TD, TInstance>(
    mixin: Mixin4<TReturn, TA, TB, TC, TD, TInstance>,
    instance: TInstance,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): asserts instance is TInstance & TReturn;

  init<TReturn, TA, TB, TC, TD, TE, TInstance>(
    mixin: Mixin5<TReturn, TA, TB, TC, TD, TE, TInstance>,
    instance: TInstance,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): asserts instance is TInstance & TReturn;

  init<TReturn, TA, TB, TC, TD, TE, TF, TInstance>(
    mixin: Mixin6<TReturn, TA, TB, TC, TD, TE, TF, TInstance>,
    instance: TInstance,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): asserts instance is TInstance & TReturn;
}
export const init: Init["init"] = initUnsafe;

export const include: (
  m0: PartialMixin,
  ...tail: readonly PartialMixin[]
) => PartialMixin = (...mixins: readonly PartialMixin[]) => {
  const { length } = mixins;
  if (length == 1) {
    return mixins[0];
  } else {
    let propertyDescriptions = {};
    let prototypeDescriptions = {};

    for (let i = 0; i < length; i++) {
      const mixin = mixins[i];
      propertyDescriptions = {
        ...propertyDescriptions,
        ...Obj.getOwnPropertyDescriptors(mixin[Mixin_properties]),
      };
      prototypeDescriptions = {
        ...prototypeDescriptions,
        ...Obj.getOwnPropertyDescriptors(mixin[Mixin_prototype]),
      };
    }

    return {
      [Mixin_properties]: Obj.create(Obj.prototype, propertyDescriptions),
      [Mixin_prototype]: Obj.create(Obj.prototype, prototypeDescriptions),
    };
  }
};

interface Mix {
  mix<
    TReturn,
    TInit extends (
      instance: TPrototype & Mutable<TProperties> & TInstance,
      ...args: readonly any[]
    ) => TReturn & TInstance,
    TProperties,
    TPrototype extends object,
    TInstance = unknown,
  >(
    init: TInit,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype> & {
    [Mixin_init]: typeof init;
  };

  mix<
    TReturn,
    TInit extends (
      instance: TPrototype & Mutable<TProperties> & TInstance,
      ...args: readonly any[]
    ) => TReturn & TInstance,
    TProperties,
    TPrototype extends object,
    TInstance = unknown,
  >(
    parent: PartialMixin,
    init: TInit,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
    prototype: TPrototype,
  ): PartialMixin<TPrototype> & {
    [Mixin_init]: TInit;
  };

  mix<
    TReturn,
    TInit extends (
      instance: TInstance,
      ...args: readonly any[]
    ) => TReturn & TInstance,
    TInstance = unknown,
  >(
    parent: PartialMixin,
    init: TInit,
  ): PartialMixin & {
    [Mixin_init]: TInit;
  };

  mix<
    TReturn,
    TInit extends (
      instance: TInstance & Mutable<TProperties>,
      ...args: readonly any[]
    ) => TReturn & TInstance,
    TProperties,
    TInstance = unknown,
  >(
    parent: PartialMixin,
    init: TInit,
    properties: TProperties & {
      [Mixin_private_initializedProperties]?: true;
    },
  ): PartialMixin & {
    [Mixin_init]: TInit;
  };
}
export const mix: Mix["mix"] = ((
  initOrParent: any,
  propertiesOrInit: any,
  prototypeOrParent?: any,
  nothingOrPrototype?: any,
) => {
  if (isFunction(initOrParent)) {
    return {
      [Mixin_init]: initOrParent,
      [Mixin_properties]: propertiesOrInit ?? {},
      [Mixin_prototype]: prototypeOrParent ?? {},
    };
  } else {
    const base = include(initOrParent, {
      [Mixin_properties]: prototypeOrParent ?? {},
      [Mixin_prototype]: nothingOrPrototype ?? {},
    });
    return {
      ...base,
      [Mixin_init]: propertiesOrInit,
    };
  }
}) as Mix["mix"];

interface CreateInstanceFactory {
  createInstanceFactory<TReturn>(mixin: Mixin<TReturn>): Factory<TReturn>;

  createInstanceFactory<TReturn, TA>(
    mixin: Mixin1<TReturn, TA>,
  ): Function1<TA, TReturn>;

  createInstanceFactory<TReturn, TA, TB>(
    mixin: Mixin2<TReturn, TA, TB>,
  ): Function2<TA, TB, TReturn>;

  createInstanceFactory<TReturn, TA, TB, TC>(
    mixin: Mixin3<TReturn, TA, TB, TC>,
  ): Function3<TA, TB, TC, TReturn>;

  createInstanceFactory<TReturn, TA, TB, TC, TD>(
    mixin: Mixin4<TReturn, TA, TB, TC, TD>,
  ): Function4<TA, TB, TC, TD, TReturn>;

  createInstanceFactory<TReturn, TA, TB, TC, TD, TE>(
    mixin: Mixin5<TReturn, TA, TB, TC, TD, TE>,
  ): Function5<TA, TB, TC, TD, TE, TReturn>;

  createInstanceFactory<TReturn, TA, TB, TC, TD, TE, TF>(
    mixin: Mixin6<TReturn, TA, TB, TC, TD, TE, TF>,
  ): Function6<TA, TB, TC, TD, TE, TF, TReturn>;
}
export const createInstanceFactory: CreateInstanceFactory["createInstanceFactory"] =
  <TReturn>(mixin: MixinAny<TReturn>): Factory<TReturn> => {
    const propertyDescription = Obj.getOwnPropertyDescriptors(
      mixin[Mixin_properties],
    );

    const prototypeDescription = __DEV__
      ? {
          ...Obj.getOwnPropertyDescriptors(mixin[Mixin_prototype]),
          constructor: {
            configurable: true,
            enumerable: false,
            value: mixin[Mixin_init],
            writable: true,
          },
        }
      : Obj.getOwnPropertyDescriptors(mixin[Mixin_prototype]);

    const prototype = Obj.create(Obj.prototype, prototypeDescription);

    return (...args: readonly any[]) => {
      const instance: unknown = Obj.create(prototype, propertyDescription);
      initUnsafe(mixin, instance, ...args);
      return instance;
    };
  };
const emptyProps = {};
export const props = <TProperties>(
  o?: OptionalProperties<TProperties>,
): TProperties & {
  [Mixin_private_initializedProperties]?: true;
} => {
  return (o ?? emptyProps) as unknown as TProperties & {
    [Mixin_private_initializedProperties]?: true;
  };
};

export const getPrototype = <TPrototype extends object>(
  mixin: PartialMixin<TPrototype>,
): TPrototype => mixin[Mixin_prototype];

export function unsafeCast<T>(_v: unknown): asserts _v is T {}

export interface MixinDecorator {
  <TReturn>(mixin: Mixin<TReturn>): Mixin<TReturn>;

  <TReturn, TA>(mixin: Mixin1<TReturn, TA>): Mixin1<TReturn, TA>;

  <TReturn, TA, TB>(mixin: Mixin2<TReturn, TA, TB>): Mixin2<TReturn, TA, TB>;

  <TReturn, TA, TB, TC>(mixin: Mixin3<TReturn, TA, TB, TC>): Mixin3<
    TReturn,
    TA,
    TB,
    TC
  >;

  <TReturn, TA, TB, TC, TD>(mixin: Mixin4<TReturn, TA, TB, TC, TD>): Mixin4<
    TReturn,
    TA,
    TB,
    TC,
    TD
  >;

  <TReturn, TA, TB, TC, TD, TE>(
    mixin: Mixin5<TReturn, TA, TB, TC, TD, TE>,
  ): Mixin5<TReturn, TA, TB, TC, TD, TE>;

  <TReturn, TA, TB, TC, TD, TE, TF>(
    mixin: Mixin6<TReturn, TA, TB, TC, TD, TE, TF>,
  ): Mixin6<TReturn, TA, TB, TC, TD, TE, TF>;
}
